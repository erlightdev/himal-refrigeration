# Project Notes For Agents

## Project Shape

Himal-Refrigeration is a Better-T-Stack TypeScript monorepo.

- Package manager: `npm@11.4.2`
- Workspace layout: `apps/*`, `packages/*`
- Frontend app: `apps/web`
- Shared UI package: `packages/ui`
- Environment package: `packages/env`
- Shared TypeScript config package: `packages/config`

## Stack

- React 19
- Vite
- TanStack Router with file-based routes
- Tailwind CSS v4
- shadcn/ui using `base-lyra`
- Base UI primitives
- lucide-react icons
- next-themes for theme switching
- sonner for toast notifications
- Turborepo
- Biome

## Common Commands

Run commands from the repo root unless a task needs a specific package.

- Install dependencies: `npm install`
- Start all dev tasks: `npm run dev`
- Start web app only: `npm run dev:web`
- Build all packages/apps: `npm run build`
- Type-check/build verification: `npm run check-types`
- Format/lint fix: `npm run check`

The Vite dev server for `apps/web` is configured for port `3001` in `apps/web/vite.config.ts`.

## Turborepo Notes

Root scripts currently delegate to Turbo. Prefer `turbo run <task>` when editing package scripts or CI commands.

Task configuration lives in `turbo.json`:

- `build` depends on dependency builds and caches `dist/**`
- `check-types` depends on dependency type checks
- `dev` is persistent and uncached

## Routing

The web app uses TanStack Router.

- Route files live in `apps/web/src/routes`
- Root shell is `apps/web/src/routes/__root.tsx`
- Home route is `apps/web/src/routes/index.tsx`
- Generated route tree is `apps/web/src/routeTree.gen.ts`

Do not hand-edit generated router output unless there is no better option.

## UI Conventions

Shared shadcn/base UI primitives live in `packages/ui/src/components`.

Import shared components like:

```tsx
import { Button } from "@Himal-Refrigeration/ui/components/button";
```

Global Tailwind/theme tokens are in:

```txt
packages/ui/src/styles/globals.css
```

The web app imports those globals through:

```txt
apps/web/src/index.css
```

When adding shadcn components, prefer adding shared primitives to `packages/ui`:

```bash
npx shadcn@latest add <component> -c packages/ui
```

Use app-specific components in `apps/web/src/components` for application composition.

## Current App State

The app is still mostly scaffold:

- Header with a Home link
- Theme toggle with light/dark/system modes
- TanStack Router devtools enabled
- Home page has placeholder ASCII art and an empty API Status section

## Verification

Before considering a code change done, run:

```bash
npm run check-types
```

Use `npm run check` when formatting/linting changes are relevant.
