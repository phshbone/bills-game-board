import { readFile, access } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const requiredFiles = ['index.html','vite.config.js','tailwind.config.js','postcss.config.js','public/manifest.webmanifest','public/icons/icon-192.png','public/icons/icon-512.png','src/main.jsx','src/App.jsx','src/routes/AppRoutes.jsx','src/core/buildInfo.js','src/core/moduleRegistry.js','src/core/storage.js']
const requiredRoutes = ['/brain/trivia','/puzzles/crossword','/puzzles/word-search','/numbers/sudoku','/mysteries/escape-rooms']
const forbiddenImports = ['phaser','peerjs','firebase','supabase']
let failed = false
for (const file of requiredFiles) {
  try { await access(path.join(root, file)) } catch { console.error(`MISSING: ${file}`); failed = true }
}
const routes = await readFile(path.join(root, 'src/routes/AppRoutes.jsx'), 'utf8')
for (const route of requiredRoutes) if (!routes.includes(route)) { console.error(`MISSING ROUTE: ${route}`); failed = true }
const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))
const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) }
for (const name of forbiddenImports) if (deps[name]) { console.error(`DEFERRED DEPENDENCY PRESENT: ${name}`); failed = true }
const manifest = JSON.parse(await readFile(path.join(root, 'public/manifest.webmanifest'), 'utf8'))
if (manifest.display !== 'standalone' || manifest.theme_color !== '#090f2b') { console.error('PWA MANIFEST BASELINE INVALID'); failed = true }
if (failed) process.exit(1)
console.log('Sprint 1 shell checks passed.')
