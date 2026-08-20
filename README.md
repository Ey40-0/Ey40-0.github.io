# ey40-0.github.io

Personal site hosted on GitHub Pages. Contains my developer portfolio and the official landing pages for the apps I ship.

**Live → [ey40-0.github.io](https://ey40-0.github.io)**

---

## What's here

| Path | Content |
|------|---------|
| `/` | Portfolio — who I am, what I build, how to reach me |
| `/supo/` | Landing page, help docs, and privacy policy for **Supo** |

---

## Tech

HTML, CSS, and vanilla JS. `site-config.js` acts as a minimal config layer so shared values (copyright year, GitHub URL, etc.) propagate to every page from a single source.

---

## Projects featured

### Supo
Subscription manager for Android. Tracks recurring payments locally — no accounts, no cloud, no tracking. Available on Google Play.  
Landing → [`/supo/`](https://ey40-0.github.io/supo/)

---

## Structure

```
/
├── index.html          # Portfolio main page
├── style.css           # Global styles
├── site-config.js      # Shared site variables
└── supo/
    ├── index.html      # Supo landing page
    ├── privacy.html    # Privacy policy
    └── supo-style.css  # Supo-specific styles
```

---

## Running locally

No build required — just open `index.html` in a browser, or serve the directory with any static server:

```bash
npx serve .
# or
python3 -m http.server
```

---

## License

Site content and design © 2026 Ey40-0. App assets belong to their respective projects.
