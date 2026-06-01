import Image from "next/image"
import { CremaLogo, CremaMark } from "@/components/brand/logo"
import { ContentSlide, Card, Eyebrow } from "./kit"

type Swatch = {
  name: string
  hex: string
  rgb: string
  cmyk: string
  pantone: string
  style: string
  light?: boolean
}

const palette: Swatch[] = [
  {
    name: "Эспрессо",
    hex: "#3B2A20",
    rgb: "59 · 42 · 32",
    cmyk: "0 · 29 · 46 · 77",
    pantone: "476 C",
    style: "bg-espresso",
  },
  {
    name: "Карамель",
    hex: "#C68A4E",
    rgb: "198 · 138 · 78",
    cmyk: "0 · 30 · 61 · 22",
    pantone: "7570 C",
    style: "bg-amber",
  },
  {
    name: "Латте",
    hex: "#D8B98C",
    rgb: "216 · 185 · 140",
    cmyk: "0 · 14 · 35 · 15",
    pantone: "7508 C",
    style: "bg-[#D8B98C]",
  },
  {
    name: "Крем",
    hex: "#F4EDE2",
    rgb: "244 · 237 · 226",
    cmyk: "0 · 3 · 7 · 4",
    pantone: "7527 C",
    style: "bg-cream border border-border",
    light: true,
  },
  {
    name: "Уголь",
    hex: "#211913",
    rgb: "33 · 25 · 19",
    cmyk: "0 · 24 · 42 · 87",
    pantone: "Black 7 C",
    style: "bg-espresso-deep",
  },
]

/* 15 — Палитра */
export function PaletteSlide() {
  return (
    <ContentSlide index="03" kicker="Фирменный стиль" title="Цветовая палитра">
      <div className="grid grid-cols-5 gap-5">
        {palette.map((c) => (
          <div key={c.name} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
            <div className={`h-28 ${c.style}`} />
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-serif text-xl font-semibold text-espresso">{c.name}</h3>
              <dl className="space-y-1 text-[13px] leading-tight text-muted-foreground">
                <div className="flex justify-between"><dt>HEX</dt><dd className="font-mono text-espresso">{c.hex}</dd></div>
                <div className="flex justify-between"><dt>RGB</dt><dd className="font-mono text-espresso">{c.rgb}</dd></div>
                <div className="flex justify-between"><dt>CMYK</dt><dd className="font-mono text-espresso">{c.cmyk}</dd></div>
                <div className="flex justify-between"><dt>PANTONE</dt><dd className="font-mono text-espresso">{c.pantone}</dd></div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </ContentSlide>
  )
}

/* 16 — Обоснование палитры */
export function PaletteRationaleSlide() {
  const items = [
    ["Эспрессо и Уголь", "Глубина, премиальность и насыщенность кофе. Основа для текста и тёмных блоков."],
    ["Карамель", "Акцентный цвет — энергия, тепло и аппетитность. Кнопки и ключевые элементы."],
    ["Латте и Крем", "Мягкий фон, воздух и комфорт. Создают спокойное премиальное пространство."],
  ]
  return (
    <ContentSlide index="03" kicker="Фирменный стиль" title="Обоснование палитры">
      <div className="grid h-full grid-cols-[1fr_360px] gap-12">
        <div className="flex flex-col justify-center gap-6">
          {items.map(([t, d]) => (
            <div key={t} className="border-l-2 border-amber pl-6">
              <h3 className="font-serif text-2xl font-semibold text-espresso">{t}</h3>
              <p className="mt-1 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col overflow-hidden rounded-xl">
          <div className="flex flex-1 items-center justify-center bg-espresso">
            <span className="font-serif text-5xl font-semibold text-amber">60</span>
          </div>
          <div className="flex h-24 items-center justify-center bg-amber">
            <span className="font-serif text-4xl font-semibold text-espresso-deep">30</span>
          </div>
          <div className="flex h-16 items-center justify-center bg-cream-deep">
            <span className="font-serif text-2xl font-semibold text-espresso">10</span>
          </div>
        </div>
      </div>
    </ContentSlide>
  )
}

/* 17 — Типографика */
export function TypographySlide() {
  return (
    <ContentSlide index="03" kicker="Фирменный стиль" title="Типографика">
      <div className="grid grid-cols-2 gap-8">
        <Card className="flex flex-col gap-4">
          <Eyebrow>Заголовочный · Serif</Eyebrow>
          <p className="font-serif text-6xl font-semibold text-espresso">Fraunces</p>
          <p className="font-serif text-xl text-muted-foreground">Характерный, тёплый, ремесленный</p>
          <div className="font-serif text-espresso">
            <p className="text-2xl font-light">Аа Бб Вв Гг</p>
            <p className="text-base text-muted-foreground">0123456789 · Light / Medium / SemiBold</p>
          </div>
        </Card>
        <Card className="flex flex-col gap-4">
          <Eyebrow>Текстовый · Sans</Eyebrow>
          <p className="text-6xl font-semibold text-espresso">Inter</p>
          <p className="text-xl leading-relaxed text-muted-foreground">Чистый, читаемый, нейтральный</p>
          <div className="text-espresso">
            <p className="text-2xl">Аа Бб Вв Гг</p>
            <p className="text-base text-muted-foreground">0123456789 · Regular / Medium / SemiBold</p>
          </div>
        </Card>
      </div>
    </ContentSlide>
  )
}

/* 18 — Логотип */
export function LogoSlide() {
  return (
    <ContentSlide index="03" kicker="Фирменный стиль" title="Логотип">
      <div className="grid h-full grid-cols-3 gap-5">
        <div className="col-span-2 flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card">
          <CremaMark className="h-24 w-24 text-espresso" />
          <span className="font-serif text-6xl font-semibold tracking-[0.32em] text-espresso">КРЕМА</span>
          <span className="text-sm uppercase tracking-[0.4em] text-caramel">specialty coffee</span>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-1 items-center justify-center rounded-xl bg-espresso">
            <CremaLogo markClassName="text-amber" textClassName="text-cream" />
          </div>
          <div className="flex flex-1 items-center justify-center rounded-xl bg-amber">
            <CremaLogo markClassName="text-espresso-deep" textClassName="text-espresso-deep" />
          </div>
          <div className="flex flex-1 items-center justify-center rounded-xl border border-border bg-card">
            <CremaMark className="h-12 w-12 text-espresso" />
          </div>
        </div>
      </div>
    </ContentSlide>
  )
}

/* 19 — Охранное поле и недопустимое использование */
export function LogoRulesSlide() {
  const donts = ["Не растягивать", "Не менять цвета", "Не наклонять", "Не добавлять тени"]
  return (
    <ContentSlide index="03" kicker="Фирменный стиль" title="Правила использования">
      <div className="grid h-full grid-cols-2 gap-8">
        <Card className="flex flex-col">
          <h3 className="font-serif text-2xl font-semibold text-espresso">Охранное поле и минимальный размер</h3>
          <div className="mt-6 flex flex-1 items-center justify-center">
            <div className="relative border-2 border-dashed border-amber p-12">
              <CremaLogo />
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-full pr-2 text-xs text-caramel">X</span>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full pb-1 text-xs text-caramel">X</span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Отступ вокруг логотипа равен высоте знака (X). Минимальная ширина — 120 px / 32 мм.
          </p>
        </Card>
        <Card className="flex flex-col">
          <h3 className="font-serif text-2xl font-semibold text-espresso">Недопустимо</h3>
          <div className="mt-6 grid flex-1 grid-cols-2 gap-4">
            {donts.map((d) => (
              <div key={d} className="flex flex-col items-center justify-center gap-3 rounded-lg bg-secondary p-4">
                <div className="relative">
                  <CremaMark className="h-10 w-10 text-espresso/40" />
                  <span className="absolute inset-0 flex items-center justify-center text-3xl text-destructive">⃠</span>
                </div>
                <span className="text-center text-sm text-muted-foreground">{d}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </ContentSlide>
  )
}

/* Набор линейных иконок */
const icons: { label: string; path: React.ReactNode }[] = [
  { label: "Зерно", path: <CremaMark className="h-9 w-9 text-espresso" /> },
  {
    label: "Чашка",
    path: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M6 12h16v6a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-6Z" />
        <path d="M22 13h3a3 3 0 0 1 0 6h-3" />
        <path d="M11 4c-1 1.5-1 3 0 4.5M16 4c-1 1.5-1 3 0 4.5" />
      </svg>
    ),
  },
  {
    label: "Лист",
    path: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26C6 14 14 6 26 6c0 12-8 20-20 20Z" />
        <path d="M10 22 22 10" />
      </svg>
    ),
  },
  {
    label: "Локация",
    path: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28c6-7 9-11 9-15a9 9 0 1 0-18 0c0 4 3 8 9 15Z" />
        <circle cx="16" cy="13" r="3" />
      </svg>
    ),
  },
  {
    label: "Часы",
    path: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11" />
        <path d="M16 10v6l4 3" />
      </svg>
    ),
  },
  {
    label: "Пакет",
    path: (
      <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 11h16l-1.5 16h-13L8 11Z" />
        <path d="M12 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
]

/* 20 — Иконки и графика */
export function IconsSlide() {
  return (
    <ContentSlide index="03" kicker="Фирменный стиль" title="Иконки и графика">
      <div className="flex flex-col gap-6">
        <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Линейные иконки с единой толщиной обводки 1.8 px и скруглёнными концами.
          Простые, тёплые и узнаваемые — в стилистике ремесленного бренда.
        </p>
        <div className="grid grid-cols-6 gap-5">
          {icons.map((ic) => (
            <div key={ic.label} className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card py-8 text-espresso">
              {ic.path}
              <span className="text-sm text-muted-foreground">{ic.label}</span>
            </div>
          ))}
        </div>
      </div>
    </ContentSlide>
  )
}

/* 21 — Паттерн */
export function PatternSlide() {
  return (
    <ContentSlide index="03" kicker="Фирменный стиль" title="Фирменный паттерн">
      <div className="grid h-full grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-xl bg-espresso">
          <div className="absolute inset-0 grid grid-cols-6 place-items-center gap-2 p-6 opacity-90">
            {Array.from({ length: 48 }).map((_, i) => (
              <CremaMark
                key={i}
                className={`h-8 w-8 ${i % 3 === 0 ? "text-amber" : "text-cream/15"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h3 className="font-serif text-3xl font-semibold text-espresso">Зерно как модуль</h3>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Паттерн строится из повторяющегося знака зерна. Используется на упаковке,
            стаканах, фонах баннеров и разделителях на сайте.
          </p>
          <div className="flex gap-3">
            <div className="h-24 w-24 overflow-hidden rounded-lg bg-amber">
              <div className="grid grid-cols-3 place-items-center gap-1 p-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <CremaMark key={i} className="h-4 w-4 text-espresso-deep" />
                ))}
              </div>
            </div>
            <div className="flex flex-1 items-center rounded-lg bg-secondary px-5 text-sm leading-relaxed text-muted-foreground">
              Масштабируется под любой носитель без потери узнаваемости.
            </div>
          </div>
        </div>
      </div>
    </ContentSlide>
  )
}

/* 22 — Мудборд */
export function MoodboardSlide() {
  const imgs = [
    ["/images/beans.png", "Зёрна крупным планом", "row-span-2"],
    ["/images/latte.png", "Латте-арт", ""],
    ["/images/interior.png", "Интерьер", ""],
    ["/images/barista.png", "Ремесло бариста", ""],
    ["/images/bag.png", "Упаковка зерна", ""],
  ]
  const words = ["Тепло", "Ремесло", "Спокойствие", "Терруар", "Премиум", "Уют"]
  return (
    <ContentSlide index="03" kicker="Фирменный стиль" title="Мудборд">
      <div className="grid h-full grid-cols-[1.6fr_1fr] gap-6">
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          {imgs.map(([src, alt, span]) => (
            <div key={src} className={`relative overflow-hidden rounded-xl ${span}`}>
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between rounded-xl bg-espresso p-7 text-cream">
          <div>
            <Eyebrow className="text-amber">Настроение</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">
              {words.map((w) => (
                <span key={w} className="rounded-full border border-cream/25 px-4 py-1.5 text-sm">
                  {w}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {["bg-espresso-deep", "bg-amber", "bg-[#D8B98C]", "bg-cream"].map((c) => (
              <span key={c} className={`h-12 flex-1 rounded-md border border-cream/15 ${c}`} />
            ))}
          </div>
        </div>
      </div>
    </ContentSlide>
  )
}
