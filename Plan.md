# Clawbase - OpenClaw Agents Management Dashboard (Phase 1)

## Project Overview
Clawbase is a React/PNPM web dashboard for managing OpenClaw agents/sessions/subagents. Features: list sessions, spawn/kill/steer, logs viewer, real-time status. Direct integration with OpenClaw tools (sessions_list/spawn/subagents/process/session_status).

## Requirements Analysis (Phase 1 MVP)
### Functional
- List sessions (sessions_list with filters/limit/activeMinutes).
- View session details/history/status (sessions_history, session_status).
- Spawn subagent/ACPs (sessions_spawn runtime=subagent/acp).
- Manage subagents (subagents list/kill/steer).
- Tail logs (process log/poll).
- Search/filter sessions.

### UI/UX
- Dashboard: Session cards (status, model, runtime, last msg, controls).
- Spawn modal: task, runtime (subagent/acp), agentId, model, cwd, thread/mode.
- Logs viewer: syntax-highlighted, auto-scroll, real-time poll.
- Responsive, dark mode, loading/error states.

### Non-Functional
- Fast HMR (Vite).
- Type-safe (TS).
- Modern UI (shadcn/Tailwind).
- State: Zustand.
- Data fetching: TanStack Query (polling/optimistic).

## Technical Decisions
**Stack:**
| Layer | Tech |
|-------|------|
| Build | PNPM + Vite + React 18 + TS |
| UI | shadcn/ui + Tailwind CSS + Lucide React |
| State | Zustand |
| Queries | TanStack Query v5 |
| Utils | clsx, cva, tailwind-merge |

**No backend:** Direct fetch to OpenClaw gateway API (localhost assumed).

**API Wrappers:** lib/api.ts with typed functions for each tool (e.g. fetchSessionsList(filters)).

**Folder Structure:**
```
clawbase/
├── src/
│   ├── components/ui/     # shadcn (button, card, dialog, table...)
│   ├── components/        # SessionCard, SpawnModal, LogsViewer, Dashboard
│   ├── hooks/             # useSessions, useSpawnSession, useLogs
│   ├── lib/               # api.ts, utils.ts
│   ├── stores/            # useSessionsStore.ts
│   └── App.tsx
├── public/
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Development Phases
### Phase 1: MVP Dashboard
- Setup + deps + shadcn.
- State/API layer.
- Core UI + integration.
- Test/demo: pnpm dev → live session list/spawn/logs.

### Phase 2: Orchestration UI, cron, memory.
Approve → Tasks-phase1.md + agent dispatch (Gemini-Pro setup/UI, Claude-Opus integration/review).
