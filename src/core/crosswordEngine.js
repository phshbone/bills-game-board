function isOpen(solution, row, col) {
  return solution[row]?.[col] && solution[row][col] !== '#'
}

function collectCells(solution, row, col, direction) {
  const cells = []
  let r = row
  let c = col

  while (isOpen(solution, r, c)) {
    cells.push({ row: r, col: c, key: `${r},${c}` })
    if (direction === 'across') c += 1
    else r += 1
  }

  return cells
}

export function buildCrossword(puzzle) {
  const numberByCell = {}
  const entries = []
  let number = 1

  for (let row = 0; row < puzzle.solution.length; row += 1) {
    for (let col = 0; col < puzzle.solution[row].length; col += 1) {
      if (!isOpen(puzzle.solution, row, col)) continue

      const startsAcross = (col === 0 || !isOpen(puzzle.solution, row, col - 1)) && isOpen(puzzle.solution, row, col + 1)
      const startsDown = (row === 0 || !isOpen(puzzle.solution, row - 1, col)) && isOpen(puzzle.solution, row + 1, col)
      if (!startsAcross && !startsDown) continue

      numberByCell[`${row},${col}`] = number

      if (startsAcross) {
        entries.push({
          id: `${row},${col},across`,
          number,
          direction: 'across',
          clue: puzzle.clues[`${row},${col},across`] ?? '',
          cells: collectCells(puzzle.solution, row, col, 'across')
        })
      }

      if (startsDown) {
        entries.push({
          id: `${row},${col},down`,
          number,
          direction: 'down',
          clue: puzzle.clues[`${row},${col},down`] ?? '',
          cells: collectCells(puzzle.solution, row, col, 'down')
        })
      }

      number += 1
    }
  }

  const entriesByCell = {}
  for (const entry of entries) {
    for (const cell of entry.cells) {
      entriesByCell[cell.key] ??= []
      entriesByCell[cell.key].push(entry)
    }
  }

  return { numberByCell, entries, entriesByCell }
}

export function isPuzzleComplete(puzzle, letters) {
  for (let row = 0; row < puzzle.solution.length; row += 1) {
    for (let col = 0; col < puzzle.solution[row].length; col += 1) {
      const answer = puzzle.solution[row][col]
      if (answer === '#') continue
      if ((letters[`${row},${col}`] ?? '').toUpperCase() !== answer) return false
    }
  }
  return true
}

export function wrongCells(puzzle, letters) {
  const wrong = new Set()
  for (let row = 0; row < puzzle.solution.length; row += 1) {
    for (let col = 0; col < puzzle.solution[row].length; col += 1) {
      const answer = puzzle.solution[row][col]
      if (answer === '#') continue
      const value = (letters[`${row},${col}`] ?? '').toUpperCase()
      if (value && value !== answer) wrong.add(`${row},${col}`)
    }
  }
  return wrong
}
