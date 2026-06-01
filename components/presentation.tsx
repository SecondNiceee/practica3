"use client"

import { slides } from "@/components/slides/registry"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Presentation() {
  const exportToPdf = () => {
    window.print()
  }

  return (
    <main className="bg-espresso-deep print:bg-white">
      {/* Шапка */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-espresso-deep/95 px-6 py-4 text-cream backdrop-blur no-print">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-semibold tracking-[0.3em]">КРЕМА</span>
        </div>
        <Button 
          onClick={exportToPdf} 
          variant="outline"
          className="border-cream/20 bg-transparent text-cream hover:bg-cream/10 no-print"
        >
          <Download className="mr-2 h-4 w-4" />
          Скачать PDF
        </Button>
      </header>

      {/* Все слайды как секции */}
      <div className="flex flex-col gap-6 px-8 py-8 print:gap-0 print:p-0">
        {slides.map((s, i) => (
          <section key={i} className="h-[720px] w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-cream/10 print-slide print:rounded-none print:shadow-none print:ring-0">
            <div className="h-full w-full">
              {s.node}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
