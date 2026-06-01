import { slides } from "@/components/slides/registry"

export function Presentation() {
  return (
    <main className="bg-espresso-deep">
      {/* Шапка */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-espresso-deep/95 px-6 py-4 text-cream backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-semibold tracking-[0.3em]">КРЕМА</span>
        </div>
      </header>

      {/* Все слайды как секции */}
      <div className="flex flex-col">
        {slides.map((s, i) => (
          <section key={i} className="flex min-h-screen items-center justify-center px-4 py-8">
            <div className="w-full max-w-[1280px] overflow-hidden rounded-xl shadow-2xl ring-1 ring-cream/10">
              {s.node}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
