# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page marketing/booking site for Dr. Arshia Zaidi's career-coaching practice ("Career Studio 101"). Per the README, the site was built for a research assistant's professor.

## Workflow Rules
- Before making any file modifications or running write commands, always output a detailed, step-by-step implementation plan.
- Wait for user approval of the plan before proceeding to execute any changes.


## Layout & commands

An npm workspace (npm 7+ built-in) with one package, `website`. There is one hoisted `node_modules` and one `package-lock.json`, both at the root. **Always install from the root** — running `npm install` inside `website/` creates a nested `node_modules` that shadows the hoisted one and causes version-mismatch confusion.

```bash
npm install            # from the root; installs the website workspace

npm run dev            # Vite on :5173
npm run dev:web        # same as dev
npm run build          # vite build -> website/dist
npm run lint           # ESLint over website/src
npm run preview
```

There is no test setup in the package (`npm test` is the npm default stub and exits 1). Don't invent test commands — if tests are needed, set up the runner first.

`images/` is gitignored.

## Frontend architecture

**Composition.** [website/src/App.jsx](website/src/App.jsx) renders `Section_*` components in page order inside one wrapper div that sets the papyrus background. No router, no state management, no data fetching layer — all copy and pricing live as local arrays/literals inside the section components.

**Navigation is scroll-based, not routed.** Each section's root `<div>` carries an `id` (`header`, `meet_instructor`, `How_it_works`, `packages`, `solo_services`, `book_a_session`); [Navbar.jsx](website/src/components/ComponentParts/Navbar.jsx) and CTA buttons call `move_to_section(id)` from [Pretty_design_functions.js](website/src/functions/Pretty_design_functions.js). Adding a section means adding the `id` **and** a Navbar entry — the ids are string-matched, so a typo fails silently.

**Two component tiers:**
- `components/Section_*.jsx` — full-width page sections. They own their content and pass it down.
- `components/ComponentParts/*.jsx` — presentational only: props in, JSX out, no state or effects (the one exception is `PackageCard`'s checkout handler).

**Layout flows downward as className strings.** Presentational components accept `border`, `width`, or `className` props that are interpolated into their own `className` — parents decide grid spans, shadows, and rounding (e.g. `Section_how_it_works` passes `"bg-orange-100/80 col-span-12 row-span-1"` as `border` to `GridItem`). Keep to this pattern rather than hardcoding layout inside a part.

**Styling.** Tailwind v4 via `@tailwindcss/vite`, configured CSS-first in the `@theme` block of [main.css](website/src/main.css) — there is no `tailwind.config.js`. Use the project palette (`custom-black-*`, `custom-blue-*`, `custom-green-*`, `custom-white-*`, each 100–900) over default Tailwind colors. Typography: `heading-font` (BBH Hegarty) and `content-font` (Literata) utility classes; `body` already defaults to Literata 300.

**Naming conventions in existing code:** section files are `Section_snake_case.jsx` while the exported component is PascalCase; props and helpers use snake_case (`body_text`, `package_list`, `move_to_section`). Match this rather than normalizing it.

`vite.config.js` sets `base: './'` for relative-path asset serving.

## Current state (incomplete work)

- **The booking form does not submit anywhere.** [Section_booking.jsx](website/src/components/Section_booking.jsx) is a plain `<form action="">` with no handler; wiring it to FormSubmit is the next step. Its `service` dropdown also offers only 3 options (resume, LinkedIn, interview) while the site sells 6 solo services, 4 add-ons, and 3 packages.
- There is a Jasmine setup in [spec/](spec/) (config at [spec/support/jasmine.mjs](spec/support/jasmine.mjs)) holding the default `jasmine_examples` scaffold. It is not wired to an npm script.
- [Section_services.jsx](website/src/components/Section_services.jsx) / [ServiceCard.jsx](website/src/components/ComponentParts/ServiceCard.jsx) are lorem-ipsum placeholders, commented out of `App.jsx`. `VerticalLine.jsx` is unused. [SoloCardRow.jsx](website/src/components/ComponentParts/SoloCardRow.jsx) is a near-copy of `SoloCard.jsx` (also exported under the name `SoloCard`).
- Layout uses fixed viewport-relative sizing (`px-25`, `h-screen`, `w-5/16`) and is not responsive; the fixed navbar has no mobile menu.
