# Adhesive & Resin Monitoring UI (Frontend-Only Prototype)

A clean, minimal React + Vite + TypeScript + Tailwind CSS prototype using dummy data only. No backend. Inspired by Apple-like aesthetic: beige/white, airy spacing, Inter font, soft shadows, rounded corners.

## Tech Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- React Router 6

## Features
- Login page with mock submit that redirects to dashboard.
- Dashboard with machine cards (name, weights, ratio, status chip).
- Operator view per machine with a ratio gauge and last 5 readings.
- Records page with dummy table and mock filter bar.
- Alerts page with local acknowledge toggle.

## Project Structure
- `src/pages/` — `Login`, `Dashboard`, `Machine`, `Records`, `Alerts`
- `src/components/` — `MachineCard`, `StatusChip`, `RatioGauge`
- `src/shell/` — `AppShell` (sidebar + topbar layout)
- `src/data/mock.ts` — dummy JSON data
- `src/types.ts` — shared types
- `src/styles/tailwind.css` — Tailwind entry + design tokens

## Getting Started
1) Install dependencies
```
npm install
```

2) Start dev server
```
npm run dev
```

3) Open the URL from the terminal (usually http://localhost:5173).

4) Login with any email/password (mock) to enter the app.

## Notes
- Authentication is mocked via `localStorage` in `src/state/useAuth.ts`.
- Status colors: Normal (green), Warning (amber), Critical (red).
- Target ratio is 1.00 ± 15% for gauge coloring.
- Tailwind theme includes a beige palette and Inter font.

## Next Steps (when wiring backend later)
- Replace `src/data/mock.ts` with real API calls and global state.
- Add form validations and role-based views.
- Implement real filters and pagination on Records.
- Implement real-time alerts and acknowledgements.
