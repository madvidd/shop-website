# Three-Panel Product Catalog (GitHub Pages)

A static, vanilla HTML/CSS/JS site with a three-panel layout:
- **Left:** Shops & Prices for the selected product.
- **Middle:** Scrollable, single-column list of products. Clicking a card selects the product.
- **Right:** Category icons. Clicking a category filters the product list.

## File Structure

```
.
├── index.html
├── styles.css
├── app.js
├── data
│   └── catalog.json
└── assets
    ├── icons
    │   ├── shoes.svg
    │   ├── clothes.svg
    │   ├── furniture.svg
    │   └── technology.svg
    ├── shops
    │   ├── amazon.svg
    │   ├── zalando.svg
    │   ├── ikea.svg
    │   ├── target.svg
    │   ├── apple.svg
    │   └── bestbuy.svg
    └── products
        ├── adidas-shoes.svg
        ├── shoe-generic.svg
        ├── hoodie.svg
        ├── sofa.svg
        └── laptop.svg
```

## How It Works

- All data (categories, shops, products) lives in `data/catalog.json`.
- **Right panel** is built from `categories[]`.
- **Middle panel** filters `products[]` by selected category (single column).
- **Left panel** shows the shops for the selected product. Clicking a shop opens the product URL in a new tab.

## Run Locally

> Fetching JSON via `file://` is blocked by browsers. Use a tiny local web server.

### Option A: Python
```bash
# from this folder
python3 -m http.server 5500
# then open http://localhost:5500
```

### Option B: VS Code (Live Server)
- Install **Live Server** extension.
- Right click `index.html` → **Open with Live Server**.

## Deploy on GitHub Pages (From 0 to 100)

1. Create a new repository on GitHub (e.g., `three-panel-catalog`). Leave it **public** for GitHub Pages.

2. On your machine, put these files in a folder. Or upload directly via GitHub web UI (Add files → Upload files) preserving the structure above.
3. Commit to the **main** branch.
4. Go to **Settings → Pages**.

   - **Source:** Deploy from a branch

   - **Branch:** `main` (root `/`) → **Save**

5. Wait for Pages to build. Your site will be published at something like `https://<your-username>.github.io/three-panel-catalog/`.
6. If you see 404s for images/JSON, make sure paths are **relative** (as in this repo) and that Pages is using the **root** folder.
7. To edit data, update `data/catalog.json` and push again—no rebuild step required.

## Edit Data

- Add a shop in `shops[]` with `id`, `name`, and `logo` path.

- Add a product in `products[]` with `categoryId`, `image`, and a `shops[]` array of shop-price entries:

```json
{
  "id": "prod-xyz",
  "name": "New Product",
  "image": "assets/products/new-product.jpg",
  "categoryId": "technology",
  "shops": [
    { "shopId": "shop-amazon", "price": 123.45, "currency": "USD", "url": "https://example.com" }
  ]
}
```

- The left panel will automatically display shop links with prices.

## Accessibility

- Images have `alt` text and `loading="lazy"`.

- Category buttons expose `aria-pressed`.

- Product list supports keyboard navigation (Up/Down/Enter).

## License

MIT (feel free to use and adapt).
