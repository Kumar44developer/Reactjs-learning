# React JSX Learning

A small set of beginner React examples that demonstrate JSX, embedded JavaScript expressions, and rendering to the DOM with `ReactDOM.render`. The project runs directly in the browser with no build step, using React and Babel loaded from a CDN.

## Overview

Each HTML page mounts a React example into a `#root` element. Babel compiles the JSX in the browser, and an import map resolves `react` and `react-dom` from a CDN, so the pages work by simply opening them through a local server.

## Pages

| Page | Script | Demonstrates |
| --- | --- | --- |
| index.html | script.js | JSX headings, embedded expressions, arithmetic, and a random number |
| index1.html | index1.js | Rendering a footer with a name and the current year |

The file `index.js` is kept as a reference example with inline notes on common import mistakes.

## Tech Stack

| Technology | Role |
| --- | --- |
| React 17 | Component rendering |
| ReactDOM | Mounting the app to the DOM |
| Babel Standalone | In-browser JSX compilation |
| HTML5 and CSS3 | Page structure and styling |

## Getting Started

Because the pages use ES module import maps, they must be served over HTTP rather than opened from the file system.

Using Node:

```bash
npx http-server -p 8080
```

Then open `http://localhost:8080/index.html` in your browser. The VS Code Live Server extension also works.

## Project Structure

```
project22/
├── index.html
├── index1.html
├── script.js
├── index1.js
├── index.js
└── style.css
```

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
