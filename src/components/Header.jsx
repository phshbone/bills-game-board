import { Link } from 'react-router-dom'
import { BUILD_INFO } from '../core/buildInfo'

export default function Header() {
  return (
    <header className="bg-navy text-billwhite">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <Link to="/" className="min-w-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-billwhite">
          <p className="truncate text-xl font-black tracking-tight sm:text-2xl">bill's game board</p>
          <p className="text-xs text-slate-300">games, puzzles & mysteries</p>
        </Link>
        <span className="shrink-0 rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
          v{BUILD_INFO.version}
        </span>
      </div>
    </header>
  )
}
