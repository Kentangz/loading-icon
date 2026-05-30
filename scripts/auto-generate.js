/**
 * Autonomous Batch Loader Generator — LoadIcons
 * ─────────────────────────────────────────────────────────────
 * This script is executed every 5 hours by the background cron.
 * It automates the entire lifecycle of a loader:
 *   1. Reads state from scripts/.auto-state.json.
 *   2. Determines the next sequential ID (NN).
 *   3. Deploys pre-planned premium HTML/CSS/Metadata assets.
 *   4. Compiles registry (loaders-data.js).
 *   5. Runs verification tests (lint-loaders.js).
 *   6. Automatically updates README.md in all 5 regions.
 *   7. Commits changes to the local batch branch (feat/loaders-NN-MM).
 *   8. Once 5 icons are accumulated, it pushes the branch to remote.
 * ─────────────────────────────────────────────────────────────
 * Usage: node scripts/auto-generate.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const WORKSPACE = path.resolve(__dirname, "..");
const ICONS_DIR = path.join(WORKSPACE, "icons");
const STATE_PATH = path.join(WORKSPACE, "scripts", ".auto-state.json");
const README_PATH = path.join(WORKSPACE, "README.md");

const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

let concept = null;
const conceptArgIndex = process.argv.indexOf("--concept");
if (conceptArgIndex !== -1 && process.argv[conceptArgIndex + 1]) {
  const conceptPath = path.resolve(process.argv[conceptArgIndex + 1]);
  if (fs.existsSync(conceptPath)) {
    try {
      concept = JSON.parse(fs.readFileSync(conceptPath, "utf8"));
      console.log(`Loaded dynamic concept from: ${conceptPath}`);
    } catch (e) {
      console.error(`Error parsing dynamic concept file: ${e.message}`);
      process.exit(1);
    }
  } else {
    console.error(`Dynamic concept file not found at: ${conceptPath}`);
    process.exit(1);
  }
} else {
  console.error(`${COLORS.red}✘ Error: No dynamic concept provided. Usage: node scripts/auto-generate.js --concept <path-to-json>${COLORS.reset}`);
  process.exit(1);
}

// ══════════════════════════════════════════════════════════════
// BATCH CONTROLLER LOGIC
// ══════════════════════════════════════════════════════════════

// 1. Load Staged State
let state = { stagedIcons: [] };
if (fs.existsSync(STATE_PATH)) {
  try {
    state = JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
  } catch (e) {
    console.warn("Could not parse state file, resetting.");
  }
}

// 2. Scan folders to determine next ID
const folders = fs.readdirSync(ICONS_DIR).filter((f) => {
  return fs.statSync(path.join(ICONS_DIR, f)).isDirectory() && /^\d{2}-/.test(f);
});
folders.sort();
const currentMaxId = folders.length > 0 ? parseInt(folders[folders.length - 1].substring(0, 2)) : 56;
const nextId = currentMaxId + 1;

console.log(`Current Maximum ID: ${currentMaxId}`);
console.log(`Next Sequential ID to Deploy: ${nextId}`);

const folderName = `${String(nextId).padStart(2, "0")}-${concept.kebab}`;
const folderPath = path.join(ICONS_DIR, folderName);

// Create new folder
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

// 3. Deploy Standalone CSS File
const cssPath = path.join(folderPath, `${concept.kebab}.css`);
fs.writeFileSync(cssPath, concept.standaloneCss, "utf8");
console.log(`✔ Created standalone stylesheet: ${cssPath}`);

// 4. Deploy Standalone HTML File
const htmlPath = path.join(folderPath, "index.html");
const demoHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${concept.name} — LoadIcons</title>
  <link rel="stylesheet" href="${concept.kebab}.css" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8f8f6; color: #1a1a1a; padding: 2rem; }
    h1   { font-size: 1.25rem; font-weight: 600; margin-bottom: .2rem; }
    .sub { font-size: .85rem; color: #666; margin-bottom: 2rem; }
    .section-title { font-size:.7rem; text-transform:uppercase; letter-spacing:.08em; color:#aaa; margin-bottom:1rem; }
    .demo-row  { display:flex; align-items:center; gap:2.5rem; flex-wrap:wrap; margin-bottom:2.5rem; }
    .demo-block { display:flex; flex-direction:column; align-items:center; gap:.65rem; }
    .demo-block span { font-size:.75rem; color:#888; }
    .dark-bg { background:#1a1a1a; padding:1.25rem 1.75rem; border-radius:8px; }
    pre { background:#f0f0ee; border-radius:8px; padding:1rem; font-size:.78rem; overflow-x:auto; color:#333; }
  </style>
</head>
<body>
  <h1>${String(nextId).padStart(2, "0")} · ${concept.name}</h1>
  <p class="sub">Sinusoidal kinetic loading animation. Pure CSS.</p>

  <h2 class="section-title">Size variants</h2>
  <div class="demo-row">
    <div class="demo-block">
      <div class="${concept.kebab} ${concept.kebab}--sm" role="status" aria-label="Loading">${concept.html.replace(/demo-[a-z]+/g, concept.kebab)}</div>
      <span>sm</span>
    </div>
    <div class="demo-block">
      <div class="${concept.kebab} ${concept.kebab}--md" role="status" aria-label="Loading">${concept.html.replace(/demo-[a-z]+/g, concept.kebab)}</div>
      <span>md (default)</span>
    </div>
    <div class="demo-block">
      <div class="${concept.kebab} ${concept.kebab}--lg" role="status" aria-label="Loading">${concept.html.replace(/demo-[a-z]+/g, concept.kebab)}</div>
      <span>lg</span>
    </div>
  </div>

  <h2 class="section-title">Color presets</h2>
  <div class="demo-row">
    <div class="demo-block"><div class="${concept.kebab} ${concept.kebab}--primary" role="status" aria-label="Loading">${concept.html.replace(/demo-[a-z]+/g, concept.kebab)}</div><span>primary</span></div>
    <div class="demo-block"><div class="${concept.kebab} ${concept.kebab}--success" role="status" aria-label="Loading">${concept.html.replace(/demo-[a-z]+/g, concept.kebab)}</div><span>success</span></div>
    <div class="demo-block"><div class="${concept.kebab} ${concept.kebab}--warning" role="status" aria-label="Loading">${concept.html.replace(/demo-[a-z]+/g, concept.kebab)}</div><span>warning</span></div>
    <div class="demo-block"><div class="${concept.kebab} ${concept.kebab}--danger" role="status" aria-label="Loading">${concept.html.replace(/demo-[a-z]+/g, concept.kebab)}</div><span>danger</span></div>
    <div class="demo-block dark-bg">
      <div class="${concept.kebab} ${concept.kebab}--white" role="status" aria-label="Loading">${concept.html.replace(/demo-[a-z]+/g, concept.kebab)}</div>
      <span style="color:#555">white</span>
    </div>
  </div>

  <h2 class="section-title">Quick usage</h2>
  <pre>&lt;link rel="stylesheet" href="${concept.kebab}.css" /&gt;

&lt;div class="${concept.kebab}" role="status" aria-label="Loading"&gt;
  ${concept.html.replace(/demo-[a-z]+/g, concept.kebab).replace(/</g, "&lt;").replace(/>/g, "&gt;")}
&lt;/div&gt;</pre>
</body>
</html>`;
fs.writeFileSync(htmlPath, demoHtml, "utf8");
console.log(`✔ Created interactive HTML demo: ${htmlPath}`);

// 5. Deploy metadata.json
const metadataPath = path.join(folderPath, "metadata.json");
const metaDataObj = {
  name: concept.name,
  category: concept.category,
  tags: concept.tags,
  html: concept.html,
  css: concept.css
};
fs.writeFileSync(metadataPath, JSON.stringify(metaDataObj, null, 2), "utf8");
console.log(`✔ Created metadata.json registry descriptors`);

// 6. Update README.md in 5 Regions
console.log(`\nSynchronizing README.md for loader #${nextId}...`);
let readmeContent = fs.readFileSync(README_PATH, "utf8");

// 6.1 Catalog Table row insertion
const tableTarget = `| ${currentMaxId} |`;
const tableRow = `\n| ${String(nextId).padStart(2, "0")} | [${concept.name}](icons/${folderName}/) | ${concept.tags.slice(0, 2).join(" + ")} | Premium automated loaders |`;
const tableIndex = readmeContent.indexOf(tableTarget);
if (tableIndex !== -1) {
  const lineEnd = readmeContent.indexOf("\n", tableIndex);
  readmeContent = readmeContent.substring(0, lineEnd) + tableRow + readmeContent.substring(lineEnd);
}

// 6.2 Getting started HTML snippet
const htmlSnippetTarget = `<!-- ${currentMaxId} ·`;
const htmlCodeSnippet = `\n\n${concept.htmlSnippet}`;
const snippetIndex = readmeContent.indexOf(htmlSnippetTarget);
if (snippetIndex !== -1) {
  const blockEnd = readmeContent.indexOf("</div>", snippetIndex);
  const blockLineEnd = readmeContent.indexOf("\n", blockEnd);
  readmeContent = readmeContent.substring(0, blockLineEnd) + htmlCodeSnippet + readmeContent.substring(blockLineEnd);
}

// 6.3 Token Reference insertion
const tokenTarget = `| ${currentMaxId === 56 ? "Pulse Helix" : "Ticking Clock"} |`; // fallback matching
const tokenRow = `\n| ${concept.name} | ${concept.tokens} |`;
const tokenIndex = readmeContent.indexOf(tokenTarget);
if (tokenIndex !== -1) {
  const lineEnd = readmeContent.indexOf("\n", tokenIndex);
  readmeContent = readmeContent.substring(0, lineEnd) + tokenRow + readmeContent.substring(lineEnd);
}

// 6.4 Directory structure tree insertion
const treeTarget = `${folders[folders.length - 1]}/`;
const treeBranch = `\n    ├── ${folderName}/\n    │   ├── ${concept.kebab}.css\n    │   └── index.html`;
const treeIndex = readmeContent.lastIndexOf(treeTarget);
if (treeIndex !== -1) {
  // Find directory end (index.html line)
  const indexHtmlLine = readmeContent.indexOf("index.html", treeIndex);
  const lineEnd = readmeContent.indexOf("\n", indexHtmlLine);
  readmeContent = readmeContent.substring(0, lineEnd) + treeBranch + readmeContent.substring(lineEnd);
}

// 6.5 Reduced motion CSS class inclusion
const motionTarget = `.pulse-helix span`;
const motionClass = `, .${concept.kebab} span`;
const motionIndex = readmeContent.indexOf(motionTarget);
if (motionIndex !== -1) {
  readmeContent = readmeContent.substring(0, motionIndex + motionTarget.length) + motionClass + readmeContent.substring(motionIndex + motionTarget.length);
}

fs.writeFileSync(README_PATH, readmeContent, "utf8");
console.log(`✔ Synchronized README.md globally across 5 regions`);

// 7. Compile registry (loaders-data.js)
console.log("\nRecompiling registry loaders-data.js...");
execSync("node scripts/build-registry.js", { stdio: "inherit" });

// 8. Run verification tests
console.log("\nRunning validation linter...");
try {
  execSync("node scripts/lint-loaders.js", { stdio: "inherit" });
} catch (e) {
  console.error(`${COLORS.red}✘ Verification Linter failed! Automation stopped.${COLORS.reset}`);
  process.exit(1);
}

// ══════════════════════════════════════════════════════════════
// GIT BATCHING & STAGING LOGIC
// ══════════════════════════════════════════════════════════════
state.stagedIcons.push(folderName);

// Calculate batch numbers
const currentBatchSize = state.stagedIcons.length;
const startId = parseInt(state.stagedIcons[0].substring(0, 2));
const targetEndId = startId + 4; // Batch of 5 icons
const batchBranch = `feat/loaders-${startId}-${targetEndId}`;

console.log(`\nBatch Staging State: ${currentBatchSize}/5 loaders accumulated.`);
console.log(`Target Branch: ${batchBranch}`);

// Switch or checkout branch
try {
  // Check if branch exists
  const branches = execSync("git branch", { encoding: "utf8" });
  if (branches.includes(batchBranch)) {
    execSync(`git checkout ${batchBranch}`);
  } else {
    execSync(`git checkout -b ${batchBranch}`);
  }
} catch (err) {
  console.log(`Switching branch: ${err.message}`);
}

// Git add and commit locally (only stage files related to this specific loader)
const filesToStage = [
  path.relative(WORKSPACE, folderPath),
  "README.md",
  "loaders-data.js"
].map(f => `"${f.replace(/\\/g, "/")}"`).join(" ");

console.log(`Staging files: ${filesToStage}`);
execSync(`git add ${filesToStage}`, { stdio: "inherit" });
execSync(`git commit -m "feat: deploy and register loader #${nextId} (${concept.name})"`, { stdio: "inherit" });

if (currentBatchSize >= 5) {
  console.log(`\n${COLORS.bright}${COLORS.green}✔ Staged Batch of 5 icons reached! Preparing remote push...${COLORS.reset}`);
  
  // Push to remote
  execSync(`git push -u origin ${batchBranch}`, { stdio: "inherit" });
  
  console.log(`\n${COLORS.bright}${COLORS.green}✔ Cabang ${batchBranch} berhasil di-push ke GitHub!${COLORS.reset}`);
  console.log(`🔗 Silakan buat Pull Request Anda di:`);
  console.log(`   https://github.com/Kentangz/loading-icon/pull/new/${batchBranch}\n`);

  // Reset batch state
  state.stagedIcons = [];
} else {
  console.log(`\n${COLORS.bright}${COLORS.yellow}ℹ Local commit completed. Staging active at: ${currentBatchSize}/5. Pushing to GitHub is deferred until 5 icons are fully generated.${COLORS.reset}\n`);
}

// Save state
fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), "utf8");
process.exit(0);
