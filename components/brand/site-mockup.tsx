import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { CremaMark } from "./logo"

/* Браузерная рамка для демонстрации макетов */
export function BrowserFrame({
  url = "krema.coffee",
  children,
  className,
  scrollable = false,
}: {
  url?: string
  children: ReactNode
  className?: string
  scrollable?: boolean
}) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-caramel/50" />
        <span className="ml-3 flex-1 truncate rounded-md bg-cream px-3 py-1 text-xs text-muted-foreground">
          {url}
        </span>
      </div>
      <div className={cn("flex-1", scrollable ? "overflow-y-auto" : "overflow-hidden")}>{children}</div>
    </div>
  )
}

function SiteNav({ compact }: { compact?: boolean }) {
  return (
    <header className="flex items-center justify-between bg-espresso px-8 py-4 text-cream">
      <div className="flex items-center gap-2">
        <CremaMark className="h-5 w-5 text-amber" />
        <span className="font-serif text-base font-semibold tracking-[0.3em]">КРЕМА</span>
      </div>
      {!compact && (
        <nav className="flex items-center gap-7 text-sm text-cream/80">
          <span>Меню</span>
          <span>Зерно</span>
          <span>О нас</span>
          <span>Контакты</span>
        </nav>
      )}
      <span className="rounded-full bg-amber px-4 py-1.5 text-xs font-semibold text-espresso-deep">
        Заказать
      </span>
    </header>
  )
}

/* Главная страница */
export function HomeMockup() {
  const menu = [
    ["/images/latte.png", "Капучино", "от 280 ₽"],
    ["/images/pour.png", "Фильтр V60", "от 320 ₽"],
    ["/images/beans.png", "Зерно домой", "от 990 ₽"],
  ]
  return (
    <div className="bg-cream text-espresso">
      <SiteNav />
      {/* Hero */}
      <section className="relative flex h-[300px] items-center overflow-hidden bg-espresso">
        <Image src="/images/pour.png" alt="" fill className="object-cover opacity-40" />
        <div className="relative z-10 max-w-lg px-10 text-cream">
          <span className="text-xs uppercase tracking-[0.34em] text-amber">Specialty coffee</span>
          <h1 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight">
            Кофе как ремесло, а не спешка
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-cream/75">
            Свежая обжарка малыми партиями и уютное пространство в центре города.
          </p>
          <div className="mt-5 flex gap-3">
            <span className="rounded-full bg-amber px-5 py-2 text-sm font-semibold text-espresso-deep">Смотреть меню</span>
            <span className="rounded-full border border-cream/40 px-5 py-2 text-sm">О бренде</span>
          </div>
        </div>
      </section>
      {/* Меню */}
      <section className="px-10 py-8">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold">Популярное</h2>
          <span className="text-sm text-caramel">Всё меню →</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          {menu.map(([src, t, p]) => (
            <div key={t} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative h-32">
                <Image src={src} alt={t} fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="font-serif text-lg font-semibold">{t}</span>
                <span className="text-sm text-caramel">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* О бренде */}
      <section className="mx-10 mb-10 flex items-center gap-8 rounded-xl bg-espresso p-8 text-cream">
        <div className="flex-1">
          <span className="text-xs uppercase tracking-[0.34em] text-amber">О нас</span>
          <p className="mt-3 font-serif text-2xl leading-snug">
            Мы обжариваем зерно сами и знаем каждую ферму в лицо.
          </p>
        </div>
        <span className="rounded-full bg-amber px-5 py-2 text-sm font-semibold text-espresso-deep">Подробнее</span>
      </section>
    </div>
  )
}

/* Внутренняя страница — меню/каталог */
export function MenuPageMockup() {
  const products = [
    ["/images/beans.png", "Эфиопия Иргачефф", "Цветочный, цитрус", "1190 ₽"],
    ["/images/bag.png", "Колумбия Уила", "Шоколад, орех", "990 ₽"],
    ["/images/latte.png", "Бленд «Крема»", "Карамель, баланс", "890 ₽"],
    ["/images/pour.png", "Кения АА", "Ягоды, яркая кислотность", "1290 ₽"],
  ]
  return (
    <div className="bg-cream text-espresso">
      <SiteNav />
      <div className="border-b border-border bg-card px-10 py-6">
        <span className="text-xs text-muted-foreground">Главная / Зерно</span>
        <h1 className="mt-1 font-serif text-3xl font-semibold">Зерно для дома</h1>
      </div>
      <div className="flex gap-8 px-10 py-8">
        <aside className="w-44 shrink-0 space-y-4 text-sm">
          <div>
            <p className="font-semibold">Обжарка</p>
            <div className="mt-2 space-y-1.5 text-muted-foreground">
              <p>● Светлая</p><p>○ Средняя</p><p>○ Тёмная</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Вкус</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Цитрус", "Шоколад", "Ягоды"].map((t) => (
                <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </aside>
        <div className="grid flex-1 grid-cols-2 gap-5">
          {products.map(([src, t, d, p]) => (
            <div key={t} className="flex gap-4 rounded-xl border border-border bg-card p-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                <Image src={src} alt={t} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-serif text-lg font-semibold">{t}</span>
                <span className="text-sm text-muted-foreground">{d}</span>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm font-semibold text-caramel">{p}</span>
                  <span className="rounded-full bg-amber px-3 py-1 text-xs font-semibold text-espresso-deep">В корзину</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* Мобильный макет */
export function PhoneMockup() {
  return (
    <div className="bg-cream text-espresso">
      <SiteNav compact />
      <div className="relative h-44 overflow-hidden bg-espresso">
        <Image src="/images/pour.png" alt="" fill className="object-cover opacity-40" />
        <div className="relative z-10 p-5 text-cream">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber">Specialty coffee</span>
          <h1 className="mt-2 font-serif text-2xl font-semibold leading-tight">Кофе как ремесло</h1>
          <span className="mt-3 inline-block rounded-full bg-amber px-4 py-1.5 text-xs font-semibold text-espresso-deep">Меню</span>
        </div>
      </div>
      <div className="space-y-3 p-5">
        {[["/images/latte.png", "Капучино", "280 ₽"], ["/images/beans.png", "Зерно домой", "990 ₽"]].map(([src, t, p]) => (
          <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-lg">
              <Image src={src} alt={t} fill className="object-cover" />
            </div>
            <span className="flex-1 font-serif font-semibold">{t}</span>
            <span className="text-sm text-caramel">{p}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
