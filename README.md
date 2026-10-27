# AXS Architects Website

Next.js 16 website for AXS Architects — architecture, interiors, planning, and
execution in Chennai, Tamil Nadu.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or pass `-- --port 1234`).

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run production build
npm run lint    # lint
```

## Structure

- `src/app` — routes (home, about, services, projects, process, contact, legal)
- `src/components` — layout, hero, projects, services, and UI components
- `src/content` — site copy and project/service data
- `src/lib` — utilities and SEO helpers

## Deploy on Vercel

Import the repository into Vercel; the framework is detected automatically and
`npm run build` is used. Ensure the deployment is built from the latest `main`
commit.
