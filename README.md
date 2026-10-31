# Sachin Sahil — Security Portfolio

A minimalist, CTF/terminal-styled single-page portfolio. Plain HTML, CSS and
vanilla JavaScript — **no build step, no dependencies**. All content is
data-driven: you edit one file (`data.js`) and the whole site updates.

## Files

| File | What it is |
|------|------------|
| `data.js` | **The one file you normally edit.** All content + translations. |
| `index.html` | Thin page shell; sections render from `data.js`. |
| `script.js` | Render engine + interactions (i18n, themes, terminal, matrix). |
| `styles.css` | Styling + the four colour themes. |
| `resume.html` | Printable CV (also reads `data.js`) → "Download CV" button. |
| `serve.sh` | One-command local preview. |

## Run locally

```bash
./serve.sh            # → http://localhost:8000
# or a custom port:
./serve.sh 5500
```

Then open the printed URL, edit `data.js`, and **refresh the browser**.
(Use a server rather than opening `index.html` directly — `file://` can block
`data.js` from loading.)

## How to add / change things — all in `data.js`

- **New job / degree / internship** → add an object to `SITE.timeline.<group>.items`
- **New project** → add an object to `SITE.projects`
- **New skill bar** → add an object to `SITE.skills`
- **New certification / volunteering** → add to `SITE.certifications` / `SITE.volunteering`
- **Name, email, links, tagline rotation** → edit `SITE.profile`
- **Add or edit a language** → copy the `en` block in `I18N`, translate it, and add a
  matching `<option>` to the language picker in `index.html`. Missing keys fall back to English.

The downloadable CV (`resume.html`) reads the same data, so it stays in sync.

## Features

- 10-language UI (English, Español, हिन्दी, Deutsch, Italiano, Français, Nederlands,
  Cymraeg, Gaeilge, Svenska)
- 4 themes (dark / light / neon / grey), high-contrast mode, adjustable text size —
  all remembered between visits
- Interactive terminal (`help`, `whoami`, `skills`, `projects`, `resume`, `email`, `clear`, …)
- Respects `prefers-reduced-motion`; responsive down to phone width

## Deploy to GitHub Pages (free)

```bash
git add .
git commit -m "Rebuild portfolio"
git push
```

In **Settings → Pages**, set **Source** to **Deploy from a branch** → `main` / root
(or keep the GitHub Actions workflow if present). The site publishes at
`https://<username>.github.io/<repo-name>/`.
