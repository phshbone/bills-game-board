import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import triviaQuestions from '../../data/trivia'
import { storage } from '../../core/storage'
import {
  buildTriviaRound,
  scorePercent,
  triviaCategories,
  triviaDifficulties,
  TRIVIA_ROUND_SIZE
} from '../../core/triviaEngine'

const STATS_KEY = 'trivia:stats'

function readStats() {
  const saved = storage.get(STATS_KEY, {})
  return {
    gamesPlayed: Number(saved.gamesPlayed) || 0,
    bestPercent: Number(saved.bestPercent) || 0
  }
}

export default function Trivia() {
  const categories = useMemo(() => triviaCategories(triviaQuestions), [])
  const difficulties = useMemo(() => triviaDifficulties(triviaQuestions), [])
  const [category, setCategory] = useState('All')
  const [difficulty, setDifficulty] = useState('All')
  const [round, setRound] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [phase, setPhase] = useState('setup')
  const [stats, setStats] = useState(readStats)

  const current = round[index]
  const answered = selected !== null

  function startRound() {
    const nextRound = buildTriviaRound(triviaQuestions, {
      category,
      difficulty,
      size: TRIVIA_ROUND_SIZE
    })

    setRound(nextRound)
    setIndex(0)
    setScore(0)
    setSelected(null)
    setPhase('playing')
  }

  function chooseAnswer(choiceIndex) {
    if (answered || phase !== 'playing') return
    setSelected(choiceIndex)
    if (choiceIndex === current.answer) setScore((value) => value + 1)
  }

  function advance() {
    if (!answered || phase !== 'playing') return

    if (index === round.length - 1) {
      const percent = scorePercent(score, round.length)
      const nextStats = {
        gamesPlayed: stats.gamesPlayed + 1,
        bestPercent: Math.max(stats.bestPercent, percent)
      }
      storage.set(STATS_KEY, nextStats)
      setStats(nextStats)
      setPhase('finished')
      return
    }

    setIndex((value) => value + 1)
    setSelected(null)
  }

  function newRound() {
    setRound([])
    setIndex(0)
    setScore(0)
    setSelected(null)
    setPhase('setup')
  }

  if (phase === 'setup') {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-billred">bill's brain</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy">Trivia</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Pick a category and difficulty, or leave either one on All for a mixed five-question round.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-navy">
              Category
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base font-bold text-navy"
              >
                <option>All</option>
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-black text-navy">
              Difficulty
              <select
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-300 bg-white px-4 text-base font-bold text-navy"
              >
                <option>All</option>
                {difficulties.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <span className="font-black text-navy">Core starter pack:</span> {triviaQuestions.length} questions. The data format already includes a pack field so future themed question packs can plug into the same game.
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 px-5 text-sm font-black text-navy">Back to game board</Link>
            <button type="button" onClick={startRound} className="min-h-12 rounded-2xl bg-billred px-7 text-sm font-black text-white">Start round</button>
          </div>

          {stats.gamesPlayed > 0 && (
            <p className="mt-5 text-center text-xs font-bold text-slate-500">Best: {stats.bestPercent}% · Rounds played: {stats.gamesPlayed}</p>
          )}
        </section>
      </main>
    )
  }

  if (phase === 'finished') {
    const percent = scorePercent(score, round.length)

    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-billred">bill's brain</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy">Round complete</h1>
          <p className="mt-5 text-5xl font-black text-navy">{score}/{round.length}</p>
          <p className="mt-2 text-xl font-black text-billred">{percent}%</p>
          <p className="mt-3 text-sm text-slate-600">Best: {stats.bestPercent}% · Rounds played: {stats.gamesPlayed}</p>
          <p className="mt-1 text-xs font-bold text-slate-500">{category} · {difficulty}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button type="button" onClick={startRound} className="min-h-12 rounded-2xl bg-billred px-6 text-sm font-black text-white">Play another</button>
            <button type="button" onClick={newRound} className="min-h-12 rounded-2xl border border-slate-200 px-6 text-sm font-black text-navy">Change setup</button>
            <Link to="/" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-navy px-6 text-sm font-black text-white">Game board</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-billred">bill's brain · Trivia</p>
            <h1 className="mt-1 text-2xl font-black tracking-tight text-navy">Question {index + 1} of {round.length}</h1>
          </div>
          <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-black text-navy">Score {score}</div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
          <div className="h-full rounded-full bg-billred transition-all" style={{ width: `${((index + 1) / round.length) * 100}%` }} />
        </div>

        <div className="mt-6 rounded-3xl bg-slate-50 p-5 sm:p-6">
          <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
            <span>{current.category}</span>
            <span aria-hidden="true">·</span>
            <span>{current.difficulty}</span>
          </div>
          <h2 className="mt-2 text-xl font-black leading-snug text-navy sm:text-2xl">{current.question}</h2>
        </div>

        <div className="mt-5 grid gap-3">
          {current.choices.map((choice, choiceIndex) => {
            const correct = answered && choiceIndex === current.answer
            const wrong = answered && selected === choiceIndex && choiceIndex !== current.answer
            const base = 'min-h-14 rounded-2xl border px-4 py-3 text-left text-base font-bold transition'
            const state = correct
              ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
              : wrong
                ? 'border-billred bg-red-50 text-red-900'
                : 'border-slate-200 bg-white text-navy hover:border-slate-400'

            return (
              <button key={choice} type="button" onClick={() => chooseAnswer(choiceIndex)} disabled={answered} className={`${base} ${state}`}>
                <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-black">{String.fromCharCode(65 + choiceIndex)}</span>
                {choice}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-black text-navy">{selected === current.answer ? 'Correct.' : `Answer: ${current.choices[current.answer]}`}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{current.fact}</p>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 px-5 text-sm font-black text-navy">Back to game board</Link>
          <button type="button" onClick={advance} disabled={!answered} className="min-h-12 rounded-2xl bg-navy px-6 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40">
            {index === round.length - 1 ? 'See score' : 'Next question'}
          </button>
        </div>
      </section>
    </main>
  )
}
