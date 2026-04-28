_NOTE: You are welcome to ask any questions if anything is unclear. Also feel free to post a discussion_

# TypeScript / Node.js Template

_Requires **[Node.js LTS (v24 or later)](https://nodejs.org/en/blog/release/v24.15.0)** and **[pnpm **v10** or higher](https://pnpm.io/installation)**_

---

## **Stack**

- `TypeScript`
- `pnpm` package manager
- `vitest` test runner
- `ESM` support
- [`tsdown`](https://github.com/rolldown/tsdown) for building (powered by [rolldown](https://github.com/rolldown/rolldown))
- `oxfmt` / `oxlint` for linting and formatting
- CI with GitHub Actions
- Publish to `npm` registry, GitHub Packages, Docker Hub and GitHub Container Registry with `pnpm` (see `publish.yml`)

### - VSCode ready (see `.vscode`)

---

## Getting started

### Clone repository

```sh
## using github cli
gh repo clone o-az/template-ts && cd template-ts
```

### Install dependencies

```sh
pnpm install
```

### Copy `.env.example` to `.env` and modify as needed

```sh
cp .env.example .env
```

### Run development server

```sh
pnpm dev
```

### run tests

```sh
pnpm test
```

### run build and start production server

```sh
pnpm build && pnpm start
```

### to run a one-off TypeScript file

```sh
node path/to/file.ts
```

### Publish Package

_This will trigger publish workflow in GitHub Actions_

```sh
pnpm release
```

#### select version, it will create git tags and push to remote

### Lastly, you should modify the workflows in .github/workflows to suit your needs
