const modules = [
  {
    id: 'brain-trivia',
    title: 'Trivia',
    categoryId: 'brain',
    categoryTitle: "bill's brain",
    route: '/brain/trivia',
    mascot: 'big-brain-bill.svg',
    status: 'placeholder',
    capabilities: ['navigation']
  },
  {
    id: 'puzzles-crossword',
    title: 'Crossword',
    categoryId: 'puzzles',
    categoryTitle: "bill's puzzles",
    route: '/puzzles/crossword',
    mascot: 'puzzle-bill.svg',
    status: 'placeholder',
    capabilities: ['navigation']
  },
  {
    id: 'puzzles-word-search',
    title: 'Word Search',
    categoryId: 'puzzles',
    categoryTitle: "bill's puzzles",
    route: '/puzzles/word-search',
    mascot: 'puzzle-bill.svg',
    status: 'placeholder',
    capabilities: ['navigation']
  },
  {
    id: 'numbers-sudoku',
    title: 'Sudoku',
    categoryId: 'numbers',
    categoryTitle: "bill's numbers",
    route: '/numbers/sudoku',
    mascot: 'sudoku-bill.svg',
    status: 'placeholder',
    capabilities: ['navigation']
  },
  {
    id: 'mysteries-escape-rooms',
    title: 'Escape Rooms',
    categoryId: 'mysteries',
    categoryTitle: "bill's mysteries",
    route: '/mysteries/escape-rooms',
    mascot: 'detective-bill.svg',
    status: 'coming-soon',
    capabilities: ['navigation']
  }
]

export const MODULES = Object.freeze(modules.map((item) => Object.freeze(item)))

export const CATEGORIES = Object.freeze([
  {
    id: 'brain',
    icon: '🧠',
    title: "bill's brain",
    mascotName: 'Big Brain Bill',
    mascot: 'big-brain-bill.svg',
    statusLabel: '1 Game'
  },
  {
    id: 'puzzles',
    icon: '🧩',
    title: "bill's puzzles",
    mascotName: 'Puzzle Bill',
    mascot: 'puzzle-bill.svg',
    statusLabel: '2 Games'
  },
  {
    id: 'numbers',
    icon: '🔢',
    title: "bill's numbers",
    mascotName: 'Sudoku Bill',
    mascot: 'sudoku-bill.svg',
    statusLabel: '1 Game'
  },
  {
    id: 'mysteries',
    icon: '🔍',
    title: "bill's mysteries",
    mascotName: 'Detective Bill',
    mascot: 'detective-bill.svg',
    statusLabel: 'Coming Soon'
  }
])

export function gamesForCategory(categoryId) {
  return MODULES.filter((game) => game.categoryId === categoryId)
}

export function moduleByRoute(route) {
  return MODULES.find((game) => game.route === route)
}
