import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Trivia from '../pages/Brain/Trivia'
import Crossword from '../pages/Puzzles/Crossword'
import WordSearch from '../pages/Puzzles/WordSearch'
import Sudoku from '../pages/Numbers/Sudoku'
import EscapeRooms from '../pages/Mysteries/EscapeRooms'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brain/trivia" element={<Trivia />} />
      <Route path="/puzzles/crossword" element={<Crossword />} />
      <Route path="/puzzles/word-search" element={<WordSearch />} />
      <Route path="/numbers/sudoku" element={<Sudoku />} />
      <Route path="/mysteries/escape-rooms" element={<EscapeRooms />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
