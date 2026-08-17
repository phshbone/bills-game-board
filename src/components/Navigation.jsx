import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === '/') return null

  return (
    <nav aria-label="Page navigation" className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-2 px-4 py-2">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="min-h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-navy shadow-sm active:translate-y-px"
        >
          ← Back
        </button>
        <Link
          to="/"
          className="flex min-h-11 items-center rounded-xl bg-navy px-4 text-sm font-bold text-white shadow-sm active:translate-y-px"
        >
          Home
        </Link>
      </div>
    </nav>
  )
}
