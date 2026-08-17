export default function MascotBanner({ image, name, children }) {
  return (
    <section className="overflow-hidden rounded-3xl bg-navy text-white shadow-lg">
      <div className="grid items-center gap-4 p-5 sm:grid-cols-[140px_1fr] sm:p-6">
        <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white/20 bg-white/10">
          <img src={`${import.meta.env.BASE_URL}mascots/${image}`} alt={`${name} placeholder mascot`} className="h-full w-full object-cover" />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Host Bill says</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">bill's game board</h1>
          <div className="mt-3 text-sm leading-6 text-slate-200 sm:text-base">{children}</div>
        </div>
      </div>
    </section>
  )
}
