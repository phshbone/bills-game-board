# PUPPET MASTER Build Brief — bill's game board

**Run target:** Phase 1 / Sprint 1 Foundation  
**Target build:** v0.1.0 · 2026-08-17

## Authority Inputs

1. `GAME-SOURCE-OF-TRUTH.md`
2. Current user instructions in the active project conversation
3. Supplied PUPPET MASTER v1.1
4. Supplied THINK v2
5. Supplied DESIGN v1
6. Supplied LOCK v2
7. Supplied POWER STRIP v1.1
8. Supplied BUILD v1
9. Supplied FRICTION v1
10. Supplied Build-Test-Repair skill
11. `POWER-STRIP-WIRING-PLAN.md`

## Pipeline

Run automatically:

**THINK → DESIGN → LOCK → POWER STRIP → BUILD → FRICTION → BUILD · TEST · REPAIR**

Do not require the user to invoke every phase separately.

## Global Hard Constraints

- React + Vite PWA; not React Native.
- Mobile first.
- Free/open-source-first architecture.
- No required paid service, subscription, or AI API.
- GitHub Pages deployment target.
- Local-first storage.
- Preserve the approved mascot/category structure.
- No Codex dependency for building.
- No future feature may be silently pulled into Sprint 1.
- No opportunistic cleanup/refactor outside the active objective.
- Dormant Power Strip outlets must not import their future dependencies.

## THINK Assignment

Confirm the smallest defensible Sprint 1 objective and challenge only material contradictions.

Expected conclusion unless evidence disproves it:

> Build the foundation shell and wiring, not any game engine.

Do not reopen already-settled product vision merely to generate alternatives.

## DESIGN Assignment

Preserve the approved interaction direction:
- Host Bill home hub;
- four category cards;
- mobile-first layout;
- mascot per category;
- simple Enter/navigation behavior;
- current color palette;
- placeholder destination screens.

Do not redesign the brand or navigation model.

## LOCK Assignment

Produce one Build Contract for Sprint 1 using the IN/OUT/Definition of Done in the Source of Truth.

One active objective only.

## POWER STRIP Assignment

Use `POWER-STRIP-WIRING-PLAN.md` as the starting architecture.

Power Strip must remain proportional:
- tiny core now;
- standardized future outlets;
- unused outlets dormant;
- no dependency bloat.

## BUILD Assignment

Implement the locked shell only.

Required implementation qualities:
- clean install/build;
- GitHub Pages-compatible base/routing strategy;
- installable PWA configuration;
- mobile layout;
- home category cards;
- routes/placeholders;
- build identity;
- minimal architecture services/registry;
- no hidden future feature work.

## FRICTION Assignment

Audit especially:
- number of taps to reach a game;
- clarity of category/game distinction;
- back/home navigation;
- mobile target size;
- viewport/header crowding;
- unnecessary decisions;
- PWA standalone navigation;
- visible “Coming Soon” handling.

Classify findings as FIX NOW / CONSIDER / LEAVE ALONE.

Any recommendation that changes locked structure routes back upstream rather than being patched silently.

## BUILD · TEST · REPAIR Assignment

Validate:
- build succeeds;
- app loads;
- routes work;
- back/home behavior works;
- no console-breaking errors;
- no horizontal mobile overflow;
- service worker/manifest configuration is coherent;
- GitHub Pages deployment configuration is coherent;
- reload/standalone route behavior is tested as far as the environment permits;
- storage initialization fails safely;
- build stamp matches artifact.

Repair surgically.

After each repair:
- rerun the relevant immediate test;
- perform regression sweep;
- increment PATCH when the repair produces a new delivered build.

## Stop / Escalation Rules

Stop downstream implementation and route upstream if:
- a material architecture conflict appears;
- GitHub Pages constraints invalidate the locked routing plan;
- a proposed dependency violates CHEAPSKATE;
- the implementation would require building a deferred feature;
- supplied assets are missing in a way that blocks the actual objective.

Missing non-blocking mascot art may use clearly marked placeholders; do not invent final brand assets without authorization.

## Required Final Report

Report:
- pipeline result;
- final locked scope;
- architecture/wiring version;
- build identity;
- build result;
- files created/changed;
- validation actually performed;
- repairs made;
- remaining real-device/live deployment tests;
- known exceptions;
- deferred items.
