import { cn } from "@/lib/utils"

/* Знак бренда — стилизованное кофейное зерно */
export function CremaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <ellipse
        cx="24"
        cy="24"
        rx="13"
        ry="19"
        transform="rotate(32 24 24)"
        fill="currentColor"
      />
      <path
        d="M17 13 C 27 19, 21 29, 31 35"
        stroke="var(--cream)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function CremaLogo({
  className,
  markClassName,
  textClassName,
  showMark = true,
}: {
  className?: string
  markClassName?: string
  textClassName?: string
  showMark?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showMark && <CremaMark className={cn("h-8 w-8 text-espresso", markClassName)} />}
      <span
        className={cn(
          "font-serif text-2xl font-semibold tracking-[0.32em] text-espresso",
          textClassName,
        )}
      >
        КРЕМА
      </span>
    </div>
  )
}
