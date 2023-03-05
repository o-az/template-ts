# TypeScript / Node.js Template

------_Requires [latest `Node.js` LTS version: v18.14.2](https://nodejs.org/en/blog/release/v18.14.2/) and
[`pnpm` v7 or higher](https://pnpm.io/installation)_-----

---

## **Stack**

### - `TypeScript`

### - `pnpm` package manager

### - `vitest` test runner

### - `CommonJS` and `ESM` support

### - `ESLint` & `Prettier`

### - `CI` with `GitHub Actions`

### - Docker-ready (see `Dockerfile`)

### - Publish to `npm` registry, `GitHub Packages`, `Docker Hub` and `GitHub Container Registry` with `pnpm` (see `publish.yml`)

### - `VSCode` ready (see `.vscode`)

---

## Getting started

```bash
#
# Clone repository
git clone https://github.com/o-az/template-ts.git && cd template-ts
#
# Install dependencies
pnpm install
#
# Run development server
pnpm dev
#
# run tests
pnpm test
#
# run build and start production server
pnpm build && pnpm start
#
# to run a one-off TypeScript file
pnpm ts <path/to/file>.ts
# or `pnpm tsx <path/to/file>.ts`
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

## If you need to use `dotenv`, add `dotenv` to the beginning of a script. You don't need to import `dotenv` inside any file. Example

```diff
"scripts": {
-  "start": "node ./dist/index.js"
+  "start": "dotenv node ./dist/index.js"
}
```

## Lastly, you should modify the workflows in `.github/workflows` to suit your needs
