// Three-Panel Product Catalog - Vanilla JS (ES Modules)
const state = {
  data: null,
  selectedCategoryId: null,
  selectedProductId: null,
};

const els = {
  categoryList: document.getElementById('categoryList'),
  productList: document.getElementById('productList'),
  shopList: document.getElementById('shopList'),
  selectedProductHeader: document.getElementById('selectedProductHeader'),
};

async function loadData(){
  const res = await fetch('data/catalog.json', { cache: 'no-cache' });
  if (!res.ok) throw new Error('Failed to load data/catalog.json');
  const json = await res.json();
  state.data = json;
  // set defaults
  state.selectedCategoryId = json.categories[0]?.id ?? null;
  const firstProd = json.products.find(p => !state.selectedCategoryId || p.categoryId === state.selectedCategoryId);
  state.selectedProductId = firstProd?.id ?? null;
}

function currencyFmt(value, currency){
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(value);
  } catch {
    return value + ' ' + currency;
  }
}

function renderCategories(){
  const { categories } = state.data;
  els.categoryList.innerHTML = '';
  for (const cat of categories){
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.type = 'button';
    btn.setAttribute('data-category-id', cat.id);
    btn.setAttribute('aria-pressed', String(cat.id === state.selectedCategoryId));
    btn.innerHTML = `
      <img class="category-icon" src="${cat.icon}" alt="${cat.name} icon" loading="lazy" decoding="async" />
      <span>${cat.name}</span>
    `;
    btn.addEventListener('click', () => {
      if (state.selectedCategoryId !== cat.id){
        state.selectedCategoryId = cat.id;
        // select first product in this category
        const first = state.data.products.find(p => p.categoryId === cat.id);
        state.selectedProductId = first?.id ?? null;
        renderCategories();
        renderProducts();
        renderShops();
        // focus on product list
        const firstCardBtn = els.productList.querySelector('.product-card button');
        firstCardBtn?.focus();
      }
    });
    els.categoryList.appendChild(btn);
  }
}

function renderProducts(){
  const products = state.data.products.filter(p => !state.selectedCategoryId || p.categoryId === state.selectedCategoryId);
  els.productList.innerHTML = '';
  for (const p of products){
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('role', 'option');
    card.setAttribute('aria-selected', String(p.id === state.selectedProductId));
    card.setAttribute('data-product-id', p.id);

    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Select product ${p.name}`);
    btn.innerHTML = `
      <div class="product-image-wrap">
        <img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" />
      </div>
      <div class="product-name">${p.name}</div>
    `;
    btn.addEventListener('click', () => {
      if (state.selectedProductId !== p.id){
        state.selectedProductId = p.id;
        // update selection states
        els.productList.querySelectorAll('.product-card').forEach(el => {
          el.setAttribute('aria-selected', String(el.getAttribute('data-product-id') === p.id));
        });
        renderShops();
      }
    });

    card.appendChild(btn);
    els.productList.appendChild(card);
  }

  // Keyboard navigation for products
  els.productList.addEventListener('keydown', (e) => {
    const options = Array.from(els.productList.querySelectorAll('.product-card button'));
    if (!options.length) return;
    const idx = options.findIndex(b => b === document.activeElement);
    if (e.key === 'ArrowDown'){
      e.preventDefault();
      const next = options[Math.min(options.length - 1, (idx < 0 ? 0 : idx + 1))];
      next?.focus();
    } else if (e.key === 'ArrowUp'){
      e.preventDefault();
      const prev = options[Math.max(0, (idx < 0 ? 0 : idx - 1))];
      prev?.focus();
    } else if (e.key === 'Enter' || e.key === ' '){
      if (idx >= 0){
        e.preventDefault();
        options[idx].click();
      }
    }
  });
}

function renderShops(){
  const product = state.data.products.find(p => p.id === state.selectedProductId);
  els.selectedProductHeader.textContent = product ? product.name : 'Select a product';
  els.shopList.innerHTML = '';
  if (!product) return;

  for (const sp of product.shops){
    const shop = state.data.shops.find(s => s.id === sp.shopId);
    if (!shop) continue;
    const li = document.createElement('li');
    li.className = 'shop-item';
    li.innerHTML = `
      <img class="shop-logo" src="${shop.logo}" alt="${shop.name} logo" loading="lazy" decoding="async" />
      <a href="${sp.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${product.name} on ${shop.name}">${shop.name}</a>
      <div class="shop-price">${currencyFmt(sp.price, sp.currency)}</div>
    `;
    els.shopList.appendChild(li);
  }
}

(async function init(){
  try{
    await loadData();
    renderCategories();
    renderProducts();
    renderShops();
  }catch(err){
    console.error(err);
    document.body.innerHTML = '<pre style="color:#fff;padding:16px;">Failed to initialize app. ' + (err?.message || err) + '</pre>';
  }
})();
