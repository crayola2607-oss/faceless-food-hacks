
// Stars background canvas - simple particle field
(function(){ 
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
  window.addEventListener('resize', resize); resize();
  function rand(min,max){ return Math.random()*(max-min)+min; }
  for(let i=0;i<140;i++){
    particles.push({x:rand(0,w), y:rand(0,h), r:rand(0.5,2.5), v:rand(0.02,0.5), alpha:rand(0.2,0.95)});
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    for(let p of particles){
      p.y -= p.v;
      if(p.y<-10){p.y = h+10; p.x = Math.random()*w}
      ctx.beginPath();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = '#ffffff';
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// Smooth link transitions (fade-out on click)
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('a[href]');
  for(const a of links){
    if(a.target === '_blank') continue;
    a.addEventListener('click', function(e){
      const href = a.getAttribute('href')||'';
      if(href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('https://www.tiktok.com')) return;
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(()=> location.href = href, 300);
    });
  }
  // initial fade-in
  document.body.style.transition = 'opacity 350ms ease';
  document.body.style.opacity = '1';
});
