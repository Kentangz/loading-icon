/**
 * Registry Compiler Script — LoadIcons
 * ─────────────────────────────────────────────────────────────
 * This script scans all folders under icons/, parses their 
 * individual metadata.json files, sorts them by ID, and compiles 
 * a single, unified database inside loaders-data.js.
 * 
 * This enables decentralized icon generation where new icons are
 * fully defined inside their local folder and automatically integrated.
 * ─────────────────────────────────────────────────────────────
 * Usage: node scripts/build-registry.js
 */

const fs = require("fs");
const path = require("path");

const WORKSPACE = path.resolve(__dirname, "..");
const ICONS_DIR = path.join(WORKSPACE, "icons");
const REGISTRY_PATH = path.join(WORKSPACE, "loaders-data.js");

// Terminal styling helpers
const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

console.log(`\n${COLORS.bright}${COLORS.cyan}═══ Compiling Dynamic Loader Registry ═══${COLORS.reset}`);

if (!fs.existsSync(ICONS_DIR)) {
  console.error(`${COLORS.red}✘ Error: Directory icons/ not found at ${ICONS_DIR}${COLORS.reset}`);
  process.exit(1);
}

const folders = fs.readdirSync(ICONS_DIR).filter((f) => {
  return fs.statSync(path.join(ICONS_DIR, f)).isDirectory();
});

const folderPattern = /^(\d{2})-([a-z0-9-]+)$/;
const loadersList = [];

folders.forEach((folder) => {
  const match = folder.match(folderPattern);
  if (!match) {
    // Skip folders that don't match the sequential loader pattern
    return;
  }

  const id = match[1];
  const folderPath = path.join(ICONS_DIR, folder);
  const metadataPath = path.join(folderPath, "metadata.json");

  if (!fs.existsSync(metadataPath)) {
    console.warn(`${COLORS.yellow}⚠ Warning: '${folder}' is missing 'metadata.json'. Skipping registration.${COLORS.reset}`);
    return;
  }

  try {
    const rawMetadata = fs.readFileSync(metadataPath, "utf8");
    const parsed = JSON.parse(rawMetadata);
    
    // Construct the structured entry, injecting the sequential folder ID
    const entry = {
      id,
      name: parsed.name,
      category: parsed.category,
      tags: parsed.tags,
      html: parsed.html,
      css: parsed.css
    };

    loadersList.push(entry);
  } catch (err) {
    console.error(`${COLORS.red}✘ Error parsing metadata.json inside '${folder}': ${err.message}${COLORS.reset}`);
  }
});

// Sort ascending by numerical ID
loadersList.sort((a, b) => parseInt(a.id) - parseInt(b.id));

// Build loaders-data.js contents formatted cleanly
let compiledContent = `// DATA SOURCE FOR ALL LOADERS (EXTRACTED TO SEPARATE MODULAR REGISTRY)\n`;
compiledContent += `// Automatically compiled by node scripts/build-registry.js — DO NOT EDIT DIRECTLY\n`;
compiledContent += `const loaders = [\n`;

loadersList.forEach((loader) => {
  compiledContent += `\t{\n`;
  compiledContent += `\t\tid: ${JSON.stringify(loader.id)},\n`;
  compiledContent += `\t\tname: ${JSON.stringify(loader.name)},\n`;
  compiledContent += `\t\tcategory: ${JSON.stringify(loader.category)},\n`;
  compiledContent += `\t\ttags: ${JSON.stringify(loader.tags)},\n`;
  
  // Format HTML/CSS backticks beautifully to preserve multi-line layouts
  if (loader.html.includes('\n')) {
    compiledContent += `\t\thtml: \`${loader.html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,\n`;
  } else {
    compiledContent += `\t\thtml: ${JSON.stringify(loader.html)},\n`;
  }

  if (loader.css.includes('\n')) {
    compiledContent += `\t\tcss: \`${loader.css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,\n`;
  } else {
    compiledContent += `\t\tcss: ${JSON.stringify(loader.css)},\n`;
  }
  
  compiledContent += `\t},\n`;
});

compiledContent += `];\n`;

try {
  fs.writeFileSync(REGISTRY_PATH, compiledContent, "utf8");
  console.log(`${COLORS.green}✔ Dynamic Registry compiled successfully! Registered ${loadersList.length} loaders inside 'loaders-data.js'.${COLORS.reset}\n`);

  // Statically update loader counts in root index.html
  const INDEX_HTML_PATH = path.join(WORKSPACE, "index.html");
  if (fs.existsSync(INDEX_HTML_PATH)) {
    try {
      let indexHtml = fs.readFileSync(INDEX_HTML_PATH, "utf8");
      const count = loadersList.length;

      // 1. Update Title: <title>LoadIcons — 55 Reusable CSS Loading Icons</title>
      indexHtml = indexHtml.replace(/<title>LoadIcons — \d+ Reusable CSS Loading Icons<\/title>/g, `<title>LoadIcons — ${count} Reusable CSS Loading Icons</title>`);

      // 2. Update Meta description: <meta name="description" content="55 lightweight..." />
      indexHtml = indexHtml.replace(/<meta name="description" content="\d+ lightweight, dependency-free/g, `<meta name="description" content="${count} lightweight, dependency-free`);

      // 3. Update Tagline: <p class="tagline">Interactive design playground for 55 lightweight...
      indexHtml = indexHtml.replace(/Interactive design playground for \d+ lightweight, pure-CSS/g, `Interactive design playground for ${count} lightweight, pure-CSS`);

      // 4. Update Nav Pill Count: <span class="nav-pill-count" id="count-all">55</span>
      indexHtml = indexHtml.replace(/<span class="nav-pill-count" id="count-all">\d+<\/span>/g, `<span class="nav-pill-count" id="count-all">${count}</span>`);

      // 5. Update Results Count: <span id="results-count">Showing 55 indicators</span>
      indexHtml = indexHtml.replace(/<span id="results-count">Showing \d+ indicators<\/span>/g, `<span id="results-count">Showing ${count} indicators</span>`);

      fs.writeFileSync(INDEX_HTML_PATH, indexHtml, "utf8");
      console.log(`${COLORS.green}✔ Updated index.html statically to show ${count} loaders.${COLORS.reset}\n`);
    } catch (err) {
      console.warn(`${COLORS.yellow}⚠ Warning: Could not update index.html: ${err.message}${COLORS.reset}\n`);
    }
  }

  process.exit(0);
} catch (e) {
  console.error(`${COLORS.red}✘ Failed to write loaders-data.js: ${e.message}${COLORS.reset}`);
  process.exit(1);
}
