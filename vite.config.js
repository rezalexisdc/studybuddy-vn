import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

// `vite` alone doesn't serve the Vercel Functions in api/ (production runs them
// on Vercel). This dev-only shim lets `npm run dev` call them too: it loads
// api/<name>.js on every request (so edits are picked up) and adapts the
// Node req/res to the (req.body, res.status().json()) shape the handlers use.
// Server-only env vars (GEMINI_API_KEY, ...) come from .env.local.
function devApiRoutes(env) {
  return {
    name: 'dev-api-routes',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const m = /^\/api\/([a-z0-9-]+)(?:\?.*)?$/i.exec(req.url || '')
        if (!m) return next()
        for (const [k, v] of Object.entries(env)) if (process.env[k] === undefined) process.env[k] = v
        try {
          const chunks = []
          for await (const c of req) chunks.push(c)
          const raw = Buffer.concat(chunks).toString('utf8')
          req.body = raw ? JSON.parse(raw) : {}
          const file = resolve(server.config.root, 'api', `${m[1]}.js`)
          const mod = await import(`${pathToFileURL(file).href}?t=${Date.now()}`)
          res.status = (code) => { res.statusCode = code; return res }
          res.json = (body) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(body))
          }
          await mod.default(req, res)
        } catch (e) {
          console.error('[dev-api]', e)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Dev API error: ' + e.message }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), devApiRoutes(loadEnv(mode, process.cwd(), ''))],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
}))
