# Casefile AI: System Design

A bilingual, responsive visual overview of the Casefile AI detective game plan. It presents the recommended architecture, Python game stack, case data model, interrogation workflow, three-week MVP plan, and test contract.

This repository contains the Next.js dashboard only. The game described in the plan is a separate Python 3.11 or 3.12 and Streamlit project.

## Features

- English and Vietnamese interface with the selected language saved in the browser
- Fixed dark theme inspired by the supplied Figma screens
- Responsive cards and accessible accordion navigation for project details
- Animate UI transitions, scroll reveals, and visual effects
- Locally hosted Outfit variable font with Vietnamese glyph coverage
- Reference artwork in `public/death-note/`

## Requirements

- Node.js 20.9 or newer
- npm

The dashboard does not require environment variables or external API credentials.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate before deployment

```bash
npm run lint
npm run build
```

To serve the production build locally:

```bash
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the detected Next.js framework settings.
4. Deploy without adding environment variables.

Vercel uses the existing `package-lock.json` to install dependencies. The standard Next.js build command is `npm run build`.

## Project structure

```text
src/
  app/                 Dashboard page, layout, and styles
  components/
    animate-ui/        Animate UI components used by the dashboard
    ui/                shadcn/ui components used by the dashboard
  lib/                 Shared component utilities
public/
  death-note/          Supplied character and symbol reference artwork
  illustrations/       Dashboard illustrations
  textures/            Background textures
```

The Figma artwork is used as visual reference material only. Portraits are not presented as authored suspect identities or case facts.
