'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalAppStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap");


:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono",
    "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 10, 10, 10;
    --background-end-rgb: 10, 10, 10;   
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  min-width: 300px;
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb));
  font-family: "PT Sans Narrow", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}`
