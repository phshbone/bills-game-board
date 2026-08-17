# bill's game board

Sprint 1 foundation shell for a modular, mobile-first family gaming PWA.

## Build identity

- Version: 0.1.0
- Architecture: PS-0.1
- Date: 2026-08-17

## Stack

React + Vite + Tailwind CSS + React Router + vite-plugin-pwa.

The app uses `HashRouter` so GitHub Pages can reopen nested routes without requiring server rewrite rules.

## Local setup

```bash
npm install
npm run dev
```

## Validation

```bash
npm run test:shell
npm run build
npm run preview
```

## Deploy

The production Vite base is `/bills-game-board/` and the configured homepage is:

`https://phshbone.github.io/bills-game-board`

Deploy with:

```bash
npm run deploy
```

## Sprint 1 scope

Included:
- home shell and four mascot/category cards;
- declared routes and placeholder screens;
- PWA manifest/service-worker configuration;
- mobile-first layout;
- build identity;
- Power Strip module registry/storage/test hooks.

Intentionally deferred:
- all actual game engines;
- theme-generation system;
- Phaser/escape-room engine;
- multiplayer/cloud sync;
- paid/live AI APIs.

## Mascot assets

The bundled mascot PNGs are obvious placeholders for layout/testing only. Replace them with approved final mascot artwork without changing their filenames.
