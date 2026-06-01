import { ContentSlide, Card } from "./kit"

/* Скриншот сайта конкурента в браузерной рамке */
function ScreenshotFrame({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/60" />
        <span className="h-3 w-3 rounded-full bg-amber" />
        <span className="h-3 w-3 rounded-full bg-caramel/50" />
        <span className="ml-3 truncate rounded bg-cream px-3 py-1 text-xs text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden bg-cream-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src || "/placeholder.svg"}
          alt={`Скриншот главной страницы сайта ${label}`}
          className="absolute inset-0 h-full w-full object-cover object-top"
          crossOrigin="anonymous"
        />
      </div>
    </div>
  )
}

/* Слайды-скриншоты конкурентов (07, 09, 11) */
function CompetitorShotSlide({
  index,
  n,
  name,
  domain,
  src,
  type,
}: {
  index: string
  n: number
  name: string
  domain: string
  src: string
  type: string
}) {
  return (
    <ContentSlide
      index={index}
      kicker={`Анализ рынка · Конкурент ${n}`}
      title={`Конкурент ${n}: ${name}`}
    >
      <div className="grid h-full grid-cols-[1fr_300px] gap-8">
        <ScreenshotFrame label={domain} src={src} />
        <div className="flex flex-col justify-center gap-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-caramel">Тип</p>
            <p className="text-pretty leading-relaxed text-espresso">{type}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-caramel">Что оцениваем</p>
            <ul className="mt-1 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
              <li>· Структуру и навигацию</li>
              <li>· Визуальный стиль и палитру</li>
              <li>· Подачу меню и товаров</li>
              <li>· Адаптивность и UX</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentSlide>
  )
}

/* Слайды-разборы конкурентов (08, 10, 12) */
function CompetitorAnalysisSlide({
  index,
  n,
  pros,
  cons,
  takeaway,
}: {
  index: string
  n: number
  pros: string[]
  cons: string[]
  takeaway: string
}) {
  return (
    <ContentSlide
      index={index}
      kicker={`Анализ рынка · Конкурент ${n}`}
      title={`Разбор конкурента ${n}`}
    >
      <div className="grid h-full grid-cols-2 gap-6">
        <Card className="flex flex-col border-l-4 border-l-caramel">
          <h3 className="font-serif text-2xl font-semibold text-espresso">Сильные стороны</h3>
          <ul className="mt-4 flex-1 space-y-3">
            {pros.map((p) => (
              <li key={p} className="flex gap-3 text-pretty leading-relaxed text-espresso/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-caramel" />
                {p}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="flex flex-col border-l-4 border-l-destructive/50">
          <h3 className="font-serif text-2xl font-semibold text-espresso">Слабые стороны</h3>
          <ul className="mt-4 flex-1 space-y-3">
            {cons.map((c) => (
              <li key={c} className="flex gap-3 text-pretty leading-relaxed text-espresso/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                {c}
              </li>
            ))}
          </ul>
        </Card>
        <div className="col-span-2 rounded-xl bg-espresso px-8 py-6 text-cream">
          <p className="text-xs uppercase tracking-[0.3em] text-amber">Вывод для «КРЕМА»</p>
          <p className="mt-2 text-pretty text-lg leading-relaxed">{takeaway}</p>
        </div>
      </div>
    </ContentSlide>
  )
}

export function Competitor1ShotSlide() {
  return (
    <CompetitorShotSlide
      index="02"
      n={1}
      name="Tasty Coffee"
      domain="tastycoffee.ru"
      src="/images/competitor-tasty.png"
      type="Крупный обжарщик и интернет-магазин кофе с доставкой по всей России"
    />
  )
}
export function Competitor1AnalysisSlide() {
  return (
    <CompetitorAnalysisSlide
      index="02"
      n={1}
      pros={[
        "Мощный e-commerce: каталог, фильтры, корзина",
        "Чёткая категоризация (эспрессо / фильтр / аксессуары)",
        "Социальное доказательство — 41 837 отзывов на виду",
      ]}
      cons={[
        "Жёсткий, технологичный стиль без тёплой эмоции",
        "Акцент на продаже зерна, а не на атмосфере кофейни",
        "Минимум сторителлинга о бренде и людях",
      ]}
      takeaway="Берём за образец удобный каталог и работу с отзывами, но добавляем тепло и атмосферу места, которых не хватает Tasty Coffee."
    />
  )
}
export function Competitor2ShotSlide() {
  return (
    <CompetitorShotSlide
      index="02"
      n={2}
      name="Натура"
      domain="naturacoffee.ru"
      src="/images/competitor-natura.png"
      type="Локальная сеть кофеен «кофе и еда» с акцентом на атмосферу и завтраки"
    />
  )
}
export function Competitor2AnalysisSlide() {
  return (
    <CompetitorAnalysisSlide
      index="02"
      n={2}
      pros={[
        "Тёплая, «живая» фотография фасада и интерьера",
        "Эмоциональный посыл: местная обжарка и авторская еда",
        "Понятные разделы: меню, бронирование, бонусы",
      ]}
      cons={[
        "Cookie-баннер перекрывает первый экран",
        "Перегруженная боковая панель иконок отвлекает",
        "Нет онлайн-магазина зерна и предзаказа",
      ]}
      takeaway="Перенимаем тёплую атмосферную подачу и бронирование, но делаем чистый первый экран и добавляем онлайн-продажу зерна."
    />
  )
}
export function Competitor3ShotSlide() {
  return (
    <CompetitorShotSlide
      index="02"
      n={3}
      name="Stars Coffee"
      domain="starscoffee.ru"
      src="/images/competitor-stars.png"
      type="Федеральная сетевая кофейня с собственным приложением и франшизой"
    />
  )
}
export function Competitor3AnalysisSlide() {
  return (
    <CompetitorAnalysisSlide
      index="02"
      n={3}
      pros={[
        "Сильный узнаваемый бренд и фирменный персонаж",
        "Яркий цельный визуальный стиль (бирюза + кофейный)",
        "Своё приложение и программа лояльности",
      ]}
      cons={[
        "Массовый сетевой формат без локальной индивидуальности",
        "Cookie-баннер закрывает нижнюю часть экрана",
        "Слабый акцент на качестве и происхождении зерна",
      ]}
      takeaway="Учимся у Stars Coffee целостности бренда и лояльности, но делаем ставку на спешелти-качество и индивидуальность места."
    />
  )
}

/* 13 — Сравнительная таблица */
export function ComparisonSlide() {
  const rows = [
    ["Онлайн-предзаказ", false, true, false, true],
    ["Магазин зерна", false, true, true, true],
    ["Сильный бренд", true, false, true, true],
    ["Адаптивность", false, true, true, true],
    ["Скорость загрузки", true, true, false, true],
    ["История / контент", true, false, true, true],
  ] as const
  const cols = ["Критерий", "Tasty", "Натура", "Stars", "КРЕМА"]
  return (
    <ContentSlide index="02" kicker="Анализ рынка" title="Сравнительная таблица">
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-espresso text-cream">
              {cols.map((c, i) => (
                <th
                  key={c}
                  className={`px-6 py-4 text-sm font-semibold ${
                    i === 4 ? "bg-amber text-espresso-deep" : ""
                  } ${i === 0 ? "" : "text-center"}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={r[0]} className={ri % 2 ? "bg-secondary/50" : "bg-card"}>
                <td className="px-6 py-3.5 font-medium text-espresso">{r[0]}</td>
                {r.slice(1).map((v, vi) => (
                  <td
                    key={vi}
                    className={`px-6 py-3.5 text-center text-lg ${vi === 3 ? "bg-amber/10" : ""}`}
                  >
                    <span className={v ? "text-caramel" : "text-border"}>
                      {v ? "●" : "—"}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
        «КРЕМА» закрывает все ключевые критерии одновременно — это и есть рыночная
        ниша проекта: сочетание сильного бренда, удобного сервиса и скорости.
      </p>
    </ContentSlide>
  )
}

/* 14 — SWOT / выводы */
export function SwotSlide() {
  const quad = [
    ["S — Сильные стороны", "Свежая обжарка, сильная эстетика, лояльная аудитория", "bg-espresso text-cream"],
    ["W — Слабые стороны", "Новый бренд, ограниченная узнаваемость", "bg-card text-espresso"],
    ["O — Возможности", "Спрос на спешелти, онлайн-продажа зерна, контент", "bg-card text-espresso"],
    ["T — Угрозы", "Высокая конкуренция, рост цен на зерно", "bg-cream-deep text-espresso"],
  ]
  return (
    <ContentSlide index="02" kicker="Итоги анализа" title="SWOT-анализ бренда">
      <div className="grid h-full grid-cols-2 grid-rows-2 gap-5">
        {quad.map(([t, d, cls]) => (
          <div key={t} className={`flex flex-col justify-center rounded-xl border border-border p-8 ${cls}`}>
            <h3 className="font-serif text-2xl font-semibold">{t}</h3>
            <p className="mt-3 text-pretty text-lg leading-relaxed opacity-85">{d}</p>
          </div>
        ))}
      </div>
    </ContentSlide>
  )
}
