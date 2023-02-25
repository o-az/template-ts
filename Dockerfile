FROM node:lts-alpine AS builder

ARG PNPM_HOME="/root/.local/share/pnpm"
ARG PATH="${PATH}:${PNPM_HOME}"

WORKDIR /app

COPY . .

RUN apk --no-cache update && \
  apk --no-cache upgrade && \
  apk --no-cache add bash && \
  npx --yes pnpm add --global pnpm@latest && \
  pnpm install --frozen-lockfile && \
  pnpm build

FROM node:lts-alpine AS runner

ARG PORT=3004

WORKDIR /app

COPY --from=builder /app/dist ./dist

#
# Since we're not copying package.json, we won't be able to run ESM since ESM requires
# package.json to be present with "type": "module" in it. So we'll have to use CJS.
# if you want to use ESM, you'll have to copy package.json by uncommenting the line below.
# COPY package.json package.json
#
CMD [ "node", "./dist/index.cjs" ]


# If you want to use a distroless image, see example:
# https://gist.github.com/o-az/634545376fd13fc1fc882cc4a664289c