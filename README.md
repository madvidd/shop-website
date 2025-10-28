# Mockup Site (GitHub Pages Ready)

This is a minimal, pixel-faithful static website that renders your provided mockup image *exactly as it is*, inside a framed, responsive viewport.

## Files
- `index.html` — single-page site.
- `styles.css` — basic styles and layout.
- `assets/IMG_20251028_232711_442.jpg` — your provided mockup image.

## Local Preview
Open `index.html` directly in a browser, or run a local server:

- **Python 3 (built-in):**
  ```bash
  # in this folder
  python -m http.server 8000
  # then open http://localhost:8000
  ```

- **VS Code Live Server Extension:** Right-click `index.html` → "Open with Live Server".

## Publishing to GitHub Pages
1. Create a new public repository on GitHub (e.g. `mockup-site`).
2. Upload all files in this folder to the repo root.
3. In **Settings → Pages**:
   - Source: choose **Deploy from a branch**.
   - Branch: **main** (or `master`), Folder: **/** (root).
   - Click **Save**. After it builds, your site will be at the URL GitHub shows (e.g. `https://<username>.github.io/mockup-site/`).

## Notes
- The screenshot is displayed with `object-fit: contain` to avoid any cropping—so it looks exactly like your image on any screen. If you want full-bleed edge-to-edge, switch to `object-fit: cover` in `styles.css` under `.frame > img`.
