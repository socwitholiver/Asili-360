# ASILI360

![Asili360 logo](public/logo.png)

ASILI360 is a React and Vite tourism experience platform focused on helping travelers discover Kenyan destinations, cultural experiences, and SME-hosted offerings.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Vitest
- Playwright

## Local development

```sh
npm install
npm run dev
```

The app runs on `http://localhost:8080` by default.

## Available scripts

- `npm run dev` starts the local Vite dev server
- `npm run build` creates a production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
- `npm run test` runs the Vitest suite once
- `npm run test:watch` runs Vitest in watch mode

## Project structure

- `src/pages` contains route-level screens
- `src/components` contains shared UI and feature components
- `src/data` contains mock content used by the experience flows
- `public` contains static assets served as-is

