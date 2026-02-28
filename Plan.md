# Clawbase - OpenClaw Agents Management Dashboard (Phase 1)

## Project Overview
Clawbase: React/PNPM dashboard for OpenClaw agent mgmt. List/spawn/monitor/kill sessions, logs. Direct API integration.

## Requirements
- Sessions list/details/spawn/kill/steer/send.
- UI: Cards, modals, logs viewer, search/filter.
- Stack: Vite+React+TS, shadcn/Tailwind, Zustand, TanStack Query.

## Tech Decisions
- PNPM+Vite+React18+TS
- shadcn/ui (button/card/dialog/table)
- Zustand state, TanStack Query API
- Lucide icons
- Responsive, dark mode ready

## Folder Structure
src/components/ (SessionCard, SpawnModal, LogsViewer)
src/hooks/ (useSessions, useLogs)
src/lib/api.ts (OpenClaw API wrappers)
src/stores/sessionStore.ts

## Phases
Phase 1: MVP dashboard (list+spawn+kill+logs)
