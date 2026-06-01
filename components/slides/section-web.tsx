import { CremaLogo, CremaMark } from "@/components/brand/logo"
import { BrowserFrame, HomeMockup, MenuPageMockup, PhoneMockup } from "@/components/brand/site-mockup"
import { ContentSlide, Card, Eyebrow, SlideFrame } from "./kit"

/* 23 — Карта сайта */
export function SitemapSlide() {
  const sections = [
    ["Меню", ["Кофе", "Десерты", "Сезон"]],
    ["Зерно", ["Каталог", "Карточка", "Корзина"]],
    ["О нас", ["История", "Команда", "Обжарка"]],
    ["Контакты", ["Адрес", "Карта", "Часы"]],
  ] as const
  return (
    <ContentSlide index="04" kicker="Дизайн сайта" title="Карта сайта">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex items-center justify-center rounded-xl bg-espresso px-10 py-4 text-cream">
          <CremaMark className="mr-3 h-5 w-5 text-amber" />
          <span className="font-serif text-xl font-semibold">Главная</span>
        </div>
        <div className="h-8 w-px bg-border" />
        <div className="h-px w-[80%] bg-border" />
        <div className="mt-0 grid w-full grid-cols-4 gap-6">
          {sections.map(([title, kids]) => (
            <div key={title} className="flex flex-col items-center">
              <div className="-mt-px h-8 w-px bg-border" />
              <div className="w-full rounded-lg bg-amber px-4 py-3 text-center font-semibold text-espresso-deep">
                {title}
              </div>
              <div className="mt-4 w-full space-y-2.5">
                {kids.map((k) => (
                  <div key={k} className="rounded-lg border border-border bg-card px-4 py-2.5 text-center text-sm text-espresso">
                    {k}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentSlide>
  )
}

/* 24 — Пользовательский сценарий */
export function UserFlowSlide() {
  const steps = ["Заходит на сайт", "Открывает меню", "Выбирает кофе", "Добавляет в корзину", "Оформляет заказ", "Получает подтверждение"]
  return (
    <ContentSlide index="04" kicker="Дизайн сайта" title="Пользовательский сценарий">
      <div className="flex h-full flex-col justify-center gap-8">
        <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Основной сценарий — онлайн-заказ кофе с собой. Путь спроектирован коротким:
          от входа до подтверждения — без лишних шагов.
        </p>
        <div className="flex items-stretch gap-3">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <Card className="flex h-32 w-40 flex-col justify-between p-5">
                <span className="font-serif text-3xl font-light text-amber">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-pretty text-sm font-medium leading-snug text-espresso">{s}</span>
              </Card>
              {i < steps.length - 1 && <span className="text-2xl text-caramel">→</span>}
            </div>
          ))}
        </div>
      </div>
    </ContentSlide>
  )
}

/* 25 — Low-fi прототип */
export function WireframeSlide() {
  const Bar = ({ w = "w-full", h = "h-3" }: { w?: string; h?: string }) => (
    <div className={`${w} ${h} rounded bg-cream-deep`} />
  )
  return (
    <ContentSlide index="04" kicker="Дизайн сайта" title="Low-fi прототип главной">
      <div className="grid h-full grid-cols-2 gap-8">
        <BrowserFrame url="wireframe — desktop" className="h-full">
          <div className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <div className="h-5 w-24 rounded bg-cream-deep" />
              <div className="flex gap-3">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-3 w-12 rounded bg-cream-deep" />)}</div>
            </div>
            <div className="flex h-40 flex-col justify-center gap-3 rounded-lg bg-cream-deep/60 p-6">
              <Bar w="w-2/3" h="h-6" /><Bar w="w-1/2" /><div className="h-7 w-28 rounded bg-cream-deep" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2 rounded-lg border border-border p-3">
                  <div className="h-16 rounded bg-cream-deep" /><Bar w="w-3/4" /><Bar w="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </BrowserFrame>
        <div className="flex flex-col justify-center gap-5">
          <h3 className="font-serif text-2xl font-semibold text-espresso">Структура без декора</h3>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            На этапе low-fi фиксируем расположение блоков, иерархию и сетку — без цвета
            и контента. Так проверяем логику до отрисовки финального дизайна.
          </p>
          <ul className="space-y-2 text-espresso/85">
            <li>· Шапка с навигацией и кнопкой заказа</li>
            <li>· Hero-блок с оффером</li>
            <li>· Сетка карточек меню 3 в ряд</li>
          </ul>
        </div>
      </div>
    </ContentSlide>
  )
}

/* 26 — UI-кит / дизайн-система */
export function UiKitSlide() {
  return (
    <ContentSlide index="04" kicker="Дизайн сайта" title="UI-кит">
      <div className="grid grid-cols-3 gap-5">
        <Card className="space-y-4">
          <Eyebrow>Кнопки</Eyebrow>
          <div className="space-y-3">
            <span className="block w-full rounded-full bg-amber py-2.5 text-center text-sm font-semibold text-espresso-deep">Основная</span>
            <span className="block w-full rounded-full bg-espresso py-2.5 text-center text-sm font-semibold text-cream">Тёмная</span>
            <span className="block w-full rounded-full border border-espresso py-2.5 text-center text-sm font-semibold text-espresso">Контурная</span>
          </div>
        </Card>
        <Card className="space-y-4">
          <Eyebrow>Поля и теги</Eyebrow>
          <div className="rounded-lg border border-border bg-cream px-4 py-2.5 text-sm text-muted-foreground">Введите e-mail</div>
          <div className="flex flex-wrap gap-2">
            {["Цитрус", "Шоколад", "Ягоды", "Орех"].map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-espresso">{t}</span>
            ))}
          </div>
          <div className="rounded-lg bg-amber/15 px-4 py-2.5 text-sm text-caramel">Уведомление / акция</div>
        </Card>
        <Card className="space-y-4">
          <Eyebrow>Карточка товара</Eyebrow>
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="h-16 bg-espresso" />
            <div className="space-y-1 p-3">
              <p className="font-serif font-semibold text-espresso">Капучино</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-caramel">280 ₽</span>
                <span className="rounded-full bg-amber px-3 py-1 text-xs font-semibold text-espresso-deep">+</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </ContentSlide>
  )
}

/* 27 — Hi-fi: главная */
export function HomePageSlide() {
  return (
    <ContentSlide index="04" kicker="Дизайн сайта · Hi-Fi" title="Главная страница">
      <BrowserFrame className="h-full" scrollable>
        <HomeMockup />
      </BrowserFrame>
    </ContentSlide>
  )
}

/* 28 — Hi-fi: внутренняя */
export function MenuPageSlide() {
  return (
    <ContentSlide index="04" kicker="Дизайн сайта · Hi-Fi" title="Каталог зерна">
      <BrowserFrame url="krema.coffee/beans" className="h-full" scrollable>
        <MenuPageMockup />
      </BrowserFrame>
    </ContentSlide>
  )
}

/* 29 — Адаптивность */
export function ResponsiveSlide() {
  return (
    <ContentSlide index="04" kicker="Дизайн сайта" title="Адаптивность">
      <div className="flex items-center justify-center gap-10">
        <div className="flex max-h-[420px] flex-col items-center gap-3">
          <BrowserFrame url="tablet · 768px" className="h-[380px] w-[300px]" scrollable>
            <PhoneMockup />
          </BrowserFrame>
          <span className="text-sm text-muted-foreground">Планшет</span>
        </div>
        <div className="flex max-h-[420px] flex-col items-center gap-3">
            <div className="flex h-[380px] w-[220px] flex-col overflow-hidden rounded-[2rem] border-[6px] border-espresso bg-card">
              <div className="flex justify-center bg-espresso py-1.5">
                <span className="h-1 w-12 rounded-full bg-cream/30" />
              </div>
              <div className="flex-1 overflow-y-clip">
                <PhoneMockup />
              </div>
            </div>
          <span className="text-sm text-muted-foreground">Смартфон</span>
        </div>
        <div className="max-w-xs space-y-4">
          <h3 className="font-serif text-2xl font-semibold text-espresso">Mobile-first</h3>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Сетка перестраивается из трёх колонок в одну, навигация сворачивается в меню,
            а кнопка заказа остаётся всегда доступной.
          </p>
        </div>
      </div>
    </ContentSlide>
  )
}

/* 30 — Заключение */
export function ClosingSlide() {
  return (
    <SlideFrame className="items-center justify-center bg-espresso text-cream">
      <div className="flex flex-col items-center gap-8 text-center">
        <CremaLogo markClassName="text-amber" textClassName="text-cream" />
        <h2 className="max-w-3xl text-balance font-serif text-[52px] font-semibold leading-[1.05]">
          Спасибо за внимание
        </h2>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-cream/70">
          Фирменный стиль и сайт «КРЕМА» — цельная система, где бренд, эстетика
          и удобство работают на одну цель: идеальную чашку кофе.
        </p>
        <div className="mt-2 flex gap-8 text-sm text-cream/60">
          <span>krema.coffee</span>
          <span>·</span>
          <span>@krema.coffee</span>
          <span>·</span>
          <span>Фамилия Имя · Группа 000</span>
        </div>
      </div>
    </SlideFrame>
  )
}
