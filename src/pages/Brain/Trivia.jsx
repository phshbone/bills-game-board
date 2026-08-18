import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import triviaQuestions from '../../data/trivia'
import { storage } from '../../core/storage'

const STATS_KEY = 'trivia:stats'

function readStats() {
  return storage.get(STATS_KEY, { gamesPlayed: 0, bestScore: 0 })
}

export default function Trivia() {
  const questions = useMemo(() => triviaQuestions, [])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)
  const [stats, setStats] = useState(readStats)

  const current = questions[index]
  const answered = selected !== null

  function chooseAnswer(choiceIndex) {
    if (answered || finished) return
    setSelected(choiceIndex)
    if (choiceIndex === current.answer) setScore((value) => value + 1)
  }

  function advance() {
    if (!answered) return

    if (index === questions.length - 1) {
      const nextStats = {
        gamesPlayed: stats.gamesPlayed + 1,
        bestScore: Math.max(stats.bestScore, score)
      }
      storage.set(STATS_KEY, nextStats)
      setStats(nextStats)
      setFinished(true)
      return
    }

    setIndex((value) => value + 1)
    setSelected(null)
  }

  function restart() {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }

  if (finished) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-billred">bill's brain</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy">Round complete</h1>
          <p className="mt-5 text-5xl font-black text-navy">{score}/{questions.length}</p>
          <p className="mt-3 text-sm text-slate-600">Best score: {stats.bestScore}/{questions.length} · Games played: {stats.gamesPlayed}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button onClick={restart} className="min-h-12 rounded-2xl bg-billred px-6 text-sm font-black text-white">Play again</button>
            <Link to="/" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-navy px-6 text-sm font-black text-white">Back to game board</Link>
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
            <h1 className="mt-1 text-2xl font-black tracking-tight text-navy">Question {index + 1} of {questions.length}</h1>
          </div>
          <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-black text-navy">Score {score}</div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
          <div className="h-full rounded-full bg-billred transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
        </div>

        <div className="mt-6 rounded-3xl bg-slate-50 p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{current.category}</p>
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
            {index === questions.length - 1 ? 'See score' : 'Next question'}
          </button>
        </div>
      </section>
    </main>
  )
}
