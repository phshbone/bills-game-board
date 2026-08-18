import { useState } from 'react'
import { Link } from 'react-router-dom'

const ROWS = ['BALL', 'AREA', 'LEAD', 'LADY']
const CLUES = [
  'Round object used in many games',
  'A measured region or amount of space',
  'To guide or go first',
  'A woman, in a traditional form of address'
]

function cellKey(row, col) {
  return `${row},${col}`
}

export default function Crossword() {
  const [letters, setLetters] = useState({})
  const [active, setActive] = useState({ row: 0, col: 0 })
  const [direction, setDirection] = useState('across')
  const [checked, setChecked] = useState(false)

  const answerFor = (row, col) => ROWS[row][col]
  const isComplete = ROWS.every((row, rowIndex) =>
    row.split('').every((answer, colIndex) => letters[cellKey(rowIndex, colIndex)] === answer)
  )

  function enterLetter(row, col, value) {
    const clean = value.toUpperCase().replace(/[^A-Z]/g, '').slice(-1)
    setLetters((current) => ({ ...current, [cellKey(row, col)]: clean }))
    setActive({ row, col })
    setChecked(false)
  }

  function hintCell() {
    setLetters((current) => ({
      ...current,
      [cellKey(active.row, active.col)]: answerFor(active.row, active.col)
    }))
    setChecked(false)
  }

  function clearPuzzle() {
    setLetters({})
    setActive({ row: 0, col: 0 })
    setDirection('across')
    setChecked(false)
  }

  const activeClueIndex = direction === 'across' ? active.row : active.col

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 sm:py-9">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-billred">bill's puzzles · Crossword</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-navy">Crossword test board</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">A deliberately small clean build to verify the crossword interaction before we add the full engine back.</p>
        </div>
        <Link to="/" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-black text-navy">Home</Link>
      </div>

      {isComplete && (
        <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center font-black text-emerald-900">Puzzle complete.</div>
      )}

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mx-auto grid w-full max-w-md grid-cols-4 overflow-hidden border-2 border-navy bg-navy" style={{ aspectRatio: '1 / 1' }}>
            {ROWS.map((row, rowIndex) =>
              row.split('').map((answer, colIndex) => {
                const key = cellKey(rowIndex, colIndex)
                const selected = active.row === rowIndex && active.col === colIndex
                const highlighted = direction === 'across' ? active.row === rowIndex : active.col === colIndex
                const wrong = checked && letters[key] && letters[key] !== answer

                return (
                  <label key={key} className={`relative border border-slate-400 ${selected ? 'bg-amber-200' : highlighted ? 'bg-amber-50' : 'bg-white'} ${wrong ? 'ring-2 ring-inset ring-billred' : ''}`}>
                    <span className="absolute left-1 top-0.5 text-[10px] font-black text-slate-500">{rowIndex === 0 || colIndex === 0 ? (direction === 'across' ? rowIndex + 1 : colIndex + 1) : ''}</span>
                    <input
                      value={letters[key] || ''}
                      onFocus={() => setActive({ row: rowIndex, col: colIndex })}
                      onChange={(event) => enterLetter(rowIndex, colIndex, event.target.value)}
                      inputMode="text"
                      autoCapitalize="characters"
                      autoComplete="off"
                      aria-label={`Crossword cell ${rowIndex + 1}, ${colIndex + 1}`}
                      className="h-full w-full bg-transparent pt-2 text-center text-3xl font-black uppercase text-navy outline-none sm:text-4xl"
                    />
                  </label>
                )
              })
            )}
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{activeClueIndex + 1} {direction}</p>
                <p className="mt-1 font-black leading-6 text-navy">{CLUES[activeClueIndex]}</p>
              </div>
              <button type="button" onClick={() => setDirection((current) => current === 'across' ? 'down' : 'across')} className="min-h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs font-black text-navy">Across / Down</button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <button type="button" onClick={() => setChecked(true)} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-navy">Check</button>
            <button type="button" onClick={hintCell} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-navy">Hint cell</button>
            <button type="button" onClick={clearPuzzle} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-navy">Clear</button>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black text-navy">Across</h2>
          <div className="mt-2 grid gap-2">
            {CLUES.map((clue, index) => (
              <button key={`a-${index}`} type="button" onClick={() => { setDirection('across'); setActive({ row: index, col: 0 }) }} className={`rounded-xl px-3 py-2 text-left text-sm leading-5 ${direction === 'across' && active.row === index ? 'bg-amber-100 font-black text-navy' : 'text-slate-700'}`}><span className="mr-2 font-black">{index + 1}.</span>{clue}</button>
            ))}
          </div>

          <h2 className="mt-6 text-lg font-black text-navy">Down</h2>
          <div className="mt-2 grid gap-2">
            {CLUES.map((clue, index) => (
              <button key={`d-${index}`} type="button" onClick={() => { setDirection('down'); setActive({ row: 0, col: index }) }} className={`rounded-xl px-3 py-2 text-left text-sm leading-5 ${direction === 'down' && active.col === index ? 'bg-amber-100 font-black text-navy' : 'text-slate-700'}`}><span className="mr-2 font-black">{index + 1}.</span>{clue}</button>
            ))}
          </div>
        </aside>
      </section>
    </main>
  )
}
