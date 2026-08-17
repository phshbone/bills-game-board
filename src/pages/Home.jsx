import CategoryCard from '../components/CategoryCard'
import MascotBanner from '../components/MascotBanner'
import { CATEGORIES } from '../core/moduleRegistry'

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-8">
      <MascotBanner image="host-bill.svg" name="Host Bill">
        Pick a section, choose a game, and jump in. The board is wired first so every future game can plug into the same foundation.
      </MascotBanner>

      <section className="mt-6" aria-labelledby="categories-title">
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-billred">Choose a section</p>
          <h2 id="categories-title" className="mt-1 text-2xl font-black tracking-tight text-navy">What do you feel like playing?</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((category) => <CategoryCard key={category.id} category={category} />)}
        </div>
      </section>
    </main>
  )
}
