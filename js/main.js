/* main.js - global scripts (nav interactions, smooth scroll, helpers) */
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links with .scroll-link class
  document.querySelectorAll('a.scroll-link').forEach(function(a){
    a.addEventListener('click', function(e){
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Simple active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  function onScroll(){
    const y = window.scrollY + 120;
    sections.forEach(sec => {
      if(sec.offsetTop <= y && (sec.offsetTop + sec.offsetHeight) > y){
        navLinks.forEach(l => l.classList.remove('active'));
        const link = document.querySelector('.nav-link[href="#'+sec.id+'"]');
        if(link) link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
});

// Small helper to show toast-like messages (simple)
export function showMessage(msg, elSelector){
  const parent = document.querySelector(elSelector || 'body');
  if(!parent) return;
  const div = document.createElement('div');
  div.className = 'alert alert-success';
  div.style.position = 'fixed';
  div.style.right = '12px';
  div.style.bottom = '12px';
  div.style.zIndex = 9999;
  div.innerText = msg;
  parent.appendChild(div);
  setTimeout(()=> div.remove(), 2500);
}