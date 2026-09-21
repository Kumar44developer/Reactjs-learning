<div align="center">

# React.js Learning

**A zero-build React playground for learning JSX from the ground up.**

Two live pages, compiled in the browser by Babel and powered by React loaded straight from a CDN.
No npm, no bundler, no configuration — open a page and start experimenting with JSX expressions.

![React](https://img.shields.io/badge/React-17-61dafb?style=flat-square&logo=react&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-standalone-f5df52?style=flat-square&logo=babel&logoColor=black)
![Build tools](https://img.shields.io/badge/build%20step-none-green?style=flat-square)
![Dependencies](https://img.shields.io/badge/npm%20install-0-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

</div>

---

## Table of Contents

- [Overview](#overview)
- [What You Will Learn](#what-you-will-learn)
- [Pages](#pages)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Extending the Playground](#extending-the-playground)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## Overview

**React.js Learning** is a minimal, dependency-free sandbox for the very first concepts of React.
Every example is written in plain JSX and rendered with `ReactDOM.render` into a single `#root`
element. Babel Standalone transforms the JSX in the browser and an ES module import map resolves
`react` and `react-dom` from the esm.sh CDN, so there is nothing to install and nothing to build.
It is the fastest way to see a React element appear on screen and to understand how JSX embeds
live JavaScript inside markup.

---

## What You Will Learn

- Writing JSX and the rule that expressions live inside curly braces
- Interpolating variables such as a name and the current year into markup
- Evaluating arbitrary JavaScript inline, from arithmetic to `Math.random()`
- Rendering a component tree into the DOM with `ReactDOM.render`
- Loading React without a build step using import maps and Babel Standalone

---

## Pages

| Page | Script | Demonstrates |
| --- | --- | --- |
| `index.html` | `script.js` | Headings, variable interpolation, arithmetic, and a random number inside JSX |
| `index1.html` | `index1.js` | A dynamic footer with an author name and the current year |

`index.js` is kept as a standalone reference snippet showing the same footer pattern alongside
notes on common import syntax mistakes; it is not wired to any page.

---

## How It Works

The browser cannot read JSX or bare module specifiers on its own, so the project layers two
standard tools to remove the build step:

1. An **import map** in the page `<head>` maps the bare names `react` and `react-dom` to their
   esm.sh URLs, letting native ES modules resolve them at runtime.
2. **Babel Standalone** finds every `<script type="text/babel" data-type="module">`, transpiles
   the JSX to `React.createElement` calls on the fly, and runs the result as an ES module.

Because the scripts are real ES modules, the pages must be served over HTTP; opening them directly
from the file system will block module loading.

---

## Tech Stack

| Technology | Role |
| --- | --- |
| React 17 | UI element creation via JSX |
| ReactDOM | Mounting the element tree into `#root` |
| Babel Standalone | In-browser JSX transpilation, no build step |
| esm.sh CDN | Serves React and ReactDOM as native ES modules |
| HTML5 and CSS3 | Page shell and styling |

---

## Requirements

- Any modern browser with ES module and import-map support (Chrome, Edge, Firefox, Safari)
- An internet connection so the CDN-hosted React and Babel can be fetched
- Any static file server to run the pages over HTTP

---

## Getting Started

The pages must run behind HTTP. From the project root, start any static server and open a page.

With Python:

```bash
python -m http.server 8080
```

With Node:

```bash
npx http-server -p 8080
```

The VS Code Live Server extension works as well. Then visit:

- `http://localhost:8080/index.html`
- `http://localhost:8080/index1.html`

Edit a script, save, and refresh the browser to see your change instantly.

---

## Project Structure

```text
Reactjs-learning/
├── index.html     
├── script.js       
├── index1.html    
├── index1.js      
├── index.js      
├── style.css      
├── LICENSE
└── README.md
```

---

## Extending the Playground

Add your own lesson in three steps.

1. Create a script such as `greeting.js` using the same pattern:

```jsx
import React from "react";
import ReactDOM from "react-dom";

const user = { first: "Ada", last: "Lovelace" };

ReactDOM.render(
  <h1>Welcome, {user.first} {user.last}!</h1>,
  document.getElementById("root")
);
```

2. Create a matching HTML page that includes the import map, Babel Standalone, a `#root` div, and:

```html
<script type="text/babel" data-type="module" data-presets="react" src="greeting.js"></script>
```

3. Serve the folder and open the new page.

---

## Contributing

Contributions are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-example`)
3. Add or refine a lesson page
4. Commit your changes (`git commit -m "Add new example"`)
5. Push to the branch (`git push origin feature/new-example`)
6. Open a Pull Request

---

## Author

Created by **[Kumar44developer](https://github.com/Kumar44developer)**.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
