<div align="center">
  <img src="public/images/sparklin-emblem.png" alt="Sparklin Shoe Care" height="150" />

  # Sparklin Shoe Care

  **Step up, Stand out.**

  Professional shoe care &amp; restoration in Bandung — built as a fast, static
  landing page with Astro.

  <p>
    <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-7.3-BFF52A?style=flat-square&logo=astro&logoColor=white" alt="Astro" /></a>
    <img src="https://img.shields.io/badge/Node-%3E%3D22.12-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node" />
    <img src="https://img.shields.io/badge/Output-100%25%20static-1B3822?style=flat-square" alt="Static output" />
    <img src="https://img.shields.io/badge/No%20client%20framework-0E2A17?style=flat-square" alt="No client framework" />
  </p>
</div>

---

## About

Sparklin is a shoe care service for students and urban sneakerheads in Bandung.
The marketing site is a single-page Astro build: one route, no framework runtime,
no client-side data fetching. Every price, service, and testimonial lives in a typed
array at the top of `src/pages/index.astro`, so editing the page is editing data.

**Built with intent**

- **Static by default** — ships plain HTML and CSS, plus a few lines of vanilla JS
  for the mobile drawer and the before/after slider.
- **Content as data** — services, pricing tiers, add-ons, values, and testimonials
  are declared once in the frontmatter and rendered from there.
- **Editorial type** — Playfair Display for headlines against Plus Jakarta Sans
  for body copy, with JetBrains Mono for micro-labels and pricing.
- **Booking-first** — every call to action routes to WhatsApp with a prefilled,
  service-specific message, so no form backend is needed.
- **Accessible** — skip link, labelled landmarks, `aria-expanded` mobile menu,
  keyboard arrow navigation on the showcase slider.

## Services

| Service            | Price      | Turnaround  | What it covers                                                        |
| ------------------ | ---------- | ----------- | --------------------------------------------------------------------- |
| **Fast Clean**     | 25.000     | 1–2 hari    | Upper & midsole cleaning, lace deodorising, antibacterial fragrance. |
| **Deep Clean**     | 35.000     | 2–3 hari    | Full upper/sole/insole wash, deep lace cleaning, anti-fungal mist.    |
| **Leather & Suede**| 45.000     | 3 hari      | pH-neutral cleaner, conditioner, suede nap restoration, free dust bag. |
| **Unyellowing**    | +20.000    | +1 hari     | Restores oxidised yellow midsoles back to bright white.               |
| **Waterproofing**  | +15.000    | +1 hari     | Nano-repellent layer against water and mud.                           |
| **Express Service**| +15.000    | < 24 jam    | Priority turnaround for events the next day.                          |
| **Repaint & Retouch** | +50.000 | —         | Repainting faded midsoles and uppers.                                 |

Prices are per pair, quoted in Indonesian rupiah, as displayed on the site.

## Quick Start

Requires **Node.js 22.12 or newer**.

```sh
git clone https://github.com/weareanoa/sparklin.git
cd sparklin
npm install
npm run dev
```

The dev server runs at `http://localhost:4321` and hot-reloads on save.

## Commands

| Command                   | Action                                            |
| ------------------------- | ------------------------------------------------- |
| `npm install`             | Install dependencies                              |
| `npm run dev`             | Start the dev server on `localhost:4321`          |
| `npm run build`           | Build the production site to `./dist/`            |
| `npm run preview`         | Serve the production build locally                |
| `npm run astro ...`       | Run Astro CLI commands, e.g. `astro add`          |
| `npm run astro -- --help` | Astro CLI help                                    |

## Project Structure

```text
sparklin/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/              # Brand marks, hero shots, before/after, testimonials
├── src/
│   └── pages/
│       └── index.astro      # The entire site: data, markup, styles, scripts
├── .vscode/                 # Editor recommendations and launch config
├── astro.config.mjs         # Astro config and allowed dev hosts
├── package.json
└── tsconfig.json
```

Everything lives in `src/pages/index.astro` by design — the frontmatter arrays are
the content model, the template renders them, and the `<style>` block holds the
design system.

## Page Sections

`index.astro` is annotated with numbered comments, in order:

1. **Hero** — headline, trust score, and the WhatsApp booking CTA.
2. **About & Pillars** — brand emblem plus VISI / MISI / VALUE.
3. **Layanan** — the four core services with turnaround times.
4. **Before & After** — keyboard-navigable results slider.
5. **Harga** — three pricing packages plus the add-on grid.
6. **Kenapa Memilih Kami** — four differentiators.
7. **Testimoni** — customer quotes with avatars and ratings.
8. **CTA** — closing conversion block.
9. **Footer** — navigation, socials, and location.

## Editing Content

Service copy, prices, and testimonials are plain objects in the frontmatter:

```astro
---
const pricingPackages = [
  {
    name: 'Deep Clean',
    price: '35.000',
    unit: '/ pasang',
    highlight: true,          // renders the emphasized card
    badge: 'Paling Direkomendasikan',
    features: ['Pembersihan Menyeluruh (Upper, Sol, Insole)'],
    waMessage: 'Halo Sparklin, saya mau pesan paket Deep Clean (35rb).',
  },
];
---
```

Update a value, save, and the page re-renders. The `waMessage` field is what
prefills the WhatsApp link, so keep it short enough to stay readable on mobile.

To change the booking number, edit `whatsappNumber` at the very top of the file —
every CTA link is derived from it.

## Design System

| Token                   | Value                    | Role                                |
| ----------------------- | ------------------------ | ----------------------------------- |
| `--color-forest-deep`   | `#0E2A17`                | Darkest green, footer and overlays   |
| `--color-dark-green`    | `#1B3822`                | Primary brand green, `theme-color`  |
| `--color-accent-lime`   | `#B0D43A`                | Accent, CTAs, highlights            |
| `--color-bg-sage`       | `#E8EBD3`                | Section backgrounds                 |
| `--color-bg-cream`      | `#F4F6EC`                | Page background                     |
| `--color-bg-card`       | `#FCFCF8`                | Card surfaces                       |
| `--font-sans`           | Plus Jakarta Sans        | Body copy                           |
| `--font-serif`          | Playfair Display         | Editorial headlines, italic accents |
| `--font-mono`           | JetBrains Mono           | Labels, prices, micro-copy          |

Tokens are declared once on `:root` at the top of the `<style>` block.

## Deploying

The build output in `./dist/` is fully static and can be hosted anywhere.

```sh
npm run build
```

- **Vercel / Netlify** — import the repository; both detect Astro automatically
  and use `npm run build` with `dist` as the publish directory.
- **Cloudflare Pages** — build command `npm run build`, output directory `dist`.
- **Any static host** — upload the contents of `dist/`.

`astro.config.mjs` whitelists the preview hosts `proud-bikes-strive.loca.lt` and
`sparklin.weareanoa.app` in the Vite dev server, so tunnels resolve without
`--host` flags.

## Contributing

1. Fork the repository and create a feature branch.
2. Make your change, keeping the existing frontmatter/markup/style/script order
   in `index.astro`.
3. Stage only what you touched — the page is one large file, so unrelated hunks
   are easy to sweep in by accident.
4. Commit using [Conventional Commits](https://www.conventionalcommits.org):

   ```sh
   git commit -m "feat: add waterproofing add-on card"
   git commit -m "fix: correct express service turnaround copy"
   ```

5. Open a pull request.

Commit types in use: `feat`, `fix`, `docs`, `build`, `chore`, `style`, `refactor`.

## Links

- **Instagram** — [@sparklinshoecare](https://www.instagram.com/sparklinshoescare)
- **TikTok** — [@sparklinshoecare](https://tiktok.com/@sparklinshoecare)
- **Booking** — WhatsApp, prefilled per service
- **Location** — Bandung, Jawa Barat

---

<div align="center">
  <sub>© 2024 Sparklin Shoe Care — est. 2024, Bandung.</sub>
</div>
