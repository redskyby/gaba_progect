# Gaba Project: Просмотр Деталей Пользователя

Этот проект представляет собой демонстрационное Next.js приложение, разработанное для отображения детальной информации о пользователях. Он использует Next.js App Router для маршрутизации и React для построения пользовательского интерфейса.

## Описание Проекта

Приложение позволяет просматривать профили пользователей, отображая их основные данные, контактную информацию, адрес и сведения о компании. Проект демонстрирует:

- **Динамическую маршрутизацию**: Использование `[id]` для отображения деталей конкретного пользователя.
- **Динамическую пагинацию**: Подгрузка новых пользователей по мере прокрутки страницы.
- **Загрузку данных**: Асинхронная загрузка данных пользователя с использованием `fetch` и кастомной утилиты `makeRequest`.
- **Управление состоянием**: Использование `useState` и `useEffect` для обработки состояния загрузки и данных пользователя.
- **Компонентный подход**: Разделение UI на переиспользуемые компоненты (`UserCard`, `ButtonBack`).
- **Современный UI**: Использование библиотеки `@heroui/react` для стилизации и базовых UI-элементов.
- **Хостинг**: Проект размещен на Vercel.

## Используемые Технологии

- **Next.js** (App Router) - React фреймворк для продакшена.
- **React** - Библиотека для построения пользовательских интерфейсов.
- **TypeScript** - Типизированный JavaScript.
- **@heroui/react** - UI-библиотека для компонентов.
- **Tailwind CSS** (предположительно, для стилизации)
- **ESLint** и **Prettier** для поддержания качества кода.

## Начало Работы

Для запуска проекта на локальной машине выполните следующие шаги.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Скриншоты

_Сюда можно будет добавить скриншоты или гифку работы приложения._
