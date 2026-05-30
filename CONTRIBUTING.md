# Contributing to LoadIcons

Thank you for considering a contribution to LoadIcons! This document explains how to report bugs, propose new icons, and submit pull requests.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Reporting Bugs](#reporting-bugs)
3. [Requesting a New Icon](#requesting-a-new-icon)
4. [Submitting a Pull Request](#submitting-a-pull-request)
5. [Icon File Conventions](#icon-file-conventions)
6. [Registry in loaders-data.js](#registry-in-loaders-datajs)
7. [Uniqueness & Novelty Guidelines](#uniqueness--novelty-guidelines)
8. [CSS Style Guide](#css-style-guide)
9. [index.html Demo Conventions](#indexhtml-demo-conventions)
10. [Checklist Before Opening a PR](#checklist-before-opening-a-pr)

---

## Code of Conduct

All contributors are expected to communicate respectfully. Harassment of any kind will not be tolerated.

---

## Reporting Bugs

Open an issue using the **Bug Report** template and include:

- A clear description of the problem.
- The browser and OS where the issue occurs.
- A minimal HTML/CSS reproduction or a screenshot.

---

## Requesting a New Icon

Open an issue using the **New Icon Request** template and include:

- The animation type and its intended use case.
- A rough sketch or reference (optional but helpful).
- Any specific CSS technique you have in mind.

---

## Submitting a Pull Request

```bash
# 1. Fork the repo and clone your fork
git clone https://github.com/your-username/loadicons.git
cd loadicons

# 2. Create a descriptive branch
git checkout -b feat/14-ripple-loader

# 3. Make your changes (see conventions below)

# 4. Commit with a conventional message
git commit -m "feat: add ripple loader (#14)"

# 5. Push and open a PR against main
git push origin feat/14-ripple-loader
```

---

## Icon File Conventions

Every icon lives in `icons/NN-icon-name/` and must contain exactly two files:

```text
icons/
└── 11-your-icon-name/
    ├── your-icon-name.css    ← the component (clean, highly customizable)
    └── index.html            ← the interactive standalone demo
```

### Naming rules

| Rule | Example |
| ------ | --------- |
| Folder name: `NN-kebab-case` | `11-ripple-loader` |
| CSS class name: same as folder suffix | `.ripple-loader` |
| CSS file name: same as class name | `ripple-loader.css` |

---

## Registry in `loaders-data.js`

To make the new icon show up in the main interactive dashboard, you must register it in [loaders-data.js](file:///c:/Users/Lenovo/VSC/GitHub/loading-icon/loaders-data.js). Add a new object at the end of the `loaders` array following this schema:

```javascript
{
  id: "NN", // Sequential 2-digit string, e.g., "56"
  name: "Your Icon Name",
  category: "spinners", // One of: "spinners", "waves", "3d", "special"
  tags: ["tag1", "tag2"], // Relevant techniques or visual features
  html: `<div class="demo-your-icon"><span></span></div>`, // Simplified preview HTML
  css: `.demo-your-icon { ... }` // Interactive preview CSS (must use global customizer variables)
}
```

### Interactive Preview CSS Guidelines

The CSS inside [loaders-data.js](file:///c:/Users/Lenovo/VSC/GitHub/loading-icon/loaders-data.js) is used in the main dashboard customizer. To ensure it reacts dynamically to the sidebar sliders, you **must**:

1. **Scale**: Use `var(--loader-size)` for dimensions, or scale the root element using `transform: scale(calc(var(--loader-size) / 32px)); transform-origin: center;` (if it relies on complex absolute positioning).
2. **Speed**: Multiply all animation cycle durations by `var(--loader-speed-scale)` (e.g. `animation: spin calc(1s * var(--loader-speed-scale)) linear var(--loader-cycles);`).
3. **Colors**: Map components to the system's global semantic palette variables:
   - Primary: `var(--color-primary)`
   - Success: `var(--color-success)`
   - Warning: `var(--color-warning)`
   - Danger: `var(--color-danger)`
   - Info: `var(--color-info)`
   - Background/Surface/Border: `var(--bg)`, `var(--surface)`, `var(--border)`

---

## Uniqueness & Novelty Guidelines

To maintain a high-quality, creative, and diverse collection of loaders, **every new icon must be completely unique**. Duplicate layouts or clone designs will be rejected.

### What makes an icon unique?

1. **Visual Shape**: The visual structure must be distinct. Do not submit minor variants of existing shapes (e.g., changing a 3-dot wave to a 4-dot wave is not unique).
2. **Animation Technique**: The keyframe logic and properties animated (e.g., `clip-path`, `perspective`, 3D rotation, `stroke-dashoffset`) must use a different mechanical approach.
3. **Motion Pattern & Timing**: The flow and speed-curves of the animation (e.g., staggered delay sequences, sinusoidal orbits, mechanical gears, physics-based squish) must look and feel completely different from existing icons.
4. **No Clones**: For example, since we already have standard rotating rings (`01-classic-spinner`, `10-split-ring`), any new spinner must use a significantly different layout (e.g. morphing shapes, multi-layered rings, or variable speed-bursts) to be accepted.

Before designing, browse the existing catalog or check [loaders-data.js](file:///c:/Users/Lenovo/VSC/GitHub/loading-icon/loaders-data.js) to ensure your concept is entirely novel.

---

## CSS Style Guide

### 1. Expose every configurable value as a CSS Custom Property

Place all tokens at the top of the root class, grouped and commented.

```css
.your-loader {
  /* === SIZE === */
  --loader-size:  36px;     /* brief description of what this controls */

  /* === COLOR === */
  --loader-color: #7F77DD;

  /* === ANIMATION === */
  --loader-speed: 1.0s;

  /* ─── Do not edit below this line ─── */
  /* implementation using var() references only */
}
```

### 2. Namespace all keyframe names

Prefix `@keyframes` with the component name to avoid collisions:

```css
/* ✅ correct */
@keyframes ripple-loader-pulse { ... }

/* ❌ avoid */
@keyframes pulse { ... }
```

### 3. Provide at least these modifier classes

```css
/* Size presets */
.your-loader--sm { ... }
.your-loader--md { ... }   /* default */
.your-loader--lg { ... }

/* Color presets */
.your-loader--primary { --loader-color: #7F77DD; }
.your-loader--success { --loader-color: #1D9E75; }
.your-loader--warning { --loader-color: #EF9F27; }
.your-loader--danger  { --loader-color: #E24B4A; }
.your-loader--white   { --loader-color: #ffffff; }
```

### 4. Use `flex-shrink: 0`

Prevent the icon from being squeezed when placed inside flex containers.

### 5. Use `box-sizing: border-box`

Include this on the root element so size tokens behave predictably.

---

## index.html Demo Conventions

Each `index.html` must demonstrate:

1. **All size presets** — sm, md (default), lg (and xl if applicable).
2. **All color presets** — including a white variant on a dark background.
3. **At least two custom override examples** — using inline `style` attributes.
4. **A Quick Usage code block** — showing the minimal HTML to get started.

Use `lang="en"`, include the stylesheet via a relative `<link>`, and keep demo-page styles clearly separated from component styles with a comment.

---

## Checklist Before Opening a PR

- [ ] The icon design, animation, and pattern are completely unique and do not duplicate any existing loader in the collection.
- [ ] Icon folder follows `NN-kebab-case` naming under `icons/`.
- [ ] CSS file contains a header comment block (name, technique, usage, configuration note).
- [ ] All configurable values are exposed as CSS Custom Properties in the standalone file.
- [ ] `@keyframes` names are prefixed with the component name.
- [ ] Size presets (`--sm`, `--md`, `--lg`) are included.
- [ ] Color presets (`--primary` through `--white`) are included.
- [ ] `index.html` demo covers all variants and includes a Quick Usage block.
- [ ] The new loader configuration is registered in [loaders-data.js](file:///c:/Users/Lenovo/VSC/GitHub/loading-icon/loaders-data.js) using global dynamic variables.
- [ ] The icon has been tested in Chrome, Firefox, and Safari.
- [ ] The icon catalog table in `README.md` has been updated.

---

Thank you for helping make LoadIcons better!

---

## Contributing

Contributions are warmly welcomed.

**Quick steps:**

```bash
# 1. Fork the repository and clone your fork
git clone https://github.com/your-username/loadicons.git
cd loadicons

# 2. Create a feature branch
git checkout -b feat/icon-name

# 3. Add your icon following the conventions in CONTRIBUTING.md

# 4. Open a Pull Request against main
```
