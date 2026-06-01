import type { ReactNode } from "react"
import {
  TitleSlide,
  AgendaSlide,
  AboutSlide,
  MissionSlide,
  AudienceSlide,
  UspSlide,
} from "./section-intro"
import {
  Competitor1ShotSlide,
  Competitor1AnalysisSlide,
  Competitor2ShotSlide,
  Competitor2AnalysisSlide,
  Competitor3ShotSlide,
  Competitor3AnalysisSlide,
  ComparisonSlide,
  SwotSlide,
} from "./section-analysis"
import {
  PaletteSlide,
  PaletteRationaleSlide,
  TypographySlide,
  LogoSlide,
  LogoRulesSlide,
  IconsSlide,
  PatternSlide,
  MoodboardSlide,
} from "./section-identity"
import {
  SitemapSlide,
  UserFlowSlide,
  WireframeSlide,
  UiKitSlide,
  HomePageSlide,
  MenuPageSlide,
  ResponsiveSlide,
  ClosingSlide,
} from "./section-web"

export type SlideEntry = {
  title: string
  section: string
  node: ReactNode
}

export const slides: SlideEntry[] = [
  { title: "Титульный", section: "Введение", node: <TitleSlide /> },
  { title: "Содержание", section: "Введение", node: <AgendaSlide /> },
  { title: "О бренде", section: "Концепция", node: <AboutSlide /> },
  { title: "Миссия и ценности", section: "Концепция", node: <MissionSlide /> },
  { title: "Целевая аудитория", section: "Концепция", node: <AudienceSlide /> },
  { title: "УТП", section: "Концепция", node: <UspSlide /> },
  { title: "Конкурент 1", section: "Анализ", node: <Competitor1ShotSlide /> },
  { title: "Разбор конкурента 1", section: "Анализ", node: <Competitor1AnalysisSlide /> },
  { title: "Конкурент 2", section: "Анализ", node: <Competitor2ShotSlide /> },
  { title: "Разбор конкурента 2", section: "Анализ", node: <Competitor2AnalysisSlide /> },
  { title: "Конкурент 3", section: "Анализ", node: <Competitor3ShotSlide /> },
  { title: "Разбор конкурента 3", section: "Анализ", node: <Competitor3AnalysisSlide /> },
  { title: "Сравнение", section: "Анализ", node: <ComparisonSlide /> },
  { title: "SWOT-анализ", section: "Анализ", node: <SwotSlide /> },
  { title: "Палитра", section: "Фирменный стиль", node: <PaletteSlide /> },
  { title: "Обоснование палитры", section: "Фирменный стиль", node: <PaletteRationaleSlide /> },
  { title: "Типографика", section: "Фирменный стиль", node: <TypographySlide /> },
  { title: "Логотип", section: "Фирменный стиль", node: <LogoSlide /> },
  { title: "Правила логотипа", section: "Фирменный стиль", node: <LogoRulesSlide /> },
  { title: "Иконки", section: "Фирменный стиль", node: <IconsSlide /> },
  { title: "Паттерн", section: "Фирменный стиль", node: <PatternSlide /> },
  { title: "Мудборд", section: "Фирменный стиль", node: <MoodboardSlide /> },
  { title: "Карта сайта", section: "Дизайн сайта", node: <SitemapSlide /> },
  { title: "User Flow", section: "Дизайн сайта", node: <UserFlowSlide /> },
  { title: "Low-fi прототип", section: "Дизайн сайта", node: <WireframeSlide /> },
  { title: "UI-кит", section: "Дизайн сайта", node: <UiKitSlide /> },
  { title: "Главная страница", section: "Дизайн сайта", node: <HomePageSlide /> },
  { title: "Каталог зерна", section: "Дизайн сайта", node: <MenuPageSlide /> },
  { title: "Адаптивность", section: "Дизайн сайта", node: <ResponsiveSlide /> },
  { title: "Заключение", section: "Дизайн сайта", node: <ClosingSlide /> },
]
