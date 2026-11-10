// 사업 소개 · ESG 서브 페이지 공통 (about.html 스크립트와 같은 동작)
const hd = document.getElementById('hd');
const hero = document.querySelector('.sub-hero');
const nav = document.getElementById('subnav');
const tabs = [...nav.querySelectorAll('a')];
const ft = document.querySelector('footer');

function onScroll() {
  const y = window.scrollY;
  hd.classList.toggle('solid', y > hero.offsetHeight - 80);
  nav.classList.toggle('show', y > hero.offsetHeight - 200 && ft.getBoundingClientRect().top > innerHeight * 0.65);
  let current = tabs[0];
  tabs.forEach(a => {
    const sec = document.querySelector(a.getAttribute('href'));
    if (sec.offsetTop - 200 <= y) current = a;
  });
  tabs.forEach(a => a.classList.toggle('on', a === current));
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
if (location.hash) history.scrollRestoration = 'manual';
addEventListener('load', () => {
  const target = location.hash && document.querySelector(location.hash);
  if (target) document.fonts.ready.then(() => setTimeout(() => target.scrollIntoView({ behavior: 'instant' }), 50));
});

function openForm() { document.getElementById('form').showModal(); }
function menu(open) { document.getElementById('fm').classList.toggle('open', open); document.body.style.overflow = open ? 'hidden' : ''; }

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.15 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));
