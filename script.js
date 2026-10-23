history.scrollRestoration = 'manual';
window.scrollTo(0, 0);


(function() {
  const screen = document.getElementById('warningScreen');
  let pendingUrl = null;

  document.querySelector('a.dl-card[href*="gamejolt"]').addEventListener('click', function(e) {
    e.preventDefault();
    pendingUrl = this.href;
    screen.classList.add('visible');
  });

  document.getElementById('warnYes').addEventListener('click', () => {
    screen.classList.remove('visible');
    if (pendingUrl) window.open(pendingUrl, '_blank', 'noopener');
    pendingUrl = null;
  });

  document.getElementById('warnNo').addEventListener('click', () => {
    screen.classList.remove('visible');
    pendingUrl = null;
  });
})();

document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = document.getElementById(btn.dataset.target);
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);
  });
});

(function() {
  const slides = [
    'slidfes/fnfpe-rudm-screenshot-1779575905-8dyczabu.webp',
    'slidfes/fnfpe-rudm-screenshot-1779575963-6vzuvmde.webp',
    'slidfes/fnfpe-rudm-screenshot-1779576064-zxr2rzme.webp',
    'slidfes/fnfpe-rudm-screenshot-1779576170-nsit9ki4.webp',
    'slidfes/fnfpe-rudm-screenshot-1779576334-qfuwjm3i.webp',
    'slidfes/fnfpe-rudm-screenshot-1779576411-bssswfdh.webp',
    'slidfes/fnfpe-rudm-screenshot-1779576525-e6vtawz9.webp',
    'slidfes/fnfpe-rudm-screenshot-1779576621-vtwdx8ya.webp',
    'slidfes/fnfpe-rudm-screenshot-1779576693-hwurf4nb.webp',
    'slidfes/fnfpe-rudm-screenshot-1779576839-4m2vmc8t.webp',
  ];
  const container = document.querySelector('.about-slideshow');
  const imgA = document.createElement('img');
  const imgB = document.createElement('img');
  container.innerHTML = '';
  container.appendChild(imgA);
  container.appendChild(imgB);

  let idx = 0;
  let active = imgA;
  let next = imgB;

  function showSlide(i) {
    next.src = slides[i % slides.length];
    next.classList.remove('active', 'prev');
    void next.offsetWidth;
    next.classList.add('active');
    active.classList.remove('active');
    active.classList.add('prev');
    [active, next] = [next, active];
    idx++;
  }

  imgA.src = slides[0];
  imgA.classList.add('active');
  idx = 1;

  setInterval(() => showSlide(idx), 3500);
})();

document.querySelector('.hero-bg').style.backgroundImage = "radial-gradient(ellipse at 50% 40%, rgba(150,0,0,0.25) 0%, transparent 70%), url('banner/tooslow.webp')";

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenu.querySelectorAll('a').forEach((a, i) => a.style.setProperty('--i', i));
document.querySelectorAll('.lang-btn').forEach((b, i) => b.style.setProperty('--i', i));

burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

function closeMenu() { mobileMenu.classList.remove('open'); }

const sections = document.querySelectorAll('section[id]');
const navList = document.querySelector('.nav-links');
const navLinks = navList.querySelectorAll('a');
const navbar = document.getElementById('navbar');
let currentPage = null;
let swapTimer = null;

const REVEAL = [
  '.hero-content > *', '.section-head', '.about-text > p', '.about-features li',
  '.dl-cards', '.dl-note', '.ach-progress', '#gjPanel', '.achieve-sub',
  '.update-card', '#creditsBody > .section-sub', '.accordion-btn',
].join(', ');

function prepareReveal(page) {
  page.querySelectorAll(REVEAL).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--i', i);
  });
}

function showPage(id) {
  let target = document.getElementById(id);
  if (!target || target.tagName !== 'SECTION') {
    target = document.getElementById('home');
    if (location.hash) history.replaceState(null, '', location.pathname);
  }
  if (target === currentPage) return;

  const prev = currentPage;
  currentPage = target;
  document.body.dataset.page = target.id;
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + target.id));
  moveNavIndicator();
  clearTimeout(swapTimer);

  const swap = () => {
    sections.forEach(s => s.classList.remove('active', 'leaving'));
    prepareReveal(target);
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
    onScroll();
    document.dispatchEvent(new CustomEvent('pagechange', { detail: target.id }));
  };

  if (prev) {
    prev.classList.add('leaving');
    swapTimer = setTimeout(swap, 280);
  } else {
    swap();
  }
}

const navIndicator = document.createElement('li');
navIndicator.className = 'nav-indicator';
navIndicator.setAttribute('aria-hidden', 'true');
navList.appendChild(navIndicator);

function moveNavIndicator() {
  const a = navList.querySelector('a.active');
  const li = a && a.parentElement;
  if (!li || li.offsetParent === null) { navIndicator.style.opacity = '0'; return; }
  navIndicator.style.opacity = '1';
  navIndicator.style.transform = `translateX(${li.offsetLeft + li.offsetWidth / 2 - 8}px)`;
}
window.addEventListener('resize', moveNavIndicator);
document.fonts.ready.then(moveNavIndicator);
new MutationObserver(moveNavIndicator).observe(navList, { subtree: true, childList: true, characterData: true });

const checkersEl = document.querySelector('.checkers-inner');
const updatesList = document.querySelector('.updates-list');
let scrollTicking = false;

function onScroll() {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    scrollTicking = false;
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40 || document.body.dataset.page !== 'home');
    checkersEl.style.translate = `0 ${-(y * 0.3) % 96}px`;
    if (document.body.dataset.page === 'updates') {
      const r = updatesList.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      updatesList.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(3));
    }
  });
}

window.addEventListener('hashchange', () => showPage(location.hash.slice(1)));
window.addEventListener('scroll', onScroll, { passive: true });

(function() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const hero = document.getElementById('home');
  const bg = hero.querySelector('.hero-bg');
  const layers = [
    [hero.querySelector('.logo-ring'),    8],
    [hero.querySelector('.logo-bandana'), 14],
    [hero.querySelector('.logo-sonic'),   20],
    [hero.querySelector('.logo-eyes'),    26],
  ];
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

  function tick() {
    cx += (tx - cx) * 0.07;
    cy += (ty - cy) * 0.07;
    layers.forEach(([el, depth]) => { el.style.translate = `${cx * depth}px ${cy * depth}px`; });
    bg.style.translate = `${-cx * 18}px ${-cy * 18}px`;
    raf = (Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005) ? requestAnimationFrame(tick) : null;
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }

  hero.addEventListener('mousemove', e => {
    tx = e.clientX / window.innerWidth - 0.5;
    ty = e.clientY / window.innerHeight - 0.5;
    kick();
  });
  hero.addEventListener('mouseleave', () => { tx = 0; ty = 0; kick(); });
})();

const observer = new IntersectionObserver((entries) => {
  let n = 0;
  entries.forEach(e => {
    const el = e.target;
    if (e.isIntersecting) {
      if (!el.classList.contains('visible')) {
        el.style.setProperty('--d', Math.min(n++, 16) * 40 + 'ms');
        el.classList.add('visible');
      }
    } else if (!el.closest('section.active')) {
      el.classList.remove('visible');
    }
  });
}, { threshold: 0.05 });


(function() {
  const credits = [
    { name: "Treno",            role: "Lead Director, Artist and Animator",          url: "https://www.youtube.com/@treno7178" },
    { name: "MeDicenKay",       role: "Director, Composer, Charter and Voice Actor for Devoid", url: "https://www.youtube.com/@MeDicenKay" },
    { name: "KivFLP",           role: "Director and Composer",                       url: "https://www.youtube.com/@Kiv_FLP" },
    { name: "Dudu",             role: "Main Coder and Charter",                      url: "https://www.youtube.com/@dudugd20" },
    { name: "KrazyKazu",        role: "Coder",                                       url: null },
    { name: "Raimbowcore12",    role: "Coder and Charter",                           url: "https://www.youtube.com/@raimbowcore12" },
    { name: "AssmanBruh",       role: "Coder",                                       url: "https://www.youtube.com/@assmanbruh" },
    { name: "Remagets",         role: "Coder",                                       url: "https://www.youtube.com/@printcodeRem" },
    { name: "CherryLemur",      role: "Coder",                                       url: "https://youtube.com/@thesillysoniava" },
    { name: "Kophy232",         role: "Coder",                                       url: "https://www.youtube.com/@kophy232" },
    { name: "Wolfie",           role: "Coder and Charter",                           url: "https://www.youtube.com/@Wolfie_1985" },
    { name: "MaysLastPlay",     role: "Mobile Coder",                                url: "https://www.youtube.com/channel/UCx0LxtFR8ROd9sFAq-UxDfw" },
    { name: "Snorby",           role: "Coder",                                       url: "https://x.com/JustX_LOL" },
    { name: "HyperDream",       role: "Artist",                                      url: "https://youtube.com/@hyperisdreaming" },
    { name: "Engineer",         role: "Artist",                                      url: "https://www.youtube.com/@engineer-vc2zw" },
    { name: "Artisus",          role: "Artist",                                      url: "https://www.youtube.com/@Artless-f2y" },
    { name: "CM_drawe",         role: "Artist",                                      url: "https://x.com/CM_drawe" },
    { name: "BarcoBasurero",    role: "Artist",                                      url: "https://youtube.com/@barcobasurerow" },
    { name: "Sebas1554",        role: "Artist and Animator",                         url: "https://x.com/LG090297" },
    { name: "VN2",              role: "Artist",                                      url: "https://x.com/Art_VN2" },
    { name: "Mariano",          role: "Artist",                                      url: "https://youtube.com/@mar-z6b5k" },
    { name: "Kostya Hernandez", role: "Artist and 3D Artist",                        url: "https://x.com/HernandezKostya" },
    { name: "Tomasero",         role: "Artist, Animator and Charter",                url: "https://www.youtube.com/@eltomasero3367" },
    { name: "Pekoso",           role: "Artist",                                      url: "https://x.com/Pekoso_72" },
    { name: "Fare.dz",          role: "Artist",                                      url: "https://x.com/niggstress21" },
    { name: "Suonima",          role: "Artist",                                      url: "https://www.x.com/SuonimaG_" },
    { name: "johnwindowsxp",    role: "3D Artist",                                   url: "https://www.youtube.com/@johwindoesxp" },
    { name: "Nebros",           role: "Animator and 3D Artist",                      url: "https://x.com/ebrosBM" },
    { name: "RoxasWhite_",      role: "Pixel Artist",                                url: "https://youtube.com/@whiteroxas_" },
    { name: "Sr. Kleynner",     role: "Pixel Artist",                                url: "https://youtube.com/@srkleynner" },
    { name: "T4co",             role: "Pixel Artist",                                url: "https://www.youtube.com/@lithium5356" },
    { name: "SlaxPe",           role: "Pixel Artist",                                url: "https://www.youtube.com/@SlaxBy2010" },
    { name: "ExeTh3F4k3d",      role: "Composer",                                    url: "https://youtube.com/@exethefaker" },
    { name: "DaRealT0bi",       role: "Composer",                                    url: "https://www.youtube.com/@MxdT0biMain" },
    { name: "LifeyTheRay",      role: "Composer",                                    url: "https://www.youtube.com/@Lifeylmao" },
    { name: "KraimYT",          role: "Composer",                                    url: null },
    { name: "DX Black Fire",    role: "Composer",                                    url: "https://www.youtube.com/@DXBlackFirelol" },
    { name: "LyricalMaxi",      role: "Composer",                                    url: "https://www.youtube.com/@lyricalmaxi" },
    { name: "rak",              role: "Composer",                                    url: "https://youtube.com/@rakeishon" },
    { name: "Rogtary",          role: "Composer",                                    url: "https://youtube.com/@rogtarymusic" },
    { name: "Ryan2511Pro",      role: "Composer",                                    url: "https://www.youtube.com/@ryan2511pro" },
    { name: "Tomis Turbando",   role: "Composer",                                    url: "https://youtube.com/@tomisturbando" },
    { name: "Sanko",            role: "Composer",                                    url: "https://youtube.com/@sanko89858" },
    { name: "Alex_Hamud",       role: "Composer and Voice Actor for Xenophanes and Scorched", url: "https://www.youtube.com/@Alex_Hamud" },
    { name: "PolloRostizado",   role: "Main Charter",                                url: "https://youtube.com/@ronmcbonbon5660" },
    { name: "Sr. EspantaViejas",role: "Charter",                                     url: "https://x.com/EspantaViejas97" },
    { name: "sevulda",          role: "Charter",                                     url: "https://x.com/Sevulda230" },
    { name: "LuisukeDestroyer", role: "Voice Actor for Bratwurst",                   url: "https://www.youtube.com/@LuisukeDestroyer" },
  ];

  const grid = document.getElementById('creditsGrid');
  credits.forEach(c => {
    const card = document.createElement(c.url ? 'a' : 'div');
    card.className = 'credit-card fade-in';
    if (c.url) {
      card.href = c.url;
      card.target = '_blank';
      card.rel = 'noopener';
      card.style.cursor = 'pointer';
    }
    card.innerHTML = `<div class="credit-name">${c.name}</div><div class="credit-role">${c.role}</div>`;
    grid.appendChild(card);
    observer.observe(card);
  });
})();

(function() {
  const ACH = window.ACHIEVEMENTS;
  const TROPHY_MAP = ACH.trophies;
  const LOCKED_ICON = 'sprites/achievements/locked.webp';
  let achievedTrophies = [];

  const grid = document.getElementById('achieveGrid');
  const cards = ACH.list.map(a => {
    const card = document.createElement('div');
    card.className = 'char-card fade-in' + (a.secret ? ' secret' : '');
    card.dataset.id = a.id;
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = () => { img.onerror = null; img.src = LOCKED_ICON; };
    card.append(img, document.createElement('span'), document.createElement('small'));
    grid.appendChild(card);
    observer.observe(card);
    return card;
  });

  function isUnlocked(a) {
    const gjId = TROPHY_MAP[a.id];
    return gjId != null && achievedTrophies.includes(gjId);
  }

  function renderCards() {
    const code = window.currentLang || 'en';
    const tr = ACH.i18n[code] || { t: {} };
    const site = (window.LANGS && LANGS[code]) || {};
    const legacy = site.achievementsList || {};
    const secretDesc = tr.secretDesc || site.achievementSecretDesc || ACH.i18n.en.secretDesc;

    ACH.list.forEach((a, i) => {
      const card = cards[i];
      const [img, title, desc] = card.children;
      const t = tr.t[a.id] || [];
      const name = t[0] || (legacy[a.id] && legacy[a.id].title) || a.name;
      const description = t[1] || (legacy[a.id] && legacy[a.id].desc) || a.desc;
      const unlocked = isUnlocked(a);
      const hidden = a.secret && !unlocked;

      card.classList.toggle('unlocked', unlocked);
      card.classList.toggle('locked', !unlocked);
      const src = hidden || !a.icon ? LOCKED_ICON : `sprites/achievements/${a.id}.webp`;
      if (img.getAttribute('src') !== src) img.src = src;
      img.alt = hidden ? '' : name;
      title.textContent = hidden ? name.replace(/\S/g, '?') : name;
      desc.textContent = hidden ? secretDesc : description;
    });
  }
  window.renderAchievements = renderCards;
  renderCards();

  const countEl = document.getElementById('achCount');
  const totalEl = document.getElementById('achTotal');
  const barEl   = document.getElementById('achBar');
  let unlockedCount = 0;
  let countRaf = null;

  function animateProgress() {
    const total = ACH.list.length;
    totalEl.textContent = total;
    cancelAnimationFrame(countRaf);
    barEl.style.transition = 'none';
    barEl.style.width = '0%';
    void barEl.offsetWidth;
    barEl.style.transition = '';
    barEl.style.width = (unlockedCount / total * 100) + '%';
    const start = performance.now();
    const step = now => {
      const t = Math.min(1, (now - start) / 1000);
      countEl.textContent = Math.round(unlockedCount * (1 - Math.pow(1 - t, 3)));
      if (t < 1) countRaf = requestAnimationFrame(step);
    };
    countRaf = requestAnimationFrame(step);
  }

  function updateProgress() {
    unlockedCount = ACH.list.filter(isUnlocked).length;
    animateProgress();
  }
  updateProgress();
  document.addEventListener('pagechange', e => { if (e.detail === 'gallery') animateProgress(); });

  if (location.pathname.replace(/\/$/, '') === '/gallery') {
    history.replaceState(null, '', '/#gallery-section');
  }

  function applyTrophies(trophyIds) {
    achievedTrophies = trophyIds;
    renderCards();
    updateProgress();
  }

  function resetCards() {
    applyTrophies([]);
  }

  function setStatus(msg) {
    document.getElementById('gjStatus').textContent = msg;
  }

  function showConnected(username) {
    document.getElementById('gjLogin').style.display = 'none';
    document.getElementById('gjConnected').style.display = 'flex';
    document.getElementById('gjUser').textContent = '● ' + username.toUpperCase();
  }

  function showLogin() {
    document.getElementById('gjLogin').style.display = 'block';
    document.getElementById('gjConnected').style.display = 'none';
    resetCards();
    setStatus('');
  }

  async function fetchTrophies(username, token) {
    setStatus('Connecting...');
    try {
      const res  = await fetch(`/.netlify/functions/trophies?username=${encodeURIComponent(username)}&token=${encodeURIComponent(token)}`);
      let data = {};
      try { data = await res.json(); } catch (_) {}
      if (!res.ok) {
        setStatus(data.error || (res.status === 404 ? 'Trophy server not found (Netlify function missing)' : `Error ${res.status}`));
        return false;
      }
      if (!Array.isArray(data.trophyIds)) { setStatus('Unexpected response from trophy server'); return false; }
      applyTrophies(data.trophyIds);
      setStatus(`${data.trophyIds.length} trophies unlocked`);
      return true;
    } catch {
      setStatus('Connection failed');
      return false;
    }
  }

  const saved = JSON.parse(localStorage.getItem('gjSession') || 'null');
  if (saved) {
    fetchTrophies(saved.username, saved.token).then(ok => {
      if (ok) showConnected(saved.username);
      else localStorage.removeItem('gjSession');
    });
  }

  document.getElementById('gjSubmit').addEventListener('click', async () => {
    const username = document.getElementById('gjUsername').value.trim();
    const token    = document.getElementById('gjToken').value.trim();
    if (!username || !token) { setStatus('Enter username and token'); return; }
    const ok = await fetchTrophies(username, token);
    if (ok) {
      localStorage.setItem('gjSession', JSON.stringify({ username, token }));
      showConnected(username);
    }
  });

  document.getElementById('gjLogout').addEventListener('click', () => {
    localStorage.removeItem('gjSession');
    showLogin();
  });
})();

(function() {
  const btn    = document.getElementById('cmtSubmit');
  const status = document.getElementById('cmtStatus');
  if (!btn || !status) return;

  function setStatus(msg, cls) {
    status.textContent = msg;
    status.className   = cls || '';
  }

  function getLangStrings() {
    const code = localStorage.getItem('exeLang') || 'en';
    return (window.LANGS && window.LANGS[code] && window.LANGS[code].comments) || {
      errFields: 'Enter your name and a comment.',
      sending:   'Sending...',
      ok:        'Comment sent!',
      errConn:   'Connection failed. Try again.',
    };
  }

  btn.addEventListener('click', async () => {
    const name    = document.getElementById('cmtName').value.trim();
    const message = document.getElementById('cmtMsg').value.trim();
    const T = getLangStrings();
    if (!name || !message) { setStatus(T.errFields, 'err'); return; }

    btn.disabled = true;
    setStatus(T.sending);

    try {
      const res  = await fetch('/.netlify/functions/comment', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, message }),
      });
      const data = await res.json();
      if (!res.ok) { setStatus(data.error || T.errConn, 'err'); return; }
      setStatus(T.ok, 'ok');
      document.getElementById('cmtName').value = '';
      document.getElementById('cmtMsg').value  = '';
    } catch {
      setStatus(T.errConn, 'err');
    } finally {
      btn.disabled = false;
    }
  });
})();

function toggleMiniAccordion(btn) {
  const body = document.getElementById(btn.dataset.target);
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
}

// LIGHTBOX
const lightbox = (function() {
  const EASE = 'cubic-bezier(.16,1,.3,1)';
  const $ = id => document.getElementById(id);
  const root    = $('lightbox');
  const stage   = $('lbStage');
  const frame   = $('lbFrame');
  const ambient = $('lbAmbient');
  const strip   = $('lbStrip');
  const loader  = $('lbLoader');
  const caption = root.querySelector('.lb-caption');

  let items = [];
  let index = 0;
  let media = null;
  let isOpen = false;
  let zoomed = false, zoomScale = 1, panX = 0, panY = 0;
  let lastFocus = null;
  let loaderTimer = null;

  const pad = n => String(n).padStart(2, '0');
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const cssUrl = u => `url("${u.replace(/["\\]/g, '\\$&')}")`;

  function parseName(name) {
    const clean = name.replace(/_+/g, ' ').trim();
    let m = clean.match(/^(.*?)\s*(?:-\s*)?\bby\s+(.+)$/i);
    if (m && m[1]) return { title: m[1].replace(/[\s-]+$/, ''), author: m[2] };
    m = clean.match(/^(.*\S)\s+-\s+(.+)$/);
    if (m) return { title: m[1], author: m[2] };
    return { title: clean, author: '' };
  }

  function pathFor(grid) {
    const parts = [];
    let body = grid.closest('.mini-accordion-body');
    while (body) {
      const label = body.previousElementSibling && body.previousElementSibling.querySelector('span');
      if (label) parts.unshift(label.textContent);
      body = body.parentElement.closest('.mini-accordion-body');
    }
    const top = grid.closest('.accordion-body');
    const topLabel = top && document.querySelector(`[data-target="${top.id}"] span`);
    if (topLabel) parts.unshift(topLabel.textContent);
    return parts.join(' / ');
  }

  function showLoaderSoon() {
    clearTimeout(loaderTimer);
    loaderTimer = setTimeout(() => loader.classList.add('show'), 180);
  }
  function hideLoader() {
    clearTimeout(loaderTimer);
    loader.classList.remove('show');
  }

  function applySize(el, aspect) {
    const w = Math.min(frame.clientWidth, frame.clientHeight * aspect);
    el.style.width = w + 'px';
    el.style.height = (w / aspect) + 'px';
  }

  function createMedia(item) {
    let el;
    if (item.type === 'video') {
      el = document.createElement('video');
      el.src = item.src;
      el.loop = true;
      el.playsInline = true;
      el.controls = true;
      if (item.thumb) el.poster = item.thumb;
      showLoaderSoon();
      el.addEventListener('canplay', () => { if (media === el) hideLoader(); }, { once: true });
    } else {
      el = document.createElement('img');
      el.alt = item.name;
      el.draggable = false;
      el.src = item.thumb || item.src;
      if (item.thumb && item.thumb !== item.src) {
        el.classList.add('is-soft');
        showLoaderSoon();
        const full = new Image();
        full.onload = () => {
          el.src = item.src;
          el.classList.remove('is-soft');
          if (media === el) hideLoader();
        };
        full.onerror = () => { if (media === el) hideLoader(); };
        full.src = item.src;
      }
    }
    el.classList.add('lb-media');
    return el;
  }

  function aspectOf(el, item) {
    if (item.aspect) return Promise.resolve(item.aspect);
    return new Promise(resolve => {
      const isVid = el.tagName === 'VIDEO';
      const done = () => {
        item.aspect = isVid ? el.videoWidth / el.videoHeight : el.naturalWidth / el.naturalHeight;
        resolve(item.aspect || 16 / 9);
      };
      if (isVid ? el.readyState >= 1 : (el.complete && el.naturalWidth)) return done();
      el.addEventListener(isVid ? 'loadedmetadata' : 'load', done, { once: true });
      el.addEventListener('error', () => resolve(16 / 9), { once: true });
    });
  }

  function thumbPose(el, thumb) {
    const t = thumb.getBoundingClientRect();
    const f = el.getBoundingClientRect();
    const k = f.width / el.offsetWidth || 1;
    const s = Math.max(t.width / f.width, t.height / f.height);
    const dx = (t.left + t.width / 2 - (f.left + f.width / 2)) / k;
    const dy = (t.top + t.height / 2 - (f.top + f.height / 2)) / k;
    const ix = Math.max(0, (el.offsetWidth - t.width / k / s) / 2);
    const iy = Math.max(0, (el.offsetHeight - t.height / k / s) / 2);
    return { transform: `translate(${dx}px, ${dy}px) scale(${s})`, clipPath: `inset(${iy}px ${ix}px)` };
  }

  function thumbOnScreen(thumb) {
    const r = thumb.getBoundingClientRect();
    return r.width > 0 && r.bottom > 0 && r.top < window.innerHeight;
  }

  function updateChrome(item) {
    $('lbIndex').textContent = pad(index + 1);
    $('lbTotal').textContent = pad(items.length);
    const { title, author } = parseName(item.name);
    $('lbTitle').textContent = title;
    $('lbAuthor').textContent = author ? 'by ' + author : '';
    caption.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }],
      { duration: 450, easing: EASE });
    $('lbOpenBtn').href = item.src;
    $('lbZoomBtn').disabled = item.type === 'video';

    if (item.thumb) {
      const layer = document.createElement('div');
      layer.className = 'lb-ambient-layer';
      layer.style.backgroundImage = cssUrl(item.thumb);
      ambient.appendChild(layer);
      layer.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800, easing: 'ease', fill: 'forwards' })
        .onfinish = () => { while (ambient.children.length > 1) ambient.firstElementChild.remove(); };
    }

    Array.from(strip.children).forEach((b, i) => b.classList.toggle('is-active', i === index));
    const active = strip.children[index];
    if (active) {
      strip.scrollTo({ left: active.offsetLeft - strip.clientWidth / 2 + active.offsetWidth / 2, behavior: 'smooth' });
    }
  }

  function preloadAround() {
    [index - 1, index + 1].forEach(i => {
      const it = items[(i + items.length) % items.length];
      if (it && it.type === 'img') new Image().src = it.src;
    });
  }

  function show(i, dir, fromThumb) {
    index = (i + items.length) % items.length;
    const item = items[index];
    resetZoom();

    const old = media;
    const el = createMedia(item);
    media = el;
    el.style.opacity = '0';
    frame.appendChild(el);
    updateChrome(item);
    preloadAround();

    aspectOf(el, item).then(aspect => {
      if (media !== el) return;
      applySize(el, aspect);
      el.style.opacity = '';
      if (fromThumb && thumbOnScreen(fromThumb)) {
        el.animate([{ ...thumbPose(el, fromThumb), opacity: 0.5 }, { transform: 'none', clipPath: 'inset(0px 0px)', opacity: 1 }],
          { duration: 650, easing: EASE });
      } else {
        el.animate(dir
          ? [{ opacity: 0, transform: `translateX(${dir * 80}px) scale(.97)`, filter: 'blur(10px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }]
          : [{ opacity: 0, transform: 'scale(.94)' }, { opacity: 1, transform: 'none' }],
          { duration: 600, easing: EASE });
      }
      if (el.tagName === 'VIDEO') el.play().catch(() => { el.muted = true; el.play().catch(() => {}); });
    });

    if (old) {
      if (old.tagName === 'VIDEO') old.pause();
      const from = old.style.transform || 'none';
      old.animate([{ opacity: old.style.opacity || 1, transform: from }, { opacity: 0, transform: `translateX(${-(dir || 0) * 80}px) scale(.97)`, filter: 'blur(10px)' }],
        { duration: 380, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' })
        .onfinish = () => old.remove();
    }
  }

  function move(dir) {
    if (items.length > 1) show(index + dir, dir);
  }

  function buildStrip() {
    strip.innerHTML = '';
    items.forEach((it, i) => {
      const b = document.createElement('button');
      b.className = 'lb-thumb' + (it.type === 'video' ? ' is-video' : '');
      b.setAttribute('aria-label', parseName(it.name).title);
      if (it.thumb) {
        const im = document.createElement('img');
        im.src = it.thumb;
        im.alt = '';
        im.loading = 'lazy';
        b.appendChild(im);
      }
      b.addEventListener('click', () => { if (i !== index) show(i, i > index ? 1 : -1); });
      strip.appendChild(b);
    });
  }

  function open(thumbEl) {
    const grid = thumbEl.closest('.gallery-img-grid');
    const els = Array.from(grid.querySelectorAll('img, video'));
    items = els.map(t => {
      const isVid = t.tagName === 'VIDEO';
      return {
        el: t,
        type: isVid ? 'video' : 'img',
        src: isVid ? t.src : (t.dataset.fullSrc || t.src),
        thumb: isVid ? t.poster : t.src,
        name: t.alt || t.title || '',
        aspect: !isVid && t.naturalWidth ? t.naturalWidth / t.naturalHeight : 0,
      };
    });
    $('lbPath').textContent = pathFor(grid);
    root.classList.toggle('single', items.length < 2);
    buildStrip();

    lastFocus = document.activeElement;
    frame.innerHTML = '';
    ambient.innerHTML = '';
    media = null;
    isOpen = true;
    document.documentElement.style.overflow = 'hidden';
    root.classList.add('visible');
    void root.offsetWidth;
    root.classList.add('open');
    show(els.indexOf(thumbEl), 0, thumbEl);
    $('lbCloseBtn').focus({ preventScroll: true });
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    hideLoader();
    root.classList.remove('open', 'zoomed');
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});

    const finish = () => {
      root.classList.remove('visible');
      frame.innerHTML = '';
      ambient.innerHTML = '';
      media = null;
      document.documentElement.style.overflow = '';
      if (lastFocus) lastFocus.focus({ preventScroll: true });
    };

    const m = media;
    if (!m) return finish();
    if (m.tagName === 'VIDEO') m.pause();
    const thumb = items[index].el;
    let anim;
    if (thumbOnScreen(thumb) && !zoomed) {
      const current = m.style.transform || 'none';
      m.classList.add('is-dragging');
      m.style.transform = 'none';
      anim = m.animate([{ transform: current, clipPath: 'inset(0px 0px)', opacity: 1 }, { ...thumbPose(m, thumb), opacity: 0.4 }],
        { duration: 480, easing: EASE, fill: 'forwards' });
    } else {
      anim = m.animate([{ opacity: 1 }, { opacity: 0, transform: 'scale(.92)' }], { duration: 300, easing: 'ease-in', fill: 'forwards' });
    }
    anim.onfinish = finish;
    zoomed = false;
  }

  function setPan(x, y) {
    const ox = Math.max(0, media.offsetWidth * zoomScale - frame.clientWidth) / 2;
    const oy = Math.max(0, media.offsetHeight * zoomScale - frame.clientHeight) / 2;
    panX = clamp(x, -ox, ox);
    panY = clamp(y, -oy, oy);
    media.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
  }

  function panToward(cx, cy) {
    const r = frame.getBoundingClientRect();
    const px = clamp((cx - r.left) / r.width, 0, 1);
    const py = clamp((cy - r.top) / r.height, 0, 1);
    setPan((0.5 - px) * (media.offsetWidth * zoomScale - frame.clientWidth),
           (0.5 - py) * (media.offsetHeight * zoomScale - frame.clientHeight));
  }

  function toggleZoom(cx, cy) {
    if (!media || media.tagName === 'VIDEO') return;
    if (zoomed) return resetZoom();
    zoomScale = clamp(media.naturalWidth / media.offsetWidth, 2, 4);
    zoomed = true;
    root.classList.add('zoomed');
    if (cx == null) setPan(0, 0); else panToward(cx, cy);
  }

  function resetZoom() {
    if (!zoomed) return;
    zoomed = false;
    zoomScale = 1;
    panX = panY = 0;
    root.classList.remove('zoomed');
    if (media) media.style.transform = '';
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else if (root.requestFullscreen) root.requestFullscreen().catch(() => {});
  }

  let drag = null;

  stage.addEventListener('pointerdown', e => {
    if (!media || e.button > 0 || e.target.closest('.lb-nav') || e.target.tagName === 'VIDEO') return;
    drag = {
      id: e.pointerId, x: e.clientX, y: e.clientY, panX, panY, moved: false, axis: null,
      onMedia: e.target === media,
      k: frame.getBoundingClientRect().width / frame.clientWidth || 1,
    };
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
  });

  stage.addEventListener('pointermove', e => {
    if (!media) return;
    if (!drag) {
      if (zoomed && e.pointerType === 'mouse') panToward(e.clientX, e.clientY);
      return;
    }
    if (e.pointerId !== drag.id) return;
    const dx = (e.clientX - drag.x) / drag.k;
    const dy = (e.clientY - drag.y) / drag.k;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;
    drag.moved = true;
    media.classList.add('is-dragging');

    if (zoomed) {
      if (e.pointerType === 'mouse') panToward(e.clientX, e.clientY);
      else setPan(drag.panX + dx, drag.panY + dy);
      return;
    }
    drag.axis = drag.axis || (Math.abs(dx) > Math.abs(dy) ? 'x' : 'y');
    if (drag.axis === 'x') {
      media.style.transform = `translateX(${dx}px) rotate(${dx / 60}deg)`;
      media.style.opacity = 1 - Math.min(Math.abs(dx) / 700, 0.5);
    } else {
      const down = Math.max(0, dy);
      media.style.transform = `translateY(${down}px) scale(${1 - Math.min(down / 1600, 0.2)})`;
      root.style.setProperty('--pull', Math.min(down / 300, 1));
    }
    drag.dx = dx;
    drag.dy = dy;
  });

  function endDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag;
    drag = null;
    if (!media) return;
    media.classList.remove('is-dragging');
    root.style.setProperty('--pull', 0);

    if (!d.moved) {
      if (d.onMedia) toggleZoom(e.clientX, e.clientY);
      else if (!zoomed) close();
      return;
    }
    if (zoomed) return;
    if (d.axis === 'x' && Math.abs(d.dx) > 80 && items.length > 1) {
      move(d.dx < 0 ? 1 : -1);
    } else if (d.axis === 'y' && d.dy > 120) {
      close();
    } else {
      media.style.transform = '';
      media.style.opacity = '';
    }
  }
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);

  $('lbPrev').addEventListener('click', () => move(-1));
  $('lbNext').addEventListener('click', () => move(1));
  $('lbCloseBtn').addEventListener('click', close);
  $('lbZoomBtn').addEventListener('click', () => toggleZoom());
  $('lbFsBtn').addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', () => root.classList.toggle('fullscreen', !!document.fullscreenElement));

  document.addEventListener('keydown', e => {
    if (!isOpen) return;
    switch (e.key) {
      case 'ArrowLeft':  move(-1); break;
      case 'ArrowRight': move(1); break;
      case 'Home':       if (index !== 0) show(0, -1); break;
      case 'End':        if (index !== items.length - 1) show(items.length - 1, 1); break;
      case 'Escape':     zoomed ? resetZoom() : close(); break;
      case 'z': case 'Z': toggleZoom(); break;
      case 'f': case 'F': toggleFullscreen(); break;
      default: return;
    }
    e.preventDefault();
  });

  window.addEventListener('resize', () => {
    if (!isOpen || !media) return;
    const item = items[index];
    if (item.aspect) applySize(media, item.aspect);
    resetZoom();
  });

  return { open, close };
})();

function lbOpen(el) { lightbox.open(el); }

(function() {
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  const VOLUME = 0.4;
  let wanted = localStorage.getItem('exeMusic') !== 'off';
  let fadeRaf = null;
  let resumeOnShow = false;
  let ducks = 0;

  function fadeTo(target, ms, done) {
    cancelAnimationFrame(fadeRaf);
    const from = audio.volume;
    const start = performance.now();
    const step = now => {
      const t = Math.min(1, (now - start) / ms);
      audio.volume = from + (target - from) * t;
      if (t < 1) fadeRaf = requestAnimationFrame(step);
      else if (done) done();
    };
    fadeRaf = requestAnimationFrame(step);
  }

  function play() {
    if (audio.paused) audio.volume = 0;
    audio.play().then(() => fadeTo(ducks ? VOLUME * 0.15 : VOLUME, 1800)).catch(() => {});
  }

  function stop() {
    fadeTo(0, 500, () => audio.pause());
    setTimeout(() => { if (!wanted) audio.pause(); }, 600);
  }

  function sync() {
    const on = wanted && !audio.paused;
    btn.classList.toggle('playing', on);
    btn.setAttribute('aria-pressed', String(on));
  }
  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);

  btn.addEventListener('click', () => {
    wanted = !wanted || audio.paused;
    localStorage.setItem('exeMusic', wanted ? 'on' : 'off');
    if (wanted) play(); else stop();
    sync();
  });

  function firstGesture(e) {
    if (btn.contains(e.target)) return;
    document.removeEventListener('pointerdown', firstGesture, true);
    document.removeEventListener('keydown', firstGesture, true);
    if (wanted && audio.paused) play();
  }
  document.addEventListener('pointerdown', firstGesture, true);
  document.addEventListener('keydown', firstGesture, true);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (!audio.paused) { resumeOnShow = true; audio.pause(); }
    } else if (resumeOnShow) {
      resumeOnShow = false;
      if (wanted) play();
    }
  });

  document.addEventListener('play', e => {
    const v = e.target;
    if (!(v instanceof HTMLVideoElement) || v.muted || v.dataset.ducking) return;
    v.dataset.ducking = '1';
    ducks++;
    if (!audio.paused) fadeTo(VOLUME * 0.15, 400);
  }, true);

  document.addEventListener('pause', e => {
    const v = e.target;
    if (!(v instanceof HTMLVideoElement) || !v.dataset.ducking) return;
    delete v.dataset.ducking;
    ducks = Math.max(0, ducks - 1);
    if (!ducks && !audio.paused) fadeTo(VOLUME, 900);
  }, true);

  sync();
})();

(function() {
  const memesEl = document.getElementById('galleryMemesBody');
  const scrappedEl = document.getElementById('galleryScrappedBody');
  const wipsEl = document.getElementById('galleryWipsBody');
  if (!memesEl && !scrappedEl && !wipsEl) return;

  let requested = false;
  function loadGallery() {
    if (requested) return;
    requested = true;
    const s = document.createElement('script');
    s.src = 'gallery-data.js';
    s.onload = () => render(window.GALLERY_DATA);
    s.onerror = () => { requested = false; s.remove(); };
    document.head.appendChild(s);
  }
  document.addEventListener('pagechange', e => { if (e.detail === 'gallery-section') loadGallery(); });
  document.querySelectorAll('a[href="#gallery-section"]').forEach(a => {
    a.addEventListener('pointerenter', loadGallery, { once: true });
    a.addEventListener('focus', loadGallery, { once: true });
  });

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
  }, { threshold: 0.25 });

  function makeMediaEl(item) {
    let el;
    if (item.type === 'video') {
      el = document.createElement('video');
      el.src = item.src;
      el.loop = true;
      el.muted = true;
      el.playsInline = true;
      el.preload = 'none';
      el.title = item.name;
      if (item.poster) el.poster = item.poster;
      videoObserver.observe(el);
    } else {
      el = document.createElement('img');
      el.src = item.thumb || item.src;
      el.dataset.fullSrc = item.src;
      el.alt = item.name;
      el.loading = 'lazy';
    }
    el.addEventListener('click', () => lbOpen(el));
    return el;
  }

  function makeGrid(items) {
    const grid = document.createElement('div');
    grid.className = 'gallery-img-grid';
    items.forEach(item => grid.appendChild(makeMediaEl(item)));
    return grid;
  }

  function makeMiniAccordion(id, label, contentEl) {
    const frag = document.createDocumentFragment();

    const btn = document.createElement('button');
    btn.className = 'mini-accordion-btn';
    btn.dataset.target = id;
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    const arrowSpan = document.createElement('span');
    arrowSpan.className = 'accordion-arrow';
    arrowSpan.textContent = '+';
    btn.appendChild(labelSpan);
    btn.appendChild(arrowSpan);
    btn.addEventListener('click', () => toggleMiniAccordion(btn));

    const body = document.createElement('div');
    body.className = 'mini-accordion-body';
    body.id = id;
    const inner = document.createElement('div');
    inner.className = 'acc-inner';
    inner.appendChild(contentEl);
    body.appendChild(inner);

    frag.appendChild(btn);
    frag.appendChild(body);
    return frag;
  }

  function renderNode(node) {
    const frag = document.createDocumentFragment();
    if (node.items && node.items.length) frag.appendChild(makeGrid(node.items));
    if (node.children) {
      node.children.forEach(child => {
        frag.appendChild(makeMiniAccordion(child.id, child.label, renderNode(child)));
      });
    }
    return frag;
  }

  function renderSection(container, nodes) {
    if (!container || !nodes) return;
    const inner = container.querySelector('.acc-inner') || container;
    nodes.forEach(node => {
      inner.appendChild(makeMiniAccordion(node.id, node.label, renderNode(node)));
    });
  }

  function render(DATA) {
    if (!DATA) return;
    renderSection(memesEl, DATA.memes);
    renderSection(scrappedEl, DATA.scrapped);
    renderSection(wipsEl, DATA.wips);
  }
})();

showPage(location.hash.slice(1));
