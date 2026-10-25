// =============================================================
//  CodeCrush — Core Game Engine
//  Dependencies (loaded before this file in game.html):
//    questions.js  →  getShuffledQuestions(course)
//    preview.js    →  getPreviewHTML(course, correctAnswers)
// =============================================================

(function () {
  'use strict';

  // ── Constants ─────────────────────────────────────────────────
  const MAX_BRICKS       = 8;      // slots in the brick track
  const BASE_POINTS      = 100;    // base score per correct answer
  const QUESTION_DURATIONS = [30, 25, 20, 15, 10]; // seconds (indexed by minute)
  const OPTION_KEYS      = ['a', 'b', 'c', 'd'];
  const DOC_LINKS = {
    html:       'https://developer.mozilla.org/en-US/docs/Web/HTML',
    css:        'https://developer.mozilla.org/en-US/docs/Web/CSS',
    javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  };

  // ── State ─────────────────────────────────────────────────────
  const state = {
    course:          '',
    playerName:      '',
    questions:       [],
    currentIndex:    0,
    score:           0,
    correctCount:    0,
    wrongCount:      0,
    comboCount:      0,
    gameElapsed:     0,       // total seconds since game started
    questionElapsed: 0,       // seconds on current question
    questionDuration: 30,     // current question time limit
    answered:        false,   // lock during answer feedback
    gameActive:      false,
    brickCount:      0,       // number of landed (stacked) bricks
    previewCorrect:  0,       // correct answers for preview progression
    // Full template state
    template:        null,    // FULL_TEMPLATES[course] reference
    filledBlanks:    {},      // { 1: 'h1', 3: 'ul', ... } — maps blank number → answer
    missedQuestions: [],      // records questions the player missed for review
    // Timers
    gameInterval:    null,
    questionInterval: null,
    brickTimeout:    null,
  };

  // ── DOM Elements ──────────────────────────────────────────────
  const el = {
    playerName:   document.getElementById('playerName'),
    courseBadge:  document.getElementById('courseBadge'),
    score:        document.getElementById('scoreValue'),
    combo:        document.getElementById('comboDisplay'),
    gameTimer:    document.getElementById('gameTimer'),
    bonusMeter:   document.getElementById('bonusMeter'),
    bonusValue:   document.getElementById('bonusValue'),
    timerBar:     document.getElementById('timerBar'),
    timerSecs:    document.getElementById('timerSecs'),
    questionNum:  document.getElementById('questionNum'),
    questionTitle:document.getElementById('questionTitle'),
    questionTopic:document.getElementById('questionTopic'),
    codeSnippet:  document.getElementById('codeSnippet'),
    optionsGrid:  document.getElementById('optionsGrid'),
    preview:      document.getElementById('previewFrame'),
    progressFill: document.getElementById('progressFill'),
    brickTrack:   document.getElementById('brickTrack'),
    brickCount:   document.getElementById('brickCount'),
    activeBrick:  null, // reference to sliding brick element
    // Overlays
    overlayWrap:    document.getElementById('overlayWrap'),
    overlayTitle:   document.getElementById('overlayTitle'),
    overlaySubtitle:document.getElementById('overlaySubtitle'),
    overlayScore:   document.getElementById('overlayScore'),
    overlayCorrect: document.getElementById('overlayCorrect'),
    overlayWrong:   document.getElementById('overlayWrong'),
    overlayTime:    document.getElementById('overlayTime'),
    overlayReview:  document.getElementById('overlayReview'),
    replayBtn:      document.getElementById('replayBtn'),
    homeBtn:        document.getElementById('homeBtn'),
    feedbackBanner: document.getElementById('feedbackBanner'),
    feedbackText:   document.getElementById('feedbackText'),
    explanationText:document.getElementById('explanationText'),
    // Editor & End Game elements
    editorTabLabel: document.getElementById('editorTabLabel'),
    editorTabIcon:  document.getElementById('editorTabIcon'),
    lineGutter:     document.getElementById('lineGutter'),
    endGameBtn:     document.getElementById('endGameBtn'),
  };

  // ── Syntax Highlighter ────────────────────────────────────────
  // Simple regex-based highlighter for HTML, CSS, JS snippets.
  function highlightCode(code, lang) {
    // Escape HTML first
    let html = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (lang === 'html') {
      // Attributes
      html = html.replace(/(\s)([\w-]+)(=&gt;|=)(&quot;[^"]*&quot;|'[^']*'|[\w.-]+)/g,
        (m, sp, attr, eq, val) =>
          `${sp}<span class="hl-attr">${attr}</span>${eq}<span class="hl-str">${val}</span>`);
      // Tags
      html = html.replace(/(&lt;\/?)(\w[\w-]*)(\s|&gt;)/g,
        (m, open, tag, after) =>
          `${open}<span class="hl-tag">${tag}</span>${after}`);
    } else if (lang === 'css') {
      // Comments
      html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="hl-comment">$1</span>');
      // Property names
      html = html.replace(/([\w-]+)(\s*:)(?!\s*\/\/)/g,
        '<span class="hl-prop">$1</span>$2');
      // Values (strings)
      html = html.replace(/(&quot;[^&]*&quot;|'[^']*')/g, '<span class="hl-str">$1</span>');
      // Numbers + units
      html = html.replace(/(\d+(?:\.\d+)?(?:px|rem|em|%|s|ms|vh|vw)?)/g,
        '<span class="hl-num">$1</span>');
    } else if (lang === 'javascript') {
      // Comments
      html = html.replace(/(\/\/[^\n]*)/g, '<span class="hl-comment">$1</span>');
      // Strings
      html = html.replace(/(&quot;[^&]*&quot;|&#x60;[^&]*&#x60;)/g, '<span class="hl-str">$1</span>');
      // Keywords
      const kws = ['const','let','var','function','return','if','else','for',
                   'while','new','typeof','instanceof','true','false','null',
                   'undefined','async','await','class','import','export'];
      const kwRegex = new RegExp(`\\b(${kws.join('|')})\\b`, 'g');
      html = html.replace(kwRegex, '<span class="hl-kw">$1</span>');
      // Functions
      html = html.replace(/(\w+)(?=\s*\()/g, '<span class="hl-fn">$1</span>');
      // Numbers
      html = html.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="hl-num">$1</span>');
    }

    return html;
  }

  // ── Full Template Rendering ──────────────────────────────────
  // Renders the complete code file with all blanks visible.
  // - Answered blanks → filled with green text
  // - Current blank → pulsing active blank
  // - Future blanks → dim placeholder
  function renderFullTemplate(lang, activeBlankNum) {
    if (!state.template) return '';

    const templateCode = state.template.code;
    // Replace {{N}} markers with appropriate HTML
    let processed = templateCode.replace(/\{\{(\d+)\}\}/g, (match, numStr) => {
      const num = parseInt(numStr);
      if (state.filledBlanks[num] !== undefined) {
        // Already answered — show the filled value
        return `\x00FILLED_${num}_${state.filledBlanks[num]}\x00`;
      } else if (num === activeBlankNum) {
        // Current question — show active pulsing blank
        return `\x00ACTIVE_${num}\x00`;
      } else {
        // Future question — show dim placeholder
        return `\x00FUTURE_${num}\x00`;
      }
    });

    // Now split into lines and render with syntax highlighting
    const lines = processed.split('\n');
    return lines.map((line) => {
      const hasActive = line.includes(`\x00ACTIVE_`);

      // Split line by marker delimiters so markers never touch highlightCode
      const parts = line.split(/(\x00(?:FILLED|ACTIVE|FUTURE)_[^\x00]+\x00)/);
      const highlighted = parts.map((part) => {
        if (part.startsWith('\x00FILLED_')) {
          // Format: \x00FILLED_{num}_{val}\x00
          const val = part.slice(8, -1).split('_').slice(1).join('_');
          return `<span class="code-blank filled correct">${val}</span>`;
        }
        if (part.startsWith('\x00ACTIVE_')) {
          return `<span class="code-blank active-blank" id="activeBlank">___</span>`;
        }
        if (part.startsWith('\x00FUTURE_')) {
          return `<span class="code-blank future-blank">___</span>`;
        }
        // Pure code: safe to syntax highlight
        return highlightCode(part, lang);
      }).join('');

      return `<div class="code-line${hasActive ? ' active-line' : ''}">${highlighted || '&nbsp;'}</div>`;
    }).join('');
  }

  // Render the full template and update gutter line numbers
  function renderTemplate(activeQuestionIndex) {
    const langMap = { html: 'html', css: 'css', javascript: 'javascript' };
    const lang = langMap[state.course] || 'javascript';
    const activeBlankNum = activeQuestionIndex + 1; // questions are 0-indexed, blanks are 1-indexed

    el.codeSnippet.innerHTML = renderFullTemplate(lang, activeBlankNum);

    // Update gutter
    if (el.lineGutter && state.template) {
      const lineCount = state.template.code.split('\n').length;
      const templateCode = state.template.code;
      const templateLines = templateCode.split('\n');
      const activeBlankStr = `{{${activeBlankNum}}}`;

      el.lineGutter.innerHTML = templateLines.map((line, i) => {
        const isActive = line.includes(activeBlankStr);
        return `<span class="gutter-num${isActive ? ' active' : ''}">${i + 1}</span>`;
      }).join('');
    }

    // Auto-scroll to the active blank
    requestAnimationFrame(() => {
      const activeEl = document.getElementById('activeBlank');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Fill a blank in the template after answering
  function fillBlank(answer, correct, questionIndex) {
    const blankNum = questionIndex + 1;
    if (correct) {
      state.filledBlanks[blankNum] = answer;
    }
    // Re-render the template (current blank will show filled or wrong)
    const activeEl = document.getElementById('activeBlank');
    if (activeEl) {
      const cls = correct ? 'code-blank filled correct' : 'code-blank filled wrong';
      activeEl.className = cls;
      activeEl.textContent = answer;
    }
  }

  // ── Game Timer & Score Logic ──────────────────────────────────
  function getQuestionDuration() {
    const minute = Math.floor(state.gameElapsed / 60);
    return QUESTION_DURATIONS[Math.min(minute, QUESTION_DURATIONS.length - 1)];
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function calculateBonus(timeLeft, duration) {
    if (timeLeft <= 0) return 0;
    const ratio = timeLeft / duration;
    return Math.floor(BASE_POINTS * ratio * 2); // 0–200 bonus
  }

  function updateScoreDisplay(animated) {
    el.score.textContent = state.score.toLocaleString();
    if (animated) el.score.classList.add('score-pop');
    setTimeout(() => el.score.classList.remove('score-pop'), 400);
  }

  function updateBonusMeter() {
    const dur = state.questionDuration;
    const elapsed = state.questionElapsed;
    const ratio = Math.max(0, 1 - elapsed / dur);
    const bonus = calculateBonus(dur - elapsed, dur);

    el.timerBar.style.width = `${ratio * 100}%`;
    el.timerSecs.textContent = Math.max(0, dur - elapsed);
    el.bonusValue.textContent = `+${bonus}`;
    el.bonusMeter.style.width = `${ratio * 100}%`;

    // Color: green → yellow → red
    const hue = ratio * 120; // 120=green, 0=red
    el.timerBar.style.background = `hsl(${hue}, 85%, 55%)`;
    el.bonusMeter.style.background = `hsl(${hue}, 85%, 55%)`;
  }

  // ── Progress Bar ──────────────────────────────────────────────
  function updateProgress() {
    const pct = (state.currentIndex / state.questions.length) * 100;
    el.progressFill.style.width = `${pct}%`;
  }

  // ── Brick Track ───────────────────────────────────────────────
  function getBrickColor(stackedCount) {
    if (stackedCount <= 2) return '#2ecc71';
    if (stackedCount <= 4) return '#f39c12';
    if (stackedCount <= 6) return '#e67e22';
    return '#e74c3c';
  }

  const BRICK_GAP = 4;

  function getSlotMetrics() {
    const trackW = el.brickTrack.offsetWidth || 800;
    const slotW  = Math.max(20, Math.floor((trackW - (MAX_BRICKS + 1) * BRICK_GAP) / MAX_BRICKS));
    return { trackW, slotW, gap: BRICK_GAP };
  }

  function renderBrickTrack() {
    // Clear track
    el.brickTrack.innerHTML = '';

    const { slotW, gap } = getSlotMetrics();

    // 1. Render empty slot guides across the horizontal box
    for (let i = 0; i < MAX_BRICKS; i++) {
      const slot = document.createElement('div');
      slot.className = 'brick-slot';
      slot.style.left  = `${gap + i * (slotW + gap)}px`;
      slot.style.width = `${slotW}px`;
      el.brickTrack.appendChild(slot);
    }

    // 2. Render stacked bricks filling their slots
    for (let i = 0; i < state.brickCount; i++) {
      const b = document.createElement('div');
      b.className = 'brick-stacked';
      b.style.left       = `${gap + i * (slotW + gap)}px`;
      b.style.width      = `${slotW}px`;
      b.style.background = getBrickColor(state.brickCount);
      b.textContent      = `${i + 1}`;
      el.brickTrack.appendChild(b);
    }

    // Update danger indicator
    el.brickCount.textContent = `${state.brickCount}/${MAX_BRICKS}`;
    el.brickCount.style.color = state.brickCount >= 6 ? '#f85149' :
                                 state.brickCount >= 4 ? '#d29922' : '#8b949e';

    const brickCount2 = document.getElementById('brickCount2');
    if (brickCount2) brickCount2.textContent = `${state.brickCount} of ${MAX_BRICKS} landed`;

    // Warn on track if nearly full
    el.brickTrack.classList.toggle('brick-danger', state.brickCount >= MAX_BRICKS - 2);
  }

  function spawnActiveBrick() {
    // Remove any previous active brick
    if (el.activeBrick) el.activeBrick.remove();

    const { trackW, slotW, gap } = getSlotMetrics();
    const landingX = gap + state.brickCount * (slotW + gap);
    const startX   = trackW; // off-screen right
    const duration = state.questionDuration;

    const brick = document.createElement('div');
    brick.className   = 'brick-active';
    brick.style.width = `${slotW}px`;
    brick.style.left  = `${startX}px`;
    el.brickTrack.appendChild(brick);
    el.activeBrick = brick;

    // Start animation: slide from right to target landing slot
    requestAnimationFrame(() => {
      brick.style.transition = `left ${duration}s linear`;
      brick.style.left       = `${landingX}px`;
    });
  }

  function destroyActiveBrick() {
    if (!el.activeBrick) return;
    clearTimeout(state.brickTimeout);

    const brick = el.activeBrick;
    el.activeBrick = null;
    brick.classList.add('brick-explode');

    // Create particle burst
    createBrickParticles(brick);
    setTimeout(() => brick.remove(), 600);
  }

  function landActiveBrick() {
    if (!el.activeBrick) return;
    clearTimeout(state.brickTimeout);

    const brick = el.activeBrick;
    el.activeBrick = null;
    // Snap to landed position
    brick.style.transition = 'left 0.2s ease, opacity 0.2s';
    brick.classList.remove('brick-active');
    brick.classList.add('brick-landing');

    state.brickCount++;
    renderBrickTrack();
    brick.remove(); // after re-render it's drawn as stacked

    if (state.brickCount >= MAX_BRICKS) {
      setTimeout(() => endGame(false, 'bricks'), 400);
    }
  }

  function createBrickParticles(brickEl) {
    const rect = brickEl.getBoundingClientRect();
    const trackRect = el.brickTrack.getBoundingClientRect();
    const cx = rect.left - trackRect.left + rect.width / 2;
    const cy = rect.top  - trackRect.top  + rect.height / 2;

    for (let i = 0; i < 10; i++) {
      const p = document.createElement('div');
      p.className = 'brick-particle';
      const angle  = (i / 10) * Math.PI * 2;
      const dist   = 30 + Math.random() * 40;
      p.style.left = `${cx}px`;
      p.style.top  = `${cy}px`;
      p.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
      p.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
      p.style.background = getBrickColor(state.brickCount);
      el.brickTrack.appendChild(p);
      setTimeout(() => p.remove(), 700);
    }
  }

  // ── Preview iframe ────────────────────────────────────────────
  function updatePreview() {
    const html = getPreviewHTML(state.course, state.previewCorrect);
    el.preview.srcdoc = html;
  }

  // ── Question Loading ──────────────────────────────────────────
  function loadQuestion(index) {
    const q = state.questions[index];
    if (!q) { endGame(true, 'complete'); return; }

    state.answered        = false;
    state.questionElapsed = 0;
    state.questionDuration = getQuestionDuration();

    // HUD
    el.questionNum.textContent  = `${index + 1} / ${state.questions.length}`;
    el.questionTitle.textContent = q.title;
    el.questionTopic.textContent = `#${q.topic}`;
    updateProgress();

    // Code editor tab — use template filename
    if (state.template) {
      if (el.editorTabLabel) el.editorTabLabel.textContent = state.template.filename;
      const iconMap = { html: '🌐', css: '🎨', javascript: '⚡' };
      if (el.editorTabIcon)  el.editorTabIcon.textContent  = iconMap[state.course] || '📄';
    }

    // Render the full template with all blanks visible
    renderTemplate(index);

    // Answer options
    el.optionsGrid.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className  = 'option-btn';
      btn.id         = `option-${i}`;
      btn.dataset.idx = i;
      btn.innerHTML  = `<span class="option-key">${labels[i]}</span><span class="option-text">${opt}</span>`;
      btn.addEventListener('click', () => handleAnswer(i));
      el.optionsGrid.appendChild(btn);
    });

    // Spawn brick & start timers
    spawnActiveBrick();
    startQuestionTimer();

    // Auto-land if time expires
    state.brickTimeout = setTimeout(() => {
      if (!state.answered) {
        state.answered = true;
        onWrongAnswer(q, null);
      }
    }, state.questionDuration * 1000);
  }

  function startQuestionTimer() {
    clearInterval(state.questionInterval);
    state.questionInterval = setInterval(() => {
      if (!state.gameActive || state.answered) return;
      state.questionElapsed++;
      updateBonusMeter();
    }, 1000);
  }

  // ── Answer Handling ───────────────────────────────────────────
  function handleAnswer(optionIndex) {
    if (state.answered || !state.gameActive) return;
    state.answered = true;
    clearInterval(state.questionInterval);
    clearTimeout(state.brickTimeout);

    const q = state.questions[state.currentIndex];
    const correct = optionIndex === q.answer;

    // Visual: fill the blank in the full template
    fillBlank(q.options[optionIndex], correct, state.currentIndex);

    // Highlight option buttons
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer)     btn.classList.add('correct');
      if (i === optionIndex && !correct) btn.classList.add('wrong');
    });

    if (correct) {
      onCorrectAnswer(q);
    } else {
      onWrongAnswer(q, q.options[optionIndex]);
    }
  }

  function onCorrectAnswer(q) {
    const bonus = calculateBonus(state.questionDuration - state.questionElapsed, state.questionDuration);
    const earned = BASE_POINTS + bonus;

    state.score        += earned;
    state.correctCount++;
    state.comboCount++;
    state.previewCorrect++;

    // Combo bonus
    if (state.comboCount >= 3) {
      const comboBonus = state.comboCount * 50;
      state.score += comboBonus;
      showFeedback(true, `🔥 ${state.comboCount}x COMBO! +${earned + comboBonus}pts`);
    } else {
      showFeedback(true, `✓ Correct! +${earned}pts`);
    }

    updateScoreDisplay(true);
    updateComboDisplay();
    destroyActiveBrick();
    updatePreview();

    // Explanation
    if (q) el.explanationText.innerHTML = q.explanation;

    setTimeout(() => nextQuestion(), 1500);
  }

  function onWrongAnswer(q, playerAnswer) {
    state.wrongCount++;
    state.comboCount = 0;
    updateComboDisplay();

    // Record for post-game review
    state.missedQuestions.push({
      title: q ? q.title : 'Question Timed Out',
      topic: q ? q.topic : 'Speed',
      playerAnswer: playerAnswer || 'Timed out ⏰',
      correctAnswer: q ? q.options[q.answer] : '',
      explanation: q ? q.explanation : 'Time expired before an answer was chosen.'
    });

    showFeedback(false, q ? `✗ Wrong! The answer was: <strong>${q.options[q.answer]}</strong>` : '⏰ Time\'s up!');

    if (q && el.explanationText) el.explanationText.innerHTML = q.explanation;

    // Screen shake
    document.querySelector('.game-layout').classList.add('shake');
    setTimeout(() => document.querySelector('.game-layout').classList.remove('shake'), 500);

    landActiveBrick();

    setTimeout(() => nextQuestion(), 1800);
  }

  function nextQuestion() {
    hideFeedback();
    state.currentIndex++;
    if (state.currentIndex >= state.questions.length) {
      endGame(true, 'complete');
    } else {
      loadQuestion(state.currentIndex);
    }
  }

  // ── Combo Display ─────────────────────────────────────────────
  function updateComboDisplay() {
    if (state.comboCount >= 2) {
      el.combo.textContent = `🔥 ${state.comboCount}x`;
      el.combo.style.display = 'inline-flex';
    } else {
      el.combo.style.display = 'none';
    }
  }

  // ── Feedback Banner ───────────────────────────────────────────
  function showFeedback(correct, msg) {
    el.feedbackBanner.className = `feedback-banner ${correct ? 'fb-correct' : 'fb-wrong'} visible`;
    el.feedbackText.innerHTML = msg;
  }

  function hideFeedback() {
    el.feedbackBanner.classList.remove('visible');
    el.explanationText.innerHTML = '';
  }

  // ── Game Over ─────────────────────────────────────────────────
  function endGame(won, reason) {
    state.gameActive = false;
    clearInterval(state.gameInterval);
    clearInterval(state.questionInterval);
    clearTimeout(state.brickTimeout);
    if (el.activeBrick) {
      el.activeBrick.style.transition = 'none';
    }

    // Overlay
    el.overlayWrap.classList.remove('hidden');
    el.overlayWrap.classList.add('visible');

    if (won && reason === 'complete') {
      el.overlayTitle.textContent   = '🎉 Course Complete!';
      el.overlaySubtitle.textContent = `You answered all ${state.questions.length} questions!`;
      el.overlayWrap.classList.add('overlay-win');
    } else if (reason === 'quit') {
      el.overlayTitle.textContent   = '🏁 Game Ended';
      el.overlaySubtitle.textContent = `Session ended early (${state.currentIndex} of ${state.questions.length} questions)`;
      el.overlayWrap.classList.add('overlay-win');
    } else {
      el.overlayTitle.textContent   = '💥 Game Over!';
      el.overlaySubtitle.textContent = reason === 'bricks'
        ? 'The bricks reached the wall!'
        : 'Better luck next time!';
      el.overlayWrap.classList.add('overlay-lose');
    }

    el.overlayScore.textContent   = state.score.toLocaleString();
    el.overlayCorrect.textContent = state.correctCount;
    el.overlayWrong.textContent   = state.wrongCount;
    el.overlayTime.textContent    = formatTime(state.gameElapsed);

    // Render what was missed and how to improve
    renderGameReview();
  }

  // ── Post-Game Learning Review ─────────────────────────────────
  function escapeHtml(str) {
    if (!str) return '';
    return str.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderGameReview() {
    if (!el.overlayReview) return;

    if (state.missedQuestions.length === 0) {
      el.overlayReview.innerHTML = `
        <div class="review-perfect-box">
          🌟 Flawless Run! You mastered all questions in this session with 0 errors!
        </div>
      `;
      return;
    }

    // 1. Group mistakes by topic for actionable guidance
    const topicCounts = {};
    state.missedQuestions.forEach(m => {
      topicCounts[m.topic] = (topicCounts[m.topic] || 0) + 1;
    });

    const sortedTopics = Object.keys(topicCounts).sort((a, b) => topicCounts[b] - topicCounts[a]);
    const topTopics = sortedTopics.slice(0, 3);
    const docLink = DOC_LINKS[state.course] || 'https://developer.mozilla.org';
    const courseLabels = { html: 'HTML', css: 'CSS', javascript: 'JavaScript' };
    const courseName = courseLabels[state.course] || 'Code';

    let adviceHtml = `
      <div class="review-advice-box">
        <div class="review-advice-title">
          <span>💡</span> Focus & Improvement Guide
        </div>
        <div class="review-advice-desc">
          You had the most difficulty with <strong>${topTopics.join(', ')}</strong>.
          Reviewing these syntax rules will help you keep the brick wall clear and unlock 3x+ combo multipliers!
        </div>
        <div class="review-topics-list">
          ${topTopics.map(t => `<span class="review-topic-chip">#${t}</span>`).join('')}
        </div>
        <a class="review-doc-btn" href="${docLink}" target="_blank" rel="noopener noreferrer">
          📖 Read ${courseName} Docs on MDN ↗
        </a>
      </div>
    `;

    // 2. Itemized breakdown of failed questions
    let listHtml = `
      <div class="review-heading">Review What You Missed (${state.missedQuestions.length})</div>
      <div class="review-missed-list">
        ${state.missedQuestions.map((item, i) => `
          <div class="review-item">
            <div class="review-item-header">
              <span class="review-item-title">${i + 1}. ${escapeHtml(item.title)}</span>
              <span class="review-item-topic">#${escapeHtml(item.topic)}</span>
            </div>
            <div class="review-item-answers">
              <span class="review-badge badge-wrong">Your answer: ${escapeHtml(item.playerAnswer)}</span>
              <span class="review-badge badge-correct">Correct: ${escapeHtml(item.correctAnswer)}</span>
            </div>
            <div class="review-item-explanation">${item.explanation}</div>
          </div>
        `).join('')}
      </div>
    `;

    el.overlayReview.innerHTML = adviceHtml + listHtml;
  }

  // ── Main Game Loop (elapsed time) ─────────────────────────────
  function startGameLoop() {
    state.gameInterval = setInterval(() => {
      if (!state.gameActive) return;
      state.gameElapsed++;
      el.gameTimer.textContent = formatTime(state.gameElapsed);
    }, 1000);
  }

  // ── Keyboard Shortcuts ────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (!state.gameActive || state.answered) return;
    const key = e.key.toLowerCase();
    const idx = OPTION_KEYS.indexOf(key);
    if (idx !== -1) {
      const btn = document.getElementById(`option-${idx}`);
      if (btn) {
        btn.classList.add('key-press');
        setTimeout(() => btn.classList.remove('key-press'), 150);
        handleAnswer(idx);
      }
    }
  });

  // ── Init ──────────────────────────────────────────────────────
  function init() {
    const name   = sessionStorage.getItem('cc_name');
    const course = sessionStorage.getItem('cc_course');

    // Redirect if missing
    if (!name || !course) {
      window.location.href = 'index.html';
      return;
    }

    state.playerName = name;
    state.course     = course;

    // HUD setup
    el.playerName.textContent  = name;
    const courseLabels = { html: 'HTML', css: 'CSS', javascript: 'JavaScript' };
    el.courseBadge.textContent = courseLabels[course] || course;
    el.courseBadge.className   = `course-badge badge-${course}`;

    // Documentation link
    const docLink = document.getElementById('docLink');
    if (docLink) {
      docLink.href = DOC_LINKS[course];
      docLink.title = `Open MDN ${courseLabels[course]} Documentation`;
    }

    // Load questions and full code template
    state.questions = getShuffledQuestions(course);
    state.template  = getFullTemplate(course);
    state.filledBlanks = {};
    state.missedQuestions = [];

    // Initial preview
    updatePreview();
    renderBrickTrack();

    // Start!
    state.gameActive = true;
    loadQuestion(0);
    startGameLoop();

    // Theme Toggle
    setupThemeToggle();

    // Replay / Home / End Game buttons
    el.replayBtn.addEventListener('click', () => {
      window.location.reload();
    });
    el.homeBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
    if (el.endGameBtn) {
      el.endGameBtn.addEventListener('click', () => {
        if (!state.gameActive) return;
        if (confirm('End this game session and view your final score?')) {
          endGame(false, 'quit');
        }
      });
    }
  }

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

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
