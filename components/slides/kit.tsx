import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/* Базовый контейнер слайда: фиксированный размер 1280×720 для печати в PDF */
export function SlideFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "print-slide relative flex h-full w-full bg-cream text-espresso",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.34em] text-caramel",
        className,
      )}
    >
      {children}
    </span>
  )
}

/* Шапка контентного слайда: номер раздела + заголовок */
export function SlideHeader({
  index,
  kicker,
  title,
  className,
}: {
  index: string
  kicker: string
  title: string
  className?: string
}) {
  return (
    <div className={cn("flex items-end justify-between gap-8", className)}>
      <div className="space-y-3">
        <Eyebrow>{kicker}</Eyebrow>
        <h2 className="max-w-3xl text-pretty font-serif text-[44px] font-semibold leading-[1.05] text-espresso">
          {title}
        </h2>
      </div>
      <span className="font-serif text-[64px] font-light leading-none text-cream-deep">
        {index}
      </span>
    </div>
  )
}

/* Контентный слайд со стандартными отступами */
export function ContentSlide({
  index,
  kicker,
  title,
  children,
}: {
  index: string
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <SlideFrame className="flex-col px-20 py-14">
      <SlideHeader index={index} kicker={kicker} title={title} />
      <div className="mt-8 flex-1">{children}</div>
    </SlideFrame>
  )
}

export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-7 shadow-[0_1px_0_rgba(0,0,0,0.02)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
