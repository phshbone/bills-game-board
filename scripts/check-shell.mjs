import { readFile, access } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const requiredFiles = [
  'index.html',
  'vite.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  'public/manifest.webmanifest',
  'public/icons/icon.svg',
  'src/main.jsx',
  'src/App.jsx',
  'src/routes/AppRoutes.jsx',
  'src/core/buildInfo.js',
  'src/core/moduleRegistry.js',
  'src/core/storage.js',
  'src/core/triviaEngine.js',
  'src/data/trivia.js',
  'src/pages/Brain/Trivia.jsx',
  'src/core/crosswordEngine.js',
  'src/data/crossword.js',
  'src/pages/Puzzles/Crossword.jsx'
]

const requiredRoutes = [
  '/brain/trivia',
  '/puzzles/crossword',
  '/puzzles/word-search',
  '/numbers/sudoku',
  '/mysteries/escape-rooms'
]

const forbiddenImports = ['phaser', 'peerjs', 'firebase', 'supabase']

let failed = false
for (const file of requiredFiles) {
  try {
    await access(path.join(root, file))
  } catch {
    console.error(`MISSING: ${file}`)
    failed = true
  }
}

const routes = await readFile(path.join(root, 'src/routes/AppRoutes.jsx'), 'utf8')
for (const route of requiredRoutes) {
  if (!routes.includes(route)) {
    console.error(`MISSING ROUTE: ${route}`)
    failed = true
  }
}

const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))
const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) }
for (const name of forbiddenImports) {
  if (deps[name]) {
    console.error(`DEFERRED DEPENDENCY PRESENT: ${name}`)
    failed = true
  }
}

const manifest = JSON.parse(await readFile(path.join(root, 'public/manifest.webmanifest'), 'utf8'))
if (manifest.display !== 'standalone' || manifest.theme_color !== '#090f2b') {
  console.error('PWA MANIFEST BASELINE INVALID')
  failed = true
}

const triviaData = await readFile(path.join(root, 'src/data/trivia.js'), 'utf8')
if (!triviaData.includes("pack: 'core'") || !triviaData.includes("difficulty: 'Easy'") || !triviaData.includes("difficulty: 'Hard'")) {
  console.error('TRIVIA STARTER PACK CONTRACT INVALID')
  failed = true
}

const triviaPage = await readFile(path.join(root, 'src/pages/Brain/Trivia.jsx'), 'utf8')
if (!triviaPage.includes('buildTriviaRound') || !triviaPage.includes('bestPercent') || !triviaPage.includes('Start round')) {
  console.error('TRIVIA V1 FLOW INVALID')
  failed = true
}

const crosswordData = await readFile(path.join(root, 'src/data/crossword.js'), 'utf8')
if (!crosswordData.includes("id: 'starter-mini-1'") || !crosswordData.includes("'CAT#DOG'")) {
  console.error('CROSSWORD STARTER DATA INVALID')
  failed = true
}

const crosswordPage = await readFile(path.join(root, 'src/pages/Puzzles/Crossword.jsx'), 'utf8')
if (!crosswordPage.includes('buildCrossword') || !crosswordPage.includes('Hint cell') || !crosswordPage.includes('Across / Down')) {
  console.error('CROSSWORD FOUNDATION FLOW INVALID')
  failed = true
}

if (failed) process.exit(1)
console.log('Sprint shell, Trivia v1, and Crossword foundation checks passed.')
