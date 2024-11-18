# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Опис
Цей проект є домашньою роботою з використанням TypeScript для рефакторингу додатку з пошуку зображень. В додатку використовується API Unsplash для пошуку фотографій. Додаток включає компоненти React, функції для обробки HTTP-запитів, обробників подій та управління станом із типізацією TypeScript.

Основні можливості

Пошук зображень за ключовими словами.
Відображення списку знайдених зображень.
Пагінація для завантаження додаткових результатів.
Модальне вікно для перегляду зображення у великому розмірі.
Обробка помилок при виконанні HTTP-запитів.
Інтерактивний інтерфейс з кнопками, спінером завантаження та сповіщеннями.
Використані технології
React: для створення компонентів інтерфейсу.
TypeScript: для забезпечення типізації компонентів, пропсів, стану, HTTP-запитів.
Unsplash API: для отримання зображень.
axios: для виконання HTTP-запитів.
react-hot-toast: для показу повідомлень.
react-loader-spinner: для анімації завантаження.
react-modal: для реалізації модального вікна.
