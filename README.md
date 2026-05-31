# LoadIcons ⟳

**55 lightweight, reusable CSS loading icons — fully customizable via CSS Custom Properties, zero dependencies.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Pure CSS](https://img.shields.io/badge/Pure-CSS-1D9E75.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-7F77DD.svg)](CONTRIBUTING.md)

[**Live Demo**](https://loading-icon.vercel.app) · [**Browse Icons**](#icon-catalog)

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
| 11 | [Comet](icons/11-comet/) | `conic-gradient` + `mask` + `rotate` | Premium loaders, dark-mode UIs, branded splash screens |
| 12 | [Folding Cube](icons/12-folding-cube/) | 3D rotates + perspectives | Clean 3D dashboard & app loaders |
| 13 | [Fluid Metaballs](icons/13-fluid-metaballs/) | gooey contrast + blur filters | Playful, organic liquid visual branding |
| 14 | [DNA Helix](icons/14-dna-helix/) | counter-phase scales + translates | Scientific, biotechnology, high-tech UIs |
| 15 | [Atom Orbit](icons/15-atom-orbit/) | 3D angled rings + orbital spin | Spatial chemistry, science, physics wait states |
| 16 | [Sonar Ripple](icons/16-sonar-ripple/) | scale + concentric waves | Wireless, search, radar, connection UIs |
| 17 | [Honeycomb Pulse](icons/17-honeycomb-pulse/) | clip-path hex + grid lattice | Creative hexagon dashboard & telemetry grids |
| 18 | [Matrix Fade](icons/18-matrix-fade/) | Manhattan diagonal grid delay | Admin panels, statistics, data analytics loaders |
| 19 | [Wandering Cubes](icons/19-wandering-cubes/) | 2D offset track + rotations | Minimalist grid and box progress widgets |
| 20 | [Chromatic Spinner](icons/20-chromatic-spinner/) | rainbow conic gradient + mask | Modern SaaS platforms, colorful onboarding sweeps |
| 21 | [Mesh Gears](icons/21-mesh-gears/) | interlocking mechanical gear teeth | System processing, configuration, engine indicators |
| 22 | [Particle Vortex](icons/22-particle-vortex/) | orbital spiral sweeps + scales | Deep tech, dark mode interfaces, epic animations |
| 23 | [Hourglass](icons/23-hourglass/) | drips sand + gravity flip | Gravity-driven sand draining bulb loader |
| 24 | [Page Flip](icons/24-page-flip/) | 3D paper flip + perspective | Flipping book pages and progress indices |
| 25 | [Squishy Ball](icons/25-squishy-ball/) | elastic bounce squash + shadows | Satisfying spring physics and kinetic wait states |
| 26 | [Warp Field](icons/26-warp-field/) | radial coordinate translations | First-person space hyperdrive warp tunnels |
| 27 | [Radar Sweep](icons/27-radar-sweep/) | conic gradient + sync blip flash | Sonar radar feeds and circular scanning indicators |
| 28 | [Matrix Rain](icons/28-matrix-rain/) | vertical drop delay cascades | Coding, analytics waterfall, cyberpunk loading screens |
| 29 | [Gyro Spheres](icons/29-gyro-spheres/) | conjoined concentric 3D orbits | Atomic orbits, spatial gyroscopes, telemetry widgets |
| 30 | [Heartbeat](icons/30-heartbeat/) | EKG double throb + heart shape | Medical, vital telemetry, vital statistics throb indicators |
| 31 | [Pendulum Wave](icons/31-pendulum-wave/) | phase drift + horizontal swing | Dynamic physics-driven pendulum wave wait states |
| 32 | [Infinite Loop](icons/32-infinite-loop/) | figure-8 path translation | Infinity path tracing digital wait states |
| 33 | [Concentric Rings](icons/33-concentric-rings/) | split-arc counter rotations | Mechanical gyroscope concentric orbital sweeps |
| 34 | [Waveform Audio](icons/34-waveform-audio/) | symmetrical double scale | Audio processing, sound, voice recording wait states |
| 35 | [Breathing Ring](icons/35-breathing-ring/) | scale pulse + box-shadow glow | Calm, breathing circular ambient loaders |
| 36 | [Liquid Drop](icons/36-liquid-drop/) | gravity fall + ripple splash | Fluid drip, watering, ecological visual branding |
| 37 | [Hexagon Orbit](icons/37-hexagon-orbit/) | trig hexagonal vertex trace | Close-packed grid hexagonal boundary sweeps |
| 38 | [Sparkling Stars](icons/38-sparkling-stars/) | clip-path star sparkles + fades | Magical, celestial, glowing wait states |
| 39 | [Snake Chase](icons/39-snake-chase/) | perimeter trailing delay | Unified snake-path border waits |
| 40 | [Solar Eclipse](icons/40-solar-eclipse/) | conic corona + occluder mask | High-fidelity dark mode cosmic eclipses |
| 41 | [Pulsing Grid](icons/41-pulsing-grid/) | grid center radial delay | Numeric dashboard, telemetry lattice grids |
| 42 | [Helix Tunnel](icons/42-helix-tunnel/) | concentric depth rotations | 3D depth tunnels, dimensional travel sweeps |
| 43 | [Elastic Line](icons/43-elastic-line/) | left/width asymmetric sweeps | Premium SaaS, horizontal progress lines |
| 44 | [Jumping Dots](icons/44-jumping-dots/) | squash-and-stretch parabolic | Satisfying cartoon bouncy bubble kinetics |
| 45 | [Newton's Cradle 3D](icons/45-newton-cradle-3d/) | 3D isometric momentum swing | Physics-driven mechanical 3D spatial cradles |
| 46 | [Signal Beacons](icons/46-signal-beacons/) | semicircular scale-opacity ripples | Wireless transmitter, radio towers, signals |
| 47 | [Ticking Clock](icons/47-ticking-clock/) | stepped Quartz hand rotation | Time tracking, calendars, chronometer widgets |
| 48 | [Bouncing Cube 3D](icons/48-bouncing-cube/) | 3D projections + squishing | 3D visual apps, modular projections, structural |
| 49 | [Digital Segment](icons/49-digital-segment/) | 7-segment stepped LEDs | Cyberpunk telemetry, digital segmented counts |
| 50 | [Perspective Tunnel](icons/50-perspective-tunnel/) | concentric ring zoom flythrough | Sci-fi warp, tunnel loading, hyperdrive screens |
| 51 | [Prism Orbit](icons/51-prism-orbit/) | orbital flip + triple tile | Premium orbital indicators with geometric motion |
| 52 | [Barcode Sweep](icons/52-barcode-sweep/) | scanline sweep + stagger bars | Data syncing, indexing, and scanner-like loaders |
| 53 | [Corner Chase](icons/53-corner-chase/) | border brackets + quadrant steps | Tracking, scanning, and “locking onto target” waits |
| 54 | [Shard Flip](icons/54-shard-flip/) | radial shards + 3D flip | Premium 3D flipping panels, futuristic wait states |
| 55 | [Shutter Bloom](icons/55-shutter-bloom/) | iris blades + stagger bloom | Camera shutter, focus, capture, and aperture-themed loads |
| 56 | [Pulse Helix](icons/56-pulse-helix/) | `scaleY` + stagger sinusoidal wave | Premium SaaS loaders, kinetic wave wait states |
| 57 | [Kinetic Vortex](icons/57-kinetic-vortex/) | orbital-twist + expanding-rings | Premium automated loaders |
| 58 | [Neon Matrix](icons/58-neon-matrix/) | cyber-grid + stepped-bars | Premium automated loaders |
| 59 | [Holographic Helix](icons/59-holographic-helix/) | double-helix + sinusoidal-glow | Premium automated loaders |
| 60 | [Glow Quantum](icons/60-glow-quantum/) | pulsing-core + quantum-orbits | Premium automated loaders |
| 61 | [Liquid Drip](icons/61-liquid-drip/) | viscous-drips + gooey-merging | Premium automated loaders |
| 62 | [Folding Prism](icons/62-folding-prism/) | 3d-shapes + folding-planes | Premium automated loaders |
| 63 | [Quantum Ripple](icons/63-quantum-ripple/) | quantum-wave + concentric-glow | Premium automated loaders |
| 64 | [Glitch Orbit](icons/64-glitch-orbit/) | glitch-effect + electronic-glow | Premium automated loaders |
| 65 | [Viscous Wave](icons/65-viscous-wave/) | liquid-blur + gooey-merging | Premium automated loaders |
| 66 | [Crystalline Star](icons/66-crystalline-star/) | crystal-pulse + shimmering-nodes | Premium automated loaders |
| 67 | [Spiral Coil](icons/67-spiral-coil/) | dual-arc + counter-rotation | Premium automated loaders |
| 68 | [Orbit Chain](icons/68-orbit-chain/) | css-motion-path + orbit | Premium automated loaders |
| 69 | [Scanning Line](icons/69-scanning-line/) | scan + glow-line | Premium automated loaders |
| 70 | [Morphing Blob](icons/70-morphing-blob/) | blob + organic | Premium automated loaders |
| 71 | [Activity Spokes](icons/71-activity-spokes/) | sequential-fade + spokes | Premium automated loaders |
| 72 | [Kinetic Loom](icons/72-kinetic-loom/) | geometric + minimal | Premium automated loaders |
| 73 | [Cellular Division](icons/73-cellular-division/) | gooey + organic | Premium automated loaders |
| 74 | [Glitch Barcode](icons/74-glitch-barcode/) | cyberpunk + flicker | Premium automated loaders |
| 75 | [Infinite Maze](icons/75-infinite-maze/) | translate + geometric | Premium automated loaders |
| 76 | [Concentric Chevrons](icons/76-concentric-chevrons/) | direction + arrows | Premium automated loaders |
| 77 | [Typewriter Cursor](icons/77-typewriter-cursor/) | blink + cursor | Premium automated loaders |
| 78 | [Ripple Target](icons/78-ripple-target/) | concentric + radar | Premium automated loaders |
| 79 | [Domino Fall](icons/79-domino-fall/) | perspective + rotateX | Premium automated loaders |
| 80 | [Traffic Signal](icons/80-traffic-signal/) | sequential-color + dots | Premium automated loaders |
| 81 | [Diamond Morph](icons/81-diamond-morph/) | rotate + border-radius | Premium automated loaders |
| 82 | [Pinwheel Spin](icons/82-pinwheel-spin/) | rotate + triangle | Premium automated loaders |
| 83 | [Staircase Climb](icons/83-staircase-climb/) | step + translateY | Premium automated loaders |
| 84 | [Neon Ring](icons/84-neon-ring/) | glow + border | Premium automated loaders |
| 85 | [Zigzag March](icons/85-zigzag-march/) | zigzag + path | Premium automated loaders |
| 86 | [Rotating Squares](icons/86-rotating-squares/) | dual + counter-rotate | Premium automated loaders |
| 87 | [Neon Glitch Bar](icons/87-neon-glitch-bar/) | glitch-cyber + neon-sweep | Premium automated loaders |
| 88 | [Plasma Blob](icons/88-plasma-blob/) | organic-fluid + morphing | Premium automated loaders |
| 89 | [Infinite Progress](icons/89-infinite-progress/) | progress-bar + loop | Premium automated loaders |
| 90 | [Pulsar Orbit](icons/90-pulsar-orbit/) | orbit-cosmic + quantum | Premium automated loaders |
| 91 | [Hologram Scan](icons/91-hologram-scan/) | holographic + cyber-grid | Premium automated loaders |
| 92 | [Nebula Swarm](icons/92-nebula-swarm/) | 3d-orbit + cosmic-gravity | Premium automated loaders |
| 93 | [Tesseract Rotate](icons/93-tesseract-rotate/) | tesseract + 3d-cube | Premium automated loaders |
| 94 | [Helix Wave](icons/94-helix-wave/) | helix-wave + double-helix | Premium automated loaders |
| 95 | [Gooey Ring](icons/95-gooey-ring/) | gooey-ring + metaball-spin | Premium automated loaders |
| 96 | [Glitch Grid](icons/96-glitch-grid/) | glitch-grid + digital-flicker | Premium automated loaders |

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

<!-- 11 · Comet (single element) -->
<div class="comet" role="status" aria-label="Loading"></div>

<!-- 12 · Folding Cube (parent + 4 spans) -->
<div class="folding-cube" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</div>

<!-- 13 · Fluid Metaballs (parent + 3 spans) -->
<div class="fluid-metaballs" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 14 · DNA Helix (parent + 10 spans) -->
<div class="dna-helix" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 15 · Atom Orbit (parent + nucleus + 3 rings with electrons) -->
<div class="atom-orbit" role="status" aria-label="Loading">
  <div class="atom-orbit__nucleus"></div>
  <div class="atom-orbit__ring atom-orbit__ring--1"><div class="atom-orbit__electron"></div></div>
  <div class="atom-orbit__ring atom-orbit__ring--2"><div class="atom-orbit__electron"></div></div>
  <div class="atom-orbit__ring atom-orbit__ring--3"><div class="atom-orbit__electron"></div></div>
</div>

<!-- 16 · Sonar Ripple (parent + 3 spans) -->
<div class="sonar-ripple" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 17 · Honeycomb Pulse (parent + 7 spans) -->
<div class="honeycomb-pulse" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 18 · Matrix Fade (parent + 9 spans) -->
<div class="matrix-fade" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
</div>

<!-- 19 · Wandering Cubes (parent + 2 spans) -->
<div class="wandering-cubes" role="status" aria-label="Loading">
  <span></span><span></span>
</div>

<!-- 20 · Chromatic Spinner (single element) -->
<div class="chromatic-spinner" role="status" aria-label="Loading"></div>

<!-- 21 · Mesh Gears (parent + nested gears & teeth spans) -->
<div class="mesh-gears" role="status" aria-label="Loading">
  <div class="gear gear--large">
    <span></span><span></span><span></span><span></span>
  </div>
  <div class="gear gear--small">
    <span></span><span></span><span></span><span></span>
  </div>
</div>

<!-- 22 · Particle Vortex (parent + 6 spans) -->
<div class="particle-vortex" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 23 · Hourglass (parent + top/stream/bottom) -->
<div class="hourglass" role="status" aria-label="Loading">
  <div class="hourglass__top"></div>
  <div class="hourglass__stream"></div>
  <div class="hourglass__bottom"></div>
</div>

<!-- 24 · Page Flip (parent + 3 spans) -->
<div class="page-flip" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 25 · Squishy Ball (parent + sphere & shadow) -->
<div class="squishy-ball" role="status" aria-label="Loading">
  <div class="squishy-ball__sphere"></div>
  <div class="squishy-ball__shadow"></div>
</div>

<!-- 26 · Warp Field (parent + 8 spans) -->
<div class="warp-field" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span>
</div>

<!-- 27 · Radar Sweep (parent + line & 2 blips) -->
<div class="radar-sweep" role="status" aria-label="Loading">
  <div class="radar-sweep__line"></div>
  <div class="radar-sweep__blip radar-sweep__blip--1"></div>
  <div class="radar-sweep__blip radar-sweep__blip--2"></div>
</div>

<!-- 28 · Matrix Rain (parent + 4 spans) -->
<div class="matrix-rain" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</div>

<!-- 29 · Gyro Spheres (parent + 3 rings & nucleus) -->
<div class="gyro-spheres" role="status" aria-label="Loading">
  <div class="gyro-ring gyro-ring--outer"></div>
  <div class="gyro-ring gyro-ring--middle"></div>
  <div class="gyro-ring gyro-ring--inner"></div>
  <div class="gyro-nucleus"></div>
</div>

<!-- 30 · Heartbeat (single element) -->
<div class="heartbeat" role="status" aria-label="Loading"></div>

<!-- 31 · Pendulum Wave (parent + 5 spans) -->
<div class="pendulum-wave" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 32 · Infinite Loop (parent + 3 spans) -->
<div class="infinite-loop" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 33 · Concentric Rings (parent + 3 spans) -->
<div class="concentric-rings" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 34 · Waveform Audio (parent + 5 spans) -->
<div class="waveform-audio" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 35 · Breathing Ring (single element) -->
<div class="breathing-ring" role="status" aria-label="Loading"></div>

<!-- 36 · Liquid Drop (parent + spout/drip/ripple) -->
<div class="liquid-drop" role="status" aria-label="Loading">
  <div class="liquid-drop__spout"></div>
  <div class="liquid-drop__drip"></div>
  <div class="liquid-drop__ripple"></div>
</div>

<!-- 37 · Hexagon Orbit (parent + 3 spans) -->
<div class="hexagon-orbit" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 38 · Sparkling Stars (parent + 3 spans) -->
<div class="sparkling-stars" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 39 · Snake Chase (parent + 4 spans) -->
<div class="snake-chase" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</div>

<!-- 40 · Solar Eclipse (parent + corona & occluder) -->
<div class="solar-eclipse" role="status" aria-label="Loading">
  <div class="solar-eclipse__corona"></div>
  <div class="solar-eclipse__occluder" style="--eclipse-occluder: #ffffff;"></div>
</div>

<!-- 41 · Pulsing Grid (parent + 9 spans) -->
<div class="pulsing-grid" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
</div>

<!-- 42 · Helix Tunnel (parent + 5 spans) -->
<div class="helix-tunnel" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 43 · Elastic Line (single element) -->
<div class="elastic-line" role="status" aria-label="Loading"></div>

<!-- 44 · Jumping Dots (parent + 3 spans) -->
<div class="jumping-dots" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 45 · Newton's Cradle 3D (parent + 5 spans) -->
<div class="newton-cradle-3d" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 46 · Signal Beacons (parent + 3 spans) -->
<div class="signal-beacons" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 47 · Ticking Clock (parent + hour & minute) -->
<div class="ticking-clock" role="status" aria-label="Loading">
  <div class="ticking-clock__hour"></div>
  <div class="ticking-clock__minute"></div>
</div>

<!-- 48 · Bouncing Cube 3D (parent + nested cube & 3 faces) -->
<div class="bouncing-cube" role="status" aria-label="Loading">
  <div class="bouncing-cube__cube">
    <div class="bouncing-cube__face bouncing-cube__face--top"></div>
    <div class="bouncing-cube__face bouncing-cube__face--front"></div>
    <div class="bouncing-cube__face bouncing-cube__face--side"></div>
  </div>
</div>

<!-- 49 · Digital Segment (parent + 7 spans) -->
<div class="digital-segment" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 50 · Perspective Tunnel (parent + 6 spans) -->
<div class="perspective-tunnel" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 51 · Prism Orbit (parent + 3 spans) -->
<div class="prism-orbit" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 52 · Barcode Sweep (parent + 7 spans) -->
<div class="barcode-sweep" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 53 · Corner Chase (parent + 4 spans) -->
<div class="corner-chase" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</div>

<!-- 54 · Shard Flip (parent + 8 spans) -->
<div class="shard-flip" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 55 · Shutter Bloom (parent + 6 spans) -->
<div class="shutter-bloom" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 56 · Pulse Helix (parent + 5 spans) -->
<div class="pulse-helix" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 57 · Kinetic Vortex (parent + 3 spans) -->
<div class="kinetic-vortex" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 58 · Neon Matrix (parent + 4 spans) -->
<div class="neon-matrix" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</div>

<!-- 59 · Holographic Helix (parent + 6 spans) -->
<div class="holographic-helix" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 60 · Glow Quantum (nucleus + 1 orbit) -->
<div class="glow-quantum" role="status" aria-label="Loading">
  <div class="glow-quantum__core"></div>

<!-- 61 · Liquid Drip (parent + 3 spans) -->
<div class="liquid-drip" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 62 · Folding Prism -->
<div class="folding-prism" role="status" aria-label="Loading">
  <span class="folding-prism__face"></span>
  <span class="folding-prism__face"></span>
  <span class="folding-prism__face"></span>
</div>

<!-- 63 · Quantum Ripple -->
<div class="quantum-ripple" role="status" aria-label="Loading">
  <span class="quantum-ripple__core"></span>
  <span class="quantum-ripple__ring"></span>
  <span class="quantum-ripple__ring"></span>
</div>

<!-- 64 · Glitch Orbit -->
<div class="glitch-orbit" role="status" aria-label="Loading">
  <span class="glitch-orbit__dot"></span>
  <span class="glitch-orbit__dot"></span>
  <span class="glitch-orbit__dot"></span>
</div>

<!-- 65 · Viscous Wave -->
<div class="viscous-wave" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

<!-- 66 · Crystalline Star -->
<div class="crystalline-star" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span>
</div>

<!-- 67 · Spiral Coil -->
<div class="spiral-coil" role="status" aria-label="Loading">
  <span></span><span></span>
</div>

<!-- 68 · Orbit Chain -->
<div class="orbit-chain" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 69 · Scanning Line -->
<div class="scanning-line" role="status" aria-label="Loading">
  <span></span>
</div>

<!-- 70 · Morphing Blob -->
<div class="morphing-blob" role="status" aria-label="Loading"></div>

<!-- 71 · Activity Spokes -->
<div class="activity-spokes" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span>
</div>

<!-- 72 · Kinetic Loom -->
<div class="kinetic-loom" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</div>

<!-- 73 · Cellular Division -->
<div class="cellular-division" role="status" aria-label="Loading">
  <span></span><span></span>
</div>

<!-- 74 · Glitch Barcode -->
<div class="glitch-barcode" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 75 · Infinite Maze -->
<div class="infinite-maze" role="status" aria-label="Loading">
  <span></span>
</div>

<!-- 76 · Concentric Chevrons -->
<div class="concentric-chevrons" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 77 · Typewriter Cursor -->
<div class="typewriter-cursor" role="status" aria-label="Loading">
  <span></span>
</div>

<!-- 78 · Ripple Target -->
<div class="ripple-target" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 79 · Domino Fall -->
<div class="domino-fall" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 80 · Traffic Signal -->
<div class="traffic-signal" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 81 · Diamond Morph -->
<div class="diamond-morph" role="status" aria-label="Loading">
  <span></span>
</div>

<!-- 82 · Pinwheel Spin -->
<div class="pinwheel-spin" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
</div>

<!-- 83 · Staircase Climb -->
<div class="staircase-climb" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span><span></span>
</div>

<!-- 84 · Neon Ring -->
<div class="neon-ring" role="status" aria-label="Loading"></div>

<!-- 85 · Zigzag March -->
<div class="zigzag-march" role="status" aria-label="Loading">
  <span></span>
</div>

<!-- 86 · Rotating Squares -->
<div class="rotating-squares" role="status" aria-label="Loading">
  <span></span><span></span>
</div>

<!-- 87 · Neon Glitch Bar (parent + 3 spans) -->
<div class="neon-glitch-bar" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
</div>

<!-- 88 · Plasma Blob (parent only) -->
<div class="plasma-blob" role="status" aria-label="Loading">
</div>

<!-- 89 · Infinite Progress (parent only) -->
<div class="infinite-progress" role="status" aria-label="Loading">
</div>

<!-- 90 · Pulsar Orbit (parent + core + ring) -->
<div class="pulsar-orbit" role="status" aria-label="Loading">
  <div class="pulsar-orbit__core"></div>

<!-- 91 · Hologram Scan (parent + 1 span) -->
<div class="hologram-scan" role="status" aria-label="Loading">
  <span class="hologram-scan__line"></span>
</div>

<!-- 92 · Nebula Swarm (parent + 3 spans) -->
<div class="nebula-swarm" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>

<!-- 93 · Tesseract Rotate (parent + inner + outer) -->
<div class="tesseract-rotate" role="status" aria-label="Loading">
  <div class="tesseract-rotate__inner"></div>

<!-- 94 · Helix Wave (parent + 5 spans) -->
<div class="helix-wave" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

<!-- 95 · Gooey Ring (parent + 3 spans) -->
<div class="gooey-ring" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>

<!-- 96 · Glitch Grid (parent + 4 spans) -->
<div class="glitch-grid" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
  <div class="tesseract-rotate__outer"></div>
</div>
  <div class="pulsar-orbit__ring"></div>
</div>
  <div class="glow-quantum__ring"><span></span></div>
</div>
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
| Comet | `--comet-size` `--comet-thickness` `--comet-color` `--comet-speed` `--comet-arc` |
| Folding Cube | `--cube-size` `--cube-color` `--cube-speed` |
| Fluid Metaballs | `--metaballs-size` `--metaballs-color` `--metaballs-bg` `--metaballs-speed` |
| DNA Helix | `--dna-width` `--dna-height` `--dna-dot-size` `--dna-color` `--dna-speed` |
| Atom Orbit | `--atom-size` `--atom-color` `--atom-speed` |
| Sonar Ripple | `--sonar-size` `--sonar-color` `--sonar-speed` |
| Honeycomb Pulse | `--honeycomb-size` `--honeycomb-color` `--honeycomb-speed` |
| Matrix Fade | `--matrix-size` `--matrix-gap` `--matrix-color` `--matrix-speed` `--matrix-radius` |
| Wandering Cubes | `--cubes-size` `--cubes-color` `--cubes-speed` |
| Chromatic Spinner | `--chromatic-size` `--chromatic-thickness` `--chromatic-speed` |
| Mesh Gears | `--gears-width` `--gears-height` `--gears-color` `--gears-bg` `--gears-speed` |
| Particle Vortex | `--vortex-size` `--particle-size` `--vortex-color` `--vortex-speed` |
| Hourglass | `--glass-size` `--glass-color` `--glass-speed` |
| Page Flip | `--book-width` `--book-height` `--book-color` `--book-speed` |
| Squishy Ball | `--ball-size` `--ball-height` `--ball-color` `--ball-speed` |
| Warp Field | `--warp-size` `--warp-color` `--warp-speed` |
| Radar Sweep | `--radar-size` `--radar-color` `--radar-speed` |
| Matrix Rain | `--rain-width` `--rain-height` `--drop-size` `--rain-color` `--rain-speed` |
| Gyro Spheres | `--gyro-size` `--gyro-color` `--gyro-speed` |
| Heartbeat | `--heart-size` `--heart-color` `--heart-speed` |
| Pendulum Wave | `--wave-size` `--wave-color` `--wave-speed` |
| Infinite Loop | `--loop-size` `--loop-color` `--loop-speed` |
| Concentric Rings | `--ring-size` `--ring-color` `--ring-speed` |
| Waveform Audio | `--audio-size` `--audio-color` `--audio-speed` |
| Breathing Ring | `--ring-size` `--ring-color` `--ring-speed` |
| Liquid Drop | `--drop-size` `--drop-color` `--drop-speed` `--eclipse-occluder` |
| Hexagon Orbit | `--orbit-size` `--orbit-color` `--orbit-speed` |
| Sparkling Stars | `--star-size` `--star-color` `--star-speed` |
| Snake Chase | `--track-size` `--track-color` `--track-speed` |
| Solar Eclipse | `--eclipse-size` `--eclipse-color` `--eclipse-speed` `--eclipse-occluder` |
| Pulsing Grid | `--grid-size` `--grid-color` `--grid-speed` |
| Helix Tunnel | `--tunnel-size` `--tunnel-color` `--tunnel-speed` |
| Elastic Line | `--line-size` `--line-color` `--line-speed` |
| Jumping Dots | `--jump-size` `--jump-color` `--jump-speed` |
| Newton's Cradle 3D | `--cradle-size` `--cradle-color` `--cradle-speed` |
| Signal Beacons | `--beacon-size` `--beacon-color` `--beacon-speed` |
| Ticking Clock | `--clock-size` `--clock-color` `--clock-speed` |
| Bouncing Cube 3D | `--cube-size` `--cube-color` `--cube-speed` |
| Digital Segment | `--segment-size` `--segment-color` `--segment-speed` |
| Perspective Tunnel | `--pt-size` `--pt-color` `--pt-glow` `--pt-speed` `--pt-thickness` `--pt-bg` |
| Prism Orbit | `--po-size` `--po-tile` `--po-radius` `--po-color` `--po-speed` |
| Barcode Sweep | `--bs-w` `--bs-h` `--bs-gap` `--bs-color` `--bs-speed` |
| Corner Chase | `--cc-size` `--cc-corner` `--cc-thick` `--cc-radius` `--cc-color` `--cc-speed` |
| Shard Flip | `--sf-size` `--sf-w` `--sf-h` `--sf-radius` `--sf-round` `--sf-color` `--sf-speed` |
| Shutter Bloom | `--sb-size` `--sb-blade-w` `--sb-blade-h` `--sb-radius` `--sb-round` `--sb-color` `--sb-speed` |
| Pulse Helix | `--ph-size` `--ph-gap` `--ph-color` `--ph-speed` |
| Nebula Swarm | --loader-size --loader-color --loader-speed --ns-perspective --ns-dot-size |
| Tesseract Rotate | --loader-size --loader-color --loader-speed --tr-perspective |
| Helix Wave | --loader-size --loader-color --loader-speed --hw-bar-height --hw-gap |
| Gooey Ring | --loader-size --loader-color --loader-speed --gr-blur --gr-contrast |
| Glitch Grid | --loader-size --loader-color --loader-speed --gg-gap |
| Neon Glitch Bar | `--ngb-gap` `--ngb-glow` |
| Plasma Blob | `--pb-gradient` |
| Infinite Progress | `--ip-track-color` `--ip-thickness` |
| Pulsar Orbit | `--po-core-size` `--po-ring-color` |
| Hologram Scan | `--hs-border-color` `--hs-glow` |
| Pinwheel Spin | `--pw-size` `--pw-color` `--pw-speed` |
| Staircase Climb | `--sc-size` `--sc-color` `--sc-speed` |
| Neon Ring | `--nr-size` `--nr-color` `--nr-speed` |
| Zigzag March | `--zm-size` `--zm-color` `--zm-speed` |
| Rotating Squares | `--rs-size` `--rs-color` `--rs-speed` |
| Typewriter Cursor | `--tc-size` `--tc-color` `--tc-speed` |
| Ripple Target | `--rt-size` `--rt-color` `--rt-speed` |
| Domino Fall | `--df-size` `--df-color` `--df-speed` |
| Traffic Signal | `--ts-size` `--ts-color` `--ts-speed` |
| Diamond Morph | `--dm-size` `--dm-color` `--dm-speed` |
| Kinetic Loom | `--kl-size` `--kl-color` `--kl-speed` |
| Cellular Division | `--cd-size` `--cd-color` `--cd-speed` |
| Glitch Barcode | `--gb-size` `--gb-color` `--gb-speed` |
| Infinite Maze | `--im-size` `--im-color` `--im-speed` |
| Concentric Chevrons | `--cc-size` `--cc-color` `--cc-speed` |
| Spiral Coil | `--sc-size` `--sc-color` `--sc-speed` `--sc-opacity` |
| Orbit Chain | `--oc-size` `--oc-color` `--oc-speed` |
| Scanning Line | `--sl-size` `--sl-color` `--sl-speed` |
| Morphing Blob | `--mb-size` `--mb-color` `--mb-speed` `--mb-opacity` |
| Activity Spokes | `--as-size` `--as-color` `--as-speed` |
| Folding Prism | `--fp-size` `--fp-color` `--fp-speed` `--fp-opacity` |
| Quantum Ripple | `--qr-size` `--qr-color` `--qr-speed` `--qr-opacity` |
| Glitch Orbit | `--go-size` `--go-color` `--go-speed` `--go-opacity` |
| Viscous Wave | `--vw-size` `--vw-color` `--vw-speed` `--vw-opacity` |
| Crystalline Star | `--cs-size` `--cs-color` `--cs-speed` `--cs-opacity` |
| Kinetic Vortex | `--kv-size` `--kv-color` `--kv-speed` |
| Neon Matrix | `--nm-size` `--nm-color` `--nm-speed` |
| Holographic Helix | `--hh-size` `--hh-gap` `--hh-color` `--hh-speed` |
| Glow Quantum | `--gq-size` `--gq-color` `--gq-speed` |
| Liquid Drip | `--ld-size` `--ld-color` `--ld-speed` |

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
    ├── 10-split-ring/
    │   ├── split-ring.css
    │   └── index.html
    ├── 11-comet/
    │   ├── comet.css
    │   └── index.html
    ├── 12-folding-cube/
    │   ├── folding-cube.css
    │   └── index.html
    ├── 13-fluid-metaballs/
    │   ├── fluid-metaballs.css
    │   └── index.html
    ├── 14-dna-helix/
    │   ├── dna-helix.css
    │   └── index.html
    ├── 15-atom-orbit/
    │   ├── atom-orbit.css
    │   └── index.html
    ├── 16-sonar-ripple/
    │   ├── sonar-ripple.css
    │   └── index.html
    ├── 17-honeycomb-pulse/
    │   ├── honeycomb-pulse.css
    │   └── index.html
    ├── 18-matrix-fade/
    │   ├── matrix-fade.css
    │   └── index.html
    ├── 19-wandering-cubes/
    │   ├── wandering-cubes.css
    │   └── index.html
    ├── 20-chromatic-spinner/
    │   ├── chromatic-spinner.css
    │   └── index.html
    ├── 21-mesh-gears/
    │   ├── mesh-gears.css
    │   └── index.html
    └── 22-particle-vortex/
        ├── particle-vortex.css
        └── index.html
    ├── 23-hourglass/
    │   ├── hourglass.css
    │   └── index.html
    ├── 24-page-flip/
    │   ├── page-flip.css
    │   └── index.html
    ├── 25-squishy-ball/
    │   ├── squishy-ball.css
    │   └── index.html
    ├── 26-warp-field/
    │   ├── warp-field.css
    │   └── index.html
    ├── 27-radar-sweep/
    │   ├── radar-sweep.css
    │   └── index.html
    ├── 28-matrix-rain/
    │   ├── matrix-rain.css
    │   └── index.html
    ├── 29-gyro-spheres/
    │   ├── gyro-spheres.css
    │   └── index.html
    ├── 30-heartbeat/
    │   ├── heartbeat.css
    │   └── index.html
    ├── 31-pendulum-wave/
    │   ├── pendulum-wave.css
    │   └── index.html
    ├── 32-infinite-loop/
    │   ├── infinite-loop.css
    │   └── index.html
    ├── 33-concentric-rings/
    │   ├── concentric-rings.css
    │   └── index.html
    ├── 34-waveform-audio/
    │   ├── waveform-audio.css
    │   └── index.html
    ├── 35-breathing-ring/
    │   ├── breathing-ring.css
    │   └── index.html
    ├── 36-liquid-drop/
    │   ├── liquid-drop.css
    │   └── index.html
    ├── 37-hexagon-orbit/
    │   ├── hexagon-orbit.css
    │   └── index.html
    ├── 38-sparkling-stars/
    │   ├── sparkling-stars.css
    │   └── index.html
    ├── 39-snake-chase/
    │   ├── snake-chase.css
    │   └── index.html
    ├── 40-solar-eclipse/
    │   ├── solar-eclipse.css
    │   └── index.html
    ├── 41-pulsing-grid/
    │   ├── pulsing-grid.css
    │   └── index.html
    ├── 42-helix-tunnel/
    │   ├── helix-tunnel.css
    │   └── index.html
    ├── 43-elastic-line/
    │   ├── elastic-line.css
    │   └── index.html
    ├── 44-jumping-dots/
    │   ├── jumping-dots.css
    │   └── index.html
    ├── 45-newton-cradle-3d/
    │   ├── newton-cradle-3d.css
    │   └── index.html
    ├── 46-signal-beacons/
    │   ├── signal-beacons.css
    │   └── index.html
    ├── 47-ticking-clock/
    │   ├── ticking-clock.css
    │   └── index.html
    ├── 48-bouncing-cube/
    │   ├── bouncing-cube.css
    │   └── index.html
    ├── 49-digital-segment/
    │   ├── digital-segment.css
    │   └── index.html
    ├── 50-perspective-tunnel/
    │   ├── perspective-tunnel.css
    │   └── index.html
    ├── 51-prism-orbit/
    │   ├── prism-orbit.css
    │   └── index.html
    ├── 52-barcode-sweep/
    │   ├── barcode-sweep.css
    │   └── index.html
    ├── 53-corner-chase/
    │   ├── corner-chase.css
    │   └── index.html
    ├── 54-shard-flip/
    │   ├── shard-flip.css
    │   └── index.html
    ├── 55-shutter-bloom/
    │   ├── shutter-bloom.css
    │   └── index.html
    └── 56-pulse-helix/
        ├── pulse-helix.css
        └── index.html
    ├── 57-kinetic-vortex/
    │   ├── kinetic-vortex.css
    │   └── index.html
    ├── 58-neon-matrix/
    │   ├── neon-matrix.css
    │   └── index.html
    ├── 59-holographic-helix/
    │   ├── holographic-helix.css
    │   └── index.html
    ├── 60-glow-quantum/
    │   ├── glow-quantum.css
    │   └── index.html
    ├── 61-liquid-drip/
    │   ├── liquid-drip.css
    │   └── index.html
    ├── 62-folding-prism/
    │   ├── folding-prism.css
    │   └── index.html
    ├── 63-quantum-ripple/
    │   ├── quantum-ripple.css
    │   └── index.html
    ├── 64-glitch-orbit/
    │   ├── glitch-orbit.css
    │   └── index.html
    ├── 65-viscous-wave/
    │   ├── viscous-wave.css
    │   └── index.html
    ├── 66-crystalline-star/
    │   ├── crystalline-star.css
    │   └── index.html
    ├── 67-spiral-coil/
    │   ├── spiral-coil.css
    │   └── index.html
    ├── 68-orbit-chain/
    │   ├── orbit-chain.css
    │   └── index.html
    ├── 69-scanning-line/
    │   ├── scanning-line.css
    │   └── index.html
    ├── 70-morphing-blob/
    │   ├── morphing-blob.css
    │   └── index.html
    ├── 71-activity-spokes/
    │   ├── activity-spokes.css
    │   └── index.html
    ├── 72-kinetic-loom/
    │   ├── kinetic-loom.css
    │   └── index.html
    ├── 73-cellular-division/
    │   ├── cellular-division.css
    │   └── index.html
    ├── 74-glitch-barcode/
    │   ├── glitch-barcode.css
    │   └── index.html
    ├── 75-infinite-maze/
    │   ├── infinite-maze.css
    │   └── index.html
    ├── 76-concentric-chevrons/
    │   ├── concentric-chevrons.css
    │   └── index.html
    ├── 77-typewriter-cursor/
    │   ├── typewriter-cursor.css
    │   └── index.html
    ├── 78-ripple-target/
    │   ├── ripple-target.css
    │   └── index.html
    ├── 79-domino-fall/
    │   ├── domino-fall.css
    │   └── index.html
    ├── 80-traffic-signal/
    │   ├── traffic-signal.css
    │   └── index.html
    ├── 81-diamond-morph/
    │   ├── diamond-morph.css
    │   └── index.html
    ├── 82-pinwheel-spin/
    │   ├── pinwheel-spin.css
    │   └── index.html
    ├── 83-staircase-climb/
    │   ├── staircase-climb.css
    │   └── index.html
    ├── 84-neon-ring/
    │   ├── neon-ring.css
    │   └── index.html
    ├── 85-zigzag-march/
    │   ├── zigzag-march.css
    │   └── index.html
    ├── 86-rotating-squares/
    │   ├── rotating-squares.css
    │   └── index.html
    ├── 87-neon-glitch-bar/
    │   ├── neon-glitch-bar.css
    │   └── index.html
    ├── 88-plasma-blob/
    │   ├── plasma-blob.css
    │   └── index.html
    ├── 89-infinite-progress/
    │   ├── infinite-progress.css
    │   └── index.html
    ├── 90-pulsar-orbit/
    │   ├── pulsar-orbit.css
    │   └── index.html
    ├── 91-hologram-scan/
    │   ├── hologram-scan.css
    │   └── index.html
    ├── 92-nebula-swarm/
    │   ├── nebula-swarm.css
    │   └── index.html
    ├── 93-tesseract-rotate/
    │   ├── tesseract-rotate.css
    │   └── index.html
    ├── 94-helix-wave/
    │   ├── helix-wave.css
    │   └── index.html
    ├── 95-gooey-ring/
    │   ├── gooey-ring.css
    │   └── index.html
    ├── 96-glitch-grid/
    │   ├── glitch-grid.css
    │   └── index.html
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
  .typing > span, .circ-progress__svg, .morph, .split-ring,
  .comet, .folding-cube span::before, .fluid-metaballs span,
  .dna-helix span, .atom-orbit__electron, .sonar-ripple span,
  .honeycomb-pulse span, .matrix-fade span, .wandering-cubes span,
  .chromatic-spinner, .gear, .particle-vortex span,
  .hourglass, .hourglass__top::before, .hourglass__bottom::before,
  .hourglass__stream, .page-flip span, .squishy-ball__sphere,
  .squishy-ball__shadow, .warp-field span, .radar-sweep__line,
  .radar-sweep__blip, .matrix-rain span::before, .gyro-ring,
  .heartbeat, .pendulum-wave span, .infinite-loop span,
  .concentric-rings span, .waveform-audio span, .breathing-ring,
  .liquid-drop__drip, .liquid-drop__ripple, .hexagon-orbit span,
  .sparkling-stars span, .snake-chase span, .solar-eclipse__corona,
  .solar-eclipse__occluder, .pulsing-grid span, .helix-tunnel span,
  .elastic-line::before, .jumping-dots span, .newton-cradle-3d span,
  .newton-cradle-3d span::before, .newton-cradle-3d span::after,
  .signal-beacons span::after, .ticking-clock__hour,
  .ticking-clock__minute, .bouncing-cube__cube, .bouncing-cube::before,
  .digital-segment span, .perspective-tunnel span,
  .prism-orbit span, .barcode-sweep span, .barcode-sweep::after,
  .corner-chase span, .shard-flip span, .shutter-bloom::before,
  .shutter-bloom span, .pulse-helix span, .glitch-grid span, .gooey-ring span, .helix-wave span, .tesseract-rotate span, .nebula-swarm span, .hologram-scan span, .pulsar-orbit span, .infinite-progress span, .plasma-blob span, .neon-glitch-bar span, .rotating-squares span, .zigzag-march span, .neon-ring span, .staircase-climb span, .pinwheel-spin span, .diamond-morph span, .traffic-signal span, .domino-fall span, .ripple-target span, .typewriter-cursor span, .concentric-chevrons span, .infinite-maze span, .glitch-barcode span, .cellular-division span, .kinetic-loom span, .activity-spokes span, .morphing-blob span, .scanning-line span, .orbit-chain span, .spiral-coil span, .crystalline-star span, .viscous-wave span, .glitch-orbit span, .quantum-ripple span, .folding-prism span, .liquid-drip span, .glow-quantum span, .holographic-helix span, .neon-matrix span, .kinetic-vortex span {
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
