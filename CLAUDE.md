# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page marketing/booking site for Dr. Arshia Zaidi's career-coaching practice ("Career Studio 101"), plus a minimal Express backend for Stripe checkout. Per the README, the site was built for a research assistant's professor.

## Workflow Rules
- Before making any file modifications or running write commands, always output a detailed, step-by-step implementation plan.
- Wait for user approval of the plan before proceeding to execute any changes.


## Layout & commands

An npm workspace (npm 7+ built-in — no Lerna/Turborepo/pnpm) with two packages, `website` and `backend`. There is one hoisted `node_modules` and one `package-lock.json`, both at the root. **Always install from the root** — running `npm install` inside `website/` or `backend/` creates a nested `node_modules` that shadows the hoisted one and causes version-mismatch confusion.

```bash
npm install            # from the root; installs both workspaces

npm run dev            # both: Vite on :5173 + API on :5001, via concurrently
npm run dev:web        # Vite alone
npm run dev:api        # API alone (node --watch)
npm run start:api      # API, no watch
npm run build          # vite build -> website/dist
npm run lint           # ESLint over website/src
npm run preview
```

`-w <name>` targets a workspace by its package `name` field, not its directory — they happen to match here. Root `build`/`lint` use `--workspaces --if-present`, which is what lets the backend (no such scripts) be skipped instead of failing the run.

There is no test setup in either package (`backend`'s `npm test` is the npm default stub and exits 1). Don't invent test commands — if tests are needed, set up the runner first.

`backend/.env` is untracked; [backend/.env.example](backend/.env.example) lists the required keys — currently just `REACT_APP_TEST_KEY` (the Stripe **secret** key, despite the `REACT_APP_` name). `images/` is gitignored.

[website/src/functions/api.js](website/src/functions/api.js) exports `API_BASE` (`VITE_API_URL`, default `http://localhost:5001`). Nothing imports it yet — [PackageCard.jsx](website/src/components/ComponentParts/PackageCard.jsx) hardcodes its own URL and should be switched to `API_BASE` when checkout is rebuilt.

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

## Backend

[backend/index.js](backend/index.js) is ESM, Express 5, unrestricted `cors()`, port 5001 hardcoded. It currently defines **no routes at all** — it constructs a Stripe client and listens, nothing more. Its only intended job is creating Stripe Checkout sessions.

Booking email is deliberately *not* handled here: per [notes.md](notes.md), the form is moving to [FormSubmit](https://formsubmit.co/), which posts straight from the browser and needs no backend. Don't reintroduce a server-side mail path without checking that decision first.

**If you add a module that reads `process.env` at import time, it will see undefined values.** ESM evaluates imports before `index.js` reaches `dotenv.config()`. Read env inside functions, or lazily on first use.

## Current state (incomplete work)

- **The checkout endpoint does not exist.** [PackageCard.jsx](website/src/components/ComponentParts/PackageCard.jsx) POSTs to `http://localhost:5001/checkout`, but there is no such route — the request 404s. A working Stripe handler is in git history (`git log -S'checkout.sessions.create' -- backend/index.js`); it hardcoded a $1.99 CAD "Pricing Plan" line item and used Stripe dashboard URLs for `success_url`/`cancel_url`, so price was never driven by the selected package.
- **The booking form does not submit anywhere.** [Section_booking.jsx](website/src/components/Section_booking.jsx) is a plain `<form action="">` with no handler; wiring it to FormSubmit is the next step. Its `service` dropdown also offers only 3 options (resume, LinkedIn, interview) while the site sells 6 solo services, 4 add-ons, and 3 packages.
- There is a Jasmine setup in [spec/](spec/) (config at [spec/support/jasmine.mjs](spec/support/jasmine.mjs)) holding the default `jasmine_examples` scaffold. It is not wired to an npm script — `backend`'s `npm test` is still the failing default stub.
- [Section_services.jsx](website/src/components/Section_services.jsx) / [ServiceCard.jsx](website/src/components/ComponentParts/ServiceCard.jsx) are lorem-ipsum placeholders, commented out of `App.jsx`. `VerticalLine.jsx` is unused. [SoloCardRow.jsx](website/src/components/ComponentParts/SoloCardRow.jsx) is a near-copy of `SoloCard.jsx` (also exported under the name `SoloCard`).
- Layout uses fixed viewport-relative sizing (`px-25`, `h-screen`, `w-5/16`) and is not responsive; the fixed navbar has no mobile menu.
