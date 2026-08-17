import { Link } from 'react-router-dom'
import { gamesForCategory } from '../core/moduleRegistry'

export default function CategoryCard({ category }) {
  const games = gamesForCategory(category.id)
  const firstRoute = games[0]?.route ?? '/'
  const comingSoon = games.every((game) => game.status === 'coming-soon')

  return (
    <article className="rounded-3xl border border-slate-200 bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start gap-4">
        <img
          src={`${import.meta.env.BASE_URL}mascots/${category.mascot}`}
          alt={`${category.mascotName} placeholder mascot`}
          className="h-20 w-20 shrink-0 rounded-2xl border border-slate-200 bg-white object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="text-2xl" aria-hidden="true">{category.icon}</p>
          <h2 className="text-xl font-black tracking-tight text-navy">{category.title}</h2>
          <p className="mt-1 text-sm font-semibold text-slate-500">{category.mascotName} · {category.statusLabel}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" aria-label={`${category.title} games`}>
        {games.map((game) => (
          <Link
            key={game.id}
            to={game.route}
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-billred"
          >
            {game.title}{game.status === 'coming-soon' ? ' · soon' : ''}
          </Link>
        ))}
      </div>

      <Link
        to={firstRoute}
        aria-label={`Enter ${category.title}`}
        className={`mt-5 flex min-h-12 w-full items-center justify-center rounded-2xl px-4 text-sm font-black transition active:translate-y-px ${comingSoon ? 'bg-slate-200 text-slate-700' : 'bg-billred text-white'}`}
      >
        {comingSoon ? 'Preview →' : 'Enter →'}
      </Link>
    </article>
  )
}
