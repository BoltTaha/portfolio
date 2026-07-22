# Muhammad Taha — Portfolio

Personal portfolio for **Muhammad Taha** (operating as **BoltTaha**), a Forward
Deployed Software Engineer building production AI systems, backend
infrastructure, and workflow automation.

**Live:** [muhammadtaha.app](https://muhammadtaha.app)

## Stack

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript (strict)
- [Tailwind CSS](https://tailwindcss.com) with a custom editorial design system
  (Fraunces / Source Serif 4 / JetBrains Mono via `next/font/google`)
- [Web3Forms](https://web3forms.com) for the contact form (no backend needed)
- Deployed on [Vercel](https://vercel.com)

## Project structure

```
app/
  page.tsx          Homepage — assembles all sections below
  about/page.tsx     About page
  contact/page.tsx   Contact page
  layout.tsx         Root layout, fonts, metadata, JSON-LD
  sitemap.ts          Sitemap
  robots.ts           robots.txt
components/          One component per section (Hero, ProjectsList, Experience,
                       StackChips, TrustRow, Testimonials, Nav, Footer, ContactForm/Modal)
data/                Typed content — edit these to update copy without touching
                       component code (projects.ts, stack.ts, experience.ts, testimonials.ts)
design/              Original static HTML mockup, kept for reference
```

## Getting started

```bash
npm install
cp .env.example .env.local   # then add your Web3Forms access key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Public access key from [web3forms.com](https://web3forms.com), used by the contact form. Safe to expose client-side. |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Editing content

Project entries, stack chips, experience, and testimonials all live in
`data/*.ts` as typed arrays — add, remove, or edit an entry there and it
flows through automatically, no component changes needed.

## Deployment

Deployed on Vercel, connected to this repo's `main` branch — every push
triggers a new deployment. `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` must also be set
in the Vercel project's Environment Variables for the contact form to work in
production.

## Contact

- [muhammadtaha.app/contact](https://muhammadtaha.app/contact)
- [LinkedIn](https://www.linkedin.com/in/bolttaha/)
- [Upwork](https://www.upwork.com/freelancers/bolttaha)
