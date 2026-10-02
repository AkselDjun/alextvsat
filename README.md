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

```bash
npm run build
firebase deploy
```

## Где менять тексты

Все тексты, телефоны и списки услуг лежат в `src/content/site.ts`.
