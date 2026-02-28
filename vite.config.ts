import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { discoverAgents, getActiveSessions } from './src/server/agentApi'

const agentApiPlugin = () => ({
  name: 'agent-api',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  configureServer(server: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    server.middlewares.use('/api/agents', async (req: any, res: any) => {
      try {
        const agents = await discoverAgents()
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(agents))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        res.statusCode = 500
        res.end(JSON.stringify({ error: err.message }))
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    server.middlewares.use('/api/sessions', async (req: any, res: any) => {
      try {
        const sessions = await getActiveSessions()
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(sessions))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        res.statusCode = 500
        res.end(JSON.stringify({ error: err.message }))
      }
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), agentApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
