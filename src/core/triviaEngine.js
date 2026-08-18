export const TRIVIA_ROUND_SIZE = 5

export function triviaCategories(questions) {
  return [...new Set(questions.map((item) => item.category))].sort()
}

export function triviaDifficulties(questions) {
  const order = ['Easy', 'Medium', 'Hard']
  const found = new Set(questions.map((item) => item.difficulty))
  return order.filter((item) => found.has(item))
}

export function buildTriviaRound(questions, { category = 'All', difficulty = 'All', size = TRIVIA_ROUND_SIZE } = {}) {
  const filtered = questions.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category
    const difficultyMatch = difficulty === 'All' || item.difficulty === difficulty
    return categoryMatch && difficultyMatch
  })

  const pool = filtered.length ? filtered : questions
  const shuffled = [...pool]

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled.slice(0, Math.min(size, shuffled.length))
}

export function scorePercent(score, total) {
  if (!total) return 0
  return Math.round((score / total) * 100)
}
