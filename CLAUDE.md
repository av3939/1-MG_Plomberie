# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BP2C is a static website for a plumbing/heating/AC/renovation company (Fréjus, France). No build tools, no frameworks, no package manager — pure HTML, CSS, and vanilla JavaScript.

## Development

To preview locally, serve with any static HTTP server:
```bash
python3 -m http.server 8080
# or
npx serve .
```

No build, lint, or test commands exist. Cache-bust CSS/JS changes by incrementing the version query param (e.g., `style.css?v=2`).

## Architecture

### Component Injection Pattern

All pages are static HTML shells that reference two placeholder `div` elements:
- `<div id="header-placeholder"></div>`
- `<div id="footer-placeholder"></div>`

On `DOMContentLoaded`, [components.js](components.js) fills these placeholders by calling `renderHeader()`, `renderFooter()`, `renderCookieBanner()`, `renderEmergencyBtn()`, and `renderToast()` — which return HTML strings via template literals and inject them via `innerHTML`.

**Any change to the navigation, header, or footer must be made in `components.js`, not in the individual HTML files.**

### Script Responsibilities

- [components.js](components.js) — shared UI: header, footer, cookie banner, floating emergency button, toast container, and the `DOMContentLoaded` initializer that wires up the mobile menu toggle.
- [script.js](script.js) — page-level interactions: header scroll effect, active nav link detection, cookie banner logic, contact form (saves to `localStorage` as `bp2c_contacts`), FAQ accordion, smooth scroll, and scroll-reveal via `IntersectionObserver`.
- [style.css](style.css) — all styling; uses custom CSS animations (`kenburns`, `fadeInUp`, `emergencyPulse`, etc.) and a single 768px breakpoint for responsive layout.

### Mobile Menu

The full-screen mobile menu is rendered inside the header by `renderHeader()` in `components.js`. The toggle logic (open/close, body scroll locking) lives at the bottom of `components.js` inside the `DOMContentLoaded` listener, with a complementary handler in `script.js`. Both files must stay in sync when modifying mobile menu behavior.

### Pages

Each of the 10 HTML pages is self-contained with inline Schema.org JSON-LD structured data for local SEO. Service pages (`plomberie.html`, `chauffage.html`, `climatisation.html`, `renovation.html`) share a common hero + feature-card layout.

### Data Persistence

- Contact form submissions → `localStorage` key `bp2c_contacts` (JSON array)
- Cookie consent → `localStorage` key `bp2c_cookie_consent`

No backend or external API integrations exist.
