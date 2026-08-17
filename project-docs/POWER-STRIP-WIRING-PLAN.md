# bill's game board — POWER STRIP Wiring Plan

**Architecture version:** PS-0.1  
**Target build:** v0.1.0  
**Date:** 2026-08-17

## Locked Objective

Build the Phase 1 foundation shell only: installable mobile-first PWA, mascot/category hub, routes/placeholders, and a proportional reusable architecture that can accept later games without rewiring the application.

## Nerve Center

The Nerve Center coordinates only cross-cutting application concerns. It must not understand game-specific rules.

Responsibilities:
- build/version metadata;
- module registration;
- navigation registration/route metadata;
- app lifecycle/PWA startup coordination;
- storage access abstraction;
- lightweight app-level state coordination;
- recovery/fallback initialization;
- testing hooks.

Suggested placement: `src/core/` or equivalent.

## Core-Always Outlets — Active in Sprint 1

### Build Identity Outlet
Owns:
- version;
- build date;
- visible development stamp.

### Module Registry Outlet
Each game/category module declares:
- id;
- title;
- route;
- category;
- mascot;
- status (`active`, `placeholder`, `coming-soon`);
- capabilities used;
- test metadata if applicable.

### Navigation Outlet
Owns:
- route metadata;
- home/category navigation;
- future scroll restoration policy.

React Router remains the routing implementation, but modules should not invent independent routing systems.

### Storage Outlet
Sprint 1 implementation should be minimal.

Owns:
- namespaced local persistence;
- schema/version metadata;
- safe JSON read/write helpers;
- future migration hook.

No game-specific storage schema is needed in Sprint 1.

### Lifecycle / PWA Outlet
Owns:
- service-worker registration conventions;
- startup/pageshow/visibility handling where needed;
- update behavior;
- safe standalone reopen behavior;
- offline shell expectations.

### Test Hook Outlet
Provides stable ways to inspect:
- registered modules;
- current build identity;
- storage initialization;
- route registry where practical.

Do not expose production-dangerous debug controls.

## Dormant / Available Outlets

Defined as contracts/concepts only. No runtime dependencies should be imported merely because these outlets are known.

### Theme Outlet
Future inputs:
- selected Theme Pack;
- target game(s);
- compatibility metadata.

Future outputs:
- normalized theme context for compatible engines.

### Content Loader Outlet
Future responsibilities:
- local bundled data;
- imported JSON/CSV;
- lazy-loaded theme packs;
- validation/versioning of content packs.

### Game State Outlet
Future responsibilities:
- current game session;
- save/resume;
- status/result;
- game-specific state boundary.

### Action History Outlet
Future responsibilities:
- undo/redo where the game supports it;
- persistent adventure actions;
- optional multiplayer event stream.

Must remain lightweight until a real game requires it.

### Mini-Game Outlet
Standard future contract:

```text
request:
  gameType
  mode = mini
  themeContext?
  difficulty?
  successResultType?

response:
  status
  result?
  metadata?
```

Container games call this interface rather than importing another game's internal logic directly.

### Hint Outlet
Future responsibilities:
- progressive hint levels;
- pre-generated/imported hints;
- optional future AI-assisted hint provider.

Core game must not depend on paid AI.

### Inventory Outlet
Dormant until Escape Rooms.

Future responsibilities:
- acquired items;
- selected item;
- item consumption/use;
- persistence.

### Room Viewer Outlet
Dormant until Escape Rooms.

Potential implementation: lazy-loaded Phaser 2D/2.5D module.

Contract should consume room/theme configuration and emit normalized game events. React shell should not depend on Phaser until the route/module is entered.

### Multiplayer Outlet
Dormant.

Future responsibilities:
- transport-independent synchronization contract;
- connection state;
- shared/public state;
- private player state where needed.

No backend/transport dependency in Sprint 1.

### Identity/Profile Outlet
Dormant.

No authentication in Phase 1.

### Achievement / Lives Outlet
Dormant.

The original five-lives idea remains deferred until individual game UX proves it beneficial.

## Modules

### MODULE: Home
- route: `/`
- mascot: Host Bill
- consumes: Module Registry, Navigation, Build Identity
- owns: home presentation only

### MODULE: Trivia Placeholder
- route: `/brain/trivia`
- mascot/category: Big Brain Bill / bill's brain
- status: placeholder in Sprint 1

### MODULE: Crossword Placeholder
- route: `/puzzles/crossword`
- mascot/category: Puzzle Bill / bill's puzzles
- status: placeholder in Sprint 1

### MODULE: Word Search Placeholder
- route: `/puzzles/word-search`
- mascot/category: Puzzle Bill / bill's puzzles
- status: placeholder in Sprint 1

### MODULE: Sudoku Placeholder
- route: `/numbers/sudoku`
- mascot/category: Sudoku Bill / bill's numbers
- status: placeholder in Sprint 1

### MODULE: Escape Rooms Placeholder
- route: `/mysteries/escape-rooms`
- mascot/category: Detective Bill / bill's mysteries
- status: coming soon
- Phaser dependency: none in Sprint 1

## State Ownership Map

- build metadata → Nerve Center / Build Identity
- module/catalog metadata → Module Registry
- route metadata/current navigation → Navigation + React Router
- shell-level persisted preferences if any → Storage Outlet
- game session state → future individual game module + Game State Outlet
- theme state → future Theme Outlet
- room/inventory state → future Room/Inventory Outlets

No module may reach into another module's private state.

## Dependency Map

```text
React App Shell
   ↓
Nerve Center
   ├── Build Identity
   ├── Module Registry
   ├── Navigation
   ├── Storage
   ├── Lifecycle/PWA
   └── Test Hooks

Home + Placeholder Modules
   ↓
consume declared core outlets only

Future Game Engines
   ↓
plug into Game State / Theme / Content / Hint / Mini-Game as needed

Future Escape Room
   ↓
Room Viewer → Inventory → Mini-Game Outlet → existing game engines
```

## Event / Lifecycle Map

Sprint 1 normalized events may include:
- `app:init`
- `app:ready`
- `route:change`
- `storage:ready`
- `pwa:update-available` where implemented

Do not create a complex event bus unless normal React state/props/context and declared services cannot satisfy the shell.

## Persistence / Sync Map

Sprint 1:
- local only;
- no sync;
- safe namespaced storage;
- storage schema version declared.

Future:
- game save data remains local-first;
- cloud/multiplayer requires separate authorization and CHEAPSKATE review.

## Testing Hooks

Architecture tests:
- Nerve Center initializes once;
- build identity is readable;
- module registry returns expected modules/routes/status;
- storage failure does not crash the shell.

Module tests:
- each card points to a registered route;
- placeholders render without importing future engines.

Integration tests:
- home → route → home/back;
- reload deep route under GitHub Pages configuration;
- PWA standalone launch;
- offline shell after successful initial load, where supported.

Real-device tests:
- iPhone Safari/Add to Home Screen;
- standalone reopen;
- orientation/viewport behavior;
- touch target usability.

## Contract Violations / Exceptions

- No standalone DESIGN skill file was present in the supplied source set; existing approved UI specification is treated as the conservative DESIGN direction until supplied.
- CHEAPSKATE is currently a project rule, not a loaded standalone skill.

## BUILD Rules

- Build only Sprint 1 objective.
- No game engine implementation.
- No Phaser package/import unless Sprint 8 is explicitly unlocked later.
- No paid service/API.
- No backend.
- No auth.
- No speculative refactor.
- Keep dormant outlets dependency-free.
- Stamp build/version/date.
- Report every file changed and every test actually performed.

## Expansion Notes

When Sprint 2 begins, activate only the outlets Trivia actually needs. Do not activate future outlets just because they are planned.
