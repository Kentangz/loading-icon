// DATA SOURCE FOR ALL LOADERS (EXTRACTED TO SEPARATE MODULAR REGISTRY)
// Automatically compiled by node scripts/build-registry.js — DO NOT EDIT DIRECTLY
const loaders = [
	{
		id: "01",
		name: "Classic Spinner",
		category: "spinners",
		tags: ["border-trick","rotate"],
		html: "<div class=\"demo-spinner\"></div>",
		css: `.demo-spinner {
  width: 32px; height: 32px;
  border: 3px solid var(--border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin calc(0.8s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
@keyframes spin { to { transform: rotate(360deg); } }`,
	},
	{
		id: "02",
		name: "Dots Wave",
		category: "waves",
		tags: ["translateY","stagger"],
		html: "<div class=\"demo-dots\"><span></span><span></span><span></span></div>",
		css: `.demo-dots { display: flex; gap: 5px; align-items: center; }
.demo-dots span {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--color-success);
  animation: wave calc(1.2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-dots span:nth-child(2) { animation-delay: calc(.15s * var(--loader-speed-scale)); }
.demo-dots span:nth-child(3) { animation-delay: calc(.30s * var(--loader-speed-scale)); }
@keyframes wave {
  0%,80%,100%{transform:translateY(0)}
  40%{transform:translateY(-10px)}
}`,
	},
	{
		id: "03",
		name: "Pulse Ring",
		category: "special",
		tags: ["scale","opacity","pulse"],
		html: "<div class=\"demo-pulse\"></div>",
		css: `.demo-pulse {
  position: relative; width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
}
.demo-pulse::before {
  content: ''; position: absolute; inset: 0; border-radius: 50%;
  background: var(--color-danger); opacity: .3;
  animation: pring calc(1.5s * var(--loader-speed-scale)) ease-out var(--loader-cycles);
}
.demo-pulse::after {
  content: ''; width: 13px; height: 13px; border-radius: 50%;
  background: var(--color-danger); animation: pdot calc(1.5s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
@keyframes pring { 0%{transform:scale(.7);opacity:.3} 100%{transform:scale(1.8);opacity:0} }
@keyframes pdot  { 0%,100%{transform:scale(1)} 50%{transform:scale(.88)} }`,
	},
	{
		id: "04",
		name: "Bar Loader",
		category: "waves",
		tags: ["scaleY","stagger"],
		html: "<div class=\"demo-bars\"><span></span><span></span><span></span><span></span></div>",
		css: `.demo-bars { display: flex; gap: 3px; align-items: flex-end; height: 28px; }
.demo-bars span {
  display: block; width: 4px; height: 22px;
  border-radius: 2px; background: var(--color-info);
  transform-origin: bottom;
  animation: bscale calc(1s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-bars span:nth-child(2) { animation-delay: calc(.1s * var(--loader-speed-scale)); }
.demo-bars span:nth-child(3) { animation-delay: calc(.2s * var(--loader-speed-scale)); }
.demo-bars span:nth-child(4) { animation-delay: calc(.3s * var(--loader-speed-scale)); }
@keyframes bscale { 0%,100%{transform:scaleY(.35)} 50%{transform:scaleY(1)} }`,
	},
	{
		id: "05",
		name: "Orbit",
		category: "spinners",
		tags: ["rotate","absolute-position"],
		html: "<div class=\"demo-orbit\"><div class=\"demo-orbit-ring\"><div class=\"demo-orbit-dot\"></div></div><div class=\"demo-orbit-core\"></div></div>",
		css: `.demo-orbit {
  position: relative; width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
}
.demo-orbit-ring {
  position: absolute; inset: 0; border-radius: 50%;
  border: 1.5px dashed rgba(239,159,39,.35);
  animation: ospin calc(1.8s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-orbit-dot {
  position: absolute; width: 7px; height: 7px; border-radius: 50%;
  background: var(--color-warning); top: -3.5px; left: 50%; transform: translateX(-50%);
}
.demo-orbit-core { width: 9px; height: 9px; border-radius: 50%; background: #BA7517; }
@keyframes ospin { to { transform: rotate(360deg); } }`,
	},
	{
		id: "06",
		name: "Shimmer Skeleton",
		category: "waves",
		tags: ["bg-position","gradient"],
		html: "<div class=\"demo-skeleton\"><div class=\"demo-skel-line\"></div><div class=\"demo-skel-line\"></div><div class=\"demo-skel-line\"></div></div>",
		css: `.demo-skeleton { width: 90px; display: flex; flex-direction: column; gap: 5px; }
.demo-skel-line {
  height: 8px; border-radius: 3px;
  background: linear-gradient(90deg, var(--border) 25%, var(--border-hover) 50%, var(--border) 75%);
  background-size: 200% 100%;
  animation: shimmer calc(1.5s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-skel-line:nth-child(2) { width: 75%; }
.demo-skel-line:nth-child(3) { width: 50%; }
@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`,
	},
	{
		id: "07",
		name: "Typing Indicator",
		category: "waves",
		tags: ["bounce","fade","bubble"],
		html: "<div class=\"demo-typing\"><span></span><span></span><span></span></div>",
		css: `.demo-typing {
  display: flex; gap: 4px; align-items: center;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 16px; border-bottom-left-radius: 3px;
  padding: 8px 12px;
}
.demo-typing span {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--text-muted);
  animation: tbounce calc(1.3s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-typing span:nth-child(2) { animation-delay: calc(.2s * var(--loader-speed-scale)); }
.demo-typing span:nth-child(3) { animation-delay: calc(.4s * var(--loader-speed-scale)); }
@keyframes tbounce { 0%,60%,100%{transform:translateY(0);opacity:.4} 30%{transform:translateY(-5px);opacity:1} }`,
	},
	{
		id: "08",
		name: "Circular Progress",
		category: "spinners",
		tags: ["SVG","stroke-dasharray"],
		html: "<div class=\"demo-circ\"><svg width=\"38\" height=\"38\" viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"var(--border)\" stroke-width=\"3\" cx=\"22\" cy=\"22\" r=\"18\"/><circle fill=\"none\" stroke=\"#534AB7\" stroke-width=\"3\" stroke-linecap=\"round\" cx=\"22\" cy=\"22\" r=\"18\" pathLength=\"100\" stroke-dasharray=\"60 100\" stroke-dashoffset=\"25\"/></svg></div>",
		css: `.demo-circ svg {
  animation: cspin calc(1.6s * var(--loader-speed-scale)) linear var(--loader-cycles);
  transform-origin: center;
}
@keyframes cspin { from{transform:rotate(-90deg)} to{transform:rotate(270deg)} }`,
	},
	{
		id: "09",
		name: "Morphing Shape",
		category: "special",
		tags: ["border-radius","rotate"],
		html: "<div class=\"demo-morph\"></div>",
		css: `.demo-morph {
  width: 28px; height: 28px; background: #993C1D;
  animation: mshape calc(2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
@keyframes mshape {
  0%  { border-radius:4px; transform:rotate(  0deg) scale(1);    }
  25% { border-radius:50%; transform:rotate( 90deg) scale(.82);  }
  50% { border-radius:4px; transform:rotate(180deg) scale(1);    }
  75% { border-radius:50%; transform:rotate(270deg) scale(.82);  }
  100%{ border-radius:4px; transform:rotate(360deg) scale(1);    }
}`,
	},
	{
		id: "10",
		name: "Split Ring",
		category: "spinners",
		tags: ["dual-arc","border"],
		html: "<div class=\"demo-split\"></div>",
		css: `.demo-split {
  width: 32px; height: 32px; border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #0F6E56; border-bottom-color: #0F6E56;
  animation: spin calc(1s * var(--loader-speed-scale)) linear var(--loader-cycles);
}`,
	},
	{
		id: "11",
		name: "Comet",
		category: "spinners",
		tags: ["conic-gradient","mask"],
		html: "<div class=\"demo-comet\"></div>",
		css: `.demo-comet {
  width: 34px; height: 34px; border-radius: 50%;
  background: conic-gradient(from 0deg, transparent 0%, var(--color-primary) 75%);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3.5px - 0.5px), #000 calc(100% - 3.5px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 3.5px - 0.5px), #000 calc(100% - 3.5px));
  animation: spin calc(.8s * var(--loader-speed-scale)) linear var(--loader-cycles);
}`,
	},
	{
		id: "12",
		name: "Folding Cube",
		category: "3d",
		tags: ["3D-rotate","perspective"],
		html: "<div class=\"demo-folding\"><span></span><span></span><span></span><span></span></div>",
		css: `.demo-folding {
  width: 28px; height: 28px; position: relative;
  transform: rotateZ(45deg);
}
.demo-folding span {
  float: left; width: 50%; height: 50%;
  position: relative; transform: scale(1.1);
}
.demo-folding span::before {
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-color: var(--color-primary); transform-origin: 100% 100%;
  animation: dfold calc(2.4s * var(--loader-speed-scale)) var(--loader-cycles) linear both;
}
.demo-folding span:nth-child(2) { transform: scale(1.1) rotateZ(90deg); }
.demo-folding span:nth-child(4) { transform: scale(1.1) rotateZ(180deg); }
.demo-folding span:nth-child(3) { transform: scale(1.1) rotateZ(270deg); }
.demo-folding span:nth-child(2)::before { animation-delay: calc(.3s * var(--loader-speed-scale)); }
.demo-folding span:nth-child(4)::before { animation-delay: calc(.6s * var(--loader-speed-scale)); }
.demo-folding span:nth-child(3)::before { animation-delay: calc(.9s * var(--loader-speed-scale)); }
@keyframes dfold {
  0%, 10% { transform: perspective(140px) rotateX(-180deg); opacity: 0; }
  25%, 75% { transform: perspective(140px) rotateX(0deg); opacity: 1; }
  90%, 100% { transform: perspective(140px) rotateY(180deg); opacity: 0; }
}`,
	},
	{
		id: "13",
		name: "Fluid Metaballs",
		category: "special",
		tags: ["gooey-filter","contrast"],
		html: "<div class=\"demo-metaballs\"><span></span><span></span><span></span></div>",
		css: `.demo-metaballs {
  /* Match standalone icon: blur + contrast gooey */
  --metaballs-size: 44px;
  --metaballs-color: var(--color-primary);
  --metaballs-bg: var(--surface);
  --metaballs-speed: calc(2s * var(--loader-speed-scale));

  display: inline-block;
  position: relative;
  width: var(--metaballs-size);
  height: var(--metaballs-size);
  background: var(--metaballs-bg);
  filter: blur(5px) contrast(14);
  box-sizing: border-box;
  overflow: visible;
}
.demo-metaballs span { position: absolute; background: var(--metaballs-color); border-radius: 50%; box-sizing: border-box; }
.demo-metaballs span:nth-child(1) { top: 32.5%; left: 32.5%; width: 35%; height: 35%; }
.demo-metaballs span:nth-child(2) { top: 35%; left: 35%; width: 30%; height: 30%; animation: dmeta-a var(--metaballs-speed) ease-in-out var(--loader-cycles); }
.demo-metaballs span:nth-child(3) { top: 35%; left: 35%; width: 30%; height: 30%; animation: dmeta-b var(--metaballs-speed) ease-in-out var(--loader-cycles); }
@keyframes dmeta-a { 0%,100%{transform:translateX(-140%)} 50%{transform:translateX(140%)} }
@keyframes dmeta-b { 0%,100%{transform:translateX(140%)} 50%{transform:translateX(-140%)} }`,
	},
	{
		id: "14",
		name: "DNA Helix",
		category: "waves",
		tags: ["stagger","counter-phase"],
		html: "<div class=\"demo-dna\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-dna {
  --dna-width: 64px;
  --dna-height: 32px;
  --dna-dot: 8px;
  --dna-color: var(--color-primary);
  --dna-speed: calc(1.6s * var(--loader-speed-scale));

  position: relative;
  width: var(--dna-width);
  height: calc(var(--dna-height) + var(--dna-dot));
  box-sizing: border-box;
}
.demo-dna span {
  position: absolute;
  width: var(--dna-dot);
  height: var(--dna-dot);
  background: var(--dna-color);
  border-radius: 50%;
  box-sizing: border-box;
}
/* 5 columns (pairs) */
.demo-dna span:nth-child(1), .demo-dna span:nth-child(2)   { left: 0%; }
.demo-dna span:nth-child(3), .demo-dna span:nth-child(4)   { left: 25%; }
.demo-dna span:nth-child(5), .demo-dna span:nth-child(6)   { left: 50%; }
.demo-dna span:nth-child(7), .demo-dna span:nth-child(8)   { left: 75%; }
.demo-dna span:nth-child(9), .demo-dna span:nth-child(10)  { left: 100%; transform: translateX(-100%); }

.demo-dna span:nth-child(odd)  { top: 0; animation: ddna-t var(--dna-speed) ease-in-out var(--loader-cycles); }
.demo-dna span:nth-child(even) { top: 0; animation: ddna-b var(--dna-speed) ease-in-out var(--loader-cycles); }

.demo-dna span:nth-child(1), .demo-dna span:nth-child(2) { animation-delay: 0s; }
.demo-dna span:nth-child(3), .demo-dna span:nth-child(4) { animation-delay: calc(var(--dna-speed) * -0.15); }
.demo-dna span:nth-child(5), .demo-dna span:nth-child(6) { animation-delay: calc(var(--dna-speed) * -0.30); }
.demo-dna span:nth-child(7), .demo-dna span:nth-child(8) { animation-delay: calc(var(--dna-speed) * -0.45); }
.demo-dna span:nth-child(9), .demo-dna span:nth-child(10) { animation-delay: calc(var(--dna-speed) * -0.60); }

@keyframes ddna-t {
  0%,100% { transform: translateY(0) scale(1); opacity: 1; filter: brightness(1.2); }
  50% { transform: translateY(var(--dna-height)) scale(0.65); opacity: 0.4; filter: brightness(0.7); }
}
@keyframes ddna-b {
  0%,100% { transform: translateY(var(--dna-height)) scale(0.65); opacity: 0.4; filter: brightness(0.7); }
  50% { transform: translateY(0) scale(1); opacity: 1; filter: brightness(1.2); }
}`,
	},
	{
		id: "15",
		name: "Atom Orbit",
		category: "spinners",
		tags: ["3D-spatial","physics"],
		html: "<div class=\"demo-aorbit\"><div class=\"demo-aorbit__nucleus\"></div><div class=\"demo-aorbit__ring demo-aorbit__ring--1\"><div class=\"demo-aorbit__electron\"></div></div><div class=\"demo-aorbit__ring demo-aorbit__ring--2\"><div class=\"demo-aorbit__electron\"></div></div><div class=\"demo-aorbit__ring demo-aorbit__ring--3\"><div class=\"demo-aorbit__electron\"></div></div></div>",
		css: `.demo-aorbit {
  --atom-size: 40px;
  --atom-color: var(--color-primary);
  --atom-speed: calc(1.2s * var(--loader-speed-scale));

  position: relative;
  width: var(--atom-size);
  height: var(--atom-size);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  perspective: calc(var(--atom-size) * 4);
  transform-style: preserve-3d;
}
.demo-aorbit__nucleus {
  width: calc(var(--atom-size) * 0.18);
  height: calc(var(--atom-size) * 0.18);
  background: var(--atom-color);
  border-radius: 50%;
  box-shadow: 0 0 calc(var(--atom-size) * 0.12) var(--atom-color);
  z-index: 2;
  transform: translateZ(0);
}
.demo-aorbit__ring {
  position: absolute;
  inset: 0;
  border: calc(var(--atom-size) * 0.035) solid rgba(127,119,221,0.45);
  border-color: color-mix(in srgb, var(--atom-color) 45%, transparent);
  border-radius: 50%;
  box-sizing: border-box;
  transform-style: preserve-3d;
}
.demo-aorbit__ring--1 { transform: rotateX(70deg) rotateY(15deg); }
.demo-aorbit__ring--2 { transform: rotateX(70deg) rotateY(135deg); }
.demo-aorbit__ring--3 { transform: rotateX(70deg) rotateY(255deg); }

.demo-aorbit__electron {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  animation: daorbit-spin var(--atom-speed) linear var(--loader-cycles);
  transform-style: preserve-3d;
}
.demo-aorbit__electron::before {
  content: '';
  position: absolute;
  top: calc(var(--atom-size) * -0.05);
  left: calc(50% - calc(var(--atom-size) * 0.05));
  width: calc(var(--atom-size) * 0.1);
  height: calc(var(--atom-size) * 0.1);
  background: var(--atom-color);
  border-radius: 50%;
  box-shadow: 0 0 calc(var(--atom-size) * 0.08) var(--atom-color);
  box-sizing: border-box;
}
.demo-aorbit__ring--1 .demo-aorbit__electron { animation-delay: 0s; }
.demo-aorbit__ring--2 .demo-aorbit__electron { animation-delay: calc(var(--atom-speed) * -0.33); }
.demo-aorbit__ring--3 .demo-aorbit__electron { animation-delay: calc(var(--atom-speed) * -0.66); }

@keyframes daorbit-spin { to { transform: rotateZ(360deg); } }`,
	},
	{
		id: "16",
		name: "Sonar Ripple",
		category: "special",
		tags: ["scale","concentric-waves"],
		html: "<div class=\"demo-sonar\"><span></span><span></span><span></span></div>",
		css: `.demo-sonar { position: relative; width: 32px; height: 32px; }
.demo-sonar::before { content: ''; position: absolute; top: 50%; left: 50%; width: 25%; height: 25%; background: var(--color-info); border-radius: 50%; transform: translate(-50%, -50%); }
.demo-sonar span { position: absolute; inset: 0; border-radius: 50%; border: 1.5px solid var(--color-info); opacity: 0; animation: dsonar 1.6s linear var(--loader-cycles); }
.demo-sonar span:nth-child(2) { animation-delay: -.53s; }
.demo-sonar span:nth-child(3) { animation-delay: -1.06s; }
@keyframes dsonar { 0%{transform:scale(0.25);opacity:1} 100%{transform:scale(1.5);opacity:0} }`,
	},
	{
		id: "17",
		name: "Honeycomb Pulse",
		category: "special",
		tags: ["clip-path","grid-lattice"],
		html: "<div class=\"demo-honeycomb\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-honeycomb { position: relative; width: 38px; height: 38px; --dh-w: 10.6px; --dh-h: 12.1px; --dh-dy-l: 10.6px; --dh-dy-s: 5.3px; --dh-dx: 9.1px; }
.demo-honeycomb span { position: absolute; width: var(--dh-w); height: var(--dh-h); background: var(--color-warning); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); animation: dhoney 1.5s ease-in-out var(--loader-cycles); }
.demo-honeycomb span:nth-child(1) { top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: 0s; }
.demo-honeycomb span:nth-child(2) { top: calc(50% - var(--dh-dy-l)); left: 50%; transform: translate(-50%, -50%); animation-delay: calc(-0.5s * var(--loader-speed-scale)); }
.demo-honeycomb span:nth-child(3) { top: calc(50% - var(--dh-dy-s)); left: calc(50% + var(--dh-dx)); transform: translate(-50%, -50%); animation-delay: calc(-0.5s * var(--loader-speed-scale)); }
.demo-honeycomb span:nth-child(4) { top: calc(50% + var(--dh-dy-s)); left: calc(50% + var(--dh-dx)); transform: translate(-50%, -50%); animation-delay: calc(-0.5s * var(--loader-speed-scale)); }
.demo-honeycomb span:nth-child(5) { top: calc(50% + var(--dh-dy-l)); left: 50%; transform: translate(-50%, -50%); animation-delay: calc(-0.5s * var(--loader-speed-scale)); }
.demo-honeycomb span:nth-child(6) { top: calc(50% + var(--dh-dy-s)); left: calc(50% - var(--dh-dx)); transform: translate(-50%, -50%); animation-delay: calc(-0.5s * var(--loader-speed-scale)); }
.demo-honeycomb span:nth-child(7) { top: calc(50% - var(--dh-dy-s)); left: calc(50% - var(--dh-dx)); transform: translate(-50%, -50%); animation-delay: calc(-0.5s * var(--loader-speed-scale)); }
@keyframes dhoney { 0%,100%{transform:translate(-50%,-50%) scale(0.7);opacity:0.3} 50%{transform:translate(-50%,-50%) scale(1.05);opacity:1} }`,
	},
	{
		id: "18",
		name: "Matrix Fade",
		category: "special",
		tags: ["delay-grid","opacity"],
		html: "<div class=\"demo-matrix\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-matrix { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; width: 32px; height: 32px; }
.demo-matrix span { background: var(--color-primary); border-radius: 50%; animation: dmatrix 1.2s ease-in-out var(--loader-cycles); }
.demo-matrix span:nth-child(1) { animation-delay: 0s; }
.demo-matrix span:nth-child(2), .demo-matrix span:nth-child(4) { animation-delay: calc(-0.18s * var(--loader-speed-scale)); }
.demo-matrix span:nth-child(3), .demo-matrix span:nth-child(5), .demo-matrix span:nth-child(7) { animation-delay: calc(-0.36s * var(--loader-speed-scale)); }
.demo-matrix span:nth-child(6), .demo-matrix span:nth-child(8) { animation-delay: calc(-0.54s * var(--loader-speed-scale)); }
.demo-matrix span:nth-child(9) { animation-delay: calc(-0.72s * var(--loader-speed-scale)); }
@keyframes dmatrix { 0%,100%{transform:scale(0.6);opacity:0.25} 50%{transform:scale(1);opacity:1} }`,
	},
	{
		id: "19",
		name: "Wandering Cubes",
		category: "special",
		tags: ["offset-track","rotation"],
		html: "<div class=\"demo-wandering\"><span></span><span></span></div>",
		css: `.demo-wandering { position: relative; width: 32px; height: 32px; --dw-size: 9px; }
.demo-wandering span { position: absolute; top: 0; left: 0; width: var(--dw-size); height: var(--dw-size); background: var(--color-success); animation: dwander 1.8s ease-in-out var(--loader-cycles); }
.demo-wandering span:nth-child(2) { animation-delay: -.9s; }
@keyframes dwander {
  0% { transform: translate(0,0) rotate(0deg); }
  25% { transform: translate(23px,0) rotate(-90deg) scale(0.55); }
  50% { transform: translate(23px,23px) rotate(-180deg); }
  75% { transform: translate(0,23px) rotate(-270deg) scale(0.55); }
  100% { transform: translate(0,0) rotate(-360deg); }
}`,
	},
	{
		id: "20",
		name: "Chromatic Spinner",
		category: "spinners",
		tags: ["rainbow-conic","mask"],
		html: "<div class=\"demo-chromatic\"></div>",
		css: `.demo-chromatic {
  width: 32px; height: 32px; border-radius: 50%;
  background: conic-gradient(#e11d48, #ea580c, #eab308, #16a34a, #2563eb, #9333ea, #e11d48);
  -webkit-mask: radial-gradient(farthest-side, transparent 28px, #000 29px);
  mask: radial-gradient(farthest-side, transparent calc(100% - 3.5px - 0.5px), #000 calc(100% - 3.5px));
  animation: spin 1s linear var(--loader-cycles);
}`,
	},
	{
		id: "21",
		name: "Mesh Gears",
		category: "special",
		tags: ["mechanical-teeth","gears"],
		html: "<div class=\"demo-gears\"><div class=\"demo-dgear demo-dgear--large\"><span></span><span></span><span></span><span></span></div><div class=\"demo-dgear demo-dgear--small\"><span></span><span></span><span></span><span></span></div></div>",
		css: `.demo-gears { position: relative; width: 50px; height: 36px; }
.demo-dgear { position: absolute; border-radius: 50%; }
.demo-dgear span { position: absolute; background: #BA7517; width: 4px; height: 100%; left: calc(50% - 2px); }
.demo-dgear span:nth-child(1) { transform: rotate(0deg); }
.demo-dgear span:nth-child(2) { transform: rotate(45deg); }
.demo-dgear span:nth-child(3) { transform: rotate(90deg); }
.demo-dgear span:nth-child(4) { transform: rotate(135deg); }
.demo-dgear--large { width: 32px; height: 32px; animation: spin 3s linear var(--loader-cycles); }
.demo-dgear--large::after { content: ''; position: absolute; inset: 3px; background: var(--surface); border: 3px solid #BA7517; border-radius: 50%; }
.demo-dgear--small { width: 22px; height: 22px; bottom: 0; right: 0; animation: dgear-r calc(3s * 22 / 32 * var(--loader-speed-scale)) linear var(--loader-cycles); }
.demo-dgear--small::after { content: ''; position: absolute; inset: 2.2px; background: var(--surface); border: 2.2px solid #BA7517; border-radius: 50%; }
@keyframes dgear-r { from{transform:rotate(22deg)} to{transform:rotate(-338deg)} }`,
	},
	{
		id: "22",
		name: "Particle Vortex",
		category: "special",
		tags: ["sinusoidal","spiral-sweep"],
		html: "<div class=\"demo-vortex\"><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-vortex { position: relative; width: 36px; height: 36px; }
.demo-vortex span { position: absolute; top: 50%; left: 50%; width: 4px; height: 4px; background: var(--color-danger); border-radius: 50%; opacity: 0; animation: dvortex 2s var(--loader-cycles); }
.demo-vortex span:nth-child(1) { animation-delay: 0s; }
.demo-vortex span:nth-child(2) { animation-delay: calc(-0.33s * var(--loader-speed-scale)); }
.demo-vortex span:nth-child(3) { animation-delay: calc(-0.66s * var(--loader-speed-scale)); }
.demo-vortex span:nth-child(4) { animation-delay: calc(-1s * var(--loader-speed-scale)); }
.demo-vortex span:nth-child(5) { animation-delay: calc(-1.33s * var(--loader-speed-scale)); }
.demo-vortex span:nth-child(6) { animation-delay: calc(-1.66s * var(--loader-speed-scale)); }
@keyframes dvortex {
  0% { transform: rotate(0deg) translate(0,0) scale(0.1); opacity:0; }
  15% { transform: rotate(90deg) translate(16px,0) scale(1); opacity:1; }
  80% { opacity: 0.8; }
  100% { transform: rotate(540deg) translate(0,0) scale(0.1); opacity:0; }
}`,
	},
	{
		id: "23",
		name: "Hourglass",
		category: "special",
		tags: ["drips-sand","gravity-flip"],
		html: "<div class=\"demo-hourglass\"><div class=\"demo-hour-top\"></div><div class=\"demo-hour-stream\"></div><div class=\"demo-hour-bottom\"></div></div>",
		css: `.demo-hourglass {
  display: inline-flex; flex-direction: column; align-items: center; justify-content: center;
  width: 32px; height: 32px; position: relative;
  animation: dhour-f 3s ease-in-out var(--loader-cycles);
  background: 
    linear-gradient(90deg, var(--color-primary) 1.2px, transparent 1.2px) no-repeat 15% center / 1.2px 27px,
    linear-gradient(270deg, var(--color-primary) 1.2px, transparent 1.2px) no-repeat 85% center / 1.2px 27px;
}
.demo-hourglass::before, .demo-hourglass::after { content: ''; position: absolute; left: 10%; width: 80%; height: 2.5px; background: var(--color-primary); border-radius: 1.2px; }
.demo-hourglass::before { top: 0; }
.demo-hourglass::after { bottom: 0; }
.demo-hour-top, .demo-hour-bottom { position: absolute; left: 22%; width: 56%; height: 12.2px; border: 1.5px solid var(--color-primary); background: color-mix(in srgb, var(--color-primary) 6%, transparent); overflow: hidden; }
.demo-hour-top { top: 2.5px; border-bottom: none; border-bottom-left-radius: 50% 100%; border-bottom-right-radius: 50% 100%; }
.demo-hour-top::before { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; background: var(--color-primary); transform-origin: bottom center; animation: dhour-d 3s ease-in-out var(--loader-cycles); }
.demo-hour-bottom { bottom: 2.5px; border-top: none; border-top-left-radius: 50% 100%; border-top-right-radius: 50% 100%; }
.demo-hour-bottom::before { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; background: var(--color-primary); transform-origin: bottom center; animation: dhour-fill 3s ease-in-out var(--loader-cycles); }
.demo-hour-stream { position: absolute; top: 11.2px; bottom: 11.2px; left: calc(50% - 0.8px); width: 1.6px; background: linear-gradient(to bottom, transparent, var(--color-primary) 20%, var(--color-primary) 80%, transparent); animation: dhour-drip 3s linear var(--loader-cycles); }
@keyframes dhour-f { 0%, 82% { transform: rotate(0deg); } 92%, 100% { transform: rotate(180deg); } }
@keyframes dhour-d { 0% { transform: scaleY(1); } 72%, 100% { transform: scaleY(0); } }
@keyframes dhour-fill { 0%, 8% { transform: scaleY(0); } 80%, 100% { transform: scaleY(1); } }
@keyframes dhour-drip {
  0% { opacity: 0; transform: scaleY(0); transform-origin: top center; }
  4%, 72% { opacity: 1; transform: scaleY(1); transform-origin: top center; }
  75%, 100% { opacity: 0; transform: scaleY(0); transform-origin: bottom center; }
}`,
	},
	{
		id: "24",
		name: "Page Flip",
		category: "3d",
		tags: ["3D-paper","perspective"],
		html: "<div class=\"demo-pflip\"><span></span><span></span><span></span></div>",
		css: `.demo-pflip { position: relative; width: 32px; height: 22px; perspective: 100px; }
.demo-pflip::before { content: ''; position: absolute; inset: 0; border: 1.5px solid var(--color-success); border-radius: 2px; opacity: 0.28; }
.demo-pflip::after { content: ''; position: absolute; top: 0; left: 50%; width: 1.5px; height: 100%; background: var(--color-success); transform: translateX(-50%); }
.demo-pflip span { position: absolute; top: 0; left: 50%; width: 50%; height: 100%; background: var(--color-success); transform-origin: left center; opacity: 0; animation: dpflip 1.8s ease-in-out var(--loader-cycles); border-top-right-radius: 2px; border-bottom-right-radius: 2px; }
.demo-pflip span:nth-child(1) { animation-delay: 0s; }
.demo-pflip span:nth-child(2) { animation-delay: calc(-0.6s * var(--loader-speed-scale)); }
.demo-pflip span:nth-child(3) { animation-delay: calc(-1.2s * var(--loader-speed-scale)); }
@keyframes dpflip { 0%{transform:rotateY(0deg);opacity:0} 10%{transform:rotateY(0deg);opacity:1} 80%{transform:rotateY(-180deg);opacity:1} 90%,100%{transform:rotateY(-180deg);opacity:0} }`,
	},
	{
		id: "25",
		name: "Squishy Ball",
		category: "special",
		tags: ["bounce-squash","shadows"],
		html: "<div class=\"demo-squish\"><div class=\"demo-squish-sphere\"></div><div class=\"demo-squish-shadow\"></div></div>",
		css: `.demo-squish { position: relative; width: 22px; height: 42px; }
.demo-squish-sphere { position: absolute; top: 0; left: 0; width: 100%; height: 22px; background: var(--color-warning); border-radius: 50%; transform-origin: bottom center; animation: dsquish-b 1.1s var(--loader-cycles); }
.demo-squish-shadow { position: absolute; bottom: 0; left: 10%; width: 80%; height: 3px; background: var(--color-warning); border-radius: 50%; opacity: 0.15; animation: dsquish-s 1.1s var(--loader-cycles); }
@keyframes dsquish-b {
  0%,100%{transform:translateY(0) scale(1)}
  44%{transform:translateY(20px) scaleX(0.88) scaleY(1.12)}
  50%{transform:translateY(24px) scaleX(1.3) scaleY(0.68)}
  56%{transform:translateY(20px) scaleX(0.88) scaleY(1.12)}
  78%{transform:translateY(0) scale(1)}
}
@keyframes dsquish-s {
  0%,100%{transform:scale(1.6);opacity:0.12}
  44%{transform:scale(0.95);opacity:0.45}
  50%{transform:scale(0.55);opacity:0.72}
  56%{transform:scale(0.95);opacity:0.45}
  78%{transform:scale(1.6);opacity:0.12}
}`,
	},
	{
		id: "26",
		name: "Warp Field",
		category: "special",
		tags: ["radial-vector","translation"],
		html: "<div class=\"demo-warp\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-warp { position: relative; width: 36px; height: 36px; }
.demo-warp span { position: absolute; top: 50%; left: 50%; width: 3px; height: 3px; margin-top: -1.5px; margin-left: -1.5px; background: var(--color-danger); border-radius: 50%; opacity: 0; }
.demo-warp span:nth-child(1) { transform: rotate(0deg); animation: dwarp-s0 1.4s var(--loader-cycles) linear; }
.demo-warp span:nth-child(2) { transform: rotate(45deg); animation: dwarp-s45 1.4s var(--loader-cycles) linear; animation-delay: calc(-0.35s * var(--loader-speed-scale)); }
.demo-warp span:nth-child(3) { transform: rotate(90deg); animation: dwarp-s90 1.4s var(--loader-cycles) linear; animation-delay: calc(-0.7s * var(--loader-speed-scale)); }
.demo-warp span:nth-child(4) { transform: rotate(135deg); animation: dwarp-s135 1.4s var(--loader-cycles) linear; animation-delay: calc(-1.05s * var(--loader-speed-scale)); }
.demo-warp span:nth-child(5) { transform: rotate(180deg); animation: dwarp-s180 1.4s var(--loader-cycles) linear; animation-delay: calc(-0.175s * var(--loader-speed-scale)); }
.demo-warp span:nth-child(6) { transform: rotate(225deg); animation: dwarp-s225 1.4s var(--loader-cycles) linear; animation-delay: calc(-0.525s * var(--loader-speed-scale)); }
.demo-warp span:nth-child(7) { transform: rotate(270deg); animation: dwarp-s270 1.4s var(--loader-cycles) linear; animation-delay: calc(-0.875s * var(--loader-speed-scale)); }
.demo-warp span:nth-child(8) { transform: rotate(315deg); animation: dwarp-s315 1.4s var(--loader-cycles) linear; animation-delay: calc(-1.225s * var(--loader-speed-scale)); }
@keyframes dwarp-s0   { 0%{transform:rotate(0deg) translateY(0) scale(0.1);opacity:0} 12%{opacity:1} 100%{transform:rotate(0deg) translateY(-18px) scale(1.6);opacity:0} }
@keyframes dwarp-s45  { 0%{transform:rotate(45deg) translateY(0) scale(0.1);opacity:0} 12%{opacity:1} 100%{transform:rotate(45deg) translateY(-18px) scale(1.6);opacity:0} }
@keyframes dwarp-s90  { 0%{transform:rotate(90deg) translateY(0) scale(0.1);opacity:0} 12%{opacity:1} 100%{transform:rotate(90deg) translateY(-18px) scale(1.6);opacity:0} }
@keyframes dwarp-s135 { 0%{transform:rotate(135deg) translateY(0) scale(0.1);opacity:0} 12%{opacity:1} 100%{transform:rotate(135deg) translateY(-18px) scale(1.6);opacity:0} }
@keyframes dwarp-s180 { 0%{transform:rotate(180deg) translateY(0) scale(0.1);opacity:0} 12%{opacity:1} 100%{transform:rotate(180deg) translateY(-18px) scale(1.6);opacity:0} }
@keyframes dwarp-s225 { 0%{transform:rotate(225deg) translateY(0) scale(0.1);opacity:0} 12%{opacity:1} 100%{transform:rotate(225deg) translateY(-18px) scale(1.6);opacity:0} }
@keyframes dwarp-s270 { 0%{transform:rotate(270deg) translateY(0) scale(0.1);opacity:0} 12%{opacity:1} 100%{transform:rotate(270deg) translateY(-18px) scale(1.6);opacity:0} }
@keyframes dwarp-s315 { 0%{transform:rotate(315deg) translateY(0) scale(0.1);opacity:0} 12%{opacity:1} 100%{transform:rotate(315deg) translateY(-18px) scale(1.6);opacity:0} }`,
	},
	{
		id: "27",
		name: "Radar Sweep",
		category: "special",
		tags: ["conic-gradient","sync-flash"],
		html: "<div class=\"demo-radar\"><div class=\"demo-radar-line\"></div><div class=\"demo-radar-blip demo-radar-blip--1\"></div><div class=\"demo-radar-blip demo-radar-blip--2\"></div></div>",
		css: `.demo-radar {
  position: relative; width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid var(--color-info);
  background: rgba(55,138,221,0.04);
}
.demo-radar-line {
  position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(from 0deg, var(--color-info) 0%, rgba(55,138,221,0.15) 30%, transparent 45%, transparent 100%);
  animation: spin calc(2.2s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-radar-blip { position: absolute; width: 3.6px; height: 3.6px; background: var(--color-info); border-radius: 50%; opacity: 0; }
.demo-radar-blip--1 { top: 22%; left: 68%; animation: dradar-f1 calc(2.2s * var(--loader-speed-scale)) linear var(--loader-cycles); }
.demo-radar-blip--2 { top: 68%; left: 22%; animation: dradar-f2 calc(2.2s * var(--loader-speed-scale)) linear var(--loader-cycles); }
@keyframes dradar-f1 { 0%,8%{opacity:0;transform:scale(0.6)} 14%{opacity:1;transform:scale(1.4);filter:drop-shadow(0 0 2px var(--color-info))} 30%{opacity:0.35;transform:scale(0.9)} 48%,100%{opacity:0;transform:scale(0.6)} }
@keyframes dradar-f2 { 0%,58%{opacity:0;transform:scale(0.6)} 64%{opacity:1;transform:scale(1.4);filter:drop-shadow(0 0 2px var(--color-info))} 80%{opacity:0.35;transform:scale(0.9)} 96%,100%{opacity:0;transform:scale(0.6)} }`,
	},
	{
		id: "28",
		name: "Matrix Rain",
		category: "waves",
		tags: ["waterfall","glowing-fall"],
		html: "<div class=\"demo-mrain\"><span></span><span></span><span></span><span></span></div>",
		css: `.demo-mrain { display: inline-flex; justify-content: space-between; width: 32px; height: 28px; }
.demo-mrain span { display: block; width: 3px; height: 100%; position: relative; }
.demo-mrain span::before {
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
  border-radius: 50%; background: var(--color-success); box-shadow: 0 0 4px var(--color-success); opacity: 0;
}
.demo-mrain span:nth-child(1)::before { animation: dmrain calc(1.2s * var(--loader-speed-scale)) linear var(--loader-cycles); }
.demo-mrain span:nth-child(2)::before { animation: dmrain calc(.96s * var(--loader-speed-scale)) linear var(--loader-cycles); animation-delay: calc(-0.3s * var(--loader-speed-scale)); }
.demo-mrain span:nth-child(3)::before { animation: dmrain calc(1.44s * var(--loader-speed-scale)) linear var(--loader-cycles); animation-delay: calc(-0.66s * var(--loader-speed-scale)); }
.demo-mrain span:nth-child(4)::before { animation: dmrain calc(1.14s * var(--loader-speed-scale)) linear var(--loader-cycles); animation-delay: calc(-1.02s * var(--loader-speed-scale)); }
@keyframes dmrain { 0%{transform:translateY(-6px);opacity:0} 15%{opacity:1} 85%{opacity:1} 100%{transform:translateY(28px);opacity:0} }`,
	},
	{
		id: "29",
		name: "Gyro Spheres",
		category: "3d",
		tags: ["concentric-3D","gyroscope"],
		html: "<div class=\"demo-dgyro\"><div class=\"demo-dgyro-ring demo-dgyro-ring--outer\"></div><div class=\"demo-dgyro-ring demo-dgyro-ring--middle\"></div><div class=\"demo-dgyro-ring demo-dgyro-ring--inner\"></div><div class=\"demo-dgyro-nucleus\"></div></div>",
		css: `.demo-dgyro { position: relative; width: 36px; height: 36px; perspective: 150px; transform-style: preserve-3d; }
.demo-dgyro-ring { position: absolute; border-radius: 50%; border: 1.5px solid var(--color-warning); transform-style: preserve-3d; }
.demo-dgyro-ring--outer { inset: 0; animation: dgyro-o calc(2.4s * var(--loader-speed-scale)) linear var(--loader-cycles); }
.demo-dgyro-ring--middle { inset: 15%; animation: dgyro-m calc(2.4s * var(--loader-speed-scale)) linear var(--loader-cycles); }
.demo-dgyro-ring--inner { inset: 30%; animation: dgyro-i calc(2.4s * var(--loader-speed-scale)) linear var(--loader-cycles); }
.demo-dgyro-nucleus { position: absolute; top: 50%; left: 50%; width: 14%; height: 14%; background: var(--color-warning); border-radius: 50%; transform: translate(-50%, -50%); }
@keyframes dgyro-o { 0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100%{transform:rotateX(360deg) rotateY(180deg) rotateZ(360deg)} }
@keyframes dgyro-m { 0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100%{transform:rotateX(180deg) rotateY(360deg) rotateZ(180deg)} }
@keyframes dgyro-i { 0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100%{transform:rotateX(360deg) rotateY(360deg) rotateZ(-360deg)} }`,
	},
	{
		id: "30",
		name: "Heartbeat",
		category: "special",
		tags: ["EKG-double-pulse","vital"],
		html: "<div class=\"demo-hbeat\"></div>",
		css: `.demo-hbeat {
  position: relative; width: 22px; height: 22px; background: var(--color-danger); transform: rotate(-45deg);
  animation: dhbeat calc(1.2s * var(--loader-speed-scale)) var(--loader-cycles);
}
.demo-hbeat::before, .demo-hbeat::after { content: ''; position: absolute; width: 100%; height: 100%; background: inherit; border-radius: 50%; }
.demo-hbeat::before { top: -50%; left: 0; }
.demo-hbeat::after { top: 0; left: -50%; }
@keyframes dhbeat {
  0%, 48%, 100% { transform: rotate(-45deg) scale(0.95); }
  12% { transform: rotate(-45deg) scale(1.26); }
  22% { transform: rotate(-45deg) scale(1.08); }
  32% { transform: rotate(-45deg) scale(1.38); }
}`,
	},
	{
		id: "31",
		name: "Pendulum Wave",
		category: "waves",
		tags: ["phase-drift","horizontal"],
		html: "<div class=\"demo-pwave\"><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-pwave { display: inline-flex; flex-direction: column; justify-content: space-between; width: 32px; height: 32px; }
.demo-pwave span { display: block; width: 5px; height: 5px; border-radius: 50%; background: var(--color-primary); }
.demo-pwave span:nth-child(1) { animation: dpwave-s calc(1.5s * 0.8 * var(--loader-speed-scale)) ease-in-out var(--loader-cycles) alternate; }
.demo-pwave span:nth-child(2) { animation: dpwave-s calc(1.5s * 0.9 * var(--loader-speed-scale)) ease-in-out var(--loader-cycles) alternate; }
.demo-pwave span:nth-child(3) { animation: dpwave-s calc(1.5s * 1.0 * var(--loader-speed-scale)) ease-in-out var(--loader-cycles) alternate; }
.demo-pwave span:nth-child(4) { animation: dpwave-s calc(1.5s * 1.1 * var(--loader-speed-scale)) ease-in-out var(--loader-cycles) alternate; }
.demo-pwave span:nth-child(5) { animation: dpwave-s calc(1.5s * 1.2 * var(--loader-speed-scale)) ease-in-out var(--loader-cycles) alternate; }
@keyframes dpwave-s { 0% { transform: translateX(0); } 100% { transform: translateX(27px); } }`,
	},
	{
		id: "32",
		name: "Infinite Loop",
		category: "special",
		tags: ["lemniscate-translation"],
		html: "<div class=\"demo-iloop\"><span></span><span></span><span></span></div>",
		css: `.demo-iloop { width: 32px; height: 16px; position: relative; }
.demo-iloop span {
  position: absolute; top: calc(50% - 2.5px); left: calc(50% - 2.5px);
  width: 5px; height: 5px; border-radius: 50%; background: var(--color-success);
  animation: diloop-p calc(2s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-iloop span:nth-child(1) { animation-delay: 0s; }
.demo-iloop span:nth-child(2) { animation-delay: calc(-0.16s * var(--loader-speed-scale)); opacity: 0.7; }
.demo-iloop span:nth-child(3) { animation-delay: calc(-0.32s * var(--loader-speed-scale)); opacity: 0.4; }
@keyframes diloop-p {
  0% { transform: translate(0, 0); }
  12.5% { transform: translate(9px, -6px); }
  25% { transform: translate(13px, 0); }
  37.5% { transform: translate(9px, 6px); }
  50% { transform: translate(0, 0); }
  62.5% { transform: translate(-9px, -6px); }
  75% { transform: translate(-13px, 0); }
  87.5% { transform: translate(-9px, 6px); }
  100% { transform: translate(0, 0); }
}`,
	},
	{
		id: "33",
		name: "Concentric Rings",
		category: "spinners",
		tags: ["split-arc","counter-rotations"],
		html: "<div class=\"demo-crings\"><span></span><span></span><span></span></div>",
		css: `.demo-crings { width: 32px; height: 32px; position: relative; display: inline-flex; align-items: center; justify-content: center; }
.demo-crings span { position: absolute; border-radius: 50%; border: 1.3px solid transparent; }
.demo-crings span:nth-child(1) {
  width: 100%; height: 100%; border-top-color: var(--color-warning); border-bottom-color: var(--color-warning);
  animation: ospin calc(2s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-crings span:nth-child(2) {
  width: 68%; height: 68%; border-left-color: var(--color-warning); border-right-color: var(--color-warning);
  animation: ospin-ccw calc(1.6s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-crings span:nth-child(3) {
  width: 36%; height: 36%; border-top-color: var(--color-warning); border-bottom-color: var(--color-warning);
  animation: ospin calc(1.2s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
@keyframes ospin-ccw { to { transform: rotate(-360deg); } }`,
	},
	{
		id: "34",
		name: "Waveform Audio",
		category: "waves",
		tags: ["symmetrical-sound","vertical-scale"],
		html: "<div class=\"demo-waudio\"><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-waudio { display: inline-flex; align-items: center; justify-content: space-between; width: 32px; height: 22px; }
.demo-waudio span {
  display: block; width: 4px; height: 100%; border-radius: 2px;
  background: var(--color-info); transform-origin: center center;
  animation: dwaudio-p calc(1.2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-waudio span:nth-child(1) { animation-delay: calc(-1s * var(--loader-speed-scale)); }
.demo-waudio span:nth-child(2) { animation-delay: calc(-0.8s * var(--loader-speed-scale)); }
.demo-waudio span:nth-child(3) { animation-delay: calc(-0.6s * var(--loader-speed-scale)); }
.demo-waudio span:nth-child(4) { animation-delay: calc(-0.8s * var(--loader-speed-scale)); }
.demo-waudio span:nth-child(5) { animation-delay: calc(-1s * var(--loader-speed-scale)); }
@keyframes dwaudio-p { 0%,100%{transform:scaleY(0.25)} 50%{transform:scaleY(1.0)} }`,
	},
	{
		id: "35",
		name: "Breathing Ring",
		category: "spinners",
		tags: ["sinusoidal-scale","glow"],
		html: "<div class=\"demo-bring\"></div>",
		css: `.demo-bring {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2.5px solid var(--color-primary); animation: dbring-p calc(2.2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
@keyframes dbring-p {
  0%, 100% { transform: scale(0.85); box-shadow: 0 0 0 0 rgba(127,119,221,0.4); opacity: 0.8; }
  50% { transform: scale(1.05); box-shadow: 0 0 12px 4px rgba(127,119,221,0); opacity: 1; }
}`,
	},
	{
		id: "36",
		name: "Liquid Drop",
		category: "special",
		tags: ["gravity-fall","ripple"],
		html: "<div class=\"demo-ldrop\"><div class=\"demo-ldrop-spout\"></div><div class=\"demo-ldrop-drip\"></div><div class=\"demo-ldrop-ripple\"></div></div>",
		css: `.demo-ldrop { width: 32px; height: 38px; position: relative; }
.demo-ldrop-spout {
  position: absolute; top: 0; left: calc(50% - 4px); width: 8px; height: 4px;
  background: var(--color-primary); border-radius: 0 0 2px 2px; opacity: 0.85;
}
.demo-ldrop-drip {
  position: absolute; top: 3px; left: calc(50% - 2.5px); width: 5px; height: 5px;
  background: var(--color-primary); border-radius: 50%; transform-origin: bottom center;
  animation: ddrop-f calc(2s * var(--loader-speed-scale)) cubic-bezier(0.4, 0, 0.9, 0.4) var(--loader-cycles);
}
.demo-ldrop-ripple {
  position: absolute; bottom: 0; left: calc(50% - 13px); width: 26px; height: 6px;
  border: 1.3px solid var(--color-primary); border-radius: 50%; transform: scale(0); opacity: 0;
  animation: ddrop-r calc(2s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
@keyframes ddrop-f {
  0% { transform: translateY(0) scale(0); opacity: 0; }
  15% { transform: translateY(0) scale(1); opacity: 1; }
  35% { transform: translateY(0) scale(1) scaleX(0.85) scaleY(1.15); opacity: 1; }
  58% { transform: translateY(26px) scaleX(0.8) scaleY(1.3); opacity: 1; }
  60% { transform: translateY(30px) scaleX(1.6) scaleY(0.4); opacity: 1; }
  64%, 100% { transform: translateY(30px) scale(0); opacity: 0; }
}
@keyframes ddrop-r {
  0%, 59% { transform: scale(0); opacity: 0; }
  60% { transform: scale(0.2); opacity: 1; }
  85% { transform: scale(1.3); opacity: 0.35; }
  96%, 100% { transform: scale(1.6); opacity: 0; }
}`,
	},
	{
		id: "37",
		name: "Hexagon Orbit",
		category: "spinners",
		tags: ["hexagonal-track","trig"],
		html: "<div class=\"demo-horbit\"><span></span><span></span><span></span></div>",
		css: `.demo-horbit { width: 32px; height: 32px; position: relative; }
.demo-horbit::before {
  content: ''; position: absolute; inset: 0; border: 0.8px dashed rgba(239,159,39,0.15);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: ospin-ccw calc(9.6s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-horbit span {
  position: absolute; top: calc(50% - 2.5px); left: calc(50% - 2.5px);
  width: 5px; height: 5px; border-radius: 50%; background: var(--color-warning);
  animation: dhorbit-p calc(2.4s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-horbit span:nth-child(1) { animation-delay: 0s; }
.demo-horbit span:nth-child(2) { animation-delay: calc(-0.288s * var(--loader-speed-scale)); opacity: 0.7; }
.demo-horbit span:nth-child(3) { animation-delay: calc(-0.576s * var(--loader-speed-scale)); opacity: 0.4; }
@keyframes dhorbit-p {
  0%, 100% { transform: translate(13px, 0); }
  16.67% { transform: translate(6.5px, 11.2px); }
  33.33% { transform: translate(-6.5px, 11.2px); }
  50% { transform: translate(-13px, 0); }
  66.67% { transform: translate(-6.5px, -11.2px); }
  83.33% { transform: translate(6.5px, -11.2px); }
}`,
	},
	{
		id: "38",
		name: "Sparkling Stars",
		category: "special",
		tags: ["clip-star","sparkle"],
		html: "<div class=\"demo-sstars\"><span></span><span></span><span></span></div>",
		css: `.demo-sstars { width: 32px; height: 32px; position: relative; }
.demo-sstars span {
  position: absolute; background: var(--color-warning);
  clip-path: polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%);
  opacity: 0;
}
.demo-sstars span:nth-child(1) {
  top: 10%; left: 10%; width: 45%; height: 45%;
  animation: dstar-s calc(1.6s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-sstars span:nth-child(2) {
  bottom: 12%; right: 12%; width: 48%; height: 48%;
  animation: dstar-s calc(1.6s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles); animation-delay: calc(-0.53s * var(--loader-speed-scale));
}
.demo-sstars span:nth-child(3) {
  top: 20%; right: 15%; width: 32%; height: 32%;
  animation: dstar-s calc(1.6s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles); animation-delay: calc(-1.06s * var(--loader-speed-scale));
}
@keyframes dstar-s {
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(90deg); opacity: 1; }
  100% { transform: scale(0) rotate(180deg); opacity: 0; }
}`,
	},
	{
		id: "39",
		name: "Snake Chase",
		category: "spinners",
		tags: ["square-track","delay-trailing"],
		html: "<div class=\"demo-schase\"><span></span><span></span><span></span><span></span></div>",
		css: `.demo-schase { width: 32px; height: 32px; position: relative; }
.demo-schase::before {
  content: ''; position: absolute; inset: 3px;
  border: 0.8px dashed rgba(29,158,117,0.12); border-radius: 5px;
}
.demo-schase span {
  position: absolute; top: 0; left: 0; width: 5px; height: 5px;
  border-radius: 50%; background: var(--color-success);
  animation: dschase-p calc(1.6s * var(--loader-speed-scale)) cubic-bezier(0.25, 1, 0.5, 1) var(--loader-cycles);
}
.demo-schase span:nth-child(1) { animation-delay: 0s; }
.demo-schase span:nth-child(2) { animation-delay: calc(-0.096s * var(--loader-speed-scale)); opacity: 0.75; }
.demo-schase span:nth-child(3) { animation-delay: calc(-0.192s * var(--loader-speed-scale)); opacity: 0.5; }
.demo-schase span:nth-child(4) { animation-delay: calc(-0.288s * var(--loader-speed-scale)); opacity: 0.25; }
@keyframes dschase-p {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(27px, 0); }
  50% { transform: translate(27px, 27px); }
  75% { transform: translate(0, 27px); }
}`,
	},
	{
		id: "40",
		name: "Solar Eclipse",
		category: "special",
		tags: ["corona-gradient","mask"],
		html: "<div class=\"demo-seclipse\"><div class=\"demo-seclipse-corona\"></div><div class=\"demo-seclipse-occluder\"></div></div>",
		css: `.demo-seclipse { width: 32px; height: 32px; position: relative; }
.demo-seclipse-corona {
  position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(from 0deg, var(--color-warning) 0%, rgba(239,159,39,0.4) 25%, var(--color-warning) 50%, rgba(239,159,39,0.2) 75%, var(--color-warning) 100%);
  filter: blur(3.8px); animation: ospin calc(2.5s * var(--loader-speed-scale)) linear var(--loader-cycles), declipse-f calc(2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles) alternate;
}
.demo-seclipse-occluder {
  position: absolute; inset: 3.8px; border-radius: 50%;
  background: var(--surface); border: 0.8px solid rgba(239,159,39,0.25);
  box-shadow: inset 0 0 5px rgba(0,0,0,0.4); animation: declipse-p calc(2.5s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles) alternate;
}
@keyframes declipse-f { from{filter:blur(3.8px) opacity(0.85)} to{filter:blur(4.5px) opacity(1)} }
@keyframes declipse-p { from{transform:scale(1)} to{transform:scale(0.86)} }`,
	},
	{
		id: "41",
		name: "Pulsing Grid",
		category: "waves",
		tags: ["radial-delay","grid-center"],
		html: "<div class=\"demo-pgrid\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-pgrid {
  display: inline-grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr);
  gap: 3px; width: 32px; height: 32px;
}
.demo-pgrid span {
  display: block; width: 100%; height: 100%; border-radius: 50%; background: var(--color-primary);
  animation: dpgrid-p calc(1.2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-pgrid span:nth-child(5) { animation-delay: 0s; }
.demo-pgrid span:nth-child(2), .demo-pgrid span:nth-child(4),
.demo-pgrid span:nth-child(6), .demo-pgrid span:nth-child(8) { animation-delay: calc(-0.3s * var(--loader-speed-scale)); }
.demo-pgrid span:nth-child(1), .demo-pgrid span:nth-child(3),
.demo-pgrid span:nth-child(7), .demo-pgrid span:nth-child(9) { animation-delay: calc(-0.6s * var(--loader-speed-scale)); }
@keyframes dpgrid-p { 0%,100%{transform:scale(0.45);opacity:0.35} 50%{transform:scale(1);opacity:1} }`,
	},
	{
		id: "42",
		name: "Helix Tunnel",
		category: "spinners",
		tags: ["depth-rotation","concentric"],
		html: "<div class=\"demo-htunnel\"><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-htunnel {
  width: 32px; height: 32px; position: relative;
  display: inline-flex; align-items: center; justify-content: center;
}
.demo-htunnel span {
  position: absolute; border-radius: 50%;
  border: 1.3px solid transparent; border-top-color: var(--color-info);
  animation: ospin calc(1.8s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-htunnel span:nth-child(1) { width: 100%; height: 100%; animation-delay: 0s; opacity: 1; }
.demo-htunnel span:nth-child(2) { width: 80%; height: 80%; animation-delay: calc(-0.27s * var(--loader-speed-scale)); opacity: 0.8; }
.demo-htunnel span:nth-child(3) { width: 60%; height: 60%; animation-delay: calc(-0.54s * var(--loader-speed-scale)); opacity: 0.6; }
.demo-htunnel span:nth-child(4) { width: 40%; height: 40%; animation-delay: calc(-0.81s * var(--loader-speed-scale)); opacity: 0.4; }
.demo-htunnel span:nth-child(5) { width: 20%; height: 20%; animation-delay: calc(-1.08s * var(--loader-speed-scale)); opacity: 0.2; }`,
	},
	{
		id: "43",
		name: "Elastic Line",
		category: "waves",
		tags: ["asymmetric-morph","sweep"],
		html: "<div class=\"demo-eline\"></div>",
		css: `.demo-eline {
  width: 32px; height: 3px; position: relative;
  background: rgba(226,75,74,0.12); border-radius: 1.5px; overflow: hidden;
}
.demo-eline::before {
  content: ''; position: absolute; top: 0; height: 100%; background: var(--color-danger);
  border-radius: inherit; animation: delastic-s calc(1.4s * var(--loader-speed-scale)) cubic-bezier(0.65, 0.05, 0.36, 1) var(--loader-cycles);
}
@keyframes delastic-s {
  0% { left: 0; width: 20%; }
  40% { left: 0; width: 85%; }
  50% { left: 80%; width: 20%; }
  90% { left: 15%; width: 85%; }
  100% { left: 0; width: 20%; }
}`,
	},
	{
		id: "44",
		name: "Jumping Dots",
		category: "waves",
		tags: ["parabolic-squash","bounce"],
		html: "<div class=\"demo-jdots\"><span></span><span></span><span></span></div>",
		css: `.demo-jdots {
  display: inline-flex; align-items: flex-end; justify-content: space-between;
  width: 32px; height: 20px;
}
.demo-jdots span {
  display: block; width: 7px; height: 7px; border-radius: 50%;
  background: var(--color-primary); transform-origin: bottom center;
  animation: djump-b calc(1.1s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-jdots span:nth-child(1) { animation-delay: 0s; }
.demo-jdots span:nth-child(2) { animation-delay: calc(-0.73s * var(--loader-speed-scale)); }
.demo-jdots span:nth-child(3) { animation-delay: calc(-0.36s * var(--loader-speed-scale)); }
@keyframes djump-b {
  0%, 100% { transform: translateY(0) scaleX(1) scaleY(1); }
  15% { transform: translateY(0) scaleX(1.3) scaleY(0.7); }
  20% { transform: translateY(0) scaleX(0.8) scaleY(1.2); }
  50% { transform: translateY(-13px) scaleX(0.85) scaleY(1.15); }
  80% { transform: translateY(0) scaleX(1.3) scaleY(0.7); }
  90% { transform: translateY(0) scaleX(0.9) scaleY(1.1); }
}`,
	},
	{
		id: "45",
		name: "Newton's Cradle 3D",
		category: "3d",
		tags: ["kinetic-swing","3D-isometric"],
		html: "<div class=\"demo-cradle3d\"><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-cradle3d {
  display: inline-flex; justify-content: center; align-items: flex-start;
  width: 32px; height: 32px; position: relative;
  perspective: 160px; transform-style: preserve-3d;
  transform: rotateX(20deg) rotateY(-20deg);
}
.demo-cradle3d::before {
  content: ''; position: absolute; top: 0; left: 5%; width: 90%; height: 2.5px;
  background: rgba(127,119,221,0.2); border-radius: 1.2px;
}
.demo-cradle3d span {
  display: block; position: relative; width: 5.2px; height: 85%;
  transform-origin: top center; transform-style: preserve-3d;
  margin: 0 0.16px;
}
.demo-cradle3d span::before {
  content: ''; position: absolute; top: 0; left: calc(50% - 0.5px); width: 1px; height: 80%;
  background: linear-gradient(to bottom, var(--color-primary), rgba(127,119,221,0.2));
}
.demo-cradle3d span::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 5.2px;
  background: radial-gradient(circle at 35% 35%, #ffffff 0%, var(--color-primary) 45%, #473fa5 100%);
  border-radius: 50%; box-shadow: 0 1.6px 2.4px rgba(0, 0, 0, 0.15); 
}
.demo-cradle3d span:nth-child(1) { animation: dcradle-l calc(1.2s * var(--loader-speed-scale)) cubic-bezier(0.25, 0, 0.75, 1) var(--loader-cycles); }
.demo-cradle3d span:nth-child(2) { animation: dcradle-ml calc(1.2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles); }
.demo-cradle3d span:nth-child(3) { animation: dcradle-m calc(1.2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles); }
.demo-cradle3d span:nth-child(4) { animation: dcradle-mr calc(1.2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles); }
.demo-cradle3d span:nth-child(5) { animation: dcradle-r calc(1.2s * var(--loader-speed-scale)) cubic-bezier(0.25, 0, 0.75, 1) var(--loader-cycles); }
@keyframes dcradle-l { 0%, 100% { transform: rotateZ(0deg); } 25% { transform: rotateZ(35deg); } 50% { transform: rotateZ(0deg); } }
@keyframes dcradle-r { 0%, 50% { transform: rotateZ(0deg); } 75% { transform: rotateZ(-35deg); } 100% { transform: rotateZ(0deg); } }
@keyframes dcradle-ml { 0%,48%,52%,98%,100% { transform: rotateZ(0deg); } 50% { transform: rotateZ(1.5deg); } }
@keyframes dcradle-m { 0%,49%,51%,99%,100% { transform: rotateZ(0deg); } 50% { transform: rotateZ(1deg) translateY(-0.1px); } }
@keyframes dcradle-mr { 0%,98%,100% { transform: rotateZ(0deg); } 100% { transform: rotateZ(-1.5deg); } }`,
	},
	{
		id: "46",
		name: "Signal Beacons",
		category: "special",
		tags: ["transmitter","half-ring-arcs"],
		html: "<div class=\"demo-sbeacons\"><span></span><span></span><span></span></div>",
		css: `.demo-sbeacons {
  display: inline-flex; align-items: flex-end; justify-content: space-between;
  width: 32px; height: 27px;
}
.demo-sbeacons span { display: block; position: relative; width: 7.6px; height: 100%; }
.demo-sbeacons span::before {
  content: ''; position: absolute; bottom: 0; left: calc(50% - 1.3px);
  width: 2.6px; height: 2.6px; border-radius: 50%; background: var(--color-info);
}
.demo-sbeacons span::after {
  content: ''; position: absolute; bottom: 1.3px; left: 0; width: 100%; height: 20px;
  border: 1.3px solid var(--color-info); border-bottom: none;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0; transform-origin: bottom center;
  transform: scale(0.1); opacity: 0; animation: dsbeacons-w calc(1.5s * var(--loader-speed-scale)) cubic-bezier(0.1, 0.8, 0.3, 1) var(--loader-cycles);
}
.demo-sbeacons span:nth-child(1)::after { animation-delay: 0s; }
.demo-sbeacons span:nth-child(2)::after { animation-delay: calc(-0.5s * var(--loader-speed-scale)); }
.demo-sbeacons span:nth-child(3)::after { animation-delay: calc(-1.0s * var(--loader-speed-scale)); }
@keyframes dsbeacons-w { 0% { transform: scale(0.1); opacity: 0; } 15% { opacity: 1; } 100% { transform: scale(1.1); opacity: 0; } }`,
	},
	{
		id: "47",
		name: "Ticking Clock",
		category: "special",
		tags: ["quartz-stepped","rotates"],
		html: "<div class=\"demo-tclock\"><div class=\"demo-tclock-hour\"></div><div class=\"demo-tclock-minute\"></div></div>",
		css: `.demo-tclock {
  width: 32px; height: 32px; border: 2px solid var(--color-warning); border-radius: 50%;
  position: relative; display: inline-block;
}
.demo-tclock::before {
  content: ''; position: absolute; top: calc(50% - 1.6px); left: calc(50% - 1.6px);
  width: 3.2px; height: 3.2px; background: var(--color-warning); border-radius: 50%; z-index: 10;
}
.demo-tclock-hour, .demo-tclock-minute {
  position: absolute; bottom: 50%; left: calc(50% - 0.8px); width: 1.6px;
  background: var(--color-warning); border-radius: 0.8px 0.8px 0 0; transform-origin: bottom center;
}
.demo-tclock-hour { height: 28%; animation: clock-tick calc(6s * var(--loader-speed-scale)) steps(12) var(--loader-cycles); }
.demo-tclock-minute { height: 38%; width: 1.1px; left: calc(50% - 0.55px); animation: clock-tick calc(0.5s * var(--loader-speed-scale)) steps(60) var(--loader-cycles); }
@keyframes clock-tick { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`,
	},
	{
		id: "48",
		name: "Bouncing Cube 3D",
		category: "3d",
		tags: ["projection-rotation","bounce"],
		html: "<div class=\"demo-bcube\"><div class=\"demo-bcube-cube\"><div class=\"demo-bcube-face demo-bcube-face--top\"></div><div class=\"demo-bcube-face demo-bcube-face--bottom\"></div><div class=\"demo-bcube-face demo-bcube-face--front\"></div><div class=\"demo-bcube-face demo-bcube-face--back\"></div><div class=\"demo-bcube-face demo-bcube-face--left\"></div><div class=\"demo-bcube-face demo-bcube-face--side\"></div></div></div>",
		css: `.demo-bcube {
  width: 32px; height: 42px; position: relative; perspective: 128px; display: inline-block;
}
.demo-bcube::before {
  content: ''; position: absolute; bottom: 0; left: 10%; width: 80%; height: 3.8px;
  background: rgba(127,119,221,0.2); border-radius: 50%; animation: dbcube-s calc(1.2s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-bcube-cube {
  width: 16px; height: 16px; position: absolute; top: 25%; left: 25%;
  transform-style: preserve-3d; transform-origin: bottom center;
  animation: dbcube-b calc(1.2s * var(--loader-speed-scale)) cubic-bezier(0.25, 0.46, 0.45, 0.94) var(--loader-cycles);
}
.demo-bcube-face {
  position: absolute; width: 100%; height: 100%;
  border: 1.3px solid var(--color-primary); border-radius: 1px;
}
.demo-bcube-face--top { transform: rotateX(90deg) translateZ(8px); background: #968ff2; }
.demo-bcube-face--bottom { transform: rotateX(-90deg) translateZ(8px); background: #473fa5; }
.demo-bcube-face--front { transform: rotateY(0deg) translateZ(8px); background: var(--color-primary); }
.demo-bcube-face--back { transform: rotateY(180deg) translateZ(8px); background: #685ebd; }
.demo-bcube-face--left { transform: rotateY(-90deg) translateZ(8px); background: #7369cf; }
.demo-bcube-face--side { transform: rotateY(90deg) translateZ(8px); background: #5c52b8; }
@keyframes dbcube-b {
  0%, 100% { transform: translateY(0) scale3d(1.22, 0.62, 1.22) rotateX(-30deg) rotateY(45deg); }
  12% { transform: translateY(0) scale3d(0.82, 1.28, 0.82) rotateX(-30deg) rotateY(45deg); }
  50% { transform: translateY(-22px) scale3d(1, 1, 1) rotateX(-30deg) rotateY(135deg); }
  78% { transform: translateY(0) scale3d(1.25, 0.55, 1.25) rotateX(-30deg) rotateY(225deg); }
  90% { transform: translateY(0) scale3d(0.9, 1.1, 0.9) rotateX(-30deg) rotateY(225deg); }
}
@keyframes dbcube-s {
  0%, 78%, 100% { transform: scale(1.25); opacity: 0.8; }
  12% { transform: scale(0.9); opacity: 0.6; }
  50% { transform: scale(0.5); opacity: 0.15; }
  90% { transform: scale(1); opacity: 0.7; }
}`,
	},
	{
		id: "49",
		name: "Digital Segment",
		category: "special",
		tags: ["7-segment-LED","cycle"],
		html: "<div class=\"demo-dsegment\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-dsegment {
  width: 18px; height: 32px; position: relative; display: inline-block;
  transform: skewX(-10deg); --thick: 2.8px;
}
.demo-dsegment span {
  position: absolute; background: var(--color-success); box-sizing: border-box; opacity: 0.06;
  filter: drop-shadow(0 0 0.8px rgba(29,158,117,0.4));
}
.demo-dsegment span:nth-child(1), .demo-dsegment span:nth-child(4), .demo-dsegment span:nth-child(7) {
  height: var(--thick); width: calc(100% - var(--thick)); left: calc(var(--thick) * 0.5);
  clip-path: polygon(calc(var(--thick) * 0.5) 0, calc(100% - var(--thick) * 0.5) 0, 100% 50%, calc(100% - var(--thick) * 0.5) 100%, calc(var(--thick) * 0.5) 100%, 0 50%);
}
.demo-dsegment span:nth-child(2), .demo-dsegment span:nth-child(3), .demo-dsegment span:nth-child(5), .demo-dsegment span:nth-child(6) {
  width: var(--thick); height: calc(50% - calc(var(--thick) * 0.55));
  clip-path: polygon(50% 0, 100% calc(var(--thick) * 0.5), 100% calc(100% - var(--thick) * 0.5), 50% 100%, 0 calc(100% - var(--thick) * 0.5), 0 calc(var(--thick) * 0.5));
}
.demo-dsegment span:nth-child(1) { top: 0; animation: seg-a calc(4s * var(--loader-speed-scale)) steps(1) var(--loader-cycles); }
.demo-dsegment span:nth-child(2) { top: calc(var(--thick) * 0.45); right: 0; animation: seg-b calc(4s * var(--loader-speed-scale)) steps(1) var(--loader-cycles); }
.demo-dsegment span:nth-child(3) { bottom: calc(var(--thick) * 0.45); right: 0; animation: seg-c calc(4s * var(--loader-speed-scale)) steps(1) var(--loader-cycles); }
.demo-dsegment span:nth-child(4) { bottom: 0; animation: seg-d calc(4s * var(--loader-speed-scale)) steps(1) var(--loader-cycles); }
.demo-dsegment span:nth-child(5) { bottom: calc(var(--thick) * 0.45); left: 0; animation: seg-e calc(4s * var(--loader-speed-scale)) steps(1) var(--loader-cycles); }
.demo-dsegment span:nth-child(6) { top: calc(var(--thick) * 0.45); left: 0; animation: seg-f calc(4s * var(--loader-speed-scale)) steps(1) var(--loader-cycles); }
.demo-dsegment span:nth-child(7) { top: calc(50% - calc(var(--thick) * 0.5)); animation: seg-g calc(4s * var(--loader-speed-scale)) steps(1) var(--loader-cycles); }
@keyframes seg-a { 0%, 10%, 20%, 40%, 50%, 60%, 70%, 80%, 90%, 100% { opacity: 1; } 10.01%, 20%, 40.01%, 50% { opacity: 0.06; } }
@keyframes seg-b { 0%, 10%, 20%, 30%, 40%, 50%, 70%, 80%, 90%, 100% { opacity: 1; } 50.01%, 70% { opacity: 0.06; } }
@keyframes seg-c { 0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% { opacity: 1; } 20.01%, 30% { opacity: 0.06; } }
@keyframes seg-d { 0%, 10%, 20%, 40%, 50%, 60%, 70%, 80%, 90%, 100% { opacity: 1; } 10.01%, 20%, 40.01%, 50%, 70.01%, 80% { opacity: 0.06; } }
@keyframes seg-e { 0%, 10%, 20%, 30%, 60%, 70%, 80%, 90% { opacity: 1; } 10.01%, 20%, 30.01%, 60%, 90.01%, 100% { opacity: 0.06; } }
@keyframes seg-f { 0%, 10%, 40%, 50%, 60%, 70%, 80%, 90%, 100% { opacity: 1; } 10.01%, 40% { opacity: 0.06; } }
@keyframes seg-g { 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% { opacity: 1; } 0%, 20%, 70.01%, 80% { opacity: 0.06; } }`,
	},
	{
		id: "50",
		name: "Perspective Tunnel",
		category: "spinners",
		tags: ["flythrough-zoom","concentric"],
		html: "<div class=\"demo-ptunnel\"><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-ptunnel {
  width: 54px; height: 54px; position: relative;
  display: flex; align-items: center; justify-content: center;
}
.demo-ptunnel span {
  position: absolute; border-radius: 50%;
  border: 1.8px solid var(--color-primary);
  box-shadow: 0 0 5px #a09af0;
  opacity: 0;
  animation: dptunnel-zoom calc(1.4s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-ptunnel span:nth-child(1) { animation-delay: 0s; }
.demo-ptunnel span:nth-child(2) { animation-delay: calc(1.4s * -1 / 6 * var(--loader-speed-scale)); }
.demo-ptunnel span:nth-child(3) { animation-delay: calc(1.4s * -2 / 6 * var(--loader-speed-scale)); }
.demo-ptunnel span:nth-child(4) { animation-delay: calc(1.4s * -3 / 6 * var(--loader-speed-scale)); }
.demo-ptunnel span:nth-child(5) { animation-delay: calc(1.4s * -4 / 6 * var(--loader-speed-scale)); }
.demo-ptunnel span:nth-child(6) { animation-delay: calc(1.4s * -5 / 6 * var(--loader-speed-scale)); }
@keyframes dptunnel-zoom {
  0%   { width: 8%;   height: 8%;   opacity: 0; }
  10%  { opacity: 0.9; }
  80%  { opacity: 0.75; }
  100% { width: 135%; height: 135%; opacity: 0; }
}`,
	},
	{
		id: "51",
		name: "Prism Orbit",
		category: "special",
		tags: ["orbital-flip","triple-tile"],
		html: "<div class=\"demo-prismorbit\"><span></span><span></span><span></span></div>",
		css: `.demo-prismorbit {
  --po-size: 52px; --po-tile: calc(var(--po-size) * 0.24); --po-radius: calc(var(--po-size) * 0.28);
  width: var(--po-size); height: var(--po-size); position: relative; display: inline-grid; place-items: center;
}
.demo-prismorbit span {
  position: absolute; width: var(--po-tile); height: var(--po-tile); border-radius: 6px;
  background: var(--color-primary); opacity: 0.92; transform-origin: center center;
  filter: drop-shadow(0 0 6px rgba(127,119,221,0.4));
  animation: dprism-orbit calc(1.35s * var(--loader-speed-scale)) linear var(--loader-cycles),
             dprism-flip calc(1.22s * var(--loader-speed-scale)) cubic-bezier(0.42,0,0.58,1) var(--loader-cycles);
}
.demo-prismorbit span:nth-child(1) { --phase: 0deg; animation-delay: 0s, 0s; }
.demo-prismorbit span:nth-child(2) { --phase: 120deg; animation-delay: calc(1.35s * -1 / 3 * var(--loader-speed-scale)), calc(1.22s * -1 / 3 * var(--loader-speed-scale)); }
.demo-prismorbit span:nth-child(3) { --phase: 240deg; animation-delay: calc(1.35s * -2 / 3 * var(--loader-speed-scale)), calc(1.22s * -2 / 3 * var(--loader-speed-scale)); }
@keyframes dprism-orbit {
  from { transform: rotate(var(--phase)) translateY(calc(var(--po-radius) * -1)) rotate(calc(-1 * var(--phase))); }
  to   { transform: rotate(calc(360deg + var(--phase))) translateY(calc(var(--po-radius) * -1)) rotate(calc(-360deg - var(--phase))); }
}
@keyframes dprism-flip {
  0%,100% { border-radius: 6px; scale: 1; }
  50% { border-radius: 3px; scale: 0.72; }
}`,
	},
	{
		id: "52",
		name: "Barcode Sweep",
		category: "waves",
		tags: ["scanline","stagger-bars"],
		html: "<div class=\"demo-bcodesweep\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-bcodesweep {
  --bs-w: 56px; --bs-h: 34px; --bs-gap: 3px;
  width: var(--bs-w); height: var(--bs-h); position: relative;
  display: flex; align-items: stretch; justify-content: center; gap: var(--bs-gap);
}
.demo-bcodesweep::after {
  content: ''; position: absolute; top: 0; bottom: 0; width: 35%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.12) 52%, transparent 100%);
  mix-blend-mode: screen; pointer-events: none;
  animation: dbcode-scan calc(1.6s * var(--loader-speed-scale)) linear var(--loader-cycles);
}
.demo-bcodesweep span {
  flex: 1 1 0; border-radius: 2px; background: var(--color-success); opacity: 0.18;
  transform-origin: bottom center;
  animation: dbcode-bars calc(1s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-bcodesweep span:nth-child(1) { animation-delay: calc(-0.00s * var(--loader-speed-scale)); }
.demo-bcodesweep span:nth-child(2) { animation-delay: calc(-0.09s * var(--loader-speed-scale)); }
.demo-bcodesweep span:nth-child(3) { animation-delay: calc(-0.18s * var(--loader-speed-scale)); }
.demo-bcodesweep span:nth-child(4) { animation-delay: calc(-0.27s * var(--loader-speed-scale)); }
.demo-bcodesweep span:nth-child(5) { animation-delay: calc(-0.36s * var(--loader-speed-scale)); }
.demo-bcodesweep span:nth-child(6) { animation-delay: calc(-0.45s * var(--loader-speed-scale)); }
.demo-bcodesweep span:nth-child(7) { animation-delay: calc(-0.54s * var(--loader-speed-scale)); }
@keyframes dbcode-bars {
  0%,100% { transform: scaleY(0.35); opacity: 0.2; }
  50% { transform: scaleY(1); opacity: 0.95; }
}
@keyframes dbcode-scan {
  0% { left: -35%; opacity: 0; }
  12% { opacity: 1; }
  88% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}`,
	},
	{
		id: "53",
		name: "Corner Chase",
		category: "spinners",
		tags: ["border-brackets","quadrant-steps"],
		html: "<div class=\"demo-cchase\"><span></span><span></span><span></span><span></span></div>",
		css: `.demo-cchase {
  --cc-size: 44px;
  --cc-corner: calc(var(--cc-size) * 0.26);
  --cc-thick: calc(var(--cc-size) * 0.06);
  --cc-radius: calc(var(--cc-size) * 0.08);
  --cc-color: var(--color-primary);
  --cc-dim: color-mix(in srgb, var(--cc-color) 25%, transparent);
  --cc-speed: calc(1.2s * var(--loader-speed-scale));
  --cc-dir: 1;

  width: var(--cc-size);
  height: var(--cc-size);
  position: relative;
  display: inline-block;
  box-sizing: border-box;
}
.demo-cchase span {
  position: absolute;
  width: var(--cc-corner);
  height: var(--cc-corner);
  border-radius: var(--cc-radius);
  box-sizing: border-box;
  border: var(--cc-thick) solid var(--cc-color);
  filter: drop-shadow(0 0 calc(var(--cc-size) * 0.07) var(--cc-dim));
  animation: dcchase var(--cc-speed) steps(4) var(--loader-cycles);
}
.demo-cchase span:nth-child(1) { border-right-color: transparent; border-bottom-color: transparent; animation-delay: calc(var(--cc-speed) * -0 / 4); }
.demo-cchase span:nth-child(2) { border-left-color: transparent;  border-bottom-color: transparent; animation-delay: calc(var(--cc-speed) * -1 / 4); }
.demo-cchase span:nth-child(3) { border-left-color: transparent;  border-top-color: transparent; animation-delay: calc(var(--cc-speed) * -2 / 4); }
.demo-cchase span:nth-child(4) { border-right-color: transparent; border-top-color: transparent; animation-delay: calc(var(--cc-speed) * -3 / 4); }
@keyframes dcchase {
  0% { transform: translate(0, 0) scale(0.92); }
  25% { transform: translate(calc((var(--cc-size) - var(--cc-corner)) * var(--cc-dir)), 0) scale(1); }
  50% { transform: translate(calc((var(--cc-size) - var(--cc-corner)) * var(--cc-dir)), calc(var(--cc-size) - var(--cc-corner))) scale(0.92); }
  75% { transform: translate(0, calc(var(--cc-size) - var(--cc-corner))) scale(1); }
  100% { transform: translate(0, 0) scale(0.92); }
}`,
	},
	{
		id: "54",
		name: "Shard Flip",
		category: "3d",
		tags: ["radial-shards","3d-flip"],
		html: "<div class=\"demo-sflip\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-sflip {
  --sf-size: 44px;
  --sf-w: calc(var(--sf-size) * 0.10);
  --sf-h: calc(var(--sf-size) * 0.34);
  --sf-radius: calc(var(--sf-size) * 0.28);
  --sf-round: calc(var(--sf-size) * 0.06);
  --sf-color: var(--color-primary);
  --sf-glow: color-mix(in srgb, var(--sf-color) 35%, transparent);
  --sf-speed: calc(1.1s * var(--loader-speed-scale));
  --sf-dir: 1;

  width: var(--sf-size);
  height: var(--sf-size);
  position: relative;
  display: inline-grid;
  place-items: center;
  box-sizing: border-box;
  perspective: calc(var(--sf-size) * 4);
  transform-style: preserve-3d;
}
.demo-sflip span {
  position: absolute;
  width: var(--sf-w);
  height: var(--sf-h);
  border-radius: var(--sf-round);
  background: var(--sf-color);
  opacity: 0.92;
  transform-style: preserve-3d;
  filter: drop-shadow(0 0 calc(var(--sf-size) * 0.08) var(--sf-glow));
  animation: dsflip var(--sf-speed) cubic-bezier(0.4,0,0.2,1) var(--loader-cycles);
}
.demo-sflip span:nth-child(1) { --a: 0deg;   animation-delay: calc(var(--sf-speed) * -0 / 8); }
.demo-sflip span:nth-child(2) { --a: 45deg;  animation-delay: calc(var(--sf-speed) * -1 / 8); }
.demo-sflip span:nth-child(3) { --a: 90deg;  animation-delay: calc(var(--sf-speed) * -2 / 8); }
.demo-sflip span:nth-child(4) { --a: 135deg; animation-delay: calc(var(--sf-speed) * -3 / 8); }
.demo-sflip span:nth-child(5) { --a: 180deg; animation-delay: calc(var(--sf-speed) * -4 / 8); }
.demo-sflip span:nth-child(6) { --a: 225deg; animation-delay: calc(var(--sf-speed) * -5 / 8); }
.demo-sflip span:nth-child(7) { --a: 270deg; animation-delay: calc(var(--sf-speed) * -6 / 8); }
.demo-sflip span:nth-child(8) { --a: 315deg; animation-delay: calc(var(--sf-speed) * -7 / 8); }
@keyframes dsflip {
  0% { opacity: 0.18; transform: rotate(var(--a)) translateY(calc(var(--sf-radius) * -1)) rotate(calc(-1 * var(--a))) rotateY(calc(0deg * var(--sf-dir))); }
  50% { opacity: 1; transform: rotate(var(--a)) translateY(calc(var(--sf-radius) * -1)) rotate(calc(-1 * var(--a))) rotateY(calc(180deg * var(--sf-dir))); }
  100% { opacity: 0.18; transform: rotate(var(--a)) translateY(calc(var(--sf-radius) * -1)) rotate(calc(-1 * var(--a))) rotateY(calc(360deg * var(--sf-dir))); }
}`,
	},
	{
		id: "55",
		name: "Shutter Bloom",
		category: "special",
		tags: ["iris-blades","staggered-bloom"],
		html: "<div class=\"demo-shutter\"><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-shutter {
  --sb-size: 44px;
  --sb-w: calc(var(--sb-size) * 0.16);
  --sb-h: calc(var(--sb-size) * 0.46);
  --sb-radius: calc(var(--sb-size) * 0.18);
  --sb-round: calc(var(--sb-size) * 0.06);
  --sb-color: var(--color-primary);
  --sb-glow: color-mix(in srgb, var(--sb-color) 30%, transparent);
  --sb-speed: calc(1.15s * var(--loader-speed-scale));
  --sb-spin: calc(var(--sb-speed) * 2.2);
  --sb-dir: 1;

  width: var(--sb-size);
  height: var(--sb-size);
  position: relative;
  display: inline-grid;
  place-items: center;
  box-sizing: border-box;
  transform-style: preserve-3d;
}
.demo-shutter::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at center, transparent 40%, color-mix(in srgb, var(--sb-color) 12%, transparent) 70%, transparent 100%);
  opacity: 0.9;
  animation: dsh-rot var(--sb-spin) linear var(--loader-cycles);
}
.demo-shutter span {
  position: absolute;
  width: var(--sb-w);
  height: var(--sb-h);
  border-radius: var(--sb-round);
  background: var(--sb-color);
  opacity: 0.92;
  filter: drop-shadow(0 0 calc(var(--sb-size) * 0.1) var(--sb-glow));
  transform-origin: 50% calc(100% - var(--sb-round));
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
  animation: dsh-bloom var(--sb-speed) cubic-bezier(0.4,0,0.2,1) var(--loader-cycles);
}
.demo-shutter span:nth-child(1) { --a: 0deg; animation-delay: calc(var(--sb-speed) * -0 / 6); }
.demo-shutter span:nth-child(2) { --a: 60deg; animation-delay: calc(var(--sb-speed) * -1 / 6); }
.demo-shutter span:nth-child(3) { --a: 120deg; animation-delay: calc(var(--sb-speed) * -2 / 6); }
.demo-shutter span:nth-child(4) { --a: 180deg; animation-delay: calc(var(--sb-speed) * -3 / 6); }
.demo-shutter span:nth-child(5) { --a: 240deg; animation-delay: calc(var(--sb-speed) * -4 / 6); }
.demo-shutter span:nth-child(6) { --a: 300deg; animation-delay: calc(var(--sb-speed) * -5 / 6); }
@keyframes dsh-bloom {
  0% { opacity: 0.22; transform: rotate(var(--a)) translateY(calc(var(--sb-radius) * -1)) rotate(calc(-1 * var(--a))) rotateZ(0deg) scaleY(0.72); }
  50% { opacity: 1; transform: rotate(var(--a)) translateY(calc(var(--sb-radius) * -1)) rotate(calc(-1 * var(--a))) rotateZ(18deg) scaleY(1); }
  100% { opacity: 0.22; transform: rotate(var(--a)) translateY(calc(var(--sb-radius) * -1)) rotate(calc(-1 * var(--a))) rotateZ(36deg) scaleY(0.72); }
}
@keyframes dsh-rot { to { transform: rotate(calc(360deg * var(--sb-dir))); } }`,
	},
	{
		id: "56",
		name: "Pulse Helix",
		category: "waves",
		tags: ["sinusoidal-bars","helix-wave","staggered-scale"],
		html: "<div class=\"demo-phelix\"><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-phelix {
  --ph-size: var(--loader-size);
  --ph-gap: calc(var(--ph-size) * 0.1);
  --ph-color: var(--color-primary);
  --ph-glow: color-mix(in srgb, var(--ph-color) 40%, transparent);
  --ph-speed: calc(1.1s * var(--loader-speed-scale));
  --ph-opacity: 0.95;

  width: var(--ph-size);
  height: var(--ph-size);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.demo-phelix span {
  display: block;
  width: calc((var(--ph-size) - (var(--ph-gap) * 4)) / 5);
  height: 90%;
  border-radius: calc(var(--ph-size) * 0.08);
  background: var(--ph-color);
  opacity: var(--ph-opacity);
  filter: drop-shadow(0 0 calc(var(--ph-size) * 0.1) var(--ph-glow));
  transform-origin: center;
  animation: ph-wave var(--ph-speed) ease-in-out var(--loader-cycles);
}
.demo-phelix span:nth-child(1) { animation-delay: calc(var(--ph-speed) * -0.4); }
.demo-phelix span:nth-child(2) { animation-delay: calc(var(--ph-speed) * -0.3); }
.demo-phelix span:nth-child(3) { animation-delay: calc(var(--ph-speed) * -0.2); }
.demo-phelix span:nth-child(4) { animation-delay: calc(var(--ph-speed) * -0.1); }
.demo-phelix span:nth-child(5) { animation-delay: calc(var(--ph-speed) * 0); }
@keyframes ph-wave {
  0%, 100% { transform: scaleY(0.2); opacity: 0.35; }
  50% { transform: scaleY(1.0); opacity: 1; }
}`,
	},
	{
		id: "57",
		name: "Kinetic Vortex",
		category: "3d",
		tags: ["orbital-twist","expanding-rings","3d-frames"],
		html: "<div class=\"demo-kvortex\"><span></span><span></span><span></span></div>",
		css: `.demo-kvortex {
  --kv-size: 52px;
  --kv-color: var(--color-primary);
  --kv-speed: calc(1.3s * var(--loader-speed-scale));
  width: var(--kv-size); height: var(--kv-size); position: relative;
  perspective: 200px; transform-style: preserve-3d;
}
.demo-kvortex span {
  position: absolute; inset: 0; border: 2px solid transparent;
  border-top-color: var(--kv-color); border-bottom-color: var(--kv-color); border-radius: 50%;
  animation: dkv-spin var(--kv-speed) cubic-bezier(0.5, 0, 0.5, 1) var(--loader-cycles);
}
.demo-kvortex span:nth-child(1) { --r: 0deg; --scale: 1; animation-delay: calc(var(--kv-speed) * -0.3); }
.demo-kvortex span:nth-child(2) { --r: 45deg; --scale: 0.75; animation-delay: calc(var(--kv-speed) * -0.15); }
.demo-kvortex span:nth-child(3) { --r: 90deg; --scale: 0.5; animation-delay: 0s; }
@keyframes dkv-spin {
  0% { transform: rotateX(var(--r)) rotateY(var(--r)) rotateZ(0deg) scale(var(--scale)); }
  100% { transform: rotateX(var(--r)) rotateY(var(--r)) rotateZ(360deg) scale(var(--scale)); }
}`,
	},
	{
		id: "58",
		name: "Neon Matrix",
		category: "spinners",
		tags: ["cyber-grid","stepped-bars","neon-sweep"],
		html: "<div class=\"demo-nmatrix\"><span></span><span></span><span></span><span></span></div>",
		css: `.demo-nmatrix {
  --nm-size: 40px;
  --nm-color: var(--color-danger);
  --nm-speed: calc(0.9s * var(--loader-speed-scale));
  width: var(--nm-size); height: var(--nm-size); display: grid;
  grid-template-columns: repeat(2, 1fr); gap: 4px;
}
.demo-nmatrix span {
  border-radius: 3px; background: var(--nm-color); opacity: 0.25;
  animation: dnmatrix-pulse var(--nm-speed) ease-in-out var(--loader-cycles);
}
.demo-nmatrix span:nth-child(1) { animation-delay: 0s; }
.demo-nmatrix span:nth-child(2) { animation-delay: calc(var(--nm-speed) * -0.675); }
.demo-nmatrix span:nth-child(4) { animation-delay: calc(var(--nm-speed) * -0.45); }
.demo-nmatrix span:nth-child(3) { animation-delay: calc(var(--nm-speed) * -0.225); }
@keyframes dnmatrix-pulse {
  0%, 100% { opacity: 0.25; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.05); filter: drop-shadow(0 0 6px var(--nm-color)); }
}`,
	},
	{
		id: "59",
		name: "Holographic Helix",
		category: "waves",
		tags: ["double-helix","sinusoidal-glow","translating-orbits"],
		html: "<div class=\"demo-hhelix\"><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-hhelix {
  --hh-size: 52px; --hh-gap: 4px;
  --hh-color: var(--color-info);
  --hh-speed: calc(1.4s * var(--loader-speed-scale));
  width: var(--hh-size); height: var(--hh-size); display: flex;
  align-items: center; justify-content: space-between; gap: var(--hh-gap);
}
.demo-hhelix span {
  flex: 1; height: 35%; border-radius: 4px;
  background: var(--hh-color); opacity: 0.85;
  animation: dhhelix-wave var(--hh-speed) ease-in-out var(--loader-cycles);
}
.demo-hhelix span:nth-child(1) { animation-delay: calc(var(--hh-speed) * -0.5); }
.demo-hhelix span:nth-child(2) { animation-delay: calc(var(--hh-speed) * -0.4); }
.demo-hhelix span:nth-child(3) { animation-delay: calc(var(--hh-speed) * -0.3); }
.demo-hhelix span:nth-child(4) { animation-delay: calc(var(--hh-speed) * -0.2); }
.demo-hhelix span:nth-child(5) { animation-delay: calc(var(--hh-speed) * -0.1); }
.demo-hhelix span:nth-child(6) { animation-delay: 0s; }
@keyframes dhhelix-wave {
  0%, 100% { transform: translateY(-10px) scale(0.6); opacity: 0.3; }
  50% { transform: translateY(10px) scale(1.1); opacity: 1; filter: drop-shadow(0 0 5px var(--hh-color)); }
}`,
	},
	{
		id: "60",
		name: "Glow Quantum",
		category: "special",
		tags: ["pulsing-core","quantum-orbits","concentric-electrons"],
		html: "<div class=\"demo-gquantum\"><div class=\"demo-gquantum-core\"></div><div class=\"demo-gquantum-ring\"><span></span></div></div>",
		css: `.demo-gquantum {
  --gq-size: 44px; --gq-color: var(--color-primary);
  --gq-speed: calc(1.6s * var(--loader-speed-scale));
  width: var(--gq-size); height: var(--gq-size); position: relative;
  display: flex; align-items: center; justify-content: center;
}
.demo-gquantum-core {
  width: 10px; height: 10px; border-radius: 50%; background: var(--gq-color);
  animation: dgq-pulse calc(var(--gq-speed) * 0.6) ease-in-out infinite;
}
.demo-gquantum-ring {
  position: absolute; inset: 0; border: 1.5px solid color-mix(in srgb, var(--gq-color) 20%, transparent);
  border-radius: 50%;
  animation: dgq-rot var(--gq-speed) linear var(--loader-cycles);
}
.demo-gquantum-ring span {
  position: absolute; top: -4px; left: 50%; transform: translateX(-50%);
  width: 7px; height: 7px; border-radius: 50%; background: var(--gq-color);
  box-shadow: 0 0 8px var(--gq-color);
}
@keyframes dgq-pulse { 0%,100%{transform:scale(0.85);opacity:0.6} 50%{transform:scale(1.2);opacity:1} }
@keyframes dgq-rot { to { transform: rotate(360deg); } }`,
	},
	{
		id: "61",
		name: "Liquid Drip",
		category: "special",
		tags: ["viscous-drips","gooey-merging","fluid-fall"],
		html: "<div class=\"demo-ldrip\"><span></span><span></span><span></span></div>",
		css: `.demo-ldrip {
  --ld-size: 52px; --ld-color: var(--color-primary);
  --ld-speed: calc(1.5s * var(--loader-speed-scale));
  width: var(--ld-size); height: var(--ld-size); position: relative;
  filter: blur(4px) contrast(15);
}
.demo-ldrip span {
  position: absolute; width: 14px; height: 14px; border-radius: 50%;
  background: var(--ld-color);
}
.demo-ldrip span:nth-child(1) { top: 8px; left: 50%; transform: translateX(-50%); }
.demo-ldrip span:nth-child(2) {
  top: 8px; left: 50%; transform: translateX(-50%);
  animation: dldrip-drip var(--ld-speed) ease-in-out var(--loader-cycles);
}
.demo-ldrip span:nth-child(3) {
  bottom: 8px; left: 50%; transform: translateX(-50%) scaleY(0.7);
  width: 20px; height: 8px; border-radius: 50%;
  animation: dldrip-reservoir var(--ld-speed) ease-in-out var(--loader-cycles);
}
@keyframes dldrip-drip {
  0% { top: 8px; scale: 1.0; }
  35% { top: 28px; scale: 0.85; }
  60%, 100% { top: 38px; scale: 0.1; opacity: 0; }
}
@keyframes dldrip-reservoir {
  0%, 45% { transform: translateX(-50%) scale(1.0); }
  62% { transform: translateX(-50%) scale(1.22); }
  100% { transform: translateX(-50%) scale(1.0); }
}`,
	},
	{
		id: "62",
		name: "Folding Prism",
		category: "3d",
		tags: ["3d-shapes","folding-planes","prism-twist"],
		html: "<div class=\"demo-fprism\"><span class=\"demo-fprism-face\"></span><span class=\"demo-fprism-face\"></span><span class=\"demo-fprism-face\"></span></div>",
		css: `.demo-fprism {
  --fp-size: 52px;
  --fp-color: var(--color-primary);
  --fp-speed: calc(1.5s * var(--loader-speed-scale));
  width: var(--fp-size); height: var(--fp-size); position: relative;
  perspective: 200px; transform-style: preserve-3d;
}
.demo-fprism-face {
  position: absolute; inset: 0; border: 2px solid transparent;
  border-top-color: var(--fp-color); border-radius: 50%;
  animation: d-fprism-spin var(--fp-speed) cubic-bezier(0.4, 0, 0.2, 1) var(--loader-cycles);
}
.demo-fprism-face:nth-child(1) { --r: 0deg; animation-delay: calc(var(--fp-speed) * -0.4); }
.demo-fprism-face:nth-child(2) { --r: 120deg; animation-delay: calc(var(--fp-speed) * -0.2); }
.demo-fprism-face:nth-child(3) { --r: 240deg; animation-delay: 0s; }
@keyframes d-fprism-spin {
  0% { transform: rotateX(var(--r)) rotateY(var(--r)) rotateZ(0deg); }
  100% { transform: rotateX(var(--r)) rotateY(var(--r)) rotateZ(360deg); }
}`,
	},
	{
		id: "63",
		name: "Quantum Ripple",
		category: "special",
		tags: ["quantum-wave","concentric-glow","expanding-cores"],
		html: "<div class=\"demo-qripple\"><span class=\"demo-qripple-core\"></span><span class=\"demo-qripple-ring\"></span><span class=\"demo-qripple-ring\"></span></div>",
		css: `.demo-qripple {
  --qr-size: 48px;
  --qr-color: var(--color-primary);
  --qr-speed: calc(1.4s * var(--loader-speed-scale));
  width: var(--qr-size); height: var(--qr-size); position: relative;
  display: flex; align-items: center; justify-content: center;
}
.demo-qripple-core {
  width: 8px; height: 8px; border-radius: 50%; background: var(--qr-color);
  animation: d-qripple-pulse calc(var(--qr-speed) * 0.5) ease-in-out infinite;
}
.demo-qripple-ring {
  position: absolute; inset: 0; border: 2px solid var(--qr-color); border-radius: 50%;
  opacity: 0; animation: d-qripple-expand var(--qr-speed) cubic-bezier(0.1, 0.8, 0.3, 1) var(--loader-cycles);
}
.demo-qripple-ring:nth-child(2) { animation-delay: 0s; }
.demo-qripple-ring:nth-child(3) { animation-delay: calc(var(--qr-speed) * -0.5); }
@keyframes d-qripple-pulse { 0%,100%{transform:scale(0.8);opacity:0.6} 50%{transform:scale(1.2);opacity:1} }
@keyframes d-qripple-expand {
  0% { transform: scale(0.1); opacity: 0.8; }
  100% { transform: scale(1.0); opacity: 0; }
}`,
	},
	{
		id: "64",
		name: "Glitch Orbit",
		category: "special",
		tags: ["glitch-effect","electronic-glow","orbiting-tracks"],
		html: "<div class=\"demo-gorbit\"><span class=\"demo-gorbit-dot\"></span><span class=\"demo-gorbit-dot\"></span><span class=\"demo-gorbit-dot\"></span></div>",
		css: `.demo-gorbit {
  --go-size: 50px;
  --go-color: var(--color-danger);
  --go-speed: calc(1.1s * var(--loader-speed-scale));
  width: var(--go-size); height: var(--go-size); position: relative;
  display: flex; align-items: center; justify-content: center;
}
.demo-gorbit-dot {
  position: absolute; width: 10px; height: 10px; border-radius: 50%; background: var(--go-color);
  animation: d-gorbit-translate var(--go-speed) cubic-bezier(0.77, 0, 0.175, 1) var(--loader-cycles);
}
.demo-gorbit-dot:nth-child(1) { --offset: -20px; animation-delay: calc(var(--go-speed) * -0.4); }
.demo-gorbit-dot:nth-child(2) { --offset: 0px; animation-delay: calc(var(--go-speed) * -0.2); }
.demo-gorbit-dot:nth-child(3) { --offset: 20px; animation-delay: 0s; }
@keyframes d-gorbit-translate {
  0%, 100% { transform: translateX(var(--offset)) scale(1); filter: drop-shadow(0 0 0 transparent); }
  50% { transform: translateX(calc(var(--offset) * -1)) scale(1.3); filter: drop-shadow(0 0 6px var(--go-color)); }
}`,
	},
	{
		id: "65",
		name: "Viscous Wave",
		category: "waves",
		tags: ["liquid-blur","gooey-merging","fluid-waves"],
		html: "<div class=\"demo-vwave\"><span></span><span></span><span></span><span></span></div>",
		css: `.demo-vwave {
  --vw-size: 52px;
  --vw-color: var(--color-primary);
  --vw-speed: calc(1.5s * var(--loader-speed-scale));
  width: var(--vw-size); height: var(--vw-size); position: relative;
  filter: blur(4px) contrast(12);
  display: flex; align-items: center; justify-content: space-around;
}
.demo-vwave span {
  width: 10px; height: 10px; border-radius: 50%; background: var(--vw-color);
  animation: d-vwave-slide var(--vw-speed) ease-in-out infinite;
}
.demo-vwave span:nth-child(1) { animation-delay: 0s; }
.demo-vwave span:nth-child(2) { animation-delay: calc(var(--vw-speed) * -0.25); }
.demo-vwave span:nth-child(3) { animation-delay: calc(var(--vw-speed) * -0.5); }
.demo-vwave span:nth-child(4) { animation-delay: calc(var(--vw-speed) * -0.75); }
@keyframes d-vwave-slide {
  0%, 100% { transform: translateY(-12px) scale(1); }
  50% { transform: translateY(12px) scale(1.3); }
}`,
	},
	{
		id: "66",
		name: "Crystalline Star",
		category: "special",
		tags: ["crystal-pulse","shimmering-nodes","star-geometry"],
		html: "<div class=\"demo-cstar\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-cstar {
  --cs-size: 50px;
  --cs-color: var(--color-primary);
  --cs-speed: calc(1.2s * var(--loader-speed-scale));
  width: var(--cs-size); height: var(--cs-size); position: relative;
}
.demo-cstar span {
  position: absolute; width: 20%; height: 20%; border-radius: 50%;
  background: var(--cs-color); animation: d-cstar-pulse var(--cs-speed) ease-in-out var(--loader-cycles);
}
.demo-cstar span:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); animation-delay: calc(var(--cs-speed) * -0.875); }
.demo-cstar span:nth-child(2) { top: 14.6%; left: 85.4%; transform: translate(-50%, -50%); animation-delay: calc(var(--cs-speed) * -0.75); }
.demo-cstar span:nth-child(3) { top: 50%; left: 100%; transform: translateY(-50%); animation-delay: calc(var(--cs-speed) * -0.625); }
.demo-cstar span:nth-child(4) { top: 85.4%; left: 85.4%; transform: translate(-50%, -50%); animation-delay: calc(var(--cs-speed) * -0.5); }
.demo-cstar span:nth-child(5) { top: 100%; left: 50%; transform: translateX(-50%); animation-delay: calc(var(--cs-speed) * -0.375); }
.demo-cstar span:nth-child(6) { top: 85.4%; left: 14.6%; transform: translate(-50%, -50%); animation-delay: calc(var(--cs-speed) * -0.25); }
.demo-cstar span:nth-child(7) { top: 50%; left: 0; transform: translateY(-50%); animation-delay: calc(var(--cs-speed) * -0.125); }
.demo-cstar span:nth-child(8) { top: 14.6%; left: 14.6%; transform: translate(-50%, -50%); animation-delay: 0s; }
@keyframes d-cstar-pulse {
  0%, 100% { transform: scale(0.6); opacity: 0.25; }
  50% { transform: scale(1.2); opacity: 1; filter: drop-shadow(0 0 4px var(--cs-color)); }
}`,
	},
	{
		id: "67",
		name: "Spiral Coil",
		category: "spinners",
		tags: ["dual-arc","counter-rotation","coil-twist","spinners"],
		html: "<div class=\"demo-scoil\"><span></span><span></span></div>",
		css: `.demo-scoil {
  --sc-size: 48px;
  --sc-color: var(--color-primary);
  --sc-speed: calc(1.2s * var(--loader-speed-scale));
  width: var(--sc-size); height: var(--sc-size); position: relative;
  display: inline-flex;
}
.demo-scoil span {
  position: absolute; inset: 0; border-radius: 50%;
  border: 3px solid transparent;
  animation: d-scoil-spin var(--sc-speed) linear var(--loader-cycles);
}
.demo-scoil span:nth-child(1) {
  border-top-color: var(--sc-color);
  border-right-color: var(--sc-color);
}
.demo-scoil span:nth-child(2) {
  border-bottom-color: var(--sc-color);
  border-left-color: var(--sc-color);
  animation-direction: reverse;
  animation-duration: calc(var(--sc-speed) * 0.7);
}
@keyframes d-scoil-spin { to { transform: rotate(360deg); } }`,
	},
	{
		id: "68",
		name: "Orbit Chain",
		category: "spinners",
		tags: ["css-motion-path","orbit","chain-dots","spinners"],
		html: "<div class=\"demo-ochain\"><span></span><span></span><span></span></div>",
		css: `.demo-ochain {
  --oc-size: 50px;
  --oc-color: var(--color-primary);
  --oc-speed: calc(1.5s * var(--loader-speed-scale));
  width: var(--oc-size); height: var(--oc-size); position: relative;
}
.demo-ochain span {
  position: absolute;
  width: 18%; height: 18%; border-radius: 50%;
  background: var(--oc-color);
  offset-path: circle(38% at 50% 50%);
  offset-distance: 0%;
  animation: d-ochain-orbit var(--oc-speed) linear var(--loader-cycles);
}
.demo-ochain span:nth-child(1) { animation-delay: 0s; }
.demo-ochain span:nth-child(2) { animation-delay: calc(var(--oc-speed) / -3); opacity: 0.6; }
.demo-ochain span:nth-child(3) { animation-delay: calc(var(--oc-speed) * -2 / 3); opacity: 0.3; }
@keyframes d-ochain-orbit { to { offset-distance: 100%; } }`,
	},
	{
		id: "69",
		name: "Scanning Line",
		category: "special",
		tags: ["scan","glow-line","security","special"],
		html: "<div class=\"demo-scanl\"><span></span></div>",
		css: `.demo-scanl {
  --sl-size: 48px;
  --sl-color: var(--color-primary);
  --sl-speed: calc(1.4s * var(--loader-speed-scale));
  width: var(--sl-size); height: var(--sl-size); position: relative;
  overflow: hidden; border-radius: 6px;
  border: 1.5px solid color-mix(in srgb, var(--sl-color) 25%, transparent);
  background: color-mix(in srgb, var(--sl-color) 5%, transparent);
}
.demo-scanl span {
  position: absolute; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--sl-color) 40%, #fff 50%, var(--sl-color) 60%, transparent 100%);
  box-shadow: 0 0 6px var(--sl-color), 0 0 14px var(--sl-color);
  animation: d-scanl-sweep var(--sl-speed) ease-in-out var(--loader-cycles);
}
@keyframes d-scanl-sweep {
  0%, 100% { top: 0; opacity: 1; }
  48% { top: calc(100% - 2px); opacity: 0.8; }
  50% { top: calc(100% - 2px); opacity: 0.6; }
}`,
	},
	{
		id: "70",
		name: "Morphing Blob",
		category: "special",
		tags: ["blob","organic","border-radius-morph","special"],
		html: "<div class=\"demo-mblob\"></div>",
		css: `.demo-mblob {
  --mb-size: 44px;
  --mb-color: var(--color-primary);
  --mb-speed: calc(2.4s * var(--loader-speed-scale));
  width: var(--mb-size); height: var(--mb-size);
  background: var(--mb-color);
  filter: drop-shadow(0 0 7px var(--mb-color));
  animation: d-mblob-morph var(--mb-speed) ease-in-out var(--loader-cycles);
}
@keyframes d-mblob-morph {
  0%, 100% { border-radius: 50%; transform: rotate(0deg) scale(1); }
  20% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(72deg) scale(1.05); }
  40% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(144deg) scale(0.93); }
  60% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(216deg) scale(1.08); }
  80% { border-radius: 70% 30% 50% 50% / 30% 70% 70% 30%; transform: rotate(288deg) scale(0.96); }
}`,
	},
	{
		id: "71",
		name: "Activity Spokes",
		category: "spinners",
		tags: ["spokes","sequential-fade","activity-indicator","ios-style"],
		html: "<div class=\"demo-aspoke\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-aspoke {
  --as-size: 48px;
  --as-color: var(--color-primary);
  --as-speed: calc(0.8s * var(--loader-speed-scale));
  width: var(--as-size); height: var(--as-size); position: relative;
  display: inline-flex;
}
.demo-aspoke span {
  position: absolute;
  width: 11%; height: 30%;
  left: 44.5%; top: 14%;
  border-radius: 9999px;
  background: var(--as-color);
  transform-origin: 50% 120%;
  opacity: 0.15;
  animation: d-aspoke-fade var(--as-speed) linear var(--loader-cycles);
}
.demo-aspoke span:nth-child(1) { transform: rotate(0deg);   animation-delay: calc(var(--as-speed) * -0.875); }
.demo-aspoke span:nth-child(2) { transform: rotate(45deg);  animation-delay: calc(var(--as-speed) * -0.75);  }
.demo-aspoke span:nth-child(3) { transform: rotate(90deg);  animation-delay: calc(var(--as-speed) * -0.625); }
.demo-aspoke span:nth-child(4) { transform: rotate(135deg); animation-delay: calc(var(--as-speed) * -0.5);   }
.demo-aspoke span:nth-child(5) { transform: rotate(180deg); animation-delay: calc(var(--as-speed) * -0.375); }
.demo-aspoke span:nth-child(6) { transform: rotate(225deg); animation-delay: calc(var(--as-speed) * -0.25);  }
.demo-aspoke span:nth-child(7) { transform: rotate(270deg); animation-delay: calc(var(--as-speed) * -0.125); }
.demo-aspoke span:nth-child(8) { transform: rotate(315deg); animation-delay: 0s; }
@keyframes d-aspoke-fade {
  0%        { opacity: 1; }
  75%, 100% { opacity: 0.12; }
}`,
	},
	{
		id: "72",
		name: "Kinetic Loom",
		category: "spinners",
		tags: ["geometric","minimal","slide","border"],
		html: "<div class=\"demo-kloom\"><span></span><span></span><span></span><span></span></div>",
		css: `.demo-kloom {
  width: 32px; height: 32px; position: relative;
}
.demo-kloom span {
  position: absolute; background: var(--color-primary);
}
.demo-kloom span:nth-child(1) { top: 0; left: 0; height: 2px; width: 0; animation: kloom-top calc(1.6s * var(--loader-speed-scale)) ease-in-out infinite; }
.demo-kloom span:nth-child(2) { top: 0; right: 0; width: 2px; height: 0; animation: kloom-right calc(1.6s * var(--loader-speed-scale)) ease-in-out infinite; animation-delay: calc(0.4s * var(--loader-speed-scale)); }
.demo-kloom span:nth-child(3) { bottom: 0; right: 0; height: 2px; width: 0; animation: kloom-bottom calc(1.6s * var(--loader-speed-scale)) ease-in-out infinite; animation-delay: calc(0.8s * var(--loader-speed-scale)); }
.demo-kloom span:nth-child(4) { bottom: 0; left: 0; width: 2px; height: 0; animation: kloom-left calc(1.6s * var(--loader-speed-scale)) ease-in-out infinite; animation-delay: calc(1.2s * var(--loader-speed-scale)); }
@keyframes kloom-top { 0% { width: 0; left: 0; } 25% { width: 100%; left: 0; } 50% { width: 0; left: 100%; } 100% { width: 0; left: 100%; } }
@keyframes kloom-right { 0% { height: 0; top: 0; } 25% { height: 100%; top: 0; } 50% { height: 0; top: 100%; } 100% { height: 0; top: 100%; } }
@keyframes kloom-bottom { 0% { width: 0; right: 0; } 25% { width: 100%; right: 0; } 50% { width: 0; right: 100%; } 100% { width: 0; right: 100%; } }
@keyframes kloom-left { 0% { height: 0; bottom: 0; } 25% { height: 100%; bottom: 0; } 50% { height: 0; bottom: 100%; } 100% { height: 0; bottom: 100%; } }`,
	},
	{
		id: "73",
		name: "Cellular Division",
		category: "special",
		tags: ["gooey","organic","scale","physics"],
		html: "<div class=\"demo-cdiv\"><span></span><span></span></div>",
		css: `.demo-cdiv {
  width: 48px; height: 48px; position: relative;
  filter: blur(4px) contrast(12); display: inline-flex; background: transparent;
}
.demo-cdiv span {
  position: absolute; top: 16px; left: 16px; width: 16px; height: 16px;
  border-radius: 50%; background: var(--color-success);
}
.demo-cdiv span:nth-child(1) {
  animation: cdiv-left calc(1.8s * var(--loader-speed-scale)) ease-in-out infinite;
}
.demo-cdiv span:nth-child(2) {
  animation: cdiv-right calc(1.8s * var(--loader-speed-scale)) ease-in-out infinite;
}
@keyframes cdiv-left {
  0%, 100% { transform: translateX(0) scale(1.0); }
  30% { transform: translateX(-8px) scale(1.2); }
  60% { transform: translateX(-14px) scale(0.85); opacity: 0.9; }
  80% { transform: translateX(-4px) scale(0.95); }
}
@keyframes cdiv-right {
  0%, 100% { transform: translateX(0) scale(1.0); }
  30% { transform: translateX(8px) scale(1.2); }
  60% { transform: translateX(14px) scale(0.85); opacity: 0.9; }
  80% { transform: translateX(4px) scale(0.95); }
}`,
	},
	{
		id: "74",
		name: "Glitch Barcode",
		category: "special",
		tags: ["cyberpunk","flicker","minimal","glitch"],
		html: "<div class=\"demo-gbar\"><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-gbar {
  display: flex; gap: 4px; align-items: center; height: 32px;
}
.demo-gbar span {
  width: 3px; height: 24px; background: var(--color-danger);
  animation: gbar-anim calc(1.0s * var(--loader-speed-scale)) steps(4) infinite;
}
.demo-gbar span:nth-child(1) { height: 18px; animation-delay: calc(-0.15s * var(--loader-speed-scale)); }
.demo-gbar span:nth-child(2) { width: 5px; height: 28px; animation-delay: calc(-0.35s * var(--loader-speed-scale)); }
.demo-gbar span:nth-child(3) { height: 14px; animation-delay: calc(-0.05s * var(--loader-speed-scale)); }
.demo-gbar span:nth-child(4) { width: 2px; height: 22px; animation-delay: calc(-0.55s * var(--loader-speed-scale)); }
.demo-gbar span:nth-child(5) { height: 26px; animation-delay: calc(-0.25s * var(--loader-speed-scale)); }
@keyframes gbar-anim {
  0%, 100% { transform: scaleY(1) translateX(0); opacity: 1; }
  20% { transform: scaleY(0.6) translateX(1px); opacity: 0.85; }
  40% { transform: scaleY(1.1) translateX(-1px); opacity: 0.95; }
  60% { transform: scaleY(0.4) translateX(2px); opacity: 0.75; }
  80% { transform: scaleY(1.2) translateX(-2px); opacity: 1; }
}`,
	},
	{
		id: "75",
		name: "Infinite Maze",
		category: "special",
		tags: ["translate","geometric","minimal","path"],
		html: "<div class=\"demo-imaze\"><span></span></div>",
		css: `.demo-imaze {
  width: 32px; height: 32px; position: relative;
  border: 2px solid rgba(127,119,221,0.15); border-radius: 4px;
}
.demo-imaze span {
  position: absolute; width: 6px; height: 6px; border-radius: 50%;
  background: var(--color-primary); box-shadow: 0 0 8px var(--color-primary);
  animation: imaze-anim calc(2.4s * var(--loader-speed-scale)) linear infinite;
}
@keyframes imaze-anim {
  0% { top: -4px; left: -4px; }
  25% { top: -4px; left: calc(100% - 2px); }
  50% { top: calc(100% - 2px); left: calc(100% - 2px); }
  75% { top: calc(100% - 2px); left: -4px; }
  100% { top: -4px; left: -4px; }
}`,
	},
	{
		id: "76",
		name: "Concentric Chevrons",
		category: "waves",
		tags: ["direction","arrows","stagger","progress"],
		html: "<div class=\"demo-cchev\"><span></span><span></span><span></span></div>",
		css: `.demo-cchev {
  display: flex; gap: 6px; align-items: center; justify-content: center;
}
.demo-cchev span {
  width: 8px; height: 8px; position: relative; display: block;
}
.demo-cchev span::before, .demo-cchev span::after {
  content: ''; position: absolute; background: var(--color-warning);
  border-radius: 2px;
}
.demo-cchev span::before {
  width: 2px; height: 8px; top: 0; left: 1px;
  transform: rotate(-45deg); transform-origin: top left;
}
.demo-cchev span::after {
  width: 2px; height: 8px; bottom: 0; left: 1px;
  transform: rotate(45deg); transform-origin: bottom left;
}
.demo-cchev span {
  opacity: 0.15; transform: scale(0.9);
  animation: cchev-anim calc(1.2s * var(--loader-speed-scale)) ease-in-out infinite;
}
.demo-cchev span:nth-child(2) { animation-delay: calc(0.2s * var(--loader-speed-scale)); }
.demo-cchev span:nth-child(3) { animation-delay: calc(0.4s * var(--loader-speed-scale)); }
@keyframes cchev-anim {
  0%, 100% { opacity: 0.15; transform: scale(0.9); }
  40% { opacity: 1.0; transform: scale(1.15); }
  60% { opacity: 0.4; transform: scale(1.0); }
}`,
	},
	{
		id: "77",
		name: "Typewriter Cursor",
		category: "special",
		tags: ["blink","cursor","minimal","text"],
		html: "<div class=\"demo-tcur\"><span></span></div>",
		css: `.demo-tcur {
  display: inline-flex; align-items: center; justify-content: center;
  width: 12px; height: 28px;
}
.demo-tcur span {
  width: 2.5px; height: 100%; border-radius: 2px;
  background: var(--color-primary);
  animation: tcur-blink calc(1.0s * var(--loader-speed-scale)) steps(2, start) var(--loader-cycles);
}
@keyframes tcur-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`,
	},
	{
		id: "78",
		name: "Ripple Target",
		category: "special",
		tags: ["concentric","radar","pulse","crosshair"],
		html: "<div class=\"demo-rtgt\"><span></span><span></span><span></span></div>",
		css: `.demo-rtgt {
  width: 36px; height: 36px; position: relative;
  display: inline-flex; align-items: center; justify-content: center;
}
.demo-rtgt::before, .demo-rtgt::after {
  content: ''; position: absolute; background: var(--color-primary);
}
.demo-rtgt::before { width: 100%; height: 1.5px; }
.demo-rtgt::after { width: 1.5px; height: 100%; }
.demo-rtgt span {
  position: absolute; inset: 0; border-radius: 50%;
  border: 1.5px solid var(--color-primary); opacity: 0;
  animation: rtgt-ripple calc(2.4s * var(--loader-speed-scale)) ease-out var(--loader-cycles);
}
.demo-rtgt span:nth-child(2) { animation-delay: calc(0.8s * var(--loader-speed-scale)); }
.demo-rtgt span:nth-child(3) { animation-delay: calc(1.6s * var(--loader-speed-scale)); }
@keyframes rtgt-ripple {
  0% { transform: scale(0.2); opacity: 0.9; }
  100% { transform: scale(1.0); opacity: 0; }
}`,
	},
	{
		id: "79",
		name: "Domino Fall",
		category: "waves",
		tags: ["perspective","rotateX","stagger","3d"],
		html: "<div class=\"demo-dfall\"><span></span><span></span><span></span><span></span><span></span></div>",
		css: `.demo-dfall {
  display: flex; gap: 4px; align-items: flex-end; height: 32px;
  perspective: 200px;
}
.demo-dfall span {
  width: 5px; height: 24px; border-radius: 2px;
  background: var(--color-warning);
  transform-origin: bottom center;
  animation: dfall-topple calc(1.5s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-dfall span:nth-child(2) { animation-delay: calc(0.12s * var(--loader-speed-scale)); }
.demo-dfall span:nth-child(3) { animation-delay: calc(0.24s * var(--loader-speed-scale)); }
.demo-dfall span:nth-child(4) { animation-delay: calc(0.36s * var(--loader-speed-scale)); }
.demo-dfall span:nth-child(5) { animation-delay: calc(0.48s * var(--loader-speed-scale)); }
@keyframes dfall-topple {
  0%, 100% { transform: rotateX(0deg); }
  35% { transform: rotateX(-70deg); }
  65% { transform: rotateX(-70deg); }
  85% { transform: rotateX(5deg); }
}`,
	},
	{
		id: "80",
		name: "Traffic Signal",
		category: "special",
		tags: ["sequential-color","dots","progress","semaphore"],
		html: "<div class=\"demo-tsig\"><span></span><span></span><span></span></div>",
		css: `.demo-tsig {
  display: flex; flex-direction: column; gap: 4px;
  align-items: center; justify-content: center;
  padding: 4px; border-radius: 10px;
  background: rgba(0,0,0,0.08);
}
.demo-tsig span {
  width: 8px; height: 8px; border-radius: 50%;
  background: #555; opacity: 0.25;
}
.demo-tsig span:nth-child(1) {
  animation: tsig-red calc(2.4s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-tsig span:nth-child(2) {
  animation: tsig-yellow calc(2.4s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
.demo-tsig span:nth-child(3) {
  animation: tsig-green calc(2.4s * var(--loader-speed-scale)) ease-in-out var(--loader-cycles);
}
@keyframes tsig-red {
  0%, 30% { background: #E24B4A; opacity: 1; box-shadow: 0 0 8px #E24B4A; }
  35%, 100% { background: #555; opacity: 0.25; box-shadow: none; }
}
@keyframes tsig-yellow {
  0%, 30% { background: #555; opacity: 0.25; box-shadow: none; }
  35%, 65% { background: #EF9F27; opacity: 1; box-shadow: 0 0 8px #EF9F27; }
  70%, 100% { background: #555; opacity: 0.25; box-shadow: none; }
}
@keyframes tsig-green {
  0%, 65% { background: #555; opacity: 0.25; box-shadow: none; }
  70%, 100% { background: #1D9E75; opacity: 1; box-shadow: 0 0 8px #1D9E75; }
}`,
	},
	{
		id: "81",
		name: "Diamond Morph",
		category: "spinners",
		tags: ["rotate","border-radius","morph","geometric"],
		html: "<div class=\"demo-dmorph\"><span></span></div>",
		css: `.demo-dmorph {
  width: 32px; height: 32px; display: inline-flex;
  align-items: center; justify-content: center;
}
.demo-dmorph span {
  width: 100%; height: 100%;
  background: var(--color-primary);
  animation: dmorph-spin calc(2.0s * var(--loader-speed-scale)) cubic-bezier(0.68, -0.55, 0.27, 1.55) var(--loader-cycles);
}
@keyframes dmorph-spin {
  0% { border-radius: 50%; transform: rotate(0deg) scale(0.8); }
  25% { border-radius: 10%; transform: rotate(90deg) scale(1.0); }
  50% { border-radius: 50%; transform: rotate(180deg) scale(0.8); }
  75% { border-radius: 10%; transform: rotate(270deg) scale(1.0); }
  100% { border-radius: 50%; transform: rotate(360deg) scale(0.8); }
}`,
	},
];
