# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Shree Mahakali Dairy and Sweets (`artifacts/mahakali-dairy`)
- **Type**: React + Vite (react-vite)
- **Preview Path**: `/`
- **Description**: Full business website for a dairy shop. Includes hero section, about us, products catalog with WhatsApp ordering, branches section with maps, testimonials, contact form, footer, and floating WhatsApp button.
- **Key features**:
  - Filterable product catalog (Dairy, Sweets, Paneer & Chhena, Special)
  - 2 branch cards with embedded Google Maps
  - WhatsApp integration throughout (orders, inquiries, contact form)
  - Responsive mobile-friendly layout
  - Floating WhatsApp chat button
- **Logo**: Uses `attached_assets/logo_1776168530282.jpeg` via `@assets` alias

## Notes

- WhatsApp number is currently set to placeholder `919876543210` — update in all component files
- Branch addresses are placeholder — update in `artifacts/mahakali-dairy/src/components/Branches.tsx`
- Google Maps embeds use placeholder coordinates — update with real branch coordinates
