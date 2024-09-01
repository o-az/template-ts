# syntax=docker/dockerfile:1
FROM node:lts-bookworm-slim AS base

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ARG PORT=8080
ENV PORT=${PORT}

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apt-get update --yes && \
  rm -rf /var/lib/apt/lists/*

RUN corepack enable

WORKDIR /usr/src/app

COPY . /usr/src/app/

FROM base AS production-deps

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --frozen-lockfile

RUN pnpm build

FROM base AS runner

COPY --from=production-deps /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/dist /usr/src/app/dist

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE $PORT

CMD ["node", "/usr/src/app/dist/index.js"]
