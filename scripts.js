
async function loadHacks(){
  const res = await fetch('hacks.json');
  const hacks = await res.json();
  const grid = document.getElementById('hacksGrid');
  hacks.forEach(h=>{
    const card = document.createElement('article');
    card.className = 'card';
    // Image uses Unsplash source with query so no download required
    const img = document.createElement('img');
    img.src = `https://source.unsplash.com/collection/190727/600x400/?${encodeURIComponent(h.img_query)}`;
    img.alt = h.title;
    const h3 = document.createElement('h3');
    h3.textContent = h.title;
    const p = document.createElement('p');
    p.textContent = h.short;
    const meta = document.createElement('div');
    meta.className = 'meta';
    // share links
    const linkIcon = document.createElement('a');
    linkIcon.href = h.source; linkIcon.target='_blank'; linkIcon.className='icon'; linkIcon.textContent='🔗';
    const fb = document.createElement('a'); fb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(h.source)}`; fb.target='_blank'; fb.className='icon'; fb.textContent='f';
    const tw = document.createElement('a'); tw.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(h.title)}&url=${encodeURIComponent(h.source)}`; tw.target='_blank'; tw.className='icon'; tw.textContent='t';
    const view = document.createElement('a'); view.href = h.source; view.target='_blank'; view.className='btn'; view.style.marginLeft='auto'; view.textContent='View';
    meta.append(linkIcon, fb, tw, view);
    card.append(img,h3,p,meta);
    grid.appendChild(card);
  });
}

document.getElementById('joinBtn').addEventListener('click', ()=>{
  const email = document.getElementById('email').value || 'No email provided';
  const subject = encodeURIComponent('Newsletter signup — Faceless Hacks');
  const body = encodeURIComponent('Please add this email to the newsletter list.\nEmail: ' + email);
  const mailto = `mailto:facelesshacks01@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
});

loadHacks().catch(err=>{
  console.error(err);
  const grid = document.getElementById('hacksGrid');
  grid.innerHTML = '<p style="color:#f88">Failed to load hacks.</p>';
});
