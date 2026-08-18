# bill's game board — Home Experience Candidate

Status: LOCKED AS A FUTURE DESIGN CANDIDATE, NOT YET IMPLEMENTED

## Core idea
The current simple Home screen remains the stable working shell while the games are built and tested.

A future Home experience may use a short illustrated entrance sequence:

1. The visitor arrives at a stylized closed door.
2. The primary Enter action is integrated with the doorknob/door area.
3. Activating Enter opens into an illustrated game closet or game-storage space.
4. The closet contains a mixture of playable-media objects rather than only traditional board games: game boxes, puzzle books, newspapers, magazines, cards, books, and mystery objects.
5. The entrance then leads into, or reveals, a clean modern game hub for practical navigation.

Working preferred direction: **door → game closet → clean modern hub**.

## Why it is a candidate
- gives bill's game board a memorable front-cover experience
- accommodates the mixed game library better than a literal board-game-only shelf
- allows individual finished games to be represented as objects later
- keeps the actual navigation usable instead of forcing the user to navigate a virtual room every visit

## Possible object-to-game metaphors
- Crossword: folded newspaper or crossword section
- Word Search: large puzzle/activity book
- Sudoku: Sudoku booklet or logic-puzzle pad
- Trivia: trivia-card deck or quiz-game box
- Escape Rooms: locked case, mystery box, or unusual object
- Future board/word games: stacked boxes, boards, tiles, or game pieces

These are examples, not final assignments.

## Design guardrails
- Do not implement this until the core game modules are working and their navigation requirements are understood.
- Do not require the illustrated entrance on every visit if it becomes friction-heavy; a skip/remembered-entry path can be considered later.
- The closet is scenic interaction art, not a full 3D environment requirement.
- The clean game hub remains the practical navigation layer.
- The concept may be revised or dropped during the later DESIGN/FRICTION pass without affecting game architecture.

## Current build sequence
1. Keep the known-good simple Home screen stable.
2. Build and test each game individually.
3. Revisit Home/entrance design after the core games are functional.
