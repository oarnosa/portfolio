# orlandoarnosa.com

Personal portfolio — a single-page site with a short intro, experience timeline, and social links.

**Live:** [orlandoarnosa.com](https://orlandoarnosa.com)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- [Tailwind CSS 4](https://tailwindcss.com/) — design tokens defined in CSS via `@theme`, no config file
- [Geist](https://vercel.com/font) sans + mono via `next/font`
- Vercel Analytics

## Develop

```bash
npm install
npm run dev   # http://localhost:3000
```

```bash
npm run build # production build
npm run start # serve the production build
```

## Structure

```
app/
  layout.tsx      # fonts, metadata/SEO, analytics
  page.tsx        # the entire page: intro, experience, outro
  globals.css     # design tokens (@theme), animations, base styles
components/       # experience timeline, social links, etc.
lib/
  data.ts         # site content: experience entries, social links
  types.ts        # content types
```

## Editing content

Most updates only touch `lib/data.ts`:

- **Experience** — add an entry to `experiences` (newest first). Set `active: true` for current roles (renders the pulsing status dot) and `type: "Contract"` where applicable.
- **Social links** — edit `socialLinks` (includes the resume URL).

Intro and outro copy live in `app/page.tsx`. Page title, description, and Open Graph metadata live in `app/layout.tsx`.

## Design

Colors, shadows, and animations are Tailwind theme tokens in `app/globals.css` under `@theme` — change a value there and it applies everywhere. The palette is a warm bone/cream background, near-black text, and a deep ink-blue accent used sparingly.
