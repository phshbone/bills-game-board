export const TRIVIA_ROUND_SIZE = 5
export const TRIVIA_REPEAT_WINDOW = 5

export function triviaCategories(questions) {
  return [...new Set(questions.map((item) => item.category))].sort()
}

export function triviaDifficulties(questions) {
  const order = ['Easy', 'Medium', 'Hard']
  const found = new Set(questions.map((item) => item.difficulty))
  return order.filter((item) => found.has(item))
}

function shuffle(items) {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function recentQuestionIds(roundHistory, windowSize = TRIVIA_REPEAT_WINDOW) {
  return new Set((roundHistory ?? []).slice(-windowSize).flat())
}

export function rememberRound(roundHistory, round, windowSize = TRIVIA_REPEAT_WINDOW) {
  const next = [...(roundHistory ?? []), round.map((item) => item.id)]
  return next.slice(-windowSize)
}

export function buildTriviaRound(
  questions,
  {
    category = 'All',
    difficulty = 'All',
    size = TRIVIA_ROUND_SIZE,
    roundHistory = []
  } = {}
) {
  const filtered = questions.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category
    const difficultyMatch = difficulty === 'All' || item.difficulty === difficulty
    return categoryMatch && difficultyMatch
  })

  const pool = filtered.length ? filtered : questions
  const recentIds = recentQuestionIds(roundHistory)
  const fresh = shuffle(pool.filter((item) => !recentIds.has(item.id)))
  const needed = Math.min(size, pool.length)

  if (fresh.length >= needed) return fresh.slice(0, needed)

  // Repeat protection is best-effort while the starter bank is still small.
  // If a narrow category/difficulty pool runs out of fresh questions, recycle
  // the oldest eligible material rather than changing the user's filters.
  const recycled = shuffle(pool.filter((item) => !fresh.some((freshItem) => freshItem.id === item.id)))
  return [...fresh, ...recycled].slice(0, needed)
}

export function scorePercent(score, total) {
  if (!total) return 0
  return Math.round((score / total) * 100)
}
