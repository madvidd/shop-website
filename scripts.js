function filterCards(cat){
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => {
    const ok = (cat === 'all') || (c.getAttribute('data-cat') === cat);
    c.style.display = ok ? 'grid' : 'none';
  });

  // update pills
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  const triggers = Array.from(document.querySelectorAll('.pill')).filter(p=>{
    return (cat==='all' && p.textContent.trim()==='All') || p.textContent.trim().toLowerCase()===cat;
  });
  if(triggers[0]) triggers[0].classList.add('active');
}

function toggleCategories(){
  const pills = document.getElementById('pills');
  if(!pills) return;
  const isShown = getComputedStyle(pills).display !== 'none';
  pills.style.display = isShown ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if(y){ y.textContent = new Date().getFullYear(); }
});
