// =============================================================
//  CodeCrush — Question Bank
//  Fill-in-blank code questions: 20 per course (60 total)
//  Each option array is ordered; answer = index of correct one.
// =============================================================

const QUESTION_BANK = {
  html: [
    {
      id: 'h01', topic: 'Headings', difficulty: 1,
      title: 'Main Heading Tag',
      snippet: `<___>Welcome to My Website</___>\n<p>Explore web development</p>`,
      options: ['h1', 'h2', 'header', 'title'],
      answer: 0,
      explanation: '&lt;h1&gt; creates the top-level heading — the most important and largest heading on a page.'
    },
    {
      id: 'h02', topic: 'Links', difficulty: 1,
      title: 'Anchor Href Attribute',
      snippet: `<a ___="https://developer.mozilla.org">\n  MDN Documentation\n</a>`,
      options: ['href', 'src', 'url', 'link'],
      answer: 0,
      explanation: 'The href (hypertext reference) attribute specifies the URL a link points to.'
    },
    {
      id: 'h03', topic: 'Lists', difficulty: 1,
      title: 'Unordered List',
      snippet: `<___>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</___>`,
      options: ['ul', 'ol', 'list', 'dl'],
      answer: 0,
      explanation: '&lt;ul&gt; creates an unordered (bulleted) list. &lt;ol&gt; creates a numbered list.'
    },
    {
      id: 'h04', topic: 'Images', difficulty: 1,
      title: 'Image Alt Attribute',
      snippet: `<img src="profile.jpg"\n     ___="A developer portrait"\n     width="200">`,
      options: ['alt', 'title', 'description', 'caption'],
      answer: 0,
      explanation: 'The alt attribute provides alternative text for screen readers and when images fail to load.'
    },
    {
      id: 'h05', topic: 'Forms', difficulty: 1,
      title: 'Button Element',
      snippet: `<form>\n  <input type="text" placeholder="Username">\n  <___ type="submit">Login</___>\n</form>`,
      options: ['button', 'input', 'click', 'a'],
      answer: 0,
      explanation: '&lt;button&gt; creates a clickable button. type="submit" submits the parent form.'
    },
    {
      id: 'h06', topic: 'Forms', difficulty: 2,
      title: 'Required Field',
      snippet: `<form>\n  <input type="email"\n    name="email"\n    ___\n    placeholder="Your email">\n</form>`,
      options: ['required', 'mandatory', 'validate', 'mustfill'],
      answer: 0,
      explanation: 'The required attribute makes a form field mandatory — the form cannot submit without it.'
    },
    {
      id: 'h07', topic: 'Semantic', difficulty: 2,
      title: 'Navigation Element',
      snippet: `<___>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n</___>`,
      options: ['nav', 'navigation', 'menu', 'header'],
      answer: 0,
      explanation: '&lt;nav&gt; is a semantic HTML5 element that represents a set of navigation links.'
    },
    {
      id: 'h08', topic: 'Text', difficulty: 1,
      title: 'Paragraph Tag',
      snippet: `<___>\n  Coding is the superpower of the 21st century.\n</___>`,
      options: ['p', 'para', 'text', 'section'],
      answer: 0,
      explanation: '&lt;p&gt; defines a paragraph of text — one of the most fundamental HTML elements.'
    },
    {
      id: 'h09', topic: 'Tables', difficulty: 2,
      title: 'Table Data Cell',
      snippet: `<table>\n  <tr>\n    <___>Name</___>\n    <___>Score</___>\n  </tr>\n</table>`,
      options: ['td', 'th', 'cell', 'tc'],
      answer: 0,
      explanation: '&lt;td&gt; creates a table data cell. &lt;th&gt; creates a header cell (bold & centered).'
    },
    {
      id: 'h10', topic: 'Forms', difficulty: 2,
      title: 'Form Action',
      snippet: `<form ___="/api/submit"\n      method="post">\n  <input type="text" name="query">\n</form>`,
      options: ['action', 'method', 'target', 'href'],
      answer: 0,
      explanation: 'The action attribute specifies the URL where form data is sent when submitted.'
    },
    {
      id: 'h11', topic: 'Text', difficulty: 1,
      title: 'Line Break',
      snippet: `<p>Line one of text<___>\nLine two of text</p>`,
      options: ['br', 'lb', 'break', 'newline'],
      answer: 0,
      explanation: '&lt;br&gt; inserts a line break inside text. Unlike &lt;p&gt;, it does not create a new block.'
    },
    {
      id: 'h12', topic: 'Head', difficulty: 2,
      title: 'Stylesheet Link',
      snippet: `<head>\n  <link rel="stylesheet"\n        ___="style.css">\n</head>`,
      options: ['href', 'src', 'url', 'path'],
      answer: 0,
      explanation: 'The href attribute in &lt;link&gt; points to the external CSS file to load.'
    },
    {
      id: 'h13', topic: 'Lists', difficulty: 1,
      title: 'Ordered List',
      snippet: `<___>\n  <li>Open your editor</li>\n  <li>Write HTML</li>\n  <li>View in browser</li>\n</___>`,
      options: ['ol', 'ul', 'list', 'dl'],
      answer: 0,
      explanation: '&lt;ol&gt; creates a numbered (ordered) list. Items are automatically numbered.'
    },
    {
      id: 'h14', topic: 'Forms', difficulty: 1,
      title: 'Password Input',
      snippet: `<input\n  type="___"\n  name="password"\n  placeholder="Enter password">`,
      options: ['password', 'text', 'secret', 'hidden'],
      answer: 0,
      explanation: 'type="password" hides input characters, displaying dots or asterisks instead.'
    },
    {
      id: 'h15', topic: 'Structure', difficulty: 1,
      title: 'Document Body',
      snippet: `<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <___>\n    <h1>Hello!</h1>\n  </___>\n</html>`,
      options: ['body', 'main', 'content', 'page'],
      answer: 0,
      explanation: '&lt;body&gt; contains all visible page content — everything the user sees and interacts with.'
    },
    {
      id: 'h16', topic: 'Semantic', difficulty: 2,
      title: 'Main Content Area',
      snippet: `<body>\n  <header>...</header>\n  <___>\n    <article>Main story</article>\n  </___>\n  <footer>...</footer>\n</body>`,
      options: ['main', 'content', 'section', 'div'],
      answer: 0,
      explanation: '&lt;main&gt; identifies the primary content. There should be only ONE &lt;main&gt; per page.'
    },
    {
      id: 'h17', topic: 'Attributes', difficulty: 1,
      title: 'Element ID',
      snippet: `<div ___="hero-section">\n  <h1>Coding Is Awesome</h1>\n</div>`,
      options: ['id', 'name', 'class', 'ref'],
      answer: 0,
      explanation: 'The id attribute gives an element a unique identifier used in CSS and JavaScript.'
    },
    {
      id: 'h18', topic: 'Text', difficulty: 1,
      title: 'Strong Emphasis',
      snippet: `<p>This is <___>critically important</___>\nfor your exam!</p>`,
      options: ['strong', 'bold', 'b', 'em'],
      answer: 0,
      explanation: '&lt;strong&gt; marks text as strongly important. It renders bold and carries semantic meaning.'
    },
    {
      id: 'h19', topic: 'Head', difficulty: 2,
      title: 'Character Encoding',
      snippet: `<head>\n  <meta ___="UTF-8">\n  <title>My Website</title>\n</head>`,
      options: ['charset', 'encoding', 'type', 'lang'],
      answer: 0,
      explanation: 'charset="UTF-8" declares the character set, supporting most world languages and symbols.'
    },
    {
      id: 'h20', topic: 'Dividers', difficulty: 1,
      title: 'Horizontal Rule',
      snippet: `<h2>Section One</h2>\n<___>\n<h2>Section Two</h2>`,
      options: ['hr', 'br', 'divider', 'line'],
      answer: 0,
      explanation: '&lt;hr&gt; inserts a thematic break — a horizontal line used to separate content sections.'
    }
  ],

  css: [
    {
      id: 'c01', topic: 'Color', difficulty: 1,
      title: 'Text Color Property',
      snippet: `.title {\n  ___: #ff6b6b;\n  font-size: 2rem;\n}`,
      options: ['color', 'text-color', 'font-color', 'fill'],
      answer: 0,
      explanation: 'The color property sets the foreground (text) color of an element.'
    },
    {
      id: 'c02', topic: 'Background', difficulty: 1,
      title: 'Background Color',
      snippet: `.card {\n  ___: #ffffff;\n  border-radius: 8px;\n}`,
      options: ['background-color', 'bg-color', 'back-color', 'fill-color'],
      answer: 0,
      explanation: 'background-color sets the background fill color of an element.'
    },
    {
      id: 'c03', topic: 'Typography', difficulty: 1,
      title: 'Font Weight',
      snippet: `h1 {\n  ___: bold;\n  letter-spacing: 2px;\n}`,
      options: ['font-weight', 'font-style', 'text-weight', 'font-bold'],
      answer: 0,
      explanation: 'font-weight controls the boldness of text. Common values: normal, bold, 100–900.'
    },
    {
      id: 'c04', topic: 'Layout', difficulty: 2,
      title: 'Flexbox Display',
      snippet: `.container {\n  display: ___;\n  justify-content: center;\n  align-items: center;\n}`,
      options: ['flex', 'block', 'grid', 'inline'],
      answer: 0,
      explanation: 'display: flex enables Flexbox layout — the modern standard for aligning items.'
    },
    {
      id: 'c05', topic: 'Box Model', difficulty: 1,
      title: 'Inner Spacing (Padding)',
      snippet: `.button {\n  ___: 12px 24px;\n  background: #4f9cf9;\n  color: white;\n}`,
      options: ['padding', 'margin', 'spacing', 'indent'],
      answer: 0,
      explanation: 'padding adds space INSIDE an element, between the content and its border.'
    },
    {
      id: 'c06', topic: 'Box Model', difficulty: 1,
      title: 'Outer Spacing (Margin)',
      snippet: `.card {\n  ___: 20px auto;\n  max-width: 600px;\n}`,
      options: ['margin', 'padding', 'gap', 'space'],
      answer: 0,
      explanation: 'margin adds space OUTSIDE an element. "auto" on left/right centers a block element.'
    },
    {
      id: 'c07', topic: 'Borders', difficulty: 1,
      title: 'Rounded Corners',
      snippet: `.button {\n  background: #9b59ff;\n  color: white;\n  ___: 25px;\n}`,
      options: ['border-radius', 'corner-radius', 'round', 'border-curve'],
      answer: 0,
      explanation: 'border-radius rounds element corners. A value of 50% makes a circle.'
    },
    {
      id: 'c08', topic: 'Typography', difficulty: 1,
      title: 'Font Size',
      snippet: `p {\n  ___: 16px;\n  line-height: 1.6;\n  color: #555;\n}`,
      options: ['font-size', 'text-size', 'font', 'size'],
      answer: 0,
      explanation: 'font-size controls the size of text. Common units: px, rem, em, %.'
    },
    {
      id: 'c09', topic: 'Dimensions', difficulty: 1,
      title: 'Element Width',
      snippet: `.container {\n  ___: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}`,
      options: ['width', 'size', 'length', 'extent'],
      answer: 0,
      explanation: 'width sets the width of an element. Combine with max-width to cap the maximum size.'
    },
    {
      id: 'c10', topic: 'Interaction', difficulty: 2,
      title: 'Pointer Cursor',
      snippet: `.clickable:hover {\n  ___: pointer;\n  opacity: 0.85;\n}`,
      options: ['cursor', 'mouse', 'pointer', 'arrow'],
      answer: 0,
      explanation: 'cursor: pointer changes the mouse cursor to a hand, indicating a clickable element.'
    },
    {
      id: 'c11', topic: 'Flexbox', difficulty: 2,
      title: 'Justify Content',
      snippet: `.nav {\n  display: flex;\n  justify-content: ___;\n  gap: 16px;\n}`,
      options: ['center', 'middle', 'align-center', 'flex-center'],
      answer: 0,
      explanation: 'justify-content: center horizontally centers flex items in their container.'
    },
    {
      id: 'c12', topic: 'Typography', difficulty: 1,
      title: 'Font Family',
      snippet: `body {\n  ___: "Inter", sans-serif;\n  color: #333;\n}`,
      options: ['font-family', 'font', 'font-type', 'typeface'],
      answer: 0,
      explanation: 'font-family specifies the typeface to use. Always provide fallback fonts.'
    },
    {
      id: 'c13', topic: 'Effects', difficulty: 2,
      title: 'Box Shadow',
      snippet: `.card {\n  background: white;\n  ___: 0 4px 20px rgba(0,0,0,0.15);\n}`,
      options: ['box-shadow', 'shadow', 'drop-shadow', 'element-shadow'],
      answer: 0,
      explanation: 'box-shadow adds a shadow effect. Format: offset-x offset-y blur spread color.'
    },
    {
      id: 'c14', topic: 'Animation', difficulty: 2,
      title: 'CSS Transition',
      snippet: `.btn {\n  background: #4f9cf9;\n  ___: background 0.3s ease,\n         transform 0.2s;\n}`,
      options: ['transition', 'animation', 'transform', 'effect'],
      answer: 0,
      explanation: 'transition creates smooth animations when CSS property values change (e.g., on hover).'
    },
    {
      id: 'c15', topic: 'Typography', difficulty: 1,
      title: 'Text Alignment',
      snippet: `.hero {\n  ___: center;\n  font-size: 3rem;\n  font-weight: bold;\n}`,
      options: ['text-align', 'align', 'text-center', 'justify'],
      answer: 0,
      explanation: 'text-align controls horizontal text positioning: left, right, center, or justify.'
    },
    {
      id: 'c16', topic: 'Positioning', difficulty: 2,
      title: 'Z-Index Stacking',
      snippet: `.modal {\n  position: fixed;\n  ___: 1000;\n  top: 0; left: 0;\n}`,
      options: ['z-index', 'stack', 'layer', 'order'],
      answer: 0,
      explanation: 'z-index controls the stacking order. Higher values appear on top of lower values.'
    },
    {
      id: 'c17', topic: 'Text', difficulty: 1,
      title: 'Text Decoration',
      snippet: `a {\n  ___: none;\n  color: #4f9cf9;\n  font-weight: 600;\n}`,
      options: ['text-decoration', 'underline', 'link-style', 'text-style'],
      answer: 0,
      explanation: 'text-decoration: none removes the default underline from hyperlinks.'
    },
    {
      id: 'c18', topic: 'Effects', difficulty: 1,
      title: 'Opacity',
      snippet: `.overlay {\n  background: #000;\n  ___: 0.7;\n  position: fixed;\n}`,
      options: ['opacity', 'transparency', 'alpha', 'visibility'],
      answer: 0,
      explanation: 'opacity controls transparency. 0 = fully transparent, 1 = fully opaque.'
    },
    {
      id: 'c19', topic: 'Positioning', difficulty: 3,
      title: 'Absolute Positioning',
      snippet: `.tooltip {\n  position: ___;\n  top: -40px;\n  left: 50%;\n}`,
      options: ['absolute', 'relative', 'fixed', 'sticky'],
      answer: 0,
      explanation: 'position: absolute positions an element relative to its nearest positioned ancestor.'
    },
    {
      id: 'c20', topic: 'Flexbox', difficulty: 2,
      title: 'Flex Gap',
      snippet: `.grid {\n  display: flex;\n  flex-wrap: wrap;\n  ___: 16px;\n}`,
      options: ['gap', 'spacing', 'margin', 'gutter'],
      answer: 0,
      explanation: 'gap sets the space between flex or grid items — cleaner than using margins on children.'
    }
  ],

  javascript: [
    {
      id: 'j01', topic: 'Variables', difficulty: 1,
      title: 'Constant Declaration',
      snippet: `___ PI = 3.14159;\nconsole.log(PI); // 3.14159`,
      options: ['const', 'let', 'var', 'fixed'],
      answer: 0,
      explanation: 'const declares a block-scoped constant that cannot be reassigned after creation.'
    },
    {
      id: 'j02', topic: 'Syntax', difficulty: 1,
      title: 'Single-Line Comment',
      snippet: `___ Calculate the final score\nlet score = base * multiplier;`,
      options: ['//', '/*', '#', '--'],
      answer: 0,
      explanation: '// begins a single-line comment in JavaScript. Everything after it on that line is ignored.'
    },
    {
      id: 'j03', topic: 'Debugging', difficulty: 1,
      title: 'Console Log',
      snippet: `let username = "Alice";\nconsole.___(username);\n// Prints: Alice`,
      options: ['log', 'print', 'write', 'output'],
      answer: 0,
      explanation: 'console.log() prints values to the browser\'s developer console — essential for debugging.'
    },
    {
      id: 'j04', topic: 'DOM', difficulty: 1,
      title: 'Get Element By ID',
      snippet: `let scoreEl =\n  document.___("score-display");\nscoreEl.textContent = 0;`,
      options: ['getElementById', 'querySelector', 'getElement', 'findById'],
      answer: 0,
      explanation: 'getElementById() finds exactly one element by its unique id attribute.'
    },
    {
      id: 'j05', topic: 'Operators', difficulty: 1,
      title: 'Strict Equality',
      snippet: `if (score ___ 100) {\n  console.log("Perfect score!");\n}`,
      options: ['===', '==', '=', '!=='],
      answer: 0,
      explanation: '=== checks both value AND type (strict equality). == only checks value and can cause bugs.'
    },
    {
      id: 'j06', topic: 'Functions', difficulty: 2,
      title: 'Arrow Function',
      snippet: `const greet = (name) ___ {\n  return \`Hello, \${name}!\`;\n};`,
      options: ['=>', '->', '=', '=>:'],
      answer: 0,
      explanation: '=> defines an arrow function — a concise modern syntax for writing functions in JS.'
    },
    {
      id: 'j07', topic: 'Arrays', difficulty: 1,
      title: 'Array Push',
      snippet: `let scores = [85, 92, 78];\nscores.___(95);\n// [85, 92, 78, 95]`,
      options: ['push', 'add', 'append', 'insert'],
      answer: 0,
      explanation: 'push() adds one or more elements to the END of an array and returns the new length.'
    },
    {
      id: 'j08', topic: 'Arrays', difficulty: 2,
      title: 'Array Map',
      snippet: `let nums = [1, 2, 3, 4];\nlet doubled = nums.___(n => n * 2);\n// [2, 4, 6, 8]`,
      options: ['map', 'forEach', 'filter', 'reduce'],
      answer: 0,
      explanation: 'map() creates a NEW array by applying a transformation function to each element.'
    },
    {
      id: 'j09', topic: 'DOM', difficulty: 1,
      title: 'Inner HTML',
      snippet: `let box = document.querySelector(".box");\nbox.___ = "<strong>Updated!</strong>";`,
      options: ['innerHTML', 'textContent', 'html', 'innerText'],
      answer: 0,
      explanation: 'innerHTML gets or sets the HTML content of an element, parsing HTML tags.'
    },
    {
      id: 'j10', topic: 'Events', difficulty: 1,
      title: 'Add Event Listener',
      snippet: `let btn = document.querySelector("#myBtn");\nbtn.___("click", () => {\n  alert("Clicked!");\n});`,
      options: ['addEventListener', 'onClick', 'addEvent', 'on'],
      answer: 0,
      explanation: 'addEventListener() attaches an event handler without overwriting other listeners.'
    },
    {
      id: 'j11', topic: 'Variables', difficulty: 1,
      title: 'Block-Scoped Variable',
      snippet: `for (___ i = 0; i < 5; i++) {\n  console.log(i);\n}`,
      options: ['let', 'var', 'const', 'for'],
      answer: 0,
      explanation: 'let declares a block-scoped variable. Unlike var, it doesn\'t leak outside its block.'
    },
    {
      id: 'j12', topic: 'Arrays', difficulty: 1,
      title: 'Array Length',
      snippet: `let fruits = ["apple", "mango", "banana"];\nconsole.log(fruits.___); // 3`,
      options: ['length', 'size', 'count', 'total'],
      answer: 0,
      explanation: '.length returns the number of elements in an array (or characters in a string).'
    },
    {
      id: 'j13', topic: 'Arrays', difficulty: 2,
      title: 'Array Pop',
      snippet: `let stack = [1, 2, 3, 4];\nlet last = stack.___();\nconsole.log(last); // 4`,
      options: ['pop', 'remove', 'shift', 'delete'],
      answer: 0,
      explanation: 'pop() removes and returns the LAST element of an array, modifying it in place.'
    },
    {
      id: 'j14', topic: 'Type Conversion', difficulty: 2,
      title: 'Parse Integer',
      snippet: `let input = "42";\nlet num = ___(input);\nconsole.log(num + 8); // 50`,
      options: ['parseInt', 'Number()', 'toNumber', 'parse'],
      answer: 0,
      explanation: 'parseInt() converts a string to an integer. "42" becomes the number 42.'
    },
    {
      id: 'j15', topic: 'Async', difficulty: 2,
      title: 'Set Timeout',
      snippet: `___(function() {\n  console.log("2 seconds later!");\n}, 2000);`,
      options: ['setTimeout', 'delay', 'wait', 'defer'],
      answer: 0,
      explanation: 'setTimeout() executes a function after a specified delay (in milliseconds).'
    },
    {
      id: 'j16', topic: 'DOM', difficulty: 2,
      title: 'ClassList Add',
      snippet: `let card = document.querySelector(".card");\ncard.classList.___("active");`,
      options: ['add', 'push', 'append', 'set'],
      answer: 0,
      explanation: 'classList.add() adds one or more CSS class names to an element\'s class list.'
    },
    {
      id: 'j17', topic: 'JSON', difficulty: 2,
      title: 'JSON Stringify',
      snippet: `let user = { name: "Alice", score: 95 };\nlet data = JSON.___(user);\n// '{"name":"Alice","score":95}'`,
      options: ['stringify', 'toString', 'encode', 'serialize'],
      answer: 0,
      explanation: 'JSON.stringify() converts a JavaScript object into a JSON-formatted string.'
    },
    {
      id: 'j18', topic: 'Types', difficulty: 1,
      title: 'Typeof Operator',
      snippet: `let x = 42;\nconsole.log(___ x);\n// "number"`,
      options: ['typeof', 'type', 'instanceof', 'checkType'],
      answer: 0,
      explanation: 'typeof returns a string describing the type of a value: "number", "string", "boolean", etc.'
    },
    {
      id: 'j19', topic: 'Arrays', difficulty: 2,
      title: 'Array Filter',
      snippet: `let ages = [12, 25, 17, 30, 16];\nlet adults = ages.___(a => a >= 18);\n// [25, 30]`,
      options: ['filter', 'find', 'select', 'where'],
      answer: 0,
      explanation: 'filter() creates a new array containing only elements that pass the test function.'
    },
    {
      id: 'j20', topic: 'DOM', difficulty: 2,
      title: 'ClassList Toggle',
      snippet: `let el = document.getElementById("menu");\nel.___.toggle("open");`,
      options: ['classList', 'classes', 'style', 'className'],
      answer: 0,
      explanation: 'classList provides add(), remove(), toggle(), and contains() methods for managing classes.'
    }
  ]
};

// =============================================================
//  Full Code Templates — one complete file per course
//  Blanks are marked as {{1}} through {{20}}, matching question
//  order in QUESTION_BANK. The player sees the WHOLE file and
//  fills blanks in sequence from top to bottom.
// =============================================================

const FULL_TEMPLATES = {

  html: {
    filename: 'index.html',
    code:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta {{19}}="UTF-8">
  <title>My Portfolio</title>
  <link rel="stylesheet"
        {{12}}="style.css">
</head>
<{{15}}>

  <{{7}}>
    <a {{2}}="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </{{7}}>

  <header>
    <{{1}}>Welcome to My Website</{{1}}>
    <{{8}}>
      Coding is the superpower of the
      21st century.
    </{{8}}>
  </header>

  <{{16}}>
    <div {{17}}="hero-section">
      <h2>My Skills</h2>

      <{{3}}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </{{3}}>

      <{{13}}>
        <li>Open your editor</li>
        <li>Write HTML</li>
        <li>View in browser</li>
      </{{13}}>

      <img src="profile.jpg"
           {{4}}="A developer portrait"
           width="200">
    </div>

    <p>This is <{{18}}>critically important</{{18}}>
    for your exam!</p>

    <h2>Section One</h2>
    <{{20}}>
    <h2>Section Two</h2>

    <p>Line one of text<{{11}}>
    Line two of text</p>
  </{{16}}>

  <form {{10}}="/api/submit"
        method="post">
    <input type="email"
      name="email"
      {{6}}
      placeholder="Your email">

    <input
      type="{{14}}"
      name="password"
      placeholder="Enter password">

    <{{5}} type="submit">Login</{{5}}>
  </form>

  <table>
    <tr>
      <{{9}}>Name</{{9}}>
      <{{9}}>Score</{{9}}>
    </tr>
  </table>

  <footer>
    <p>Copyright 2024</p>
  </footer>

</{{15}}>
</html>`
  },

  css: {
    filename: 'styles.css',
    code:
`/* ── Base Reset & Typography ──────────── */

body {
  {{12}}: "Inter", sans-serif;
  {{1}}: #333;
  {{2}}: #f5f5f5;
  {{6}}: 20px auto;
  max-width: 1200px;
}

h1 {
  {{3}}: bold;
  letter-spacing: 2px;
  {{15}}: center;
  {{8}}: 3rem;
}

p {
  font-size: 16px;
  line-height: 1.6;
}

a {
  {{17}}: none;
  color: #4f9cf9;
  font-weight: 600;
}

/* ── Layout ──────────────────────────── */

.container {
  {{9}}: 100%;
  max-width: 1200px;
  display: {{4}};
  justify-content: {{11}};
  align-items: center;
}

.nav {
  display: flex;
  justify-content: center;
  {{20}}: 16px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* ── Components ──────────────────────── */

.card {
  background: white;
  {{7}}: 25px;
  {{5}}: 12px 24px;
  margin: 20px auto;
  max-width: 600px;
  {{13}}: 0 4px 20px rgba(0,0,0,0.15);
}

.button {
  background: #9b59ff;
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  {{10}}: pointer;
  {{14}}: background 0.3s ease,
         transform 0.2s;
}

/* ── Overlays & Modals ───────────────── */

.overlay {
  background: #000;
  {{18}}: 0.7;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

.modal {
  position: fixed;
  {{16}}: 1000;
  top: 0; left: 0;
}

.tooltip {
  position: {{19}};
  top: -40px;
  left: 50%;
}`
  },

  javascript: {
    filename: 'app.js',
    code:
`// ── Variables & Constants ────────────

{{1}} PI = 3.14159;
{{2}} Calculate the final score
{{11}} score = base * multiplier;

let username = "Alice";
console.{{3}}(username);
// Prints: Alice

// ── DOM Manipulation ────────────────

let scoreEl =
  document.{{4}}("score-display");
scoreEl.textContent = 0;

let box = document.querySelector(".box");
box.{{9}} = "<strong>Updated!</strong>";

let card = document.querySelector(".card");
card.classList.{{16}}("active");

let el = document.getElementById("menu");
el.{{20}}.toggle("open");

// ── Events ──────────────────────────

let btn = document.querySelector("#myBtn");
btn.{{10}}("click", () => {
  alert("Clicked!");
});

// ── Conditionals ────────────────────

if (score {{5}} 100) {
  console.log("Perfect score!");
}

console.log({{18}} x);
// "number"

// ── Functions ───────────────────────

const greet = (name) {{6}} {
  return \`Hello, \${name}!\`;
};

// ── Arrays ──────────────────────────

let scores = [85, 92, 78];
scores.{{7}}(95);
// [85, 92, 78, 95]

let nums = [1, 2, 3, 4];
let doubled = nums.{{8}}(n => n * 2);
// [2, 4, 6, 8]

let fruits = ["apple", "mango", "banana"];
console.log(fruits.{{12}}); // 3

let stack = [1, 2, 3, 4];
let last = stack.{{13}}();
console.log(last); // 4

let ages = [12, 25, 17, 30, 16];
let adults = ages.{{19}}(a => a >= 18);
// [25, 30]

// ── Type Conversion ─────────────────

let input = "42";
let num = {{14}}(input);
console.log(num + 8); // 50

// ── Async & JSON ────────────────────

{{15}}(function() {
  console.log("2 seconds later!");
}, 2000);

let user = { name: "Alice", score: 95 };
let data = JSON.{{17}}(user);
// '{"name":"Alice","score":95}'

for (let i = 0; i < 5; i++) {
  console.log(i);
}`
  }
};

// ─── Get questions in template order (options randomized) ─────────────────────
function getShuffledQuestions(course) {
  const questions = JSON.parse(JSON.stringify(QUESTION_BANK[course])); // deep clone

  // Questions stay in order (1-20) to match the full template top-to-bottom.
  // Only shuffle the options within each question.
  return questions.map(q => {
    const correctAnswer = q.options[q.answer];
    const opts = [...q.options];
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return { ...q, options: opts, answer: opts.indexOf(correctAnswer) };
  });
}

// Return the full template for a course
function getFullTemplate(course) {
  return FULL_TEMPLATES[course] || null;
}

