# PLAN.md - Clawbase: Agents Management for OpenClaw

## Requirement Analysis
Build a web-based dashboard (Clawbase) for managing OpenClaw agents, including discovery, configuration, monitoring, and lifecycle control.

### Core Features
- **Agent Discovery & Listing**: View all configured agents in the current OpenClaw instance.
- **Agent Configuration**: Edit agent profiles (ID, workspace, model, credentials, auth profiles).
- **Session Monitoring**: View active sessions, logs, and live status for each agent.
- **Agent Lifecycle**: Start, stop, and restart agent processes or reload configurations.
- **Direct Integration**: Seamlessly connect to OpenClaw's internal APIs and workspace directories.

## Technical Decisions
- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS + Shadcn UI (for rapid development and consistency)
- **State Management**: React Query (TanStack Query) for robust API synchronization and caching.
- **Package Manager**: pnpm (for efficiency and speed)
- **Build Tool**: Vite (modern, fast development experience)
- **API Strategy**: Direct interaction with the OpenClaw Gateway API and potential file-system operations (via a small backend wrapper if needed, though for now, focusing on React-based UI).

## Roadmap

### Phase 1: MVP - Listing & Status
- Initialize project structure with Vite and pnpm.
- Set up Shadcn UI and basic layout.
- Implement agent discovery (reading `openclaw.json` or calling the management API).
- Dashboard: List all agents with their current status (active/inactive).
- Session View: List active sessions with basic metadata.

### Phase 2: Configuration Management
- UI for editing `AGENTS.md`, `SOUL.md`, and `USER.md` per agent.
- Management of `auth-profiles.json` and provider keys.
- Configuration validation (ensure IDs and workspaces are unique and valid).

### Phase 3: Lifecycle & Control
- Start/stop/restart controls for the Gateway and individual agents.
- Real-time reloading of configurations via OpenClaw signals.
- Task monitoring: View queued or running agent tasks.

### Phase 4: Monitoring & Logs
- Live log streaming for each agent.
- Log analysis and filtering (using `jq`-like capabilities).
- Resource usage monitoring (CPU, memory, token consumption).

---
*Created: 2026-02-28*
