// =============================================================
//  CodeCrush — Question Bank
//  Fill-in-blank code questions: 20 per set, per course
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
      answer: 1,
      explanation: '&lt;th&gt; creates a table header cell, which is appropriate for the column labels shown here.'
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

const ALTERNATE_QUESTION_BANK = {
  html: [
    {
      id: 'h21', topic: 'Headings', difficulty: 1,
      title: 'Page Heading',
      snippet: `<___>My Coding Journal</___>\n<p>Notes from my first project</p>`,
      options: ['h2', 'h1', 'header', 'heading'],
      answer: 1,
      explanation: '&lt;h1&gt; is the main heading for the page and describes its primary topic.'
    },
    {
      id: 'h22', topic: 'Links', difficulty: 1,
      title: 'Link Destination',
      snippet: `<a ___="contact.html">Contact me</a>`,
      options: ['src', 'href', 'action', 'target'],
      answer: 1,
      explanation: 'The href attribute tells a link which page or location to open.'
    },
    {
      id: 'h23', topic: 'Lists', difficulty: 1,
      title: 'Bulleted Ingredients',
      snippet: `<___>\n  <li>Flour</li>\n  <li>Sugar</li>\n</___>`,
      options: ['ol', 'ul', 'dl', 'list'],
      answer: 1,
      explanation: '&lt;ul&gt; creates a list whose items are not presented in a numbered order.'
    },
    {
      id: 'h24', topic: 'Images', difficulty: 1,
      title: 'Image Description',
      snippet: `<img src="cat.jpg" ___="A cat sleeping in a sunny window">`,
      options: ['title', 'alt', 'caption', 'description'],
      answer: 1,
      explanation: 'The alt attribute provides a text alternative describing the image.'
    },
    {
      id: 'h25', topic: 'Forms', difficulty: 1,
      title: 'Submit Button',
      snippet: `<form>\n  <___ type="submit">Join</___>\n</form>`,
      options: ['input', 'button', 'submit', 'a'],
      answer: 1,
      explanation: 'A button with type="submit" submits its containing form.'
    },
    {
      id: 'h26', topic: 'Forms', difficulty: 2,
      title: 'Make an Input Mandatory',
      snippet: `<input type="email" name="email" ___>`,
      options: ['validate', 'required', 'mandatory', 'needed'],
      answer: 1,
      explanation: 'The boolean required attribute makes the browser require a value before form submission.'
    },
    {
      id: 'h27', topic: 'Semantic', difficulty: 2,
      title: 'Site Navigation',
      snippet: `<___ aria-label="Main menu">\n  <a href="/">Home</a>\n</___>`,
      options: ['menu', 'nav', 'navigation', 'links'],
      answer: 1,
      explanation: '&lt;nav&gt; represents a section of major navigation links.'
    },
    {
      id: 'h28', topic: 'Text', difficulty: 1,
      title: 'Write a Paragraph',
      snippet: `<___>Learning HTML is fun.</___>`,
      options: ['text', 'p', 'paragraph', 'span'],
      answer: 1,
      explanation: '&lt;p&gt; represents a paragraph of text.'
    },
    {
      id: 'h29', topic: 'Tables', difficulty: 2,
      title: 'Label a Table Column',
      snippet: `<table>\n  <tr><___ scope="col">Price</___></tr>\n</table>`,
      options: ['td', 'th', 'tr', 'caption'],
      answer: 1,
      explanation: '&lt;th&gt; marks a table header cell and associates it with row or column data.'
    },
    {
      id: 'h30', topic: 'Forms', difficulty: 2,
      title: 'Choose Where Form Data Goes',
      snippet: `<form ___="/signup" method="post">\n  <button type="submit">Sign up</button>\n</form>`,
      options: ['href', 'action', 'src', 'destination'],
      answer: 1,
      explanation: 'The action attribute specifies the URL that receives the submitted form data.'
    },
    {
      id: 'h31', topic: 'Text', difficulty: 1,
      title: 'Break a Line',
      snippet: `<p>First line<___>Second line</p>`,
      options: ['hr', 'br', 'newline', 'break'],
      answer: 1,
      explanation: '&lt;br&gt; creates a line break within text.'
    },
    {
      id: 'h32', topic: 'Head', difficulty: 2,
      title: 'Connect a CSS File',
      snippet: `<link rel="stylesheet" ___="theme.css">`,
      options: ['src', 'href', 'file', 'url'],
      answer: 1,
      explanation: 'The href attribute on a stylesheet link points to the CSS file.'
    },
    {
      id: 'h33', topic: 'Lists', difficulty: 1,
      title: 'Numbered Steps',
      snippet: `<___>\n  <li>Mix ingredients</li>\n  <li>Bake the cake</li>\n</___>`,
      options: ['ul', 'ol', 'list', 'dl'],
      answer: 1,
      explanation: '&lt;ol&gt; marks a list where the sequence of items matters.'
    },
    {
      id: 'h34', topic: 'Forms', difficulty: 1,
      title: 'Hide Password Characters',
      snippet: `<input name="password" type="___">`,
      options: ['hidden', 'password', 'secret', 'private'],
      answer: 1,
      explanation: 'type="password" masks the characters entered into the field.'
    },
    {
      id: 'h35', topic: 'Document Structure', difficulty: 1,
      title: 'Visible Page Content',
      snippet: `<html>\n  <head><title>Notes</title></head>\n  <___><p>My notes</p></___>\n</html>`,
      options: ['main', 'body', 'content', 'page'],
      answer: 1,
      explanation: 'The body element contains the document content displayed in the browser.'
    },
    {
      id: 'h36', topic: 'Semantic', difficulty: 2,
      title: 'Primary Content Area',
      snippet: `<body>\n  <header>My blog</header>\n  <___><article>Latest post</article></___>\n</body>`,
      options: ['section', 'main', 'content', 'article'],
      answer: 1,
      explanation: '&lt;main&gt; identifies the primary content of the document.'
    },
    {
      id: 'h37', topic: 'Attributes', difficulty: 1,
      title: 'Identify a Unique Element',
      snippet: `<section ___="about-me">\n  <h2>About me</h2>\n</section>`,
      options: ['class', 'id', 'name', 'key'],
      answer: 1,
      explanation: 'The id attribute gives an element a unique identifier within the page.'
    },
    {
      id: 'h38', topic: 'Text', difficulty: 2,
      title: 'Mark Important Text',
      snippet: `<p><___>Wear a helmet</___> while riding.</p>`,
      options: ['b', 'strong', 'em', 'important'],
      answer: 1,
      explanation: '&lt;strong&gt; gives its text strong importance, not just a bold appearance.'
    },
    {
      id: 'h39', topic: 'Head', difficulty: 2,
      title: 'Set Character Encoding',
      snippet: `<meta ___="UTF-8">`,
      options: ['encoding', 'charset', 'type', 'language'],
      answer: 1,
      explanation: 'The charset attribute declares the document character encoding, commonly UTF-8.'
    },
    {
      id: 'h40', topic: 'Dividers', difficulty: 1,
      title: 'Separate Related Topics',
      snippet: `<h2>Morning</h2>\n<p>Breakfast and a walk.</p>\n<___>\n<h2>Evening</h2>`,
      options: ['br', 'hr', 'line', 'separator'],
      answer: 1,
      explanation: '&lt;hr&gt; represents a thematic break between paragraph-level sections.'
    }
  ],
  css: [
    {
      id: 'c21', topic: 'Color', difficulty: 1,
      title: 'Change Text Color',
      snippet: `.notice {\n  ___: darkgreen;\n}`,
      options: ['background', 'color', 'font-color', 'text'],
      answer: 1,
      explanation: 'The color property sets the foreground color of an element’s text.'
    },
    {
      id: 'c22', topic: 'Background', difficulty: 1,
      title: 'Fill a Card Background',
      snippet: `.card {\n  ___: #f0f4f8;\n}`,
      options: ['color', 'background-color', 'fill', 'background-fill'],
      answer: 1,
      explanation: 'background-color sets the background fill behind an element’s content.'
    },
    {
      id: 'c23', topic: 'Typography', difficulty: 1,
      title: 'Make a Heading Bold',
      snippet: `h2 {\n  ___: 700;\n}`,
      options: ['font-style', 'font-weight', 'text-weight', 'bold'],
      answer: 1,
      explanation: 'font-weight controls how bold or light text appears.'
    },
    {
      id: 'c24', topic: 'Layout', difficulty: 2,
      title: 'Create a Flex Container',
      snippet: `.toolbar {\n  display: ___;\n  gap: 12px;\n}`,
      options: ['grid', 'flex', 'inline', 'flow'],
      answer: 1,
      explanation: 'display: flex creates a flex container for arranging its child items.'
    },
    {
      id: 'c25', topic: 'Box Model', difficulty: 1,
      title: 'Space Inside a Panel',
      snippet: `.panel {\n  ___: 24px;\n  border: 1px solid gray;\n}`,
      options: ['margin', 'padding', 'gap', 'inset'],
      answer: 1,
      explanation: 'Padding adds space between an element’s content and its border.'
    },
    {
      id: 'c26', topic: 'Box Model', difficulty: 1,
      title: 'Space Outside a Panel',
      snippet: `.panel {\n  ___: 16px auto;\n  max-width: 500px;\n}`,
      options: ['padding', 'margin', 'gap', 'spacing'],
      answer: 1,
      explanation: 'Margin creates space outside the border; auto side margins can center a block.'
    },
    {
      id: 'c27', topic: 'Borders', difficulty: 1,
      title: 'Round a Card Corner',
      snippet: `.card {\n  ___: 10px;\n}`,
      options: ['corner-shape', 'border-radius', 'border-style', 'rounding'],
      answer: 1,
      explanation: 'border-radius rounds the corners of an element’s border box.'
    },
    {
      id: 'c28', topic: 'Typography', difficulty: 1,
      title: 'Set Paragraph Text Size',
      snippet: `p {\n  ___: 1.125rem;\n}`,
      options: ['text-size', 'font-size', 'font', 'size'],
      answer: 1,
      explanation: 'font-size sets the size of text. rem units are relative to the root font size.'
    },
    {
      id: 'c29', topic: 'Dimensions', difficulty: 1,
      title: 'Set a Container Width',
      snippet: `.content {\n  ___: 90%;\n  max-width: 70rem;\n}`,
      options: ['max-size', 'width', 'length', 'inline-size-limit'],
      answer: 1,
      explanation: 'width sets an element’s width; max-width can prevent it from growing too large.'
    },
    {
      id: 'c30', topic: 'Interaction', difficulty: 2,
      title: 'Show a Clickable Cursor',
      snippet: `.button:hover {\n  ___: pointer;\n}`,
      options: ['mouse', 'cursor', 'pointer-style', 'hover'],
      answer: 1,
      explanation: 'cursor: pointer shows the familiar hand cursor over an interactive element.'
    },
    {
      id: 'c31', topic: 'Flexbox', difficulty: 2,
      title: 'Center Flex Items',
      snippet: `.actions {\n  display: flex;\n  justify-content: ___;\n}`,
      options: ['middle', 'center', 'align-center', 'space-center'],
      answer: 1,
      explanation: 'justify-content: center centers flex items along the main axis.'
    },
    {
      id: 'c32', topic: 'Typography', difficulty: 1,
      title: 'Choose a Font Stack',
      snippet: `body {\n  ___: "Verdana", sans-serif;\n}`,
      options: ['font-style', 'font-family', 'typeface', 'font-name'],
      answer: 1,
      explanation: 'font-family sets the typeface and can include fallback fonts.'
    },
    {
      id: 'c33', topic: 'Effects', difficulty: 2,
      title: 'Add Depth to a Card',
      snippet: `.card {\n  ___: 0 2px 10px rgba(0, 0, 0, 0.15);\n}`,
      options: ['text-shadow', 'box-shadow', 'drop-shadow', 'shadow'],
      answer: 1,
      explanation: 'box-shadow draws a shadow around an element’s box.'
    },
    {
      id: 'c34', topic: 'Animation', difficulty: 2,
      title: 'Animate a Hover Change',
      snippet: `.button {\n  ___: transform 180ms ease;\n}`,
      options: ['animation', 'transition', 'transform', 'motion'],
      answer: 1,
      explanation: 'transition smoothly animates changes to the listed CSS property.'
    },
    {
      id: 'c35', topic: 'Typography', difficulty: 1,
      title: 'Center Text',
      snippet: `.welcome {\n  ___: center;\n}`,
      options: ['align', 'text-align', 'justify-content', 'text-position'],
      answer: 1,
      explanation: 'text-align: center centers inline content such as text inside its block.'
    },
    {
      id: 'c36', topic: 'Positioning', difficulty: 2,
      title: 'Place a Dialog Above Content',
      snippet: `.dialog {\n  position: fixed;\n  ___: 50;\n}`,
      options: ['layer', 'z-index', 'stack-order', 'position-index'],
      answer: 1,
      explanation: 'z-index controls stacking order for positioned elements.'
    },
    {
      id: 'c37', topic: 'Text', difficulty: 1,
      title: 'Remove a Link Underline',
      snippet: `a {\n  ___: none;\n}`,
      options: ['underline', 'text-decoration', 'font-decoration', 'link-style'],
      answer: 1,
      explanation: 'text-decoration controls decorations such as underlines on text.'
    },
    {
      id: 'c38', topic: 'Effects', difficulty: 1,
      title: 'Make an Overlay See-Through',
      snippet: `.overlay {\n  ___: 0.6;\n}`,
      options: ['visibility', 'opacity', 'transparency', 'alpha'],
      answer: 1,
      explanation: 'opacity controls how transparent an element and its contents appear.'
    },
    {
      id: 'c39', topic: 'Positioning', difficulty: 3,
      title: 'Position a Badge Against Its Container',
      snippet: `.badge {\n  position: ___;\n  top: 0;\n  right: 0;\n}`,
      options: ['fixed', 'absolute', 'relative', 'sticky'],
      answer: 1,
      explanation: 'position: absolute removes the element from normal flow and positions it against its containing block.'
    },
    {
      id: 'c40', topic: 'Layout', difficulty: 2,
      title: 'Add Space Between Navigation Items',
      snippet: `.navigation {\n  display: flex;\n  ___: 1rem;\n}`,
      options: ['margin', 'gap', 'padding', 'space'],
      answer: 1,
      explanation: 'gap sets spacing between items in flex and grid containers.'
    }
  ],
  javascript: [
    {
      id: 'j21', topic: 'Constants', difficulty: 1,
      title: 'Declare a Constant',
      snippet: `___ TAX_RATE = 0.08;\nconsole.log(TAX_RATE);`,
      options: ['let', 'const', 'fixed', 'static'],
      answer: 1,
      explanation: 'const declares a block-scoped binding that cannot be reassigned.'
    },
    {
      id: 'j22', topic: 'Comments', difficulty: 1,
      title: 'Write a Single-Line Comment',
      snippet: `___ Save the user's score\nlet score = 0;`,
      options: ['**', '//', '<!--', '#'],
      answer: 1,
      explanation: 'Two forward slashes begin a single-line JavaScript comment.'
    },
    {
      id: 'j23', topic: 'Console', difficulty: 1,
      title: 'Print a Value',
      snippet: `const city = "Oslo";\nconsole.___(city);`,
      options: ['write', 'log', 'print', 'show'],
      answer: 1,
      explanation: 'console.log() writes a value to the developer console.'
    },
    {
      id: 'j24', topic: 'DOM', difficulty: 1,
      title: 'Find an Element by ID',
      snippet: `const result = document.___("result");`,
      options: ['queryById', 'getElementById', 'findElement', 'getByName'],
      answer: 1,
      explanation: 'getElementById() returns the element with the matching id.'
    },
    {
      id: 'j25', topic: 'Operators', difficulty: 1,
      title: 'Compare Without Type Conversion',
      snippet: `if (answer ___ 42) {\n  console.log("Correct");\n}`,
      options: ['==', '===', '=', '=>'],
      answer: 1,
      explanation: '=== tests strict equality, checking both value and type.'
    },
    {
      id: 'j26', topic: 'Functions', difficulty: 2,
      title: 'Arrow Function Syntax',
      snippet: `const square = number ___ {\n  return number * number;\n};`,
      options: ['->', '=>', '==', 'function=>'],
      answer: 1,
      explanation: 'The arrow token => separates an arrow function’s parameters from its body.'
    },
    {
      id: 'j27', topic: 'Arrays', difficulty: 1,
      title: 'Add to the End of an Array',
      snippet: `const colors = ["blue", "green"];\ncolors.___("orange");`,
      options: ['append', 'push', 'add', 'insert'],
      answer: 1,
      explanation: 'push() adds one or more items to the end of an array.'
    },
    {
      id: 'j28', topic: 'Arrays', difficulty: 2,
      title: 'Transform Every Array Item',
      snippet: `const prices = [2, 4, 6];\nconst doubled = prices.___(price => price * 2);`,
      options: ['filter', 'map', 'forEach', 'find'],
      answer: 1,
      explanation: 'map() creates a new array from the result of a function run on each item.'
    },
    {
      id: 'j29', topic: 'DOM', difficulty: 1,
      title: 'Replace an Element’s HTML',
      snippet: `const panel = document.querySelector(".panel");\npanel.___ = "<em>Ready</em>";`,
      options: ['textContent', 'innerHTML', 'htmlText', 'content'],
      answer: 1,
      explanation: 'innerHTML reads or replaces an element’s HTML markup.'
    },
    {
      id: 'j30', topic: 'Events', difficulty: 1,
      title: 'Listen for a Button Click',
      snippet: `button.___("click", () => {\n  console.log("Clicked");\n});`,
      options: ['on', 'addEventListener', 'listen', 'handleEvent'],
      answer: 1,
      explanation: 'addEventListener() registers a function to run when the specified event occurs.'
    },
    {
      id: 'j31', topic: 'Variables', difficulty: 1,
      title: 'Declare a Changing Counter',
      snippet: `for (___ step = 0; step < 3; step++) {\n  console.log(step);\n}`,
      options: ['const', 'let', 'fixed', 'static'],
      answer: 1,
      explanation: 'let declares a block-scoped variable that can be reassigned, as a loop counter must be.'
    },
    {
      id: 'j32', topic: 'Arrays', difficulty: 1,
      title: 'Count Items in an Array',
      snippet: `const pets = ["dog", "cat"];\nconsole.log(pets.___);`,
      options: ['size', 'length', 'count', 'items'],
      answer: 1,
      explanation: 'The length property gives the number of items in an array.'
    },
    {
      id: 'j33', topic: 'Arrays', difficulty: 2,
      title: 'Remove the Last Array Item',
      snippet: `const tasks = ["read", "write"];\nconst lastTask = tasks.___();`,
      options: ['shift', 'pop', 'remove', 'delete'],
      answer: 1,
      explanation: 'pop() removes and returns the last item in an array.'
    },
    {
      id: 'j34', topic: 'Type Conversion', difficulty: 2,
      title: 'Convert Text to an Integer',
      snippet: `const ageText = "21";\nconst age = ___(ageText);`,
      options: ['String', 'parseInt', 'parseText', 'toInteger'],
      answer: 1,
      explanation: 'parseInt() parses a string and returns an integer when it contains a valid number.'
    },
    {
      id: 'j35', topic: 'Async', difficulty: 2,
      title: 'Run Code After a Delay',
      snippet: `___(() => {\n  console.log("Time is up");\n}, 1000);`,
      options: ['setInterval', 'setTimeout', 'delay', 'wait'],
      answer: 1,
      explanation: 'setTimeout() schedules a function to run once after a delay in milliseconds.'
    },
    {
      id: 'j36', topic: 'DOM', difficulty: 2,
      title: 'Add a CSS Class',
      snippet: `const notice = document.querySelector(".notice");\nnotice.classList.___("visible");`,
      options: ['push', 'add', 'append', 'set'],
      answer: 1,
      explanation: 'classList.add() adds a class name to an element.'
    },
    {
      id: 'j37', topic: 'JSON', difficulty: 2,
      title: 'Convert an Object to JSON Text',
      snippet: `const settings = { sound: true };\nconst text = JSON.___(settings);`,
      options: ['parse', 'stringify', 'encode', 'toJSONText'],
      answer: 1,
      explanation: 'JSON.stringify() converts a JavaScript value to a JSON string.'
    },
    {
      id: 'j38', topic: 'Types', difficulty: 1,
      title: 'Check a Value’s Type',
      snippet: `const temperature = 18;\nconsole.log(___ temperature);`,
      options: ['type', 'typeof', 'instanceof', 'kind'],
      answer: 1,
      explanation: 'typeof returns a string describing the type of a value.'
    },
    {
      id: 'j39', topic: 'Arrays', difficulty: 2,
      title: 'Keep Matching Array Items',
      snippet: `const scores = [40, 75, 90];\nconst passing = scores.___(score => score >= 70);`,
      options: ['map', 'filter', 'reduce', 'every'],
      answer: 1,
      explanation: 'filter() creates an array containing only items that pass its test function.'
    },
    {
      id: 'j40', topic: 'DOM', difficulty: 2,
      title: 'Toggle a Menu Class',
      snippet: `const menu = document.querySelector("#menu");\nmenu.___.toggle("open");`,
      options: ['style', 'classList', 'classes', 'className'],
      answer: 1,
      explanation: 'classList.toggle() adds a class if absent or removes it if present.'
    }
  ]
};

const QUESTION_SET_REPEAT_COUNT = 2;
const QUESTION_SET_COUNT = 2;

// =============================================================
//  Full Code Templates — one complete file per course
//  Blanks are marked as {{1}} through {{20}}, matching question
//  order in each course's question set. The player sees the WHOLE
//  file and fills blanks in sequence from top to bottom.
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
function getShuffledQuestions(course, setIndex = 0) {
  const bank = setIndex === 1 ? ALTERNATE_QUESTION_BANK : QUESTION_BANK;
  const questions = JSON.parse(JSON.stringify(bank[course])); // deep clone

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

function getNextQuestionSetIndex(course) {
  const storageKey = `cc_completed_runs_${course}`;
  const storedRuns = localStorage.getItem(storageKey);
  const completedRuns = storedRuns === null ? 0 : Number(storedRuns);

  if (!Number.isSafeInteger(completedRuns) || completedRuns < 0) {
    throw new Error(`Invalid completed run count for ${course}.`);
  }

  return Math.floor(completedRuns / QUESTION_SET_REPEAT_COUNT) % QUESTION_SET_COUNT;
}

function recordQuestionSetRun(course) {
  const storageKey = `cc_completed_runs_${course}`;
  const storedRuns = localStorage.getItem(storageKey);
  const completedRuns = storedRuns === null ? 0 : Number(storedRuns);

  if (!Number.isSafeInteger(completedRuns) || completedRuns < 0) {
    throw new Error(`Invalid completed run count for ${course}.`);
  }

  localStorage.setItem(storageKey, String(completedRuns + 1));
}

// Return the full template for a course
function getFullTemplate(course) {
  return FULL_TEMPLATES[course] || null;
}
