# bill's game board — Game Source of Truth

**Status:** Authoritative project source of truth  
**Initial build target:** v0.1.0  
**Date:** 2026-08-17

## 1. Core Project Statement

`bill's game board` is a modular, mobile-first Progressive Web App family gaming hub. It combines deterministic game engines with optional AI-assisted creative content so that games can be played in standard/generated mode or re-themed around a chosen subject.

The governing product principle is:

> **AI-Creative + Algorithmic-Structural**

AI or imported AI-generated content may supply themes, clues, trivia, story, imagery direction, hints, vocabulary, characters, and variation. Deterministic code owns rules, legality, puzzle validation, solvability, scoring, persistence, state, and synchronization.

The app must remain usable without a paid AI API.

---

## 2. Product Modes

### 2.1 Standard / Generated Mode

A player may open a game directly and generate or load a fresh puzzle independent of any larger theme.

Examples:
- daily or on-demand Sudoku;
- trivia sets;
- crossword puzzles;
- word searches;
- future Wordle-like puzzles;
- future CodyCross-style puzzles.

### 2.2 Theme Mode

A player may select a theme such as a classic television show, comic era, holiday, location, historical subject, family topic, or other supported subject.

The player may then:
- theme one compatible game; or
- apply the theme across the whole compatible game board.

A theme is not forced onto games where the mechanic does not benefit from it.

Example theme session:
- themed Trivia;
- themed Crossword;
- themed Word Search;
- themed CodyCross-style puzzle;
- themed Escape Room.

Sudoku remains primarily structural unless a genuinely useful thematic variant is later designed.

---

## 3. Theme Pack Concept

A **Theme Pack** is a structured content package that can be consumed by compatible game modules.

A Theme Pack may define:
- theme name;
- vocabulary;
- characters;
- people/places/objects;
- trivia facts supplied or imported by the user;
- clue material;
- tone/difficulty guidance;
- story hooks;
- visual direction;
- room/scene assets for adventure content;
- puzzle-specific data.

Theme Packs should be data-driven where practical so new content can be added without rewriting core engines.

The system must not require live AI access to use a Theme Pack. Imported JSON/CSV and manually generated content are valid first-class workflows.

---

## 4. Mini-Games Inside Games

Game engines are reusable building blocks.

A container game, especially an Escape Room, may launch a reduced version of another game through a standardized mini-game contract.

Example:

```text
Escape Room safe
      ↓
requests Mini Sudoku
      ↓
Sudoku engine runs reduced puzzle
      ↓
returns SOLVED and/or code 5732
      ↓
Escape Room unlocks safe
```

Potential mini-game results include:
- solved / failed;
- numeric code;
- word/password;
- highlighted letters;
- discovered clue;
- inventory item;
- unlock event.

The Escape Room must not contain its own duplicate Sudoku, Crossword, Trivia, or Word Search logic.

---

## 5. Escape Room / Interactive Adventure Vision

The target experience is a lightweight immersive **2D/2.5D room viewer**, not full 3D.

The player should be able to:
- pan around a larger room scene;
- look left/right and, where supported, up/down;
- tap hotspots;
- inspect objects;
- pick up inventory items;
- open drawers/books/containers;
- reveal persistent changes;
- zoom into clues;
- launch embedded mini-games;
- return to the room with state preserved.

Preferred implementation direction:
- React/Vite PWA remains the application shell;
- Phaser may be lazy-loaded only for immersive adventure scenes;
- panoramic or large 2D artwork provides the environment;
- separate sprites/layers provide interactive objects;
- camera movement, subtle parallax, transitions, and animation create depth;
- coordinates/configuration define hotspots and object behavior;
- tap is the default object interaction; drag/drop is reserved for mechanics that need it.

True 3D, Unity, Unreal, React Native, and large 3D asset pipelines are not required for the project vision.

---

## 6. Core Game Families

### bill's brain
- Trivia

### bill's puzzles
- Crossword
- Word Search
- Wordle — later
- CodyCross-style puzzle — later

### bill's numbers
- Sudoku

### bill's mysteries
- Escape Rooms — later

---

## 7. Original Engine Intent

### 7.1 Sudoku

Original direction:
- generate a complete valid 9×9 grid;
- remove clues while preserving a unique solution;
- difficulty bands;
- solver-based validation;
- digit highlighting;
- row/column highlighting;
- deterministic legality and solution checking.

The exact clue-count thresholds from the early concept are reference values, not immutable difficulty science. Difficulty should eventually be validated by solving complexity rather than clue count alone if the project reaches that level.

### 7.2 Crossword

Original direction:
1. theme vocabulary selection;
2. clue generation calibrated to difficulty;
3. deterministic grid construction and validation.

Target qualities include proper interlocking and, where practical, conventional rotational symmetry.

### 7.3 CodyCross-style Variant

A simpler word engine using horizontal answers that reveal a vertical mystery word or phrase.

### 7.4 Smart Hints

Hints should prefer progressive assistance over immediate answer revelation.

Examples:
- rephrase clue;
- provide related fact;
- narrow category;
- reveal partial structural information;
- reveal letters only at stronger hint levels.

Hints may be pre-generated/imported when live AI is unavailable.

---

## 8. Social / Multiplayer Long-Term Vision

Deferred, but architecturally anticipated:
- real-time play together;
- connection status indicators;
- shared state for common board information;
- private state for player-specific information;
- action-based synchronization where appropriate.

Possible future transports may include peer-to-peer WebRTC or an acceptable free/open-source/free-tier service, but no paid backend is authorized by default.

---

## 9. Action History / Persistent State

A shared action/state architecture is a long-term foundation concept.

It should support, as applicable:
- undo/redo;
- save/resume;
- persistent room/object state;
- mini-game return state;
- future multiplayer event synchronization;
- recovery after refresh or PWA reopen.

The architecture must be proportional: Phase 1 should establish interfaces/outlets without prematurely implementing a heavyweight event-sourcing system.

---

## 10. Cheapskate Rule — HARD PROJECT CONSTRAINT

Until a standalone CHEAPSKATE skill is supplied, this section is authoritative.

- Prefer free and open-source software.
- No required paid dependency.
- No required subscription.
- No required paid AI API.
- No usage-based billing for core gameplay.
- Avoid proprietary lock-in where a reasonable free/open alternative exists.
- A future feature that cannot be implemented acceptably for free should remain dormant rather than introducing an unwanted recurring cost.
- Free-tier services may be evaluated later, but core local gameplay must not depend on them.

Current acceptable core technologies include permissively licensed/open-source tools such as React, Vite, TailwindCSS, and Phaser.

---

## 11. Phase 1 Build Specification

### 11.1 Technology

- React
- Vite
- TailwindCSS
- React Router
- PWA via `vite-plugin-pwa`
- GitHub Pages deployment
- local browser storage
- mobile-first design
- Phaser: **not part of Sprint 1**; future lazy-loaded adventure module only if/when Escape Rooms are activated.

### 11.2 Initial Project Structure

```text
bills-game-board/
├── public/
│   ├── icons/
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   ├── mascots/
│   │   ├── host-bill.png
│   │   ├── puzzle-bill.png
│   │   ├── sudoku-bill.png
│   │   ├── detective-bill.png
│   │   └── big-brain-bill.png
│   └── manifest.webmanifest
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── MascotBanner.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Brain/Trivia.jsx
│   │   ├── Puzzles/Crossword.jsx
│   │   ├── Puzzles/WordSearch.jsx
│   │   ├── Puzzles/Wordle.jsx
│   │   ├── Puzzles/CodyCross.jsx
│   │   ├── Numbers/Sudoku.jsx
│   │   └── Mysteries/EscapeRooms.jsx
│   ├── routes/AppRoutes.jsx
│   ├── data/
│   │   ├── trivia.js
│   │   ├── crossword.js
│   │   ├── wordsearch.js
│   │   └── sudoku.js
│   ├── styles/globals.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

POWER STRIP may add a small architecture folder such as `src/core/`, `src/services/`, or equivalent when necessary. This is allowed only to support the approved wiring plan; it may not redesign the visible product structure.

### 11.3 Routes

```text
/
/brain/trivia
/puzzles/crossword
/puzzles/word-search
/numbers/sudoku
/mysteries/escape-rooms
```

Future:

```text
/puzzles/wordle
/puzzles/codycross
```

### 11.4 Visual Identity

Primary navy: `#090f2b`  
Bill red: `#d62828`  
White: `#ffffff`  
Light card background: `#f8fafc`

Mascots:
- Home → Host Bill
- bill's brain → Big Brain Bill
- bill's puzzles → Puzzle Bill
- bill's numbers → Sudoku Bill
- bill's mysteries → Detective Bill

### 11.5 Home Screen

The home screen contains:
- `bill's game board` identity;
- Host Bill;
- welcome message;
- category cards;
- mascot;
- category title;
- game count/status;
- Enter action.

Categories:
- bill's brain — Trivia — 1 Game
- bill's puzzles — Crossword, Word Search — 2 Games
- bill's numbers — Sudoku — 1 Game
- bill's mysteries — Escape Rooms — Coming Soon

---

## 12. Build Sequence

### Sprint 1 — Foundation Shell
- Home screen
- Navigation
- PWA setup
- Responsive/mobile-first layout
- Mascot integration
- placeholder destination pages/routes
- build/version identity visible during development

### Sprint 2 — Trivia Engine

### Sprint 3 — Crossword Engine

### Sprint 4 — Word Search Engine

### Sprint 5 — Sudoku Engine

### Sprint 6 — Wordle-like Game

### Sprint 7 — CodyCross-style Puzzle

### Sprint 8 — Escape Rooms

The existence of later sprints does not authorize their implementation during Sprint 1.

---

## 13. LOCKED Decisions

Unless the user explicitly reopens them:

- Product name: `bill's game board`.
- Mobile-first installable PWA.
- React + Vite; **not React Native**.
- TailwindCSS and React Router for the Phase 1 shell.
- GitHub Pages target.
- Local storage first.
- Mascot-driven category hub.
- Four primary categories listed above.
- Current palette listed above.
- Standard/generated mode plus theme mode.
- Theme one compatible game or multiple compatible games.
- Do not force themes into unsuitable mechanics.
- AI-Creative + Algorithmic-Structural governing principle.
- Core gameplay must not require a paid AI API.
- Power Strip architecture is mandatory and proportional.
- Unused outlets remain dormant and do not bring dependencies/runtime cost.
- Escape Room is a reusable container capable of launching existing mini-game engines.
- Escape Room target is lightweight 2D/2.5D immersion rather than full 3D.
- Phaser, if used, is lazy-loaded only for game scenes that need it.
- No Codex required for building this project; Codex, if ever used, is reserved for controlled audit/specialist work.

---

## 14. Explicitly Deferred / Dormant

These are vision items, not current implementation scope:

- live AI API generation;
- automated whole-board theme generation;
- multiplayer;
- WebRTC/PeerJS transport;
- cloud database/sync;
- private/public card-game state;
- full action-history synchronization;
- Escape Room engine;
- Phaser integration;
- advanced inventory;
- image/audio theme packs;
- achievements/profiles;
- global five-lives system;
- Wordle;
- CodyCross-style game;
- full dynamic content import UI;
- true 3D.

Dormant does not mean rejected. It means “do not build now.”

---

## 15. Development Governance

PUPPET MASTER is the orchestrator.

Canonical pipeline from the supplied skill:

**THINK → DESIGN → LOCK → POWER STRIP → BUILD → FRICTION → BUILD · TEST · REPAIR**

Rules:
- automate handoffs, not judgment;
- later phases may not silently rewrite earlier authoritative decisions;
- one active LOCK objective at a time;
- build the smallest defensible change;
- no opportunistic refactors or unrelated cleanup;
- architectural conflicts route upstream to the owning phase;
- meaningful builds receive version/date identity;
- validation must be honest about what was and was not tested.

### Current skill-source status

The uploaded source set includes exact skill files for:
- PUPPET MASTER v1.1
- POWER STRIP v1.1
- THINK v2
- DESIGN v1
- LOCK v2
- BUILD v1
- FRICTION v1
- Build-Test-Repair

A standalone CHEAPSKATE skill has not yet been created; Section 10 remains the temporary authoritative cost rule until the exact CHEAPSKATE skill is supplied.

---

## 16. Sprint 1 Active Objective

> Build the installable, mobile-first `bill's game board` foundation shell with the approved visual identity, mascot/category home screen, working navigation/routes, PWA behavior, and proportional Power Strip core architecture, without implementing game engines or future services.

### IN
- app shell;
- approved home screen;
- routes and placeholder destination screens;
- PWA manifest/service-worker setup;
- responsive mobile layout;
- mascot hooks/assets where supplied;
- build identity/version;
- minimal Power Strip nerve center and module registration;
- minimal local persistence abstraction if required by the wiring plan;
- testing hooks appropriate to the shell.

### OUT
- Trivia gameplay;
- Crossword gameplay;
- Word Search gameplay;
- Sudoku gameplay;
- theme-generation engine;
- Phaser;
- Escape Room implementation;
- multiplayer;
- cloud sync;
- AI API;
- account/auth system;
- profiles/achievements/lives;
- unrelated polish beyond the approved shell.

### Sprint 1 Definition of Done

A build is done only when:
1. the app loads from the intended GitHub Pages base path;
2. the home screen shows the approved identity and four category cards;
3. each currently declared route opens the correct destination/placeholder screen;
4. navigation back/home works without dead ends;
5. mobile layout works at common phone widths without horizontal page overflow;
6. the PWA manifest is valid and the app can be installed where the browser/platform supports it;
7. standalone reopening does not break routing;
8. build/version/date is discoverable during development;
9. no paid service/API is required;
10. no deferred game engine has been accidentally implemented;
11. baseline regression checks pass for shell, navigation, persistence initialization, PWA setup, and deployment configuration;
12. any unverified real-device behavior is explicitly reported rather than assumed.

---

## 17. Source-of-Truth Precedence

When instructions conflict, use this order unless the user explicitly overrides it:

1. latest explicit user decision;
2. this Game Source of Truth;
3. current LOCK / Build Contract;
4. POWER STRIP Wiring Plan;
5. supplied specialist skill rules;
6. implementation convenience.

Implementation convenience never outranks a locked product decision.
