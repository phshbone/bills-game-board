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

function answerPositions(size) {
  const positions = []
  while (positions.length < size) {
    positions.push(...shuffle([0, 1, 2, 3]))
  }
  return positions.slice(0, size)
}

function randomizeChoices(question, targetAnswerIndex) {
  const correctChoice = question.choices[question.answer]
  const distractors = shuffle(question.choices.filter((_, index) => index !== question.answer))
  const choices = [...distractors]
  choices.splice(targetAnswerIndex, 0, correctChoice)

  return {
    ...question,
    choices,
    answer: targetAnswerIndex
  }
}

function prepareRound(questions) {
  const positions = answerPositions(questions.length)
  return questions.map((question, index) => randomizeChoices(question, positions[index]))
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

  let selected
  if (fresh.length >= needed) {
    selected = fresh.slice(0, needed)
  } else {
    // Repeat protection is best-effort while a selected pool is still small.
    // If the exact filter runs out of fresh questions, recycle only within that
    // filter rather than changing what the player asked to play.
    const recycled = shuffle(pool.filter((item) => !fresh.some((freshItem) => freshItem.id === item.id)))
    selected = [...fresh, ...recycled].slice(0, needed)
  }

  // Choice order is randomized every round. For a normal five-question round,
  // the correct answers are deliberately spread across A/B/C/D so players
  // cannot learn a positional pattern from the question data.
  return prepareRound(selected)
}

export function scorePercent(score, total) {
  if (!total) return 0
  return Math.round((score / total) * 100)
}
