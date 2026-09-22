const dot=document.querySelector('.cursor-dot');
if(dot){window.addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'});}
const links=[...document.querySelectorAll('nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id))}}),{threshold:.35});
sections.forEach(s=>observer.observe(s));
