# Tasks - Phase 1: Clawbase MVP Dashboard

## Project Repo: /Users/luca/ghq/github.com/jeff-tw-dev/clawbase
Workdir for all work: above path. Commit PRs with prefix [Gemini-Phase1] or [Claude-Phase1].

Follow loop per task: Plan → Implement → Test → Review → Lessons (commit summary).

**Mutual Review:** After PR push, other agent reviews, suggests fixes in comments/PR.

## Assigned Tasks

### Gemini-Pro Tasks (Setup & UI Focus)
1. **Project Setup**
   - pnpm add -D vite @vitejs/plugin-react typescript @types/react @types/react-dom tailwindcss postcss autoprefixer
   - pnpm add react react-dom lucide-react class-variance-authority clsx tailwind-merge
   - npx shadcn-ui@latest init (use defaults: TS, Tailwind)
   - npx shadcn-ui@latest add button card dialog input label table tabs
   - Create vite.config.ts, tsconfig.json, index.html, src/main.tsx, src/App.tsx (basic layout)
   - Tailwind config for dark mode

2. **State & API Layer**
   - src/stores/sessionStore.ts (Zustand: sessions list, actions)
   - src/lib/api.ts (fetch wrappers for sessions_list, sessions_spawn, session_status, etc. - mock data initially)
   - src/hooks/useSessions.ts (TanStack Query: infinite query for sessions_list)

3. **Core UI**
   - src/components/SessionCard.tsx
   - src/components/SessionList.tsx
   - src/components/SpawnModal.tsx (form for task, runtime, agentId, model)

4. **Test & Polish**
   - Basic tests (React Testing Library or Vitest)
   - Responsive design, loading states

**Deliver:** Working setup + UI scaffold. Push branch gemini-phase1-setup, PR to main.

### Claude-Opus Tasks (Integration & Advanced)
1. **Advanced Hooks**
   - src/hooks/useSessionDetails.ts (history, status)
   - src/hooks/useSubagents.ts (list, kill, steer)
   - src/hooks/useLogs.ts (process log tailing, polling)

2. **Components**
   - src/components/LogsViewer.tsx (syntax highlight, auto-scroll)
   - src/components/SubagentControls.tsx

3. **Integration**
   - Connect real OpenClaw API endpoints (assume localhost:YOUR_PORT/api)
   - WebSocket for real-time? (fallback poll)
   - App.tsx full integration: dashboard with search/filter

4. **Review & Optimize**
   - Review Gemini PRs, suggest/merge fixes
   - Performance: virtualized list (TanStack Virtual?)
   - Error handling, toasts (shadcn toast)

**Deliver:** Full MVP functional. Push branch claude-phase1-integration, PR to main.

## Completion Criteria (Phase 1)
- Live demo: pnpm dev → localhost:5173 shows session list, spawn works (logs demo data), kill button.
- PRs merged, clean git history.
- README.md with setup/run instructions.

## Loop per Agent
1. Plan: Detail your approach in commit/PR description.
2. Implement: Code + commits.
3. Test: Manual + Vitest.
4. Review: Self-review + peer PR review.
5. Lessons: Note in commit or separate file.

Notify completion: \`pnpm dev\` running + PR links.

Start after reading Plan.md + this file.
