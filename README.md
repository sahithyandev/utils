# sahithyan/utils

utils is a community-driven, open-source project that aims to provide common
utility functions and code snippets to be used in a copy-paste manner.

## Prerequisites

- Node (>= v18)
- [Bun](https://bun.sh) (>= v1.1.5) as package manager and runtime

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Each markdown (`.md` or `.mdx`) file under `src/content/docs` directory, is
exposes as a route bsaed on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative
link.

Static assets, like favicons, should be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

Built using [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build/).
