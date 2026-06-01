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
      <div className="flex flex-col gap-6 px-8 py-8">
        {slides.map((s, i) => (
          <section key={i} className="h-[720px] w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-cream/10">
            <div className="h-full w-full">
              {s.node}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
