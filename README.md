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

Каждый пуш в `main` также собирает сайт и заливает папку `build` по FTP на виртуальный хостинг hoster.by. Для этого в Settings → Secrets and variables → Actions нужны секреты:

- `HOSTERBY_FTP_SERVER` — адрес FTP-сервера из панели hoster.by;
- `HOSTERBY_FTP_USERNAME` — логин FTP;
- `HOSTERBY_FTP_PASSWORD` — пароль FTP.

Пока `HOSTERBY_FTP_SERVER` не задан, заливка пропускается. На вкладке Variables можно переопределить папку сайта `HOSTERBY_SERVER_DIR` (по умолчанию `./public_html/`), протокол `HOSTERBY_FTP_PROTOCOL` (`ftps` или `ftp`) и порт `HOSTERBY_FTP_PORT`.

Перезалить сайт вручную: Actions → Deploy to hoster.by → Run workflow. Без GitHub: выполнить `npm run build` и загрузить всё содержимое папки `build`, включая `.htaccess`, в корневую папку сайта через файловый менеджер панели или FTP-клиент.

## Где менять тексты

Все тексты, телефоны и списки услуг лежат в `src/content/site.ts`.
