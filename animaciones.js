// ===========================================================================
// Hero — VAPOR MOLECULAR VCI
// ---------------------------------------------------------------------------
// Representación literal del principio físico del producto:
// las moléculas VCI se subliman desde la fase sólida (empaque), viajan por
// el aire como vapor y se depositan formando una capa monomolecular
// protectora sobre la superficie del metal.
//
// Elementos:
//   1. Fondo: gradiente + "horizonte" de metal en la base
//   2. Ondas sutiles de vapor emergiendo desde abajo
//   3. Moléculas hexagonales (estructura bencénica con 6 átomos + enlaces)
//      subiendo con movimiento browniano
//   4. Depósito molecular: algunas moléculas al llegar al techo se "adhieren"
//      y forman una capa brillante ondulante (la película protectora)
//   5. Interacción: el mouse atrae moléculas cercanas (atracción dipolar)
// ===========================================================================

(function initHero() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  let molecules = [];
  let waves = [];
  let deposits = []; // moléculas adheridas a la capa superior protectora
  let mouseX = -9999, mouseY = -9999;
  let t0 = performance.now();

  const CONFIG = {
    moleculeCount: 22,
    waveCount: 5,
    moleculeRadius: 14,        // radio del hexágono molecular
    atomRadius: 2.2,
    riseSpeed: 0.35,           // velocidad ascenso base
    sway: 0.6,                 // oscilación lateral (movimiento browniano)
    color: '#6AAD7D',
    colorSoft: 'rgba(106,173,125,0.55)',
    colorGlow: 'rgba(157,204,169,0.35)',
    colorDeposit: 'rgba(157,204,169,0.85)',
    colorBond: 'rgba(106,173,125,0.35)',
    colorWave: 'rgba(106,173,125,0.08)',
  };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.offsetWidth;
    h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  function makeMolecule(fromBottom = false) {
    const r = CONFIG.moleculeRadius * (0.7 + Math.random() * 0.7);
    return {
      x: Math.random() * w,
      y: fromBottom ? h + 20 + Math.random() * 60 : Math.random() * h,
      r,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.012,
      vx: (Math.random() - 0.5) * CONFIG.sway * 0.3,
      vy: -(CONFIG.riseSpeed + Math.random() * 0.35),
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: 0.008 + Math.random() * 0.01,
      alpha: 0,           // fade-in
      alphaTarget: 0.85 + Math.random() * 0.15,
      accent: Math.random() > 0.75,
      pulsePhase: Math.random() * Math.PI * 2,
    };
  }

  function makeWave() {
    return {
      x: Math.random() * w,
      y: h + Math.random() * 40,
      r: 20 + Math.random() * 40,
      vy: -(0.4 + Math.random() * 0.4),
      life: 0,
      maxLife: 280 + Math.random() * 140,
    };
  }

  function init() {
    resize();
    molecules = Array.from({length: CONFIG.moleculeCount}, () => makeMolecule(false));
    waves = Array.from({length: CONFIG.waveCount}, () => makeWave());
    deposits = [];
  }

  // Dibuja una molécula hexagonal (6 átomos + enlaces) como estructura VCI
  function drawMolecule(m, time) {
    const pulse = 1 + Math.sin(time * 0.002 + m.pulsePhase) * 0.08;
    const r = m.r * pulse;
    const cx = m.x, cy = m.y;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(m.rot);
    ctx.globalAlpha = m.alpha;

    // Glow exterior (aura molecular)
    if (m.accent) {
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.2);
      g.addColorStop(0, 'rgba(157,204,169,0.25)');
      g.addColorStop(1, 'rgba(157,204,169,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Enlaces (hexágono)
    ctx.strokeStyle = CONFIG.colorBond;
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a1 = (Math.PI / 3) * i;
      const a2 = (Math.PI / 3) * (i + 1);
      const x1 = Math.cos(a1) * r, y1 = Math.sin(a1) * r;
      const x2 = Math.cos(a2) * r, y2 = Math.sin(a2) * r;
      if (i === 0) ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
    }
    ctx.closePath();
    ctx.stroke();

    // Enlaces internos (cruz interior — carácter aromático)
    ctx.strokeStyle = 'rgba(106,173,125,0.2)';
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2);
    ctx.stroke();

    // Átomos (vértices)
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      ctx.fillStyle = m.accent && i % 2 === 0 ? '#9DCCA9' : CONFIG.color;
      ctx.beginPath();
      ctx.arc(x, y, CONFIG.atomRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Núcleo (grupo funcional central — representa el sitio activo del VCI)
    ctx.fillStyle = m.accent ? '#C3E0CB' : CONFIG.colorSoft;
    ctx.beginPath();
    ctx.arc(0, 0, CONFIG.atomRadius * 1.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawSurface(time) {
    // "Superficie metálica" en la parte superior del canvas:
    // es la capa de metal hacia la cual viajan las moléculas y donde se adhieren.
    // Se dibuja como una banda muy sutil con brillo ondulante.
    const bandH = 3;
    const y = 0;

    // Reflejo horizontal tenue
    const grad = ctx.createLinearGradient(0, 0, 0, 60);
    grad.addColorStop(0, 'rgba(157,204,169,0.18)');
    grad.addColorStop(1, 'rgba(157,204,169,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, 60);

    // Línea de horizonte (capa depositada — ondulante)
    ctx.strokeStyle = 'rgba(157,204,169,0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 6) {
      const yy = 20 + Math.sin((x * 0.01) + time * 0.0008) * 2.5;
      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();

    // Línea secundaria más tenue
    ctx.strokeStyle = 'rgba(106,173,125,0.15)';
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 6) {
      const yy = 32 + Math.sin((x * 0.012) - time * 0.001) * 3;
      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }

  function drawDeposits(time) {
    // Moléculas ya adheridas forman una franja de puntos brillantes cerca del techo
    for (const d of deposits) {
      d.pulse += 0.03;
      const a = 0.4 + Math.sin(d.pulse) * 0.2;
      ctx.fillStyle = `rgba(157,204,169,${a})`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Halo sutil
      const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, 8);
      g.addColorStop(0, `rgba(157,204,169,${a * 0.3})`);
      g.addColorStop(1, 'rgba(157,204,169,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(d.x, d.y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawWaves() {
    // Ondas ascendentes de "vapor" — círculos tenues que suben y se desvanecen
    for (const wv of waves) {
      const lifeP = wv.life / wv.maxLife;
      const alpha = Math.sin(lifeP * Math.PI) * 0.12;
      ctx.strokeStyle = `rgba(106,173,125,${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(wv.x, wv.y, wv.r * (0.5 + lifeP * 1.8), 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function animate(now) {
    const time = now - t0;
    ctx.clearRect(0, 0, w, h);

    // 1. Superficie metálica arriba
    drawSurface(time);

    // 2. Depósitos ya adheridos
    drawDeposits(time);

    // 3. Ondas de vapor
    drawWaves();
    for (const wv of waves) {
      wv.y += wv.vy;
      wv.life += 1;
      if (wv.life >= wv.maxLife || wv.y < -40) {
        Object.assign(wv, makeWave());
      }
    }

    // 4. Moléculas
    for (let i = molecules.length - 1; i >= 0; i--) {
      const m = molecules[i];

      // Fade-in
      m.alpha = Math.min(m.alpha + 0.012, m.alphaTarget);

      // Movimiento browniano (oscilación lateral)
      m.swayPhase += m.swaySpeed;
      const swayX = Math.sin(m.swayPhase) * CONFIG.sway;

      // Atracción dipolar al mouse
      const mdx = mouseX - m.x, mdy = mouseY - m.y;
      const md = Math.hypot(mdx, mdy);
      if (md < 180 && md > 1) {
        const force = (1 - md / 180) * 0.3;
        m.vx += (mdx / md) * force;
        m.vy += (mdy / md) * force;
      }

      // Fricción
      m.vx *= 0.94;
      m.vy = m.vy * 0.94 + (-CONFIG.riseSpeed) * 0.06; // siempre tiende a subir

      m.x += m.vx + swayX * 0.04;
      m.y += m.vy;
      m.rot += m.rotSpeed;

      // Fade-out al acercarse a la superficie + deposito
      if (m.y < 50) {
        m.alphaTarget = Math.max(0, (m.y - 10) / 40);
      }

      // Cuando toca la superficie → convertir en depósito y regenerar abajo
      if (m.y < 18) {
        deposits.push({
          x: m.x + (Math.random() - 0.5) * 12,
          y: 18 + Math.random() * 6,
          pulse: Math.random() * Math.PI * 2,
        });
        // mantener máx ~80 depósitos
        if (deposits.length > 80) deposits.shift();

        // Regenerar desde abajo
        Object.assign(m, makeMolecule(true));
        m.alpha = 0;
        continue;
      }

      // Salir por lados — envolver
      if (m.x < -40) m.x = w + 20;
      if (m.x > w + 40) m.x = -20;

      drawMolecule(m, time);
    }

    requestAnimationFrame(animate);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });
  window.addEventListener('resize', init);

  init();
  requestAnimationFrame(animate);
})();

// ===========================================================================
// Scroll reveal
// ===========================================================================
(function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

// ===========================================================================
// Nav shrink on scroll
// ===========================================================================
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('nav--scrolled');
    else nav.classList.remove('nav--scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ===========================================================================
// Contadores animados
// ===========================================================================
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1400;
    const start = performance.now();
    const from = 0;
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = from + (target - from) * eased;
      el.textContent = prefix + (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animate(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
})();

// ===========================================================================
// Parallax sutil en ilustraciones marcadas
// ===========================================================================
(function initParallax() {
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;
  const update = () => {
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = prog * parseFloat(el.dataset.parallax);
      el.style.transform = `translateY(${offset}px)`;
    });
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ===========================================================================
// Render ilustraciones SVG desde data-ilu
// ===========================================================================
(function initIlustraciones() {
  if (!window.ILUSTRACIONES) return;
  document.querySelectorAll('[data-ilu]').forEach(el => {
    const key = el.dataset.ilu;
    if (window.ILUSTRACIONES[key]) {
      el.innerHTML = window.ILUSTRACIONES[key]();
    }
  });
})();

// ===========================================================================
// Cambio de idioma — placeholder visual
// ===========================================================================
(function initLang() {
  const btns = document.querySelectorAll('.nav__lang button');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  }));
})();
