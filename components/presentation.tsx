"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Download, Grid2x2, X } from "lucide-react"
import html2pdf from "html2pdf.js"
import { slides } from "@/components/slides/registry"
import { cn } from "@/lib/utils"

export function Presentation() {
  const [current, setCurrent] = useState(0)
  const [showGrid, setShowGrid] = useState(false)
  const [scale, setScale] = useState(1)
  const stageRef = useRef<HTMLDivElement>(null)
  const printRootRef = useRef<HTMLDivElement>(null)

  const total = slides.length

  const exportToPdf = useCallback(async () => {
    const element = printRootRef.current
    if (!element) return

    const options = {
      margin: 0,
      filename: "presentation.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { format: [1280, 720], orientation: "landscape", unit: "px" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    }

    html2pdf().set(options).from(element).save()
  }, [])

  const go = useCallback(
    (dir: number) => setCurrent((c) => Math.min(total - 1, Math.max(0, c + dir))),
    [total],
  )

  useEffect(() => {
    function onResize() {
      const el = stageRef.current
      if (!el) return
      const { width, height } = el.getBoundingClientRect()
      setScale(Math.min(width / 1280, height / 720))
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault()
        go(1)
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault()
        go(-1)
      } else if (e.key === "Escape") {
        setShowGrid(false)
      } else if (e.key.toLowerCase() === "g") {
        setShowGrid((s) => !s)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go])

  return (
    <>
      {/* Интерактивный плеер (скрывается при печати) */}
      <main className="no-print flex h-screen flex-col bg-espresso-deep">
        {/* Верхняя панель */}
        <header className="flex items-center justify-between px-6 py-3 text-cream">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-semibold tracking-[0.3em]">КРЕМА</span>
            <span className="hidden text-sm text-cream/50 sm:inline">
              · {slides[current].section}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowGrid(true)}
              className="flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm text-cream transition hover:bg-cream/10"
            >
              <Grid2x2 className="h-4 w-4" />
              <span className="hidden sm:inline">Все слайды</span>
            </button>
            <button
              onClick={exportToPdf}
              className="flex items-center gap-2 rounded-full bg-amber px-4 py-2 text-sm font-semibold text-espresso-deep transition hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Экспорт в PDF</span>
            </button>
          </div>
        </header>

        {/* Сцена */}
        <div ref={stageRef} className="relative flex flex-1 items-center justify-center overflow-hidden px-6">
          <div
            className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-cream/10"
            style={{ width: 1280 * scale, height: 720 * scale }}
          >
            <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
              {slides[current].node}
            </div>
          </div>

          {/* Стрелки */}
          <button
            onClick={() => go(-1)}
            disabled={current === 0}
            aria-label="Предыдущий слайд"
            className="absolute left-8 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10 disabled:opacity-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => go(1)}
            disabled={current === total - 1}
            aria-label="Следующий слайд"
            className="absolute right-8 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10 disabled:opacity-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Нижняя панель */}
        <footer className="flex items-center gap-4 px-6 py-3 text-cream">
          <span className="font-mono text-sm tabular-nums text-cream/70">
            {String(current + 1).padStart(2, "0")} / {total}
          </span>
          <div className="flex flex-1 items-center gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Слайд ${i + 1}`}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition",
                  i === current ? "bg-amber" : "bg-cream/15 hover:bg-cream/30",
                )}
              />
            ))}
          </div>
          <span className="hidden truncate text-sm text-cream/70 md:inline md:max-w-[200px]">
            {slides[current].title}
          </span>
        </footer>
      </main>

      {/* Сетка-обзор всех слайдов */}
      {showGrid && (
        <div className="no-print fixed inset-0 z-50 flex flex-col bg-espresso-deep/95 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-4 text-cream">
            <span className="font-serif text-lg font-semibold tracking-[0.3em]">Все слайды</span>
            <button
              onClick={() => setShowGrid(false)}
              aria-label="Закрыть"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4 overflow-y-auto px-6 pb-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i)
                  setShowGrid(false)
                }}
                className={cn(
                  "group flex flex-col gap-2 text-left",
                )}
              >
                <div
                  className={cn(
                    "relative aspect-video w-full overflow-hidden rounded-lg ring-1 transition",
                    i === current ? "ring-2 ring-amber" : "ring-cream/10 group-hover:ring-amber/50",
                  )}
                >
                  <div
                    style={{ transform: "scale(0.196)", transformOrigin: "top left" }}
                    className="pointer-events-none"
                  >
                    {s.node}
                  </div>
                </div>
                <span className="text-xs text-cream/60">
                  {String(i + 1).padStart(2, "0")} · {s.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Версия для печати: все слайды подряд (видна только при экспорте в PDF) */}
      <div ref={printRootRef} className="print-root hidden">
        {slides.map((s, i) => (
          <div key={i}>{s.node}</div>
        ))}
      </div>
    </>
  )
}
