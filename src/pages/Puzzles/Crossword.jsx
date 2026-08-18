import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import starterCrossword from '../../data/crossword'
import { buildCrossword, isPuzzleComplete, wrongCells } from '../../core/crosswordEngine'
import { storage } from '../../core/storage'

const STORAGE_KEY = `crossword:${starterCrossword.id}`

function cleanLetter(value) {
  return value.toUpperCase().replace(/[^A-Z]/g, '').slice(-1)
}

export default function Crossword() {
  const model = useMemo(() => buildCrossword(starterCrossword), [])
  const [letters, setLetters] = useState(() => storage.get(STORAGE_KEY, {}))
  const [activeKey, setActiveKey] = useState('0,0')
  const [direction, setDirection] = useState('across')
  const [showCheck, setShowCheck] = useState(false)
  const inputRefs = useRef({})

  const completed = isPuzzleComplete(starterCrossword, letters)
  const wrong = showCheck ? wrongCells(starterCrossword, letters) : new Set()
  const cellEntries = model.entriesByCell[activeKey] ?? []
  const activeEntry = cellEntries.find((entry) => entry.direction === direction) ?? cellEntries[0] ?? null

  function saveLetters(next) {
    setLetters(next)
    storage.set(STORAGE_KEY, next)
  }

  function focusCell(key) {
    requestAnimationFrame(() => inputRefs.current[key]?.focus())
  }

  function selectCell(key) {
    setActiveKey(key)
    const available = model.entriesByCell[key] ?? []
    if (!available.some((entry) => entry.direction === direction) && available[0]) {
      setDirection(available[0].direction)
    }
  }

  function selectEntry(entry) {
    setDirection(entry.direction)
    setActiveKey(entry.cells[0].key)
    focusCell(entry.cells[0].key)
  }

  function changeLetter(key, rawValue) {
    const value = cleanLetter(rawValue)
    const next = { ...letters, [key]: value }
    saveLetters(next)
    setShowCheck(false)

    if (!value) return
    const entry = (model.entriesByCell[key] ?? []).find((item) => item.direction === direction) ?? activeEntry
    if (!entry) return
    const index = entry.cells.findIndex((cell) => cell.key === key)
    const nextCell = entry.cells[index + 1]
    if (nextCell) {
      setActiveKey(nextCell.key)
      focusCell(nextCell.key)
    }
  }

  function handleKeyDown(event, key) {
    if (event.key !== 'Backspace' || letters[key]) return
    const entry = (model.entriesByCell[key] ?? []).find((item) => item.direction === direction) ?? activeEntry
    if (!entry) return
    const index = entry.cells.findIndex((cell) => cell.key === key)
    const previous = entry.cells[index - 1]
    if (!previous) return
    event.preventDefault()
    const next = { ...letters, [previous.key]: '' }
    saveLetters(next)
    setActiveKey(previous.key)
    focusCell(previous.key)
  }

  function toggleDirection() {
    const available = model.entriesByCell[activeKey] ?? []
    if (available.length < 2) return
    setDirection((current) => (current === 'across' ? 'down' : 'across'))
  }

  function hintCell() {
    const [row, col] = activeKey.split(',').map(Number)
    const answer = starterCrossword.solution[row][col]
    if (!answer || answer === '#') return
    saveLetters({ ...letters, [activeKey]: answer })
    setShowCheck(false)
  }

  function clearPuzzle() {
    saveLetters({})
    setActiveKey('0,0')
    setDirection('across')
    setShowCheck(false)
    focusCell('0,0')
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-5 sm:py-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-billred">bill's puzzles · Crossword</p>
          <h1 className="mt-1 text-2xl font-black tracking-tight text-navy">{starterCrossword.title}</h1>
          <p className="mt-1 text-sm text-slate-600">{starterCrossword.subtitle}</p>
        </div>
        <Link to="/" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-black text-navy">
          Home
        </Link>
      </div>

      {completed && (
        <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center font-black text-emerald-900">
          Puzzle complete.
        </div>
      )}

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mx-auto grid w-full max-w-xl grid-cols-7 overflow-hidden border-2 border-navy bg-navy" style={{ aspectRatio: '1 / 1' }}>
            {starterCrossword.solution.map((row, rowIndex) =>
              row.split('').map((answer, colIndex) => {
                const key = `${rowIndex},${colIndex}`
                if (answer === '#') return <div key={key} className="bg-navy" />

                const number = model.numberByCell[key]
                const highlighted = activeEntry?.cells.some((cell) => cell.key === key)
                const active = activeKey === key
                const incorrect = wrong.has(key)

                return (
                  <label
                    key={key}
                    className={`relative border border-slate-400 ${active ? 'bg-amber-200' : highlighted ? 'bg-amber-50' : 'bg-white'} ${incorrect ? 'ring-2 ring-inset ring-billred' : ''}`}
                  >
                    {number && <span className="absolute left-0.5 top-0 text-[9px] font-black leading-none text-slate-700 sm:text-[10px]">{number}</span>}
                    <input
                      ref={(node) => { if (node) inputRefs.current[key] = node }}
                      value={letters[key] ?? ''}
                      onFocus={() => selectCell(key)}
                      onChange={(event) => changeLetter(key, event.target.value)}
                      onKeyDown={(event) => handleKeyDown(event, key)}
                      inputMode="text"
                      autoCapitalize="characters"
                      autoComplete="off"
                      aria-label={`Crossword cell ${rowIndex + 1}, ${colIndex + 1}`}
                      className="h-full w-full bg-transparent pt-1 text-center text-xl font-black uppercase text-navy outline-none sm:text-3xl"
                    />
                  </label>
                )
              })
            )}
          </div>

          <div className="mt-4 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{activeEntry ? `${activeEntry.number} ${activeEntry.direction}` : 'Clue'}</p>
                <p className="mt-1 font-black leading-6 text-navy">{activeEntry?.clue || 'Choose a square or clue.'}</p>
              </div>
              <button type="button" onClick={toggleDirection} disabled={cellEntries.length < 2} className="min-h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs font-black text-navy disabled:opacity-35">
                Across / Down
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <button type="button" onClick={() => setShowCheck(true)} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-navy">Check</button>
            <button type="button" onClick={hintCell} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-navy">Hint cell</button>
            <button type="button" onClick={clearPuzzle} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-navy">Clear</button>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          {['across', 'down'].map((group) => (
            <div key={group} className={group === 'down' ? 'mt-6' : ''}>
              <h2 className="text-lg font-black capitalize text-navy">{group}</h2>
              <div className="mt-2 grid gap-1">
                {model.entries.filter((entry) => entry.direction === group).map((entry) => {
                  const selected = activeEntry?.id === entry.id
                  return (
                    <button key={entry.id} type="button" onClick={() => selectEntry(entry)} className={`rounded-xl px-3 py-2 text-left text-sm leading-5 ${selected ? 'bg-amber-100 font-black text-navy' : 'text-slate-700 hover:bg-slate-50'}`}>
                      <span className="mr-2 font-black text-navy">{entry.number}.</span>{entry.clue}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </aside>
      </section>
    </main>
  )
}
