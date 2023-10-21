ARG NODE_VERSION='lts'
FROM node:${NODE_VERSION}-alpine AS builder

ARG PNPM_HOME="/root/.local/share/pnpm"
ARG PATH="${PATH}:${PNPM_HOME}"

WORKDIR /app

COPY . .

RUN npx --yes pnpm add --global pnpm@latest && \
  pnpm install --frozen-lockfile && \
  pnpm build && \
  pnpm prune --prod

FROM node:${NODE_VERSION}-alpine AS runner

ARG PORT=3004

WORKDIR /app

COPY --from=builder /app/dist/index.cjs dist/index.cjs

CMD ["node", "./dist/index.cjs"]

# # If you want to use a distroless image, see example:
# # https://gist.github.com/o-az/634545376fd13fc1fc882cc4a664289c
