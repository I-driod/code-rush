// =============================================================
//  CodeCrush — Live Preview Stages
//  Each course has 5 progressive stages (0 = start, 4 = complete)
//  stage = Math.floor(correctAnswers / 5)  → 0-4
// =============================================================

const PREVIEW_STAGES = {

  // ── HTML Course: Build a Developer Profile Card ──────────────
  html: [
    // Stage 0  (0-4 correct)
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #f0f4ff;
           display: flex; justify-content: center; align-items: center;
           min-height: 100vh; }
    .placeholder { text-align: center; color: #9b8dcf; padding: 40px 20px; }
    .placeholder .icon { font-size: 3rem; margin-bottom: 12px; }
    .placeholder h2 { font-size: 1.1rem; color: #6b5fa6; margin-bottom: 8px; }
    .placeholder p { font-size: 0.85rem; color: #999; }
    .dots { display: flex; gap: 6px; justify-content: center; margin-top: 16px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: #c5b8ef;
           animation: pulse 1.4s ease-in-out infinite; }
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes pulse { 0%,80%,100%{opacity:0.3} 40%{opacity:1} }
  </style>
</head>
<body>
  <div class="placeholder">
    <div class="icon">🏗️</div>
    <h2>Building Your Profile Card</h2>
    <p>Answer questions correctly to<br>see your card come to life!</p>
    <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</body>
</html>`,

    // Stage 1  (5-9 correct)
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #f0f4ff;
           display: flex; justify-content: center; align-items: flex-start;
           min-height: 100vh; padding: 24px; }
    .card { background: #fff; border-radius: 16px; padding: 28px 24px;
            max-width: 300px; width: 100%;
            box-shadow: 0 4px 24px rgba(79,80,230,.12); }
    h1 { font-size: 1.5rem; color: #1a1a3e; margin-bottom: 6px; }
    .role { color: #7c7c9c; font-size: 0.9rem; margin-bottom: 16px; }
    p.bio { color: #555; font-size: 0.88rem; line-height: 1.6; }
    .badge { display: inline-block; background: #e8f0fe; color: #4f6ef9;
             font-size: 0.75rem; padding: 3px 10px; border-radius: 20px;
             margin-bottom: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">👋 Hello World</span>
    <h1>Alex Developer</h1>
    <p class="role">Full-Stack Web Developer</p>
    <p class="bio">
      Passionate about building beautiful, fast, and accessible
      web experiences using HTML, CSS, and JavaScript.
    </p>
  </div>
</body>
</html>`,

    // Stage 2  (10-14 correct)
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #f0f4ff;
           display: flex; justify-content: center; align-items: flex-start;
           min-height: 100vh; padding: 24px; }
    .card { background: #fff; border-radius: 16px; padding: 28px 24px;
            max-width: 300px; width: 100%;
            box-shadow: 0 4px 24px rgba(79,80,230,.12); }
    .avatar { width: 72px; height: 72px; border-radius: 50%;
              background: linear-gradient(135deg,#667eea,#764ba2);
              display: flex; align-items: center; justify-content: center;
              font-size: 2rem; margin: 0 auto 16px; }
    h1 { font-size: 1.4rem; color: #1a1a3e; text-align: center; margin-bottom: 4px; }
    .role { color: #7c7c9c; font-size: 0.85rem; text-align: center; margin-bottom: 14px; }
    p.bio { color: #555; font-size: 0.85rem; line-height: 1.6; }
    nav { display: flex; gap: 8px; justify-content: center; margin-top: 14px; }
    nav a { text-decoration: none; background: #4f6ef9; color: #fff;
             padding: 5px 14px; border-radius: 20px; font-size: 0.8rem; }
    nav a:last-child { background: #9b59ff; }
  </style>
</head>
<body>
  <div class="card">
    <div class="avatar">👤</div>
    <h1>Alex Developer</h1>
    <p class="role">Full-Stack Web Developer</p>
    <p class="bio">
      Passionate about building beautiful and fast web
      experiences using HTML, CSS, and JavaScript.
    </p>
    <nav>
      <a href="#">Portfolio</a>
      <a href="#">Blog</a>
    </nav>
  </div>
</body>
</html>`,

    // Stage 3  (15-19 correct)
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #f0f4ff;
           display: flex; justify-content: center; align-items: flex-start;
           min-height: 100vh; padding: 20px; }
    .card { background: #fff; border-radius: 16px; padding: 24px 20px;
            max-width: 300px; width: 100%;
            box-shadow: 0 4px 24px rgba(79,80,230,.12); }
    .avatar { width: 64px; height: 64px; border-radius: 50%;
              background: linear-gradient(135deg,#667eea,#764ba2);
              display: flex; align-items: center; justify-content: center;
              font-size: 1.8rem; margin: 0 auto 12px; }
    h1 { font-size: 1.3rem; color: #1a1a3e; text-align: center; margin-bottom: 2px; }
    .role { color: #7c7c9c; font-size: 0.82rem; text-align: center; margin-bottom: 12px; }
    p.bio { color: #555; font-size: 0.82rem; line-height: 1.6; margin-bottom: 12px; }
    nav { display: flex; gap: 6px; justify-content: center; margin-bottom: 14px; }
    nav a { text-decoration: none; background: #4f6ef9; color: #fff;
             padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; }
    nav a:last-child { background: #9b59ff; }
    hr { border: none; border-top: 1px solid #eef0ff; margin: 12px 0; }
    h2.section-title { font-size: 0.8rem; color: #888; text-align: center;
                       text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    ul.skills { list-style: none; display: flex; flex-wrap: wrap;
                gap: 6px; justify-content: center; }
    ul.skills li { background: #eef0ff; color: #4f6ef9; padding: 3px 10px;
                   border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
    th { background: #f4f6ff; color: #666; padding: 6px 8px; text-align: left; }
    td { padding: 5px 8px; color: #444; border-top: 1px solid #f0f0f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="avatar">👤</div>
    <h1>Alex Developer</h1>
    <p class="role">Full-Stack Web Developer</p>
    <p class="bio">Building fast &amp; accessible web experiences.</p>
    <nav>
      <a href="#">Portfolio</a>
      <a href="#">Blog</a>
      <a href="#" style="background:#2ecc71">GitHub</a>
    </nav>
    <hr>
    <h2 class="section-title">Skills</h2>
    <ul class="skills">
      <li>HTML5</li><li>CSS3</li><li>JavaScript</li>
      <li>React</li><li>Node.js</li>
    </ul>
    <hr>
    <h2 class="section-title">Projects</h2>
    <table>
      <tr><th>Project</th><th>Tech</th></tr>
      <tr><td>Portfolio Site</td><td>HTML/CSS</td></tr>
      <tr><td>Todo App</td><td>JavaScript</td></tr>
    </table>
  </div>
</body>
</html>`,

    // Stage 4 (20 correct — COMPLETE)
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Arial', sans-serif; background: linear-gradient(135deg,#667eea22,#764ba222),#f0f4ff;
           display: flex; justify-content: center; align-items: flex-start;
           min-height: 100vh; padding: 20px; }
    .card { background: #fff; border-radius: 20px; padding: 24px 20px;
            max-width: 300px; width: 100%;
            box-shadow: 0 8px 32px rgba(79,80,230,.18); }
    .avatar { width: 64px; height: 64px; border-radius: 50%;
              background: linear-gradient(135deg,#667eea,#764ba2);
              display: flex; align-items: center; justify-content: center;
              font-size: 1.8rem; margin: 0 auto 12px;
              box-shadow: 0 4px 12px rgba(102,126,234,0.4); }
    h1 { font-size: 1.3rem; color: #1a1a3e; text-align: center; margin-bottom: 2px; }
    .role { color: #7c7c9c; font-size: 0.82rem; text-align: center; margin-bottom: 10px; }
    p.bio { color: #555; font-size: 0.82rem; line-height: 1.6; margin-bottom: 10px; text-align: center; }
    nav { display: flex; gap: 6px; justify-content: center; margin-bottom: 12px; }
    nav a { text-decoration: none; color: #fff;
             padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
    hr { border: none; border-top: 1px solid #eef0ff; margin: 10px 0; }
    h2.section-title { font-size: 0.75rem; color: #aaa; text-align: center;
                       text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    ul.skills { list-style: none; display: flex; flex-wrap: wrap;
                gap: 5px; justify-content: center; margin-bottom: 10px; }
    ul.skills li { padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 700; }
    table { width: 100%; border-collapse: collapse; font-size: 0.78rem; margin-bottom: 10px; }
    th { background: #f4f6ff; color: #666; padding: 5px 8px; text-align: left; border-radius: 4px; }
    td { padding: 5px 8px; color: #444; border-top: 1px solid #f0f0f0; }
    .contact form { display: flex; flex-direction: column; gap: 7px; }
    .contact input { border: 1px solid #dde; border-radius: 8px; padding: 6px 10px;
                     font-size: 0.78rem; outline: none; }
    .contact button { background: linear-gradient(90deg,#4f6ef9,#9b59ff);
                      color: #fff; border: none; border-radius: 8px;
                      padding: 7px; font-size: 0.8rem; font-weight: 700; cursor: pointer; }
    footer { text-align: center; color: #bbb; font-size: 0.7rem; margin-top: 12px; }
    .online { display: flex; align-items: center; justify-content: center;
              gap: 6px; margin-bottom: 8px; }
    .online .dot { width: 7px; height: 7px; border-radius: 50%; background: #2ecc71;
                   animation: blink 2s ease-in-out infinite; }
    .online span { font-size: 0.75rem; color: #2ecc71; font-weight: 600; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.4} }
  </style>
</head>
<body>
  <div class="card">
    <div class="online"><div class="dot"></div><span>Available for work</span></div>
    <div class="avatar">👤</div>
    <h1>Alex Developer</h1>
    <p class="role">Full-Stack Web Developer</p>
    <p class="bio">Building fast, beautiful &amp; accessible web experiences with modern technologies.</p>
    <nav>
      <a href="#" style="background:#4f6ef9">Portfolio</a>
      <a href="#" style="background:#9b59ff">Blog</a>
      <a href="#" style="background:#2ecc71">GitHub</a>
    </nav>
    <hr>
    <h2 class="section-title">Skills</h2>
    <ul class="skills">
      <li style="background:#fff3cd;color:#856404">HTML5</li>
      <li style="background:#d1ecf1;color:#0c5460">CSS3</li>
      <li style="background:#d4edda;color:#155724">JavaScript</li>
      <li style="background:#e8f4fd;color:#1a73e8">React</li>
      <li style="background:#f8d7da;color:#721c24">Node.js</li>
    </ul>
    <hr>
    <h2 class="section-title">Projects</h2>
    <table>
      <tr><th>Project</th><th>Tech</th><th>Status</th></tr>
      <tr><td>Portfolio</td><td>HTML/CSS</td><td>✅</td></tr>
      <tr><td>Todo App</td><td>JavaScript</td><td>✅</td></tr>
      <tr><td>Blog API</td><td>Node.js</td><td>🔧</td></tr>
    </table>
    <hr>
    <h2 class="section-title">Contact Me</h2>
    <div class="contact">
      <form>
        <input type="text" placeholder="Your name" required>
        <input type="email" placeholder="Your email" required>
        <button type="submit">Send Message 🚀</button>
      </form>
    </div>
    <footer>&copy; 2024 Alex Developer · Built with HTML &amp; ❤️</footer>
  </div>
</body>
</html>`
  ],

  // ── CSS Course: Build a Styled Component Card ─────────────────
  css: [
    // Stage 0
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; background: #eee; padding: 24px; }
    /* No styles yet — CSS unlocks as you answer! */
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <span class="tag">🎨 CSS Course</span>
      <h1>Style Me!</h1>
      <p class="subtitle">Answer questions to add beautiful styles</p>
    </div>
    <div class="card-body">
      <p class="description">
        Right now this card has no CSS styling. Each correct answer you give
        will add new CSS rules and transform this plain HTML into a beautiful,
        modern component.
      </p>
      <div class="features">
        <span class="feature">🎨 Colors</span>
        <span class="feature">📐 Layout</span>
        <span class="feature">✨ Effects</span>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn-primary">Get Started</button>
      <button class="btn-secondary">Learn More</button>
    </div>
  </div>
</body>
</html>`,

    // Stage 1
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #f0f4ff; padding: 24px;
           display: flex; justify-content: center; }
    .card { background-color: #ffffff; max-width: 340px; width: 100%; }
    .card-header { background-color: #4f6ef9; color: #ffffff; padding: 20px; }
    .tag { font-size: 0.8rem; opacity: 0.8; }
    h1 { font-size: 1.5rem; font-weight: bold; margin: 6px 0 4px; }
    .subtitle { font-size: 0.85rem; opacity: 0.85; }
    .card-body { padding: 20px; }
    .description { color: #555; font-size: 0.88rem; line-height: 1.6; }
    .features { display: flex; gap: 8px; margin-top: 14px; }
    .feature { background-color: #eef0ff; color: #4f6ef9; padding: 4px 10px;
               font-size: 0.78rem; }
    .card-footer { padding: 16px 20px; display: flex; gap: 8px; }
    .btn-primary { background-color: #4f6ef9; color: white; border: none;
                   padding: 8px 18px; cursor: pointer; font-size: 0.85rem; }
    .btn-secondary { background-color: transparent; color: #4f6ef9;
                     border: 2px solid #4f6ef9; padding: 8px 18px;
                     cursor: pointer; font-size: 0.85rem; }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <span class="tag">🎨 CSS Course</span>
      <h1>Style Me!</h1>
      <p class="subtitle">Colors &amp; basic styles applied ✓</p>
    </div>
    <div class="card-body">
      <p class="description">Colors applied! The card now has a blue header, white body, and styled buttons.</p>
      <div class="features">
        <span class="feature">🎨 Colors ✓</span>
        <span class="feature">📐 Layout</span>
        <span class="feature">✨ Effects</span>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn-primary">Get Started</button>
      <button class="btn-secondary">Learn More</button>
    </div>
  </div>
</body>
</html>`,

    // Stage 2
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Arial', sans-serif; background: #f0f4ff; padding: 24px;
           display: flex; justify-content: center; align-items: flex-start; min-height: 100vh; }
    .card { background-color: #ffffff; max-width: 340px; width: 100%;
            border-radius: 16px; overflow: hidden;
            box-shadow: 0 4px 20px rgba(79,110,249,0.15);
            margin: 0 auto; }
    .card-header { background: linear-gradient(135deg, #4f6ef9, #9b59ff);
                   color: #ffffff; padding: 24px; }
    .tag { font-size: 0.78rem; opacity: 0.85; background: rgba(255,255,255,0.2);
           padding: 2px 10px; border-radius: 20px; display: inline-block; margin-bottom: 8px; }
    h1 { font-size: 1.5rem; font-weight: bold; margin-bottom: 4px; }
    .subtitle { font-size: 0.85rem; opacity: 0.9; }
    .card-body { padding: 24px; }
    .description { color: #555; font-size: 0.88rem; line-height: 1.7; margin-bottom: 16px; }
    .features { display: flex; gap: 8px; flex-wrap: wrap; }
    .feature { background-color: #eef0ff; color: #4f6ef9; padding: 5px 12px;
               font-size: 0.78rem; border-radius: 20px; font-weight: 600; }
    .card-footer { padding: 16px 24px; display: flex; gap: 10px;
                   border-top: 1px solid #f0f0f0; }
    .btn-primary { background: linear-gradient(135deg, #4f6ef9, #9b59ff);
                   color: white; border: none; padding: 10px 20px;
                   border-radius: 8px; cursor: pointer; font-size: 0.85rem;
                   font-weight: 600; flex: 1; }
    .btn-secondary { background: transparent; color: #4f6ef9;
                     border: 2px solid #4f6ef9; padding: 10px 20px;
                     border-radius: 8px; cursor: pointer; font-size: 0.85rem;
                     font-weight: 600; flex: 1; }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <span class="tag">🎨 CSS Course</span>
      <h1>Style Me!</h1>
      <p class="subtitle">Layout &amp; spacing applied ✓</p>
    </div>
    <div class="card-body">
      <p class="description">Now the card has rounded corners, a gradient header, proper padding, and box-shadow depth!</p>
      <div class="features">
        <span class="feature">🎨 Colors ✓</span>
        <span class="feature">📐 Layout ✓</span>
        <span class="feature">✨ Effects</span>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn-primary">Get Started</button>
      <button class="btn-secondary">Learn More</button>
    </div>
  </div>
</body>
</html>`,

    // Stage 3
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Arial', sans-serif; background: linear-gradient(135deg,#667eea,#764ba2);
           padding: 24px; display: flex; justify-content: center;
           align-items: flex-start; min-height: 100vh; }
    .card { background-color: #ffffff; max-width: 340px; width: 100%;
            border-radius: 20px; overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2); margin: 0 auto; }
    .card-header { background: linear-gradient(135deg, #4f6ef9, #9b59ff);
                   color: #ffffff; padding: 28px 24px; position: relative; }
    .tag { font-size: 0.78rem; background: rgba(255,255,255,0.2);
           padding: 3px 12px; border-radius: 20px; display: inline-block; margin-bottom: 10px; }
    h1 { font-size: 1.6rem; font-weight: 800; margin-bottom: 4px; }
    .subtitle { font-size: 0.85rem; opacity: 0.9; }
    .avatar { width: 52px; height: 52px; border-radius: 50%;
              background: rgba(255,255,255,0.25);
              display: flex; align-items: center; justify-content: center;
              font-size: 1.5rem; position: absolute; top: 24px; right: 24px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
    .card-body { padding: 24px; }
    .stats { display: flex; gap: 12px; margin-bottom: 16px; }
    .stat { flex: 1; text-align: center; background: #f8f9ff;
            border-radius: 12px; padding: 12px 8px; }
    .stat-num { font-size: 1.4rem; font-weight: 800; color: #4f6ef9; }
    .stat-label { font-size: 0.7rem; color: #888; margin-top: 2px; }
    .description { color: #555; font-size: 0.85rem; line-height: 1.7; margin-bottom: 14px; }
    .features { display: flex; gap: 6px; flex-wrap: wrap; }
    .feature { padding: 4px 10px; font-size: 0.75rem; border-radius: 20px; font-weight: 600; }
    .card-footer { padding: 16px 24px; display: flex; gap: 10px;
                   border-top: 1px solid #f0f0f0; }
    .btn-primary { background: linear-gradient(135deg, #4f6ef9, #9b59ff);
                   color: white; border: none; padding: 11px 20px;
                   border-radius: 10px; cursor: pointer; font-size: 0.85rem;
                   font-weight: 700; flex: 1;
                   box-shadow: 0 4px 12px rgba(79,110,249,0.35); }
    .btn-secondary { background: transparent; color: #4f6ef9;
                     border: 2px solid #4f6ef9; padding: 11px 20px;
                     border-radius: 10px; cursor: pointer; font-size: 0.85rem; font-weight: 700; flex: 1; }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <div class="avatar">🎨</div>
      <span class="tag">🎨 CSS Course</span>
      <h1>Style Me!</h1>
      <p class="subtitle">Decorative effects applied ✓</p>
    </div>
    <div class="card-body">
      <div class="stats">
        <div class="stat"><div class="stat-num">15</div><div class="stat-label">Questions</div></div>
        <div class="stat"><div class="stat-num">3</div><div class="stat-label">Stages</div></div>
        <div class="stat"><div class="stat-num">75%</div><div class="stat-label">Complete</div></div>
      </div>
      <p class="description">Gradients, shadows, and decorative styles applied. Almost there!</p>
      <div class="features">
        <span class="feature" style="background:#d4edda;color:#155724">🎨 Colors ✓</span>
        <span class="feature" style="background:#d1ecf1;color:#0c5460">📐 Layout ✓</span>
        <span class="feature" style="background:#fff3cd;color:#856404">✨ Effects ✓</span>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn-primary">Get Started</button>
      <button class="btn-secondary">Learn More</button>
    </div>
  </div>
</body>
</html>`,

    // Stage 4 (COMPLETE)
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif;
           background: linear-gradient(135deg,#667eea,#764ba2);
           padding: 24px; display: flex; justify-content: center;
           align-items: flex-start; min-height: 100vh; }
    .card { background: #fff; max-width: 340px; width: 100%;
            border-radius: 20px; overflow: hidden;
            box-shadow: 0 24px 64px rgba(0,0,0,0.25); }
    .card-header { background: linear-gradient(135deg,#4f6ef9,#9b59ff);
                   color: #fff; padding: 28px 24px; position: relative; }
    .tag { font-size: 0.75rem; background: rgba(255,255,255,0.2);
           padding: 3px 12px; border-radius: 20px; display: inline-block; margin-bottom: 10px; }
    h1 { font-size: 1.6rem; font-weight: 800; margin-bottom: 4px; }
    .subtitle { font-size: 0.83rem; opacity: 0.9; }
    .avatar { width: 52px; height: 52px; border-radius: 50%;
              background: rgba(255,255,255,0.25); display: flex;
              align-items: center; justify-content: center; font-size: 1.5rem;
              position: absolute; top: 24px; right: 24px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
    .card-body { padding: 20px 24px; }
    .stats { display: flex; gap: 10px; margin-bottom: 16px; }
    .stat { flex: 1; text-align: center; background: #f8f9ff;
            border-radius: 12px; padding: 10px 6px; }
    .stat-num { font-size: 1.3rem; font-weight: 800; color: #4f6ef9; }
    .stat-label { font-size: 0.68rem; color: #888; }
    .description { color: #555; font-size: 0.84rem; line-height: 1.7; margin-bottom: 14px; }
    .features { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; }
    .feature { padding: 4px 10px; font-size: 0.73rem; border-radius: 20px; font-weight: 600; }
    .progress-label { font-size: 0.75rem; color: #888; margin-bottom: 6px;
                      display: flex; justify-content: space-between; }
    .progress-bar { background: #eef0ff; border-radius: 8px; height: 8px; overflow: hidden; margin-bottom: 14px; }
    .progress-fill { height: 100%; background: linear-gradient(90deg,#4f6ef9,#9b59ff);
                     border-radius: 8px; width: 100%;
                     animation: fillUp 1s ease-out; }
    @keyframes fillUp { from{width:0} to{width:100%} }
    .card-footer { padding: 16px 24px; display: flex; gap: 10px;
                   border-top: 1px solid #f0f0f0; }
    .btn-primary { background: linear-gradient(135deg,#4f6ef9,#9b59ff);
                   color: white; border: none; padding: 11px 20px;
                   border-radius: 10px; cursor: pointer; font-size: 0.85rem;
                   font-weight: 700; flex: 1;
                   box-shadow: 0 4px 16px rgba(79,110,249,0.4);
                   transition: transform 0.15s, box-shadow 0.15s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(79,110,249,0.5); }
    .btn-secondary { background: transparent; color: #4f6ef9;
                     border: 2px solid #4f6ef9; padding: 11px 20px;
                     border-radius: 10px; cursor: pointer; font-size: 0.85rem;
                     font-weight: 700; flex: 1; transition: background 0.2s; }
    .btn-secondary:hover { background: #eef0ff; }
    .badge-complete { text-align: center; background: #d4edda; color: #155724;
                      padding: 8px; font-size: 0.8rem; font-weight: 700; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge-complete">🎉 CSS Card Complete! 100% Styled</div>
    <div class="card-header">
      <div class="avatar">🎨</div>
      <span class="tag">🎨 CSS Course</span>
      <h1>Fully Styled!</h1>
      <p class="subtitle">All CSS properties mastered ✓</p>
    </div>
    <div class="card-body">
      <div class="stats">
        <div class="stat"><div class="stat-num">20</div><div class="stat-label">Done</div></div>
        <div class="stat"><div class="stat-num">5</div><div class="stat-label">Stages</div></div>
        <div class="stat"><div class="stat-num">100%</div><div class="stat-label">Complete</div></div>
      </div>
      <p class="description">Congratulations! You mastered CSS — colors, box model, flexbox, typography, effects, transitions, and positioning!</p>
      <div class="features">
        <span class="feature" style="background:#d4edda;color:#155724">🎨 Color ✓</span>
        <span class="feature" style="background:#d1ecf1;color:#0c5460">📐 Layout ✓</span>
        <span class="feature" style="background:#fff3cd;color:#856404">✨ Effects ✓</span>
        <span class="feature" style="background:#f8d7da;color:#721c24">🔤 Type ✓</span>
        <span class="feature" style="background:#e8f4fd;color:#1a73e8">📍 Position ✓</span>
      </div>
      <div class="progress-label"><span>Progress</span><span>100%</span></div>
      <div class="progress-bar"><div class="progress-fill"></div></div>
    </div>
    <div class="card-footer">
      <button class="btn-primary">🚀 Play Again</button>
      <button class="btn-secondary">📖 MDN Docs</button>
    </div>
  </div>
</body>
</html>`
  ],

  // ── JavaScript Course: Interactive Counter App ────────────────
  javascript: [
    // Stage 0
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #0f1624;
           display: flex; justify-content: center; align-items: center;
           min-height: 100vh; }
    .app { background: #1a2235; border-radius: 20px; padding: 28px 24px;
           max-width: 320px; width: 100%;
           box-shadow: 0 8px 32px rgba(0,0,0,0.4); text-align: center; }
    h1 { color: #e8eaf0; font-size: 1.1rem; margin-bottom: 20px; opacity: 0.7; }
    .counter-display { font-size: 4rem; font-weight: 800;
                       color: #555; margin: 20px 0; }
    .buttons { display: flex; gap: 10px; justify-content: center; margin-bottom: 16px; }
    .btn { padding: 10px 20px; border: 2px solid #333; background: transparent;
           color: #666; border-radius: 10px; cursor: not-allowed;
           font-size: 1rem; font-weight: 700; }
    .status { color: #555; font-size: 0.8rem; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="app">
    <h1>🔧 JS Counter — Waiting for Code...</h1>
    <div class="counter-display">--</div>
    <div class="buttons">
      <button class="btn" disabled>− Dec</button>
      <button class="btn" disabled>Reset</button>
      <button class="btn" disabled>Inc +</button>
    </div>
    <p class="status">Answer JavaScript questions to activate this app!</p>
  </div>
</body>
</html>`,

    // Stage 1
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #0f1624;
           display: flex; justify-content: center; align-items: center;
           min-height: 100vh; }
    .app { background: #1a2235; border-radius: 20px; padding: 28px 24px;
           max-width: 320px; width: 100%;
           box-shadow: 0 8px 32px rgba(0,0,0,0.4); text-align: center; }
    h1 { color: #e8eaf0; font-size: 1rem; margin-bottom: 16px; }
    .counter-display { font-size: 4rem; font-weight: 800; color: #4f9cf9;
                       margin: 16px 0; transition: color 0.3s; }
    .buttons { display: flex; gap: 10px; justify-content: center; margin-bottom: 16px; }
    .btn { padding: 10px 20px; border: 2px solid #4f9cf9; background: transparent;
           color: #4f9cf9; border-radius: 10px; cursor: pointer;
           font-size: 1rem; font-weight: 700; transition: all 0.2s; }
    .btn:hover { background: #4f9cf9; color: #fff; }
    .log { background: #0a0e1a; border-radius: 10px; padding: 12px;
           text-align: left; max-height: 80px; overflow-y: auto; }
    .log p { font-family: monospace; font-size: 0.75rem; color: #4f9cf9; margin: 2px 0; }
  </style>
</head>
<body>
  <div class="app">
    <h1>⚡ JS Counter — Basics Unlocked!</h1>
    <div class="counter-display" id="count">0</div>
    <div class="buttons">
      <button class="btn" onclick="decrement()">− Dec</button>
      <button class="btn" onclick="reset()">Reset</button>
      <button class="btn" onclick="increment()">Inc +</button>
    </div>
    <div class="log" id="log">
      <p>// console.log output appears here</p>
    </div>
  </div>
  <script>
    const PI = 3.14159;
    let count = 0;
    const display = document.getElementById('count');
    const log = document.getElementById('log');
    function addLog(msg) {
      const p = document.createElement('p');
      p.textContent = '> ' + msg;
      log.appendChild(p);
      log.scrollTop = log.scrollHeight;
    }
    function increment() { count++; display.textContent = count; addLog('count = ' + count); }
    function decrement() { count--; display.textContent = count; addLog('count = ' + count); }
    function reset() { count = 0; display.textContent = count; addLog('reset! count = 0'); }
    addLog('const PI = ' + PI);
    addLog('getElementById ready ✓');
  </script>
</body>
</html>`,

    // Stage 2
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #0f1624;
           display: flex; justify-content: center; align-items: center;
           min-height: 100vh; }
    .app { background: #1a2235; border-radius: 20px; padding: 24px 20px;
           max-width: 320px; width: 100%;
           box-shadow: 0 8px 32px rgba(0,0,0,0.4); text-align: center; }
    h1 { color: #e8eaf0; font-size: 0.95rem; margin-bottom: 12px; }
    .counter-display { font-size: 3.5rem; font-weight: 800; color: #4f9cf9;
                       margin: 12px 0; transition: all 0.2s; }
    .counter-display.positive { color: #2ecc71; }
    .counter-display.negative { color: #e74c3c; }
    .buttons { display: flex; gap: 8px; justify-content: center; margin-bottom: 12px; }
    .btn { padding: 9px 16px; border: none; border-radius: 10px;
           cursor: pointer; font-size: 0.9rem; font-weight: 700; transition: all 0.2s; }
    .btn-dec { background: #e74c3c22; color: #e74c3c; border: 2px solid #e74c3c; }
    .btn-dec:hover { background: #e74c3c; color: #fff; }
    .btn-reset { background: #f39c1222; color: #f39c12; border: 2px solid #f39c12; }
    .btn-reset:hover { background: #f39c12; color: #fff; }
    .btn-inc { background: #2ecc7122; color: #2ecc71; border: 2px solid #2ecc71; }
    .btn-inc:hover { background: #2ecc71; color: #fff; }
    .history-title { font-size: 0.73rem; color: #8892a0; text-align: left;
                     margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px; }
    .history { background: #0a0e1a; border-radius: 10px; padding: 10px;
               text-align: left; max-height: 90px; overflow-y: auto; }
    .history-item { font-family: monospace; font-size: 0.73rem; margin: 3px 0;
                    display: flex; align-items: center; gap: 6px; }
    .badge { font-size: 0.65rem; padding: 1px 6px; border-radius: 8px; font-weight: 700; }
    .msg { background: #4f9cf933; padding: 10px; border-radius: 8px;
           margin-top: 10px; font-size: 0.78rem; color: #4f9cf9; font-family: monospace; }
  </style>
</head>
<body>
  <div class="app">
    <h1>⚡ JS Counter — Arrays &amp; Events Active</h1>
    <div class="counter-display" id="count">0</div>
    <div class="buttons">
      <button class="btn btn-dec" id="decBtn">− Dec</button>
      <button class="btn btn-reset" id="resetBtn">↺ Reset</button>
      <button class="btn btn-inc" id="incBtn">Inc +</button>
    </div>
    <p class="history-title">History (push/pop)</p>
    <div class="history" id="history"></div>
    <div class="msg" id="msg">// Press a button to see JS in action!</div>
  </div>
  <script>
    let count = 0;
    const history = [];
    const display = document.getElementById('count');
    const histEl = document.getElementById('history');
    const msg = document.getElementById('msg');
    function updateDisplay() {
      display.textContent = count;
      display.className = 'counter-display' + (count > 0 ? ' positive' : count < 0 ? ' negative' : '');
    }
    function addHistory(action, val) {
      history.push({ action, val, time: new Date().toLocaleTimeString() });
      const item = document.createElement('div');
      item.className = 'history-item';
      const color = action === 'inc' ? '#2ecc71' : action === 'dec' ? '#e74c3c' : '#f39c12';
      item.innerHTML = \`<span class="badge" style="background:\${color}22;color:\${color}">\${action}</span>
        <span style="color:#e8eaf0">\${val}</span>
        <span style="color:#555;margin-left:auto">\${new Date().toLocaleTimeString()}</span>\`;
      histEl.appendChild(item);
      histEl.scrollTop = histEl.scrollHeight;
      msg.textContent = \`history.length = \${history.length} | history.push(\${val}) ✓\`;
    }
    document.getElementById('incBtn').addEventListener('click', () => {
      count++; updateDisplay(); addHistory('inc', count);
    });
    document.getElementById('decBtn').addEventListener('click', () => {
      count--; updateDisplay(); addHistory('dec', count);
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
      count = 0; updateDisplay(); addHistory('reset', 0);
    });
  </script>
</body>
</html>`,

    // Stage 3
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #0f1624;
           display: flex; justify-content: center; align-items: center;
           min-height: 100vh; }
    .app { background: #1a2235; border-radius: 20px; padding: 20px;
           max-width: 320px; width: 100%;
           box-shadow: 0 8px 32px rgba(0,0,0,0.4); text-align: center; }
    h1 { color: #e8eaf0; font-size: 0.9rem; margin-bottom: 10px; }
    .counter-display { font-size: 3rem; font-weight: 800; color: #4f9cf9;
                       margin: 8px 0; transition: all 0.2s; }
    .counter-display.positive { color: #2ecc71; }
    .counter-display.negative { color: #e74c3c; }
    .buttons { display: flex; gap: 6px; justify-content: center; margin-bottom: 10px; }
    .btn { padding: 8px 14px; border: none; border-radius: 8px;
           cursor: pointer; font-size: 0.85rem; font-weight: 700; transition: all 0.2s; }
    .btn-dec { background: #e74c3c22; color: #e74c3c; border: 2px solid #e74c3c; }
    .btn-dec:hover { background: #e74c3c; color: #fff; }
    .btn-reset { background: #f39c1222; color: #f39c12; border: 2px solid #f39c12; }
    .btn-reset:hover { background: #f39c12; color: #fff; }
    .btn-inc { background: #2ecc7122; color: #2ecc71; border: 2px solid #2ecc71; }
    .btn-inc:hover { background: #2ecc71; color: #fff; }
    .section-title { font-size: 0.68rem; color: #666; text-align: left;
                     text-transform: uppercase; letter-spacing: 1px; margin: 8px 0 4px; }
    .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 10px; }
    .stat-box { background: #0a0e1a; border-radius: 8px; padding: 8px; text-align: center; }
    .stat-val { font-size: 1.1rem; font-weight: 800; }
    .stat-lbl { font-size: 0.65rem; color: #666; }
    .code-box { background: #0a0e1a; border-radius: 8px; padding: 10px;
                text-align: left; font-family: monospace; font-size: 0.7rem; }
    .code-line { color: #8892a0; margin: 2px 0; }
    .code-result { color: #2ecc71; }
    .timeout-msg { margin-top: 8px; font-size: 0.75rem; color: #f39c12; }
  </style>
</head>
<body>
  <div class="app">
    <h1>⚡ Counter — map(), filter(), typeof active</h1>
    <div class="counter-display" id="count">0</div>
    <div class="buttons">
      <button class="btn btn-dec" id="decBtn">− Dec</button>
      <button class="btn btn-reset" id="resetBtn">↺</button>
      <button class="btn btn-inc" id="incBtn">Inc +</button>
    </div>
    <p class="section-title">Live Array Operations</p>
    <div class="stats-grid">
      <div class="stat-box">
        <div class="stat-val" style="color:#2ecc71" id="totalClicks">0</div>
        <div class="stat-lbl">Total Clicks</div>
      </div>
      <div class="stat-box">
        <div class="stat-val" style="color:#e74c3c" id="negCount">0</div>
        <div class="stat-lbl">Times Negative</div>
      </div>
      <div class="stat-box">
        <div class="stat-val" style="color:#4f9cf9" id="maxVal">0</div>
        <div class="stat-lbl">Max Value</div>
      </div>
      <div class="stat-box">
        <div class="stat-val" style="color:#f39c12" id="avgVal">0</div>
        <div class="stat-lbl">Avg Click Val</div>
      </div>
    </div>
    <p class="section-title">Code Output</p>
    <div class="code-box">
      <div class="code-line" id="typeLine">typeof count → "number"</div>
      <div class="code-line" id="mapLine">history.map(v => v*2) → []</div>
      <div class="code-result" id="filterLine">history.filter(v > 0) → []</div>
    </div>
    <div class="timeout-msg" id="timeoutMsg">setTimeout callback waiting...</div>
  </div>
  <script>
    let count = 0, history = [], negatives = 0, maxVal = 0;
    const display = document.getElementById('count');
    function updateDisplay() {
      display.textContent = count;
      display.className = 'counter-display' + (count > 0 ? ' positive' : count < 0 ? ' negative' : '');
    }
    function updateStats() {
      if (count < 0) negatives++;
      if (count > maxVal) maxVal = count;
      document.getElementById('totalClicks').textContent = history.length;
      document.getElementById('negCount').textContent = negatives;
      document.getElementById('maxVal').textContent = maxVal;
      const avg = history.length ? (history.reduce((a,b) => a + b, 0) / history.length).toFixed(1) : 0;
      document.getElementById('avgVal').textContent = avg;
      const doubled = history.map(v => v * 2);
      document.getElementById('mapLine').textContent = \`map(v*2) → [\${doubled.slice(-3).join(',')}...]\`;
      const positives = history.filter(v => v > 0);
      document.getElementById('filterLine').textContent = \`filter(v>0) → \${positives.length} items\`;
    }
    document.getElementById('incBtn').addEventListener('click', () => {
      count++; history.push(count); updateDisplay(); updateStats();
    });
    document.getElementById('decBtn').addEventListener('click', () => {
      count--; history.push(count); updateDisplay(); updateStats();
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
      count = 0; history = []; updateDisplay(); updateStats();
    });
    setTimeout(() => {
      document.getElementById('timeoutMsg').textContent = '✓ setTimeout fired after 2s!';
      document.getElementById('timeoutMsg').style.color = '#2ecc71';
    }, 2000);
  </script>
</body>
</html>`,

    // Stage 4 (COMPLETE)
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #0f1624;
           display: flex; justify-content: center; align-items: center;
           min-height: 100vh; }
    .app { background: #1a2235; border-radius: 20px; padding: 18px;
           max-width: 320px; width: 100%;
           box-shadow: 0 8px 32px rgba(0,0,0,0.4); text-align: center; }
    .complete-banner { background: linear-gradient(90deg,#2ecc71,#27ae60);
                       color: #fff; border-radius: 10px; padding: 7px;
                       font-size: 0.78rem; font-weight: 700; margin-bottom: 12px; }
    .counter-display { font-size: 2.8rem; font-weight: 800; color: #4f9cf9;
                       margin: 6px 0; transition: all 0.15s; }
    .counter-display.positive { color: #2ecc71; }
    .counter-display.negative { color: #e74c3c; }
    .buttons { display: flex; gap: 6px; justify-content: center; margin-bottom: 10px; }
    .btn { padding: 7px 12px; border: none; border-radius: 8px;
           cursor: pointer; font-size: 0.8rem; font-weight: 700; transition: all 0.2s; }
    .btn-dec { background: #e74c3c22; color: #e74c3c; border: 2px solid #e74c3c; }
    .btn-dec:hover { background: #e74c3c; color: #fff; }
    .btn-reset { background: #f39c1222; color: #f39c12; border: 2px solid #f39c12; }
    .btn-reset:hover { background: #f39c12; color: #fff; }
    .btn-inc { background: #2ecc7122; color: #2ecc71; border: 2px solid #2ecc71; }
    .btn-inc:hover { background: #2ecc71; color: #fff; }
    .section-title { font-size: 0.65rem; color: #555; text-align: left;
                     text-transform: uppercase; letter-spacing: 1px; margin: 8px 0 4px; }
    .stats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 5px; margin-bottom: 8px; }
    .stat-box { background: #0a0e1a; border-radius: 7px; padding: 6px; }
    .stat-val { font-size: 1rem; font-weight: 800; }
    .stat-lbl { font-size: 0.58rem; color: #555; }
    .code-box { background: #0a0e1a; border-radius: 8px; padding: 8px;
                text-align: left; font-family: monospace; font-size: 0.68rem; margin-bottom: 8px; }
    .code-line { margin: 2px 0; }
    .kw { color: #ff6b9d; }
    .fn { color: #4f9cf9; }
    .val { color: #2ecc71; }
    .storage-box { background: #0a0e1a; border-radius: 8px; padding: 8px;
                   font-family: monospace; font-size: 0.68rem; }
    .storage-row { display: flex; justify-content: space-between; color: #8892a0; margin: 2px 0; }
    .storage-row span:last-child { color: #f39c12; }
  </style>
</head>
<body>
  <div class="app">
    <div class="complete-banner">🎉 JavaScript Mastered! All 20 Concepts Unlocked</div>
    <div class="counter-display" id="count">0</div>
    <div class="buttons">
      <button class="btn btn-dec" id="decBtn">− Dec</button>
      <button class="btn btn-reset" id="resetBtn">↺ Reset</button>
      <button class="btn btn-inc" id="incBtn">Inc +</button>
    </div>
    <p class="section-title">Statistics</p>
    <div class="stats-grid">
      <div class="stat-box"><div class="stat-val" style="color:#2ecc71" id="totalClicks">0</div><div class="stat-lbl">Clicks</div></div>
      <div class="stat-box"><div class="stat-val" style="color:#4f9cf9" id="maxVal">0</div><div class="stat-lbl">Max</div></div>
      <div class="stat-box"><div class="stat-val" style="color:#f39c12" id="avgVal">0</div><div class="stat-lbl">Avg</div></div>
    </div>
    <p class="section-title">Live Code</p>
    <div class="code-box" id="codeBox">
      <div class="code-line"><span class="kw">typeof</span> count → <span class="val" id="typeResult">"number"</span></div>
      <div class="code-line"><span class="fn">map</span>(v => v*2) → [<span id="mapResult">...</span>]</div>
      <div class="code-line"><span class="fn">filter</span>(v > 0) → <span id="filterResult">0</span> items</div>
      <div class="code-line"><span class="fn">parseInt</span>("42") → <span class="val">42</span></div>
      <div class="code-line" id="jsonLine"><span class="fn">JSON.stringify</span>({}) → <span class="val">{}</span></div>
    </div>
    <p class="section-title">localStorage</p>
    <div class="storage-box" id="storageBox">
      <div class="storage-row"><span>count</span><span id="storageCount">0</span></div>
      <div class="storage-row"><span>sessions</span><span id="storageSessions">1</span></div>
    </div>
  </div>
  <script>
    let count = 0, history = [], maxVal = 0;
    const display = document.getElementById('count');
    function updateDisplay() {
      display.textContent = count;
      display.className = 'counter-display' + (count > 0 ? ' positive' : count < 0 ? ' negative' : '');
    }
    function updateAll() {
      if (count > maxVal) maxVal = count;
      document.getElementById('totalClicks').textContent = history.length;
      document.getElementById('maxVal').textContent = maxVal;
      const avg = history.length ? (history.reduce((a,b) => a + b, 0) / history.length).toFixed(1) : 0;
      document.getElementById('avgVal').textContent = avg;
      const mapped = history.map(v => v * 2).slice(-3);
      document.getElementById('mapResult').textContent = mapped.length ? mapped.join(',') : '...';
      document.getElementById('filterResult').textContent = history.filter(v => v > 0).length;
      document.getElementById('storageCount').textContent = count;
      const s = { count, history: history.slice(-3), maxVal };
      document.getElementById('jsonLine').innerHTML = \`<span style="color:#4f9cf9">JSON.stringify</span> → <span style="color:#f39c12">\${JSON.stringify(s).slice(0,40)}...</span>\`;
    }
    document.getElementById('incBtn').addEventListener('click', () => { count++; history.push(count); updateDisplay(); updateAll(); });
    document.getElementById('decBtn').addEventListener('click', () => { count--; history.push(count); updateDisplay(); updateAll(); });
    document.getElementById('resetBtn').addEventListener('click', () => { count = 0; history = []; maxVal = 0; updateDisplay(); updateAll(); });
    let sessions = parseInt(localStorage.getItem('sessions') || '0') + 1;
    localStorage.setItem('sessions', sessions);
    document.getElementById('storageSessions').textContent = sessions;
  </script>
</body>
</html>`
  ]
};

// Return the correct preview stage HTML based on correct answer count
function getPreviewHTML(course, correctAnswers) {
  const stages = PREVIEW_STAGES[course];
  if (!stages) return '<html><body><p>Course not found</p></body></html>';
  const stageIndex = Math.min(Math.floor(correctAnswers / 5), stages.length - 1);
  return stages[stageIndex];
}
