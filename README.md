# GitHub Pages Home — Screenshot‑Inspired Replica

This is a real website (HTML/CSS/JS) that **recreates** a modern homepage using the **color palette extracted from your screenshot**. It **does not** display the screenshot; the layout is built with real components.

## Customize to match your screenshot exactly
Open `styles.css` and tweak:
- `:root` color variables (`--bg`, `--text`, `--primary`, `--secondary`, `--accent`) — they are auto‑derived from your image.
- Spacing, grid and radius tokens (e.g., `--radius`, `.section`, `.hero`, `.features`).

If your screenshot has specific modules (e.g., a top-left logo, jumbo title, 3-column features, and a footer), map them to the sections in `index.html`. Replace placeholder text in:
- Hero: `.h-title`, `.h-sub`, actions in `.h-actions`
- Feature cards: `.features` grid
- CTA section text
- Footer links

> Tip: For *pixel-perfect* alignment, set your OS/browser side-by-side with the screenshot and fine‑tune padding/margins in CSS until it matches.

---

## 0 → 100: Publish on GitHub Pages

### 1) Create the repo
- Log into GitHub and create a **public** repository.
- Name options:
  - **User site**: `your-username.github.io`
  - **Project site**: any name (e.g., `replica-home`)

### 2) Add files
Upload these to the repo root:
```
index.html
styles.css
scripts.js
assets/           (folder can hold logos, icons, etc.)
```

### 3) Enable Pages
- Go to **Settings → Pages**
- **Source**: *Deploy from a branch*
- **Branch**: `main` and **Folder**: `/ (root)`
- Save. After a short build, your site is live at the URL GitHub shows.

### 4) Preview locally (optional)
```bash
python -m http.server 8000
# open http://localhost:8000
```

### 5) Custom domain (optional)
- Create `CNAME` file in repo root with `www.example.com`
- Add DNS records at your domain registrar per GitHub Pages docs
- Enable **Enforce HTTPS** once the certificate is ready

---

## Structure overview
- **Header** with logo, links, and CTA
- **Hero** with headline, subtext, and real UI preview made of cards
- **Features** grid (3 columns on desktop → responsive)
- **CTA** stripe
- **Footer** with links

You can extend this with testimonials, pricing, FAQs, or a contact form (via a static form service).

---

## Theme JSON (auto-generated, from your screenshot)
{
  "bg": "#0e121a",
  "text": "#dbdad5",
  "primary": "#a56d29",
  "secondary": "#284843",
  "accent": "#a56d29"
}
