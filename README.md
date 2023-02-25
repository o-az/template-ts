# TypeScript / Node.js Template

------*Requires [latest `Node.js` LTS version: v18.14.2](https://nodejs.org/en/blog/release/v18.14.2/) and [`pnpm` v7 or higher](https://pnpm.io/installation)*-----

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
docker run --publish 3004:3004 --rm -it --detach --name my_project my_project
#
# Open browser at http://localhost:3004
#
# Get inside container
docker exec -it my_project /bin/sh
```

## Publish Package & Image

```bash
pnpm release
#
# select version, it will create git tags and push to remote.
# This will trigger `publish` workflow in GitHub Actions.
```
