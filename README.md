# Radiatorlar — интернет-магазин радиаторов

Интернет-магазин отопительного оборудования («Теплый Поток»).
Вёрстка сделана по макету Figma **«радиаторы (Copy)»**: главная, каталог с фильтрами,
карточка товара, корзина, доставка и оплата, о нас, контакты, формы «Заказать звонок / расчет / Купить в 1 клик».

**Стек:** React 18 · Vite · React Router · чистый CSS (адаптив: десктоп / планшет / мобильный)

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # сборка в папку dist
```

## Структура

```
src/
  components/   Header, Footer, Modal, ProductCard, Carousel, ProductImage, Icons
  pages/        Home, Catalog, Product, Cart, Info (доставка, о нас, контакты)
  context/      CartContext (корзина + localStorage), ModalContext (формы)
  data/         products.js — категории, бренды и товары (демо-данные)
  index.css     дизайн-токены из Figma (цвета, шрифты) и все стили
public/images/  сюда кладутся картинки из Figma
```

## Картинки из Figma

Экспортируйте изображения из макета в `public/images/` с такими именами
(пока файла нет, показывается аккуратная заглушка):

`hero-1.jpg`, `cat-radiators.jpg`, `cat-bimetal.jpg`, `cat-aluminium.jpg`, `cat-tubular.jpg`,
`cat-panel.jpg`, `cat-towel.jpg`, `cat-floor.jpg`, `cat-convectors.jpg`,
`product-1.jpg … product-6.jpg`, `kit.jpg`, `about.jpg`, `promo-1.jpg … promo-3.jpg`,
`side-1.jpg`, `brand-zehnder.png`.

## Деплой

Проект готов к деплою на Vercel (`vercel.json` уже настроен под SPA-маршрутизацию).
