# Tasks-phase1.md - Phase 1: MVP - Listing & Status

## Project Infrastructure (Claude Code)
- [x] Initialize project with Vite (React 19, TypeScript).
- [x] Configure pnpm and install dependencies.
- [x] Set up Tailwind CSS and Shadcn UI.
- [x] Create a responsive layout (Sidebar + Main Content Area).

## Agent & Session Logic (Gemini)
- [ ] Implement agent discovery: read and parse `openclaw.json` (located in `~/.openclaw/openclaw.json`).
- [ ] Create an API service to fetch agent status and active sessions.
- [ ] Dashboard Component: Map discovered agents to a list/grid view with status indicators.
- [ ] Session View Component: Table view for active sessions with basic metadata.

## Review & Integration (Orchestrated by Luca)
- [ ] Gemini to review Claude's project setup PR.
- [ ] Claude to review Gemini's discovery logic PR.
- [ ] Optimize UI based on session data structures.
- [ ] Generate `Lesson-phase1.md` and `Report-phase1.md`.

---
*Created: 2026-02-28*
