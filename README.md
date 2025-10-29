# Menu Website (GitHub Pages Ready)

This project builds a **menu-style homepage** like a modern food/app design — **not** a screenshot. It has a desktop sidebar with categories and a responsive grid of item cards; on mobile, it switches to a top bar with horizontal category pills.

## Run locally
Open `index.html` directly, or:
```bash
python -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages (0 → 100)
1. Create a public repo (user site: `your-username.github.io` or any name for project site).
2. Upload: `index.html`, `styles.css`, `scripts.js`, `assets/`.
3. Settings → Pages → Source: **Deploy from a branch**; Branch: `main`; Folder: `/ (root)`; Save.
4. Visit the URL GitHub shows.

### Tip if you saw a blank page
- Ensure `index.html` is at the **repo root** (not inside a subfolder).
- In Pages settings, Folder must be `/ (root)`.
- Press **Ctrl+F5** (hard refresh) to bypass cache.
