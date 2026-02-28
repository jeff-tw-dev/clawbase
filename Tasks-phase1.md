# Tasks - Phase 1: Clawbase MVP Dashboard

**Repo:** clawbase/ (workspace-marco). All work here. Prefix commits/PRs [Gemini-Phase1] or [Claude-Phase1].

**Loop:** Plan (PR desc) → Implement → Test (pnpm dev) → Review (mutual PR comments/merge) → Lessons (commit notes).

## Gemini-Pro Tasks (Setup/UI)
1. **Setup:** pnpm deps (vite/react/ts/shadcn/tailwind/zustand/@tanstack/react-query/lucide-react/clsx/cva/tailwind-merge). npx shadcn@latest init/add button/card/dialog/input/label/table/tabs/toast.
   - vite.config.ts, tsconfig.json, index.html, src/main.tsx, src/App.tsx (layout: header, dashboard).

2. **State/API:** src/stores/useSessionsStore.ts (Zustand). src/lib/api.ts (typed fetch for sessions_list/spawn/status/history/subagents/process). src/hooks/useSessions.ts (TanStack Query poll).

3. **UI:** src/components/SessionCard.tsx, SessionList.tsx, SpawnModal.tsx.

**Branch:** gemini-phase1. gh pr create --head gemini-phase1. Notify: "Gemini PR ready: <link>".

## Claude-Opus Tasks (Integration/Review)
1. **Hooks/UI:** src/hooks/useSessionDetails.ts, useLogs.ts, useSubagents.ts. src/components/LogsViewer.tsx, SubagentControls.tsx.

2. **Integration:** App.tsx full (search/filter, real-time). Connect API (localhost OpenClaw).

3. **Review:** gh pr list/view Gemini PRs, comment/merge. Optimize/perf.

**Branch:** claude-phase1. gh pr create. Notify: "Claude PR ready: <link>". Final merge → "PHASE 1 COMPLETE".

**Done Criteria:** pnpm dev live (list/spawn/logs work), PRs merged, README setup.
