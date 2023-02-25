# TypeScript / Node.js Template

------*Requires [latest Node.js LTS version: v18.14.2](https://nodejs.org/en/blog/release/v18.14.2/) and [pnpm](https://pnpm.io/installation) v7 or higher*-----

___

## **Stack**

### - `TypeScript`

### - `pnpm` package manager

### - `vitest` test runner

### - `CommonJS` and `ESM` support

### - `ESLint` & `Prettier`

### - `CI` with `GitHub Actions`

### - Docker-ready (see `Dockerfile`)

### - `VSCode` ready (see `.vscode`)

___

## Getting started

```bash
#
# Clone repository
git clone https://github.com/o-az/template-ts.git && cd template-ts
#
# Install dependencies
pnpm install
#
# Build
pnpm build
#
# Run
pnpm start # or pnpm dev
```

## Docker

```bash
#
# Build image
docker build --file ./Dockerfile . --progress=plain --tag my_project
#
# Run container
docker run --privileged --publish 3004:3004 --rm -it --detach --name my_project my_project
#
# Open browser at http://localhost:3004
#
# Get inside container
docker exec --privileged -it final /bin/sh
```

## Publish package to npm registry and GitHub Packages Registry, and push container image to Docker Hub and GitHub Container Registry

```bash
pnpm release
#
# select version, it will create git tags and push to remote.
# This will trigger `publish` workflow in GitHub Actions.
```

I recommend using [`bumpp`](https://github.com/antfu/bumpp) for versioning.
