import { Link } from 'react-router-dom'

export default function GamePlaceholder({ category, title, mascot, status = 'Sprint placeholder' }) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <img
          src={`${import.meta.env.BASE_URL}mascots/${mascot}`}
          alt="Placeholder mascot"
          className="mx-auto h-32 w-32 rounded-3xl border border-slate-200 bg-card object-cover"
        />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-billred">{category}</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-navy">{title}</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          {status}. The foundation route is working; gameplay is intentionally deferred to its scheduled sprint.
        </p>
        <Link to="/" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-2xl bg-navy px-6 text-sm font-black text-white">
          Back to game board
        </Link>
      </section>
    </main>
  )
}
