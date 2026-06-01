"use client"

import { slides } from "@/components/slides/registry"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useRef, useState } from "react"

export function Presentation() {
  const slidesRef = useRef<HTMLDivElement>(null)
  const [isExporting, setIsExporting] = useState(false)

  const exportToPdf = async () => {
    if (!slidesRef.current) return
    
    setIsExporting(true)
    
    try {
      const html2canvas = (await import("html2canvas")).default
      const { jsPDF } = await import("jspdf")
      
      const slideElements = slidesRef.current.querySelectorAll("section")
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1280, 720],
      })
      
      for (let i = 0; i < slideElements.length; i++) {
        const slide = slideElements[i] as HTMLElement
        
        const canvas = await html2canvas(slide, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#1a1410",
        })
        
        const imgData = canvas.toDataURL("image/jpeg", 0.95)
        
        if (i > 0) {
          pdf.addPage([1280, 720], "landscape")
        }
        
        pdf.addImage(imgData, "JPEG", 0, 0, 1280, 720)
      }
      
      pdf.save("Крема-презентация.pdf")
    } catch (error) {
      console.error("Ошибка экспорта PDF:", error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <main className="bg-espresso-deep">
      {/* Шапка */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-espresso-deep/95 px-6 py-4 text-cream backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-semibold tracking-[0.3em]">КРЕМА</span>
        </div>
        <Button 
          onClick={exportToPdf} 
          disabled={isExporting}
          variant="outline"
          className="border-cream/20 bg-transparent text-cream hover:bg-cream/10"
        >
          <Download className="mr-2 h-4 w-4" />
          {isExporting ? "Экспорт..." : "Скачать PDF"}
        </Button>
      </header>

      {/* Все слайды как секции */}
      <div ref={slidesRef} className="flex flex-col gap-6 px-8 py-8">
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
