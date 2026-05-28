# LoadIcons ⟳

**10 lightweight, reusable CSS loading icons — fully customizable via CSS Custom Properties, zero dependencies.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Pure CSS](https://img.shields.io/badge/Pure-CSS-1D9E75.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-7F77DD.svg)](CONTRIBUTING.md)

[**Live Demo**](https://your-username.github.io/loadicons) · [**Browse Icons**](#icon-catalog) · [**Contributing**](CONTRIBUTING.md)

---

## Overview

LoadIcons is an open-source collection of production-ready CSS loading animations. Every icon is:

- **Self-contained** — one CSS file per icon, no shared dependencies.
- **Configurable** — all visual properties are exposed as CSS Custom Properties.
- **Composable** — size, color, and speed modifier classes ship out of the box.
- **Accessible** — designed to work alongside `role="status"` and `aria-label`.
- **Framework-agnostic** — drop it into any project: React, Vue, plain HTML, or anything else.

---

## Icon Catalog

| # | Name | Technique | Ideal Use Case |
| --- | ------ | ----------- | ---------------- |
| 01 | [Classic Spinner](icons/01-classic-spinner/) | `border-trick` + `rotate` | General-purpose loading state |
| 02 | [Dots Wave](icons/02-dots-wave/) | `translateY` + stagger delay | Async data fetch, content loading |
| 03 | [Pulse Ring](icons/03-pulse-ring/) | `scale` + `opacity` on `::before` | Live status, online indicator, alerts |
| 04 | [Bar Loader](icons/04-bar-loader/) | `scaleY` + stagger delay | Upload, download, audio processing |
| 05 | [Orbit](icons/05-orbit/) | `rotate(360deg)` + absolute positioning | System-level, complex background tasks |
| 06 | [Shimmer Skeleton](icons/06-shimmer-skeleton/) | `background-position` gradient sweep | Page/content skeleton screens |
| 07 | [Typing Indicator](icons/07-typing-indicator/) | `translateY` + `opacity` + bubble | Chat and messaging interfaces |
| 08 | [Circular Progress](icons/08-circular-progress/) | SVG `stroke-dasharray` + `pathLength` | Progress tracking (determinate & indeterminate) |
| 09 | [Morphing Shape](icons/09-morphing-shape/) | `border-radius` morph + `rotate` | Splash screens, onboarding flows |
| 10 | [Split Ring](icons/10-split-ring/) | Dual-arc `border` + `rotate` | Minimal spinner for light & dark themes |

---

## Getting Started

### 1. Copy the CSS file for the icon you need

Each icon lives in its own folder. Simply copy the single `.css` file into your project — no build step required.

```text
loadicons/
└── icons/
    ├── 01-classic-spinner/
    │   ├── spinner.css        ← copy this
    │   └── index.html         ← interactive demo
    ├── 02-dots-wave/
    │   ├── dots-wave.css
    │   └── index.html
    └── ...
```

### 2. Link the stylesheet

```html
<link rel="stylesheet" href="path/to/spinner.css" />
```

### 3. Use the HTML structure

Each icon has a minimal, documented HTML structure:

```html
<!-- 01 · Classic Spinner (single element) -->
<div class="spinner" role="status" aria-label="Loading"></div>

<!-- 02 · Dots Wave (parent + 3 spans) -->
<div class="dots-wave" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 03 · Pulse Ring (single element) -->
<div class="pulse-ring" role="status" aria-label="Loading"></div>

<!-- 04 · Bar Loader (parent + 4 spans) -->
<div class="bar-loader" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</div>

<!-- 05 · Orbit (specific structure required) -->
<div class="orbit" role="status" aria-label="Loading">
  <div class="orbit__ring">
    <div class="orbit__dot"></div>
  </div>
  <div class="orbit__core"></div>
</div>

<!-- 06 · Shimmer Skeleton (compose to match your layout) -->
<div class="skeleton" aria-busy="true">
  <div class="skeleton__block skeleton__block--md"></div>
  <div class="skeleton__line skeleton__line--heading"></div>
  <div class="skeleton__line skeleton__line--full"></div>
  <div class="skeleton__line skeleton__line--lg"></div>
</div>

<!-- 07 · Typing Indicator (parent + 3 spans) -->
<div class="typing" role="status" aria-label="Someone is typing">
  <span></span><span></span><span></span>
</div>

<!-- 08 · Circular Progress (SVG required inside) -->
<div class="circ-progress" role="status" aria-label="Loading">
  <svg class="circ-progress__svg" viewBox="0 0 44 44">
    <circle class="circ-progress__track" cx="22" cy="22" r="18"/>
    <circle class="circ-progress__fill"  cx="22" cy="22" r="18" pathLength="100"/>
  </svg>
</div>

<!-- 09 · Morphing Shape (single element) -->
<div class="morph" role="status" aria-label="Loading"></div>

<!-- 10 · Split Ring (single element) -->
<div class="split-ring" role="status" aria-label="Loading"></div>
```

---

## Customization

All icons expose their visual properties as **CSS Custom Properties**. Override any token directly on the element or in your own stylesheet — no forking required.

### Inline override (quickest)

```html
<div class="spinner" style="
  --spinner-color: #e05c97;
  --spinner-size:  48px;
  --spinner-speed: 0.5s;
"></div>
```

### Via your own CSS

```css
/* Bind to your design token */
.my-brand-spinner {
  --spinner-color: var(--brand-primary);
  --spinner-size:  24px;
}
```

### Size and color modifiers

Every icon ships with ready-to-use modifier classes:

```html
<!-- Size: --sm  --md (default)  --lg  --xl -->
<div class="spinner spinner--lg"></div>

<!-- Color: --primary  --success  --warning  --danger  --white  --dark -->
<div class="spinner spinner--success"></div>

<!-- Combine freely -->
<div class="spinner spinner--lg spinner--danger"></div>
```

### Token reference

| Icon | CSS Custom Properties |
| ------ | ----------------------- |
| Classic Spinner | `--spinner-size` `--spinner-thickness` `--spinner-color` `--spinner-track-color` `--spinner-speed` |
| Dots Wave | `--dot-size` `--dot-gap` `--dot-color` `--wave-speed` `--wave-height` `--wave-delay` |
| Pulse Ring | `--pulse-size` `--pulse-dot-size` `--pulse-color` `--pulse-ring-opacity` `--pulse-speed` `--pulse-scale` |
| Bar Loader | `--bar-width` `--bar-height` `--bar-gap` `--bar-radius` `--bar-color` `--bar-speed` `--bar-delay` `--bar-min-scale` |
| Orbit | `--orbit-size` `--orbit-core-size` `--orbit-dot-size` `--orbit-core-color` `--orbit-dot-color` `--orbit-ring-color` `--orbit-speed` `--orbit-ring-style` |
| Shimmer Skeleton | `--skeleton-base` `--skeleton-shine` `--skeleton-speed` `--skeleton-radius` |
| Typing Indicator | `--typing-dot-size` `--typing-dot-gap` `--typing-dot-color` `--typing-bg` `--typing-border` `--typing-speed` `--typing-delay` `--typing-rise` |
| Circular Progress | `--circ-size` `--circ-stroke` `--circ-color` `--circ-track-color` `--circ-speed` `--circ-arc` `--progress-value` |
| Morphing Shape | `--morph-size` `--morph-color` `--morph-speed` `--morph-radius-square` `--morph-scale-min` |
| Split Ring | `--ring-size` `--ring-thickness` `--ring-color` `--ring-speed` `--ring-color-2` |

---

## Repository Structure

```text
loadicons/
├── index.html                        # Live gallery — open in any browser
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── new_icon_request.md
│   └── PULL_REQUEST_TEMPLATE.md
└── icons/
    ├── 01-classic-spinner/
    │   ├── spinner.css               # Component file — copy this to your project
    │   └── index.html               # Interactive demo with all variants
    ├── 02-dots-wave/
    │   ├── dots-wave.css
    │   └── index.html
    ├── 03-pulse-ring/
    │   ├── pulse-ring.css
    │   └── index.html
    ├── 04-bar-loader/
    │   ├── bar-loader.css
    │   └── index.html
    ├── 05-orbit/
    │   ├── orbit.css
    │   └── index.html
    ├── 06-shimmer-skeleton/
    │   ├── shimmer-skeleton.css
    │   └── index.html
    ├── 07-typing-indicator/
    │   ├── typing-indicator.css
    │   └── index.html
    ├── 08-circular-progress/
    │   ├── circular-progress.css
    │   └── index.html
    ├── 09-morphing-shape/
    │   ├── morphing-shape.css
    │   └── index.html
    └── 10-split-ring/
        ├── split-ring.css
        └── index.html
```

---

## Accessibility

Always include accessibility attributes when rendering loading indicators:

```html
<!-- Announce to screen readers -->
<div class="spinner" role="status" aria-label="Loading, please wait"></div>

<!-- Or use visually hidden text -->
<div class="spinner" role="status">
  <span class="sr-only">Loading, please wait</span>
</div>

<!-- Skeleton: mark the region as busy -->
<section aria-busy="true" aria-label="Loading article content">
  <div class="skeleton">...</div>
</section>
```

```css
/* Utility class for visually hidden but screen-reader accessible text */
.sr-only {
  position:   absolute;
  width:      1px;
  height:     1px;
  overflow:   hidden;
  clip:       rect(0, 0, 0, 0);
  white-space: nowrap;
}
```

### Respecting reduced motion preferences

All icons use CSS animations. To honor the user's system preference:

```css
@media (prefers-reduced-motion: reduce) {
  /* Option A: pause all LoadIcons animations */
  .spinner, .dots-wave > span, .pulse-ring::before,
  .bar-loader > span, .orbit__ring, .demo-skel-line,
  .typing > span, .circ-progress__svg, .morph, .split-ring {
    animation-play-state: paused;
  }

  /* Option B: slow them down significantly */
  * { animation-duration: 0.01ms !important; }
}
```

---

## Feature Highlights

| Feature | Details |
| --------- | --------- |
| **Pure CSS** | Zero JavaScript, zero build tooling |
| **Standalone** | Each icon is fully self-contained — include only what you use |
| **CSS Custom Properties** | Every visual dimension is a token — customize without forking |
| **Modifier classes** | `--sm` `--lg` `--primary` `--danger` etc. work out of the box |
| **Dark mode** | Shimmer Skeleton automatically adapts via `prefers-color-scheme` |
| **Determinate mode** | Circular Progress supports real progress values (0–100) |
| **Interactive demos** | Every icon has its own `index.html` with live, labeled variants |

---

## License

Distributed under the **MIT License** — free to use in personal and commercial projects.
See [LICENSE](LICENSE) for full terms.

---

Made with care for the open-source community.
