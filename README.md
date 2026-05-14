# Betty's Portfolio

A modern personal portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, interactive project cards, dark/light theme toggle, and fully responsive design.

## ✨ Features

- **Interactive Project Cards** — Hover effects with animated icons and project links
- **Smooth Animations** — Fade-in effects as you scroll through sections
- **Dark/Light Theme** — Toggle between themes with persistent storage
- **Responsive Design** — Looks great on desktop, tablet, and mobile
- **Accessibility** — Semantic HTML with ARIA labels for better screen reader support
- **Performance** — Lightweight, no external dependencies
- **Intersection Observer** — Efficient scroll-triggered animations

## Files

- `index.html` — Homepage and portfolio content with enhanced project showcase
- `styles.css` — Responsive styling with animations and dark theme support
- `script.js` — Theme toggle, scroll effects, and interactive animations
- `README.md` — Documentation

## Customize

1. Open `index.html` and replace placeholder text with your own name, bio, and project details.
2. Update project cards:
   - Replace project titles, descriptions, and tags
   - Update project links (`href` attributes)
   - Customize the SVG icons or replace with your own
3. Update skills section with your actual skills
4. Update the email address in the contact section
5. Replace GitHub / LinkedIn links in the footer with your actual profiles
6. Adjust colors in `styles.css` by modifying CSS variables in the `:root` selector:
   - `--primary` — Main brand color
   - `--bg` — Background color
   - `--text` — Text color
   - And more...

## Run locally

Open `index.html` in your browser, or use a local server:

```bash
python -m http.server
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

Works on all modern browsers that support:

- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6 JavaScript
