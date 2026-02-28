# Lesson-phase1.md - Phase 1: MVP - Listing & Status

## Lessons Learned
- **Environment Management**: Executing specialized agents like Claude Code and Gemini via `exec` requires sourcing `~/.zshrc` to ensure paths (like Homebrew and NVM) are correctly loaded.
- **Agent Coordination**: Claude and Gemini can work concurrently on different branches, but they need to be coordinated to avoid merge conflicts or duplicated effort.
- **Vite/React Integration**: Using a Vite dev plugin is an effective way to bridge the gap between frontend React and server-side logic (like reading `openclaw.json`) during development.
- **Shadcn UI**: Rapidly prototyping with Shadcn saves significant time but requires careful integration with React 19 and modern Tailwind.

---
*Created: 2026-02-28*
