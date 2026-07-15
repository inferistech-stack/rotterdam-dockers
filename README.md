# Rotterdam Dockers — ETPL 2026

Editorial marketing site for the inaugural ETPL 2026 franchise, in the mold of
juventus.com: fixed icon rail on the left, floating social rail on the right,
oversized display typography, and full-bleed rounded imagery plates on a
cinematic canvas. One global day/night switch relights the entire page —
overcast working-harbor daylight ↔ floodlit T20 night — including every
illustration, because all plate colors route through CSS custom properties.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
```

Keyboard/UI: the sun/moon button in the top bar toggles day/night.

## Structure

| What | Where |
|---|---|
| Design tokens (both modes, incl. plate palettes) | `src/styles.css` `:root` / `[data-mode='night']` |
| Page + all sections | `src/site/Site.jsx` |
| Left nav rail / right social rail | `src/site/Rails.jsx` |
| Top bar (brand, sponsor lockup, mode toggle) | `src/site/TopBar.jsx` |
| SVG imagery plates (photography placeholders) | `src/site/Plates.jsx` |
| Scroll reveals + hero parallax | `src/site/useReveal.js` |
| Placeholder data — swap when real data lands | `src/data.js` |

## Sections

Home (hero plate + ticker) → Next Match → The Crew (founder cards + quotes)
→ Roster (horizontal scroll-snap manifest) → Fixtures & Results (season/results
tabs) → Membership + Contact → Footer.

## Placeholder status (July 2026)

- **Identity**: interim anchor mark + presumptive `#1B3A2D` green; swap the SVG
  in `Rails.jsx` and the favicon in `index.html` when the crest is revealed.
- **Imagery**: every `<*Plate>` in `Plates.jsx` is an art-directed SVG stand-in.
  Replace with `<img>`/`<video>` (same wrapper, `object-fit: cover`) when real
  photography arrives — harbor/industrial + real player photography per brief.
- **Roster / fixtures / quotes**: fictional, structured for drop-in replacement
  in `src/data.js`.
- **Sponsors**: text placeholders in `TopBar.jsx`.

## Quality floor

- ~53 kB gzipped JS total; self-hosted fonts (Archivo variable-width + IBM Plex
  Mono), no FOUT (render gates on `document.fonts.ready` behind a splash).
- `prefers-reduced-motion`: reveals render visible, ticker/parallax/hero-rise
  disabled, smooth scroll off.
- Visible `:focus-visible` rings, skip link, labeled form fields, tabular
  numerals for all match data, mobile layout with bottom tab rail below 760px.
