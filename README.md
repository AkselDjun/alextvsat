# alextvsat

Сайт мастерской по ремонту телевизоров в Новогрудке: [alextvsat.by](https://alextvsat.by).

## Запуск

```bash
npm ci
npm start
```

## Сборка и публикация

Заявки с формы приходят в Telegram. Перед сборкой создайте файл `.env.local` по образцу `.env.example` и укажите токен бота и id чата:

```
REACT_APP_TELEGRAM_BOT_TOKEN=...
REACT_APP_TELEGRAM_CHAT_ID=...
```

Сайт публикуется автоматически через GitHub Actions:

- каждый пуш в `main` выкладывается на основной сайт;
- для каждого pull request собирается превью, ссылка на него появляется в комментарии к PR.

Для этого в настройках репозитория (Settings → Secrets and variables → Actions) должны быть секреты:

- `FIREBASE_SERVICE_ACCOUNT` — JSON-ключ сервисного аккаунта Firebase с ролью Firebase Hosting Admin;
- `REACT_APP_TELEGRAM_BOT_TOKEN` и `REACT_APP_TELEGRAM_CHAT_ID` — для отправки заявок.

Ручная публикация:

```bash
npm run build
firebase deploy
```

## Хостинг hoster.by

Сайт заливается на hoster.by вручную: выполнить `npm run build` и загрузить всё содержимое папки `build`, включая скрытый файл `.htaccess`, в корневую папку сайта (`public_html`) через файловый менеджер панели или FTP-клиент. Сам `.htaccess` лежит в `public/` и попадает в `build` при сборке.

## Где менять тексты

Все тексты, телефоны и списки услуг лежат в `src/content/site.ts`.
