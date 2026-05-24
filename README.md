# De Norte a Sur — Café website

Production-ready static website for **De Norte a Sur**, a Spanish & Romanian café in Paterna, Valencia.

> Carrer dels Pins, 2 · 46980 Paterna · Valencia · Spain

Built as a plain static site — pure HTML, CSS, and a single JavaScript file. No build step, no framework, no backend. Ready to drop onto GitHub Pages, Vercel, Netlify, or any static host.

---

## What's inside

```
.
├── index.html        ← markup, SEO, Open Graph, JSON-LD structured data
├── styles.css        ← responsive styles (mobile-first)
├── script.js         ← language switcher (ES/EN), nav, menu tabs, gallery lightbox
├── assets/
│   ├── favicon.svg
│   ├── og-image.svg               ← share preview
│   ├── logo-de-norte-a-sur.svg    ← full wordmark (unused; kept as reference)
│   ├── logo-mark.svg              ← compass mark used in header & footer
│   └── gallery/                   ← food photos extracted from the menu PDF
└── README.md
```

No dependencies are installed; the only external resources fetched at runtime are:
- **Google Fonts** — DM Serif Display & Manrope (loaded via `<link>` in `<head>`)
- **Google Maps embed** — public no-key embed iframe in the Location section

Both are optional. If you want a fully offline build, self-host the fonts and remove the map iframe.

---

## Features

- **Bilingual ES / EN** — Spanish default, English secondary. Visible switcher in the header and footer; preference persists in `localStorage`. Alt text on gallery images also translates.
- **Real menu content** — categories, dishes and prices extracted from the cafe's menu (Almuerzos, Tapas clásicas, Tapas especiales, Desayunos, Platos de Rumanía, Hamburguesas, Cafés, Bebidas).
- **Photo gallery** — 8 food photos extracted directly from the menu PDF, cropped to a consistent 4:3 aspect, lightly enhanced and shown in a responsive grid (2 columns on phones, 3 on tablets, 4 on desktop) with a built-in lightbox (arrow keys + ESC).
- **SEO** — semantic HTML, descriptive `<title>` and meta description, Open Graph + Twitter Card tags, favicon, and **`Restaurant` JSON-LD structured data** (opening hours, address, cuisine, price range).
- **Mobile-first** — thoroughly tested at 360 / 390 / 414 / 768 / 1024 px. Touch targets ≥ 44 px, no horizontal scroll, hamburger nav, scrollable menu tabs, iOS safe-area insets.
- **Accessibility** — landmark elements, skip link, ARIA labels, keyboard-navigable lightbox.
- **Today's hours** are highlighted automatically based on the visitor's local day.

---

## Run locally

You don't need Node, npm or anything else.

### Easiest — open the file
Just double-click `index.html`. It works.

### With a local server (recommended)
Any static server works. Examples:

```bash
# Python 3
python3 -m http.server 8080
# then visit http://localhost:8080
```

```bash
# Node (no install)
npx --yes serve .
```

```bash
# VS Code
# Right-click index.html → "Open with Live Server"
```

---

## Deploy

This is a plain static site, so deployment is the same as for any folder of HTML/CSS/JS.

### GitHub Pages

1. Create a new GitHub repo and push the contents of this folder to it:
   ```bash
   git init
   git add .
   git commit -m "De Norte a Sur — site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages**.
3. Under "Build and deployment", set **Source = Deploy from a branch**, **Branch = `main`**, **Folder = `/ (root)`**. Save.
4. Wait ~1 minute. Your site is live at `https://<your-user>.github.io/<your-repo>/`.

> If you're using a project repo (not `username.github.io`), the site will live in a sub-path. All paths in this project are relative, so it works without changes.

### Vercel

1. Push the folder to a GitHub/GitLab/Bitbucket repo (see step 1 above), **or** install the Vercel CLI:
   ```bash
   npm i -g vercel
   vercel
   ```
2. Vercel auto-detects it as a **static site** — no framework preset needed. Build command: *none*. Output directory: `.` (the repo root).
3. Confirm and deploy. You'll get a `*.vercel.app` URL immediately and can connect a custom domain afterwards.

### Netlify

**Drag & drop (no git):**
1. Go to <https://app.netlify.com/drop>.
2. Drag this whole folder into the drop zone.
3. Done — Netlify gives you a live URL.

**Via repo:**
1. Push to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: *leave blank*. Publish directory: `.` (root). Deploy.

---

## Customization quick reference

| What | Where |
|---|---|
| Phone / WhatsApp | `index.html` — search `605 692 359` (display) and `605692359` (in `tel:` / `wa.me/` links); update the JSON-LD `telephone` and `sameAs` too |
| Opening hours | `index.html` — `<table class="hours-table">` and the JSON-LD `openingHoursSpecification` |
| Menu items / prices | `index.html` — each `<article class="menu-cat">` |
| Menu descriptions | `script.js` — `i18n.es` / `i18n.en` dictionaries |
| Colors & type | `styles.css` — `:root` tokens at the top |
| OG share image | `assets/og-image.svg` |
| Favicon | `assets/favicon.svg` |

### Replacing the placeholders

The hero and About section currently use **CSS-rendered placeholder panels** clearly marked `Photo · …`. To use real photography:

1. Drop your images into `assets/` (e.g. `assets/hero.jpg`, `assets/tostada.jpg`).
2. In `styles.css`, replace the `background:` rule on `.hero-photo`, `.about-photo-a`, and `.about-photo-b` with `background: url("assets/hero.jpg") center/cover no-repeat;`.
3. Remove the `.placeholder-tag` element from those blocks in `index.html`.

---

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari) — last two major versions. The site uses standard CSS Grid, Flexbox, `color-mix()`, and `backdrop-filter` — all widely supported in 2025+.

---

## Credits

- Fonts: **DM Serif Display** & **Manrope** via Google Fonts (Open Font License).
- Menu content adapted from the cafe's own carta.
- Everything else is original CSS/JS written for this project.

---

## License

MIT — do whatever you need with this site. No warranty.
