// =============================================================
//  CodeCrush — Home Screen Logic
// =============================================================

(function () {
  // ── DOM refs ──────────────────────────────────────────────────
  const nameInput    = document.getElementById('playerName');
  const startBtn     = document.getElementById('startBtn');
  const courseCards  = document.querySelectorAll('.course-card');
  const nameError    = document.getElementById('nameError');
  const courseError  = document.getElementById('courseError');

  let selectedCourse = null;

  // ── Particle Canvas Background ────────────────────────────────
  const canvas = document.getElementById('particleCanvas');
  const ctx    = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 80;
  const MAX_DIST = 130;

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    };
  }

  function initParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(88, 166, 255, ${(1 - dist / MAX_DIST) * 0.08})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Dots
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(88, 166, 255, ${p.opacity * 0.4})`;
      ctx.fill();
    });
  }

  function updateParticles() {
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
  }

  function animateParticles() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animateParticles);
  }

  resizeCanvas();
  initParticles();
  animateParticles();
  window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

  // ── Course card selection ─────────────────────────────────────
  courseCards.forEach(card => {
    card.addEventListener('click', () => {
      courseCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedCourse = card.dataset.course;
      courseError.classList.add('hidden');
    });
  });

  // ── Name input live validation ────────────────────────────────
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length > 0) {
      nameError.classList.add('hidden');
      nameInput.classList.remove('invalid');
    }
  });

  // ── Keyboard: Enter to start ──────────────────────────────────
  nameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') startGame();
  });

  startBtn.addEventListener('click', startGame);

  function startGame() {
    let valid = true;

    const name = nameInput.value.trim();
    if (!name) {
      nameError.classList.remove('hidden');
      nameInput.classList.add('invalid');
      nameInput.focus();
      valid = false;
    }

    if (!selectedCourse) {
      courseError.classList.remove('hidden');
      valid = false;
    }

    if (!valid) return;

    // Save to sessionStorage and go
    sessionStorage.setItem('cc_name',   name);
    sessionStorage.setItem('cc_course', selectedCourse);

    // Button animation before redirect
    startBtn.textContent = 'Loading…';
    startBtn.disabled = true;
    setTimeout(() => {
      window.location.href = 'game.html';
    }, 300);
  }

  // ── Animate course cards on load ──────────────────────────────
  document.querySelectorAll('.course-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.12}s`;
  });

  // ── Typing animation for the hero tagline ─────────────────────
  const tagline = document.getElementById('heroTagline');
  if (tagline) {
    const phrases = [
      'Fill in the blanks. Crush the code.',
      'Learn HTML, CSS & JavaScript.',
      'Race against falling bricks!',
      'Can you complete the course?'
    ];
    let pi = 0, ci = 0, deleting = false;
    function typeEffect() {
      const phrase = phrases[pi];
      if (!deleting) {
        tagline.textContent = phrase.slice(0, ci + 1);
        ci++;
        if (ci === phrase.length) { deleting = true; setTimeout(typeEffect, 2000); return; }
      } else {
        tagline.textContent = phrase.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      setTimeout(typeEffect, deleting ? 40 : 70);
    }
    setTimeout(typeEffect, 1000);
  }

  // ── Theme Toggle Logic ────────────────────────────────────────
  function setupThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    function renderThemeButton() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      btn.innerHTML = current === 'light' ? '🌙 Dark' : '☀️ Light';
      btn.title = current === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    }

    renderThemeButton();

    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cc_theme', next);
      renderThemeButton();
    });
  }

  setupThemeToggle();
})();
