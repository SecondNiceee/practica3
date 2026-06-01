import Image from "next/image"
import { CremaLogo, CremaMark } from "@/components/brand/logo"
import { ContentSlide, Eyebrow, SlideFrame, Card } from "./kit"

/* 01 — Титульный слайд */
export function TitleSlide() {
  return (
    <SlideFrame>
      <div className="flex w-[58%] flex-col justify-between bg-espresso px-20 py-16 text-cream">
        <div className="flex items-center gap-3">
          <CremaMark className="h-8 w-8 text-amber" />
          <span className="font-serif text-2xl font-semibold tracking-[0.32em] text-cream">
            КРЕМА
          </span>
        </div>

        <div className="space-y-6">
          <Eyebrow className="text-amber">Курсовой проект</Eyebrow>
          <h1 className="text-balance font-serif text-[58px] font-semibold leading-[1.02] text-cream">
            Разработка фирменного стиля и дизайна сайта
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-cream/70">
            Премиальная кофейня спешелти-формата «КРЕМА»: от концепции бренда до
            адаптивного интерфейса сайта.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-4 border-t border-cream/15 pt-8 text-sm">
          <div>
            <p className="text-cream/45">Студент</p>
            <p className="text-cream">Фамилия Имя · Группа 000</p>
          </div>
          <div>
            <p className="text-cream/45">Руководитель</p>
            <p className="text-cream">Фамилия И. О.</p>
          </div>
          <div>
            <p className="text-cream/45">Дисциплина</p>
            <p className="text-cream">Дизайн фирменного стиля</p>
          </div>
          <div>
            <p className="text-cream/45">Год</p>
            <p className="text-cream">2026</p>
          </div>
        </div>
      </div>

      <div className="relative w-[42%]">
        <Image
          src="/images/pour.png"
          alt="Бариста готовит кофе в премиальной кофейне"
          fill
          className="object-cover"
          priority
        />
      </div>
    </SlideFrame>
  )
}

const agenda = [
  ["01", "Концепция бренда", "Идея, миссия, ценности, аудитория и УТП"],
  ["02", "Анализ рынка", "Разбор трёх прямых конкурентов и выводы"],
  ["03", "Фирменный стиль", "Палитра, типографика, логотип, графика"],
  ["04", "Дизайн сайта", "Структура, прототипы, UI-кит и макеты"],
]

/* 02 — Содержание */
export function AgendaSlide() {
  return (
    <ContentSlide index="—" kicker="Навигация" title="Содержание проекта">
      <div className="grid h-full grid-cols-2 gap-6">
        {agenda.map(([n, t, d]) => (
          <Card key={n} className="flex flex-col justify-between">
            <span className="font-serif text-[40px] font-light text-amber">{n}</span>
            <div className="mt-6 space-y-2">
              <h3 className="font-serif text-2xl font-semibold text-espresso">{t}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{d}</p>
            </div>
          </Card>
        ))}
      </div>
    </ContentSlide>
  )
}

/* 03 — О бренде */
export function AboutSlide() {
  return (
    <ContentSlide
      index="01"
      kicker="Концепция"
      title="«КРЕМА» — кофе как ремесло"
    >
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-12">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-pretty text-xl leading-relaxed text-espresso">
            «КРЕМА» — городская спешелти-кофейня для тех, кто ценит вкус и
            спокойствие. Мы обжариваем зерно малыми партиями и раскрываем
            характер каждого терруара.
          </p>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Название отсылает к золотистой пенке эспрессо — знаку правильно
            приготовленного кофе. Это обещание качества в каждой чашке и точка
            опоры всего фирменного стиля.
          </p>
          <div className="mt-2 grid grid-cols-3 gap-4">
            {[
              ["2019", "год основания"],
              ["120+", "сортов в год"],
              ["4.9", "рейтинг гостей"],
            ].map(([v, l]) => (
              <div key={l} className="border-l-2 border-amber pl-4">
                <p className="font-serif text-3xl font-semibold text-espresso">{v}</p>
                <p className="text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/interior.png"
            alt="Интерьер кофейни КРЕМА"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </ContentSlide>
  )
}

/* 04 — Миссия и ценности */
export function MissionSlide() {
  const values = [
    ["Качество", "Спешелти-зерно, свежая обжарка, выверенная экстракция."],
    ["Открытость", "Прозрачное происхождение зерна и честная цена."],
    ["Забота", "Тёплый сервис и уютное пространство для каждого гостя."],
    ["Эстетика", "Продуманный дизайн во всех точках контакта с брендом."],
  ]
  return (
    <ContentSlide index="01" kicker="Платформа бренда" title="Миссия и ценности">
      <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-12">
        <div className="flex flex-col justify-center rounded-xl bg-espresso p-10 text-cream">
          <Eyebrow className="text-amber">Миссия</Eyebrow>
          <p className="mt-5 text-pretty font-serif text-[30px] font-medium leading-[1.2]">
            Делать каждый день чуть лучше через идеальную чашку кофе и атмосферу,
            в которую хочется возвращаться.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {values.map(([t, d]) => (
            <Card key={t} className="flex flex-col gap-3">
              <CremaMark className="h-7 w-7 text-amber" />
              <h3 className="font-serif text-xl font-semibold text-espresso">{t}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{d}</p>
            </Card>
          ))}
        </div>
      </div>
    </ContentSlide>
  )
}

/* 05 — Целевая аудитория */
export function AudienceSlide() {
  const personas = [
    {
      name: "Анна, 28",
      role: "Дизайнер, фрилансер",
      goals: "Работает из кофейни, ценит вкус и эстетику пространства.",
      need: "Тихое место, Wi-Fi, авторский фильтр-кофе",
    },
    {
      name: "Максим, 34",
      role: "Менеджер продукта",
      goals: "Берёт кофе с собой по дороге в офис, спешит, но не готов на компромисс.",
      need: "Быстрый предзаказ, стабильное качество",
    },
    {
      name: "Ирина, 41",
      role: "Кофейный энтузиаст",
      goals: "Покупает зерно домой, интересуется происхождением и обжаркой.",
      need: "Спешелти-зерно, дегустации, контент",
    },
  ]
  return (
    <ContentSlide index="01" kicker="Кому мы нужны" title="Целевая аудитория">
      <div className="grid grid-cols-3 gap-6">
        {personas.map((p) => (
          <Card key={p.name} className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber/20 font-serif text-2xl font-semibold text-caramel">
                {p.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-espresso">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            </div>
            <p className="mt-5 text-pretty leading-relaxed text-espresso/80">
              {p.goals}
            </p>
            <div className="mt-5 rounded-lg bg-secondary p-4">
              <p className="text-xs uppercase tracking-wider text-caramel">Главная потребность</p>
              <p className="mt-1 text-sm font-medium text-espresso">{p.need}</p>
            </div>
          </Card>
        ))}
      </div>
    </ContentSlide>
  )
}

/* 06 — УТП / позиционирование */
export function UspSlide() {
  const usps = [
    ["Обжарка на месте", "Собственный ростер и свежее зерно ежедневно."],
    ["Терруарность", "Моносорта с указанием фермы и высоты произрастания."],
    ["Ритуал, а не спешка", "Пространство и сервис, замедляющие темп города."],
  ]
  return (
    <ContentSlide index="01" kicker="Чем мы отличаемся" title="Уникальное предложение">
      <div className="flex h-full flex-col justify-center gap-8">
        <p className="max-w-4xl text-pretty font-serif text-[28px] leading-[1.25] text-espresso">
          «КРЕМА» — единственная кофейня в районе, где спешелти-зерно обжаривается
          на месте, а каждая чашка превращается в осознанный ритуал.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {usps.map(([t, d], i) => (
            <Card key={t} className="flex flex-col gap-3">
              <span className="font-serif text-2xl font-light text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl font-semibold text-espresso">{t}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{d}</p>
            </Card>
          ))}
        </div>
      </div>
    </ContentSlide>
  )
}
