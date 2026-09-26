# Muhammad Taha — portfolio

The source for [muhammadtaha.app](https://muhammadtaha.app), Muhammad Taha’s portfolio of AI applications, backend services, document-processing tools, and data projects.

The site preserves its warm editorial palette and serif typography. Ten curated case studies explain the problem, implementation, result, and limitations of public-source, educational, and private-source work, including a local document de-identification system. Six service pages connect that evidence to client problems, and six technical insight articles explain reusable engineering decisions without exposing private client code or data. Public repository-backed projects link to [BoltTaha](https://github.com/BoltTaha); private-source and client-work summaries are labeled separately.

## Stack and local setup

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 3, and Node.js 24. Use the locked dependency versions for reproducible installs.

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Open [localhost:3000](http://localhost:3000). Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` to enable the contact form. This is the provider’s public client-side form key, not a server secret. Never put private API credentials into a `NEXT_PUBLIC_` variable. Without a key, the form provides an email fallback.

Submissions go directly from the browser to Web3Forms. The form validates required fields, checks both HTTP status and the provider’s success flag, aborts after 15 seconds, retains input on failure, and announces success/error states. Automated tests mock the provider and do not send email. Configure provider-side domain restrictions and spam protection for the deployed form as appropriate to the account.

## Validation

```bash
npm run check  # lint, TypeScript, component/content tests, production build
npm audit
npm start     # serves the production build after npm run build
```

ESLint 9 is retained because the React plugins bundled by the current Next configuration fail under ESLint 10. ESLint 9 is past upstream maintenance; migrate when those plugins support ESLint 10. The application runtime is Next.js 16 / React 19 on Node.js 24.

The GitHub Actions workflow uses `.nvmrc`, installs with `npm ci`, and runs lint, type checking, tests, a production dependency audit, and the build. `next/font` downloads the configured Google fonts during a fresh build, so that build step requires network access; the generated site self-hosts those fonts.

## Routes and content

- `/`: introduction, selected work, services, technical insights, skills with project evidence, experience, testimonials, and FAQ.
- `/projects`: all public projects plus separate client-work summaries.
- `/projects/[slug]`: statically generated case studies. Unknown slugs return a missing-page response.
- `/services` and `/services/[slug]`: client-facing AI engineering offers connected to relevant evidence.
- `/insights` and `/insights/[slug]`: statically generated technical articles with related case studies and direct answers.
- `/about`: background, student education, community work, and linked credential records.
- `/contact`: contact form and verified public profile links.
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`: discovery files generated from site content.
- `/opengraph-image`: generated social card using the current portrait.

`data/projects.ts` owns case content, project types, source paths, repository links, and private-source notes. `data/services.ts` owns the service offers, and `data/insights.ts` owns the technical articles. `data/sources.ts` pins the reviewed public commits. `data/site.ts` owns the site URL, identity, public contact links, portrait, and substantive content-update date. `data/faq.ts` owns the homepage answers. Update these together when facts change. Review `docs/content-sources.md` before adding new claims.

The portrait is `public/profile.jpeg` (400 × 400, about 27 KB). Next Image provides appropriately sized delivery on the home and About pages. The social card and Person structured data use the same portrait. Do not restore the removed, much larger PNG.

## Search and structured data

Each public page supplies a unique title, description, canonical URL, and social metadata. Case-study and insight text is server rendered; discovering the project list does not require clicking a client-side “show more” button. Structured data describes a Person, WebSite, ProfilePage, Service, BlogPosting, FAQPage, and source-backed CreativeWork/SoftwareSourceCode. Education is shown as expected graduation, not `alumniOf`.

The existing allow-all crawler policy is preserved. Search indexing, AI search retrieval, and model training are different purposes; this update adds no new crawler restrictions or permissions. `llms.txt` is an experimental text convention kept aligned with public pages. It is not required by Google and does not guarantee indexing, citations, recommendations, or rankings. FAQ schema mirrors visible answers on relevant service and insight pages; eligibility does not guarantee a Google rich result.

Implementation references:

- [Next.js 16 upgrade guidance](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Next.js ESLint configuration](https://nextjs.org/docs/app/api-reference/config/eslint)
- [Next.js social image conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
- [Google guidance for AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)

## Deployment

The existing GitHub/Vercel integration controls deployment. A feature branch and pull request allow review before merging to `main`. Configure the deployment runtime for Node.js 24 and retain the Web3Forms environment variable in the deployment settings. A successful local build is not a production deployment, and a PR preview does not replace checking the production domain after merging.

Before merging, inspect the preview at desktop and mobile widths, confirm the portrait and social card, follow project/contact links, and test the contact dialog with Tab and Escape. A real email-delivery check requires submitting a message and confirming receipt in the destination inbox.
