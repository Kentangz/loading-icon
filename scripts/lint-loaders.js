/**
 * Automated Loader Validator & Linter — LoadIcons
 * ─────────────────────────────────────────────────────────────
 * This script statically analyzes all CSS/HTML files, registry
 * data, and documentation to guarantee that any new or existing
 * loader adheres 100% to the strict blueprints in architecture.md.
 * 
 * To ensure backwards compatibility with existing users, older
 * icons (ID < 56) are permitted warnings for legacy names,
 * while new icons (ID >= 56) must strictly pass all criteria.
 * ─────────────────────────────────────────────────────────────
 * Usage: node scripts/lint-loaders.js
 * Exit Code: 0 on success, 1 on validation error
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const HISTORICAL_THRESHOLD = 56;

// Terminal styling helpers
const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
};

function logHeader(msg) {
  console.log(`\n${COLORS.bright}${COLORS.cyan}═══ ${msg} ═══${COLORS.reset}`);
}

function logSuccess(msg) {
  console.log(`${COLORS.green}✔ ${msg}${COLORS.reset}`);
}

function logWarning(msg) {
  console.log(`${COLORS.yellow}⚠ ${msg}${COLORS.reset}`);
}

function logError(msg) {
  console.log(`${COLORS.red}✘ ${msg}${COLORS.reset}`);
}

// Global counters
let errorsCount = 0;
let warningsCount = 0;

function reportError(file, isHistorical, message, detail = "") {
  if (isHistorical) {
    warningsCount++;
    const label = file ? `[${path.basename(file)}] ` : "";
    logWarning(`(Legacy Warning) ${label}${message}`);
    if (detail) console.log(`   ${COLORS.yellow}↳ ${detail}${COLORS.reset}`);
  } else {
    errorsCount++;
    const label = file ? `[${path.basename(file)}] ` : "";
    logError(`${label}${message}`);
    if (detail) console.log(`   ${COLORS.red}↳ ${detail}${COLORS.reset}`);
  }
}

function reportWarning(file, message, detail = "") {
  warningsCount++;
  const label = file ? `[${path.basename(file)}] ` : "";
  logWarning(`${label}${message}`);
  if (detail) console.log(`   ${COLORS.yellow}↳ ${detail}${COLORS.reset}`);
}

// Main operational workspace paths
const WORKSPACE = path.resolve(__dirname, "..");
const ICONS_DIR = path.join(WORKSPACE, "icons");
const REGISTRY_PATH = path.join(WORKSPACE, "loaders-data.js");
const README_PATH = path.join(WORKSPACE, "README.md");

// ══════════════════════════════════════════════════════════════
// 1. SCAN DIRECTORIES & VALIDATE INTEGRITY
// ══════════════════════════════════════════════════════════════
logHeader("1. Scanning Directories & Integrity");

if (!fs.existsSync(ICONS_DIR)) {
  console.log(`${COLORS.red}✘ Directory icons/ not found at ${ICONS_DIR}${COLORS.reset}`);
  process.exit(1);
}

const folders = fs.readdirSync(ICONS_DIR).filter((f) => {
  return fs.statSync(path.join(ICONS_DIR, f)).isDirectory();
});

const folderPattern = /^(\d{2})-([a-z0-9-]+)$/;
const validatedIcons = []; // array of { id, folder, kebab, cssFile, htmlFile, isHistorical }

folders.forEach((folder) => {
  const match = folder.match(folderPattern);
  if (!match) {
    errorsCount++;
    logError(`Folder '${folder}' violates naming convention (must be 'NN-kebab-case')`);
    return;
  }

  const id = match[1];
  const kebab = match[2];
  const isHistorical = parseInt(id) < HISTORICAL_THRESHOLD;
  const folderPath = path.join(ICONS_DIR, folder);
  
  // Suffix rules for stylesheet
  let cssFile = `${kebab}.css`;
  
  // Historical exceptions list
  if (id === "01") {
    cssFile = "spinner.css";
  }

  const cssPath = path.join(folderPath, cssFile);
  const htmlPath = path.join(folderPath, "index.html");
  const metadataPath = path.join(folderPath, "metadata.json");

  let integrityOk = true;

  if (!fs.existsSync(htmlPath)) {
    reportError(null, isHistorical, `Folder '${folder}' is missing 'index.html'`);
    integrityOk = false;
  }

  if (!fs.existsSync(cssPath)) {
    reportError(null, isHistorical, `Folder '${folder}' is missing '${cssFile}'`);
    integrityOk = false;
  }

  if (!fs.existsSync(metadataPath)) {
    reportError(null, isHistorical, `Folder '${folder}' is missing 'metadata.json'`);
    integrityOk = false;
  } else {
    try {
      const raw = fs.readFileSync(metadataPath, "utf8");
      const parsed = JSON.parse(raw);
      const reqs = ["name", "category", "tags", "html", "css"];
      reqs.forEach((r) => {
        if (parsed[r] === undefined || parsed[r] === null || parsed[r] === "") {
          reportError(metadataPath, isHistorical, `Metadata is missing required field: '${r}'`);
          integrityOk = false;
        }
      });
    } catch (e) {
      reportError(metadataPath, isHistorical, `Invalid JSON in metadata.json: ${e.message}`);
      integrityOk = false;
    }
  }

  if (integrityOk) {
    validatedIcons.push({
      id,
      folder,
      kebab,
      cssPath,
      htmlPath,
      cssFile,
      metadataPath,
      isHistorical,
    });
  }
});

// Verify consecutive order
validatedIcons.sort((a, b) => parseInt(a.id) - parseInt(b.id));
for (let i = 0; i < validatedIcons.length; i++) {
  const expectedNum = String(i + 1).padStart(2, "0");
  if (validatedIcons[i].id !== expectedNum) {
    reportWarning(
      null,
      `Sequence gap or numbering mismatch. Expected ID '${expectedNum}', got '${validatedIcons[i].id}'`
    );
  }
}

logSuccess(`Scanned ${validatedIcons.length} folders successfully`);

// ══════════════════════════════════════════════════════════════
// 2. VALIDATE STANDALONE CSS FILE
// ══════════════════════════════════════════════════════════════
logHeader("2. Linting Standalone CSS Files");

validatedIcons.forEach((icon) => {
  const css = fs.readFileSync(icon.cssPath, "utf8");
  
  // 2.1 Validate root class matching .[kebab-case]
  // Historical files might have a shorthand root class, like .spinner instead of .classic-spinner
  const rootClassRegex = new RegExp(`\\.${icon.kebab}\\b`);
  
  // Historical custom class overrides to accept
  let hasValidRoot = rootClassRegex.test(css);
  if (!hasValidRoot && icon.isHistorical) {
    const historicalClassOverrides = {
      "01": "spinner",
      "06": "skeleton",
      "07": "typing",
      "08": "circ-progress",
      "09": "morph",
    };
    if (historicalClassOverrides[icon.id]) {
      const customRegex = new RegExp(`\\.${historicalClassOverrides[icon.id]}\\b`);
      hasValidRoot = customRegex.test(css);
    }
  }

  if (!hasValidRoot) {
    reportError(
      icon.cssPath,
      icon.isHistorical,
      `Root selector class '.${icon.kebab}' not found inside stylesheet`
    );
  }

  // 2.2 Validate namespacing of keyframes
  // Find all @keyframes declarations
  const keyframeRegex = /@keyframes\s+([a-zA-Z0-9_-]+)/g;
  let keyframeMatch;
  
  // Accept both full kebab prefix and common abbreviations
  const prefixes = [icon.kebab];
  const abbrev = icon.kebab.split("-").map(p => p[0]).join("");
  if (abbrev.length >= 2) {
    prefixes.push(abbrev);
  }
  
  // Historical abbreviations to allow
  if (icon.isHistorical) {
    prefixes.push("spin", "wave", "pring", "pdot", "bscale", "ospin", "shimmer", "tbounce", "cspin");
  }

  while ((keyframeMatch = keyframeRegex.exec(css)) !== null) {
    const keyframeName = keyframeMatch[1];
    const isNamespaced = prefixes.some(pref => keyframeName.startsWith(pref));
    if (!isNamespaced) {
      reportError(
        icon.cssPath,
        icon.isHistorical,
        `Keyframe animation name '${keyframeName}' must be namespaced with '${icon.kebab}-' or abbreviation prefix`
      );
    }
  }

  // 2.3 Check size and color variations
  // Only raise warnings/errors for sizing presets if it's not a skeleton screen
  const sizePresets = ["sm", "md", "lg"];
  sizePresets.forEach((size) => {
    const presetRegex = new RegExp(`\\.${icon.kebab}--${size}\\b`);
    let hasPreset = presetRegex.test(css);
    if (!hasPreset && icon.isHistorical) {
      // Check historical override
      const overrides = { "01": "spinner", "06": "skeleton", "07": "typing", "08": "circ-progress", "09": "morph" };
      if (overrides[icon.id]) {
        const altRegex = new RegExp(`\\.${overrides[icon.id]}--${size}\\b`);
        hasPreset = altRegex.test(css);
      }
    }
    
    if (!hasPreset && icon.id !== "06") {
      reportError(
        icon.cssPath,
        icon.isHistorical,
        `Missing standard size preset modifier: '.${icon.kebab}--${size}'`
      );
    }
  });

  const colorPresets = ["primary", "success", "warning", "danger", "white"];
  colorPresets.forEach((col) => {
    const presetRegex = new RegExp(`\\.${icon.kebab}--${col}\\b`);
    let hasPreset = presetRegex.test(css);
    if (!hasPreset && icon.isHistorical) {
      const overrides = { "01": "spinner", "06": "skeleton", "07": "typing", "08": "circ-progress", "09": "morph" };
      if (overrides[icon.id]) {
        const altRegex = new RegExp(`\\.${overrides[icon.id]}--${col}\\b`);
        hasPreset = altRegex.test(css);
      }
    }
    
    if (!hasPreset && icon.id !== "06") {
      reportError(
        icon.cssPath,
        icon.isHistorical,
        `Missing standard color preset modifier: '.${icon.kebab}--${col}'`
      );
    }
  });

  // 2.4 Verify prefers-reduced-motion media query
  if (!css.includes("prefers-reduced-motion") && icon.id !== "06") {
    reportWarning(
      icon.cssPath,
      `Stylesheet does not handle '@media (prefers-reduced-motion: reduce)' locally`
    );
  }
});

logSuccess("CSS static analysis complete");

// ══════════════════════════════════════════════════════════════
// 3. VALIDATE STANDALONE HTML FILES
// ══════════════════════════════════════════════════════════════
logHeader("3. Linting Standalone HTML Demos");

validatedIcons.forEach((icon) => {
  const html = fs.readFileSync(icon.htmlPath, "utf8");

  // 3.1 Check stylesheet inclusion
  const cssInclusionRegex = new RegExp(`<link\\s+[^>]*href=["']${icon.cssFile}["']`);
  if (!cssInclusionRegex.test(html)) {
    reportError(
      icon.htmlPath,
      icon.isHistorical,
      `Should reference stylesheet '${icon.cssFile}' via <link>`
    );
  }

  // 3.2 Check Title and Title sequential numbers
  const titleRegex = /<title>([^<]+)<\/title>/i;
  const titleMatch = html.match(titleRegex);
  if (!titleMatch) {
    reportError(icon.htmlPath, icon.isHistorical, "Missing <title> tag in head");
  }

  const h1Regex = /<h1>\s*(\d{2})\s*·\s*([^<]+)<\/h1>/i;
  const h1Match = html.match(h1Regex);
  if (!h1Match) {
    reportWarning(
      icon.htmlPath,
      `Header structure should ideally match '<h1>NN · Icon Name</h1>'`
    );
  } else {
    const parsedId = h1Match[1];
    if (parsedId !== icon.id) {
      reportError(
        icon.htmlPath,
        icon.isHistorical,
        `H1 Sequential number '${parsedId}' does not match folder ID '${icon.id}'`
      );
    }
  }

  // 3.3 Check demo sections are present
  const requiredKeywords = ["Size variants", "Color presets", "Quick usage"];
  requiredKeywords.forEach((kw) => {
    if (!html.includes(kw)) {
      reportWarning(
        icon.htmlPath,
        `HTML demo is missing section text: '${kw}'`
      );
    }
  });

  // 3.4 Check Accessibility markup
  // The HTML must contain the class inside a status role or aria boundary
  let targetClass = icon.kebab;
  if (icon.isHistorical) {
    const historicalClassOverrides = {
      "01": "spinner",
      "06": "skeleton",
      "07": "typing",
      "08": "circ-progress",
      "09": "morph",
    };
    if (historicalClassOverrides[icon.id]) {
      targetClass = historicalClassOverrides[icon.id];
    }
  }

  const loaderClassRegex = new RegExp(`class=["'][^"']*${targetClass}\\b`);
  if (!loaderClassRegex.test(html)) {
    reportError(
      icon.htmlPath,
      icon.isHistorical,
      `Demo HTML doesn't instantiate the loader class '.${targetClass}'`
    );
  }

  const hasA11y = html.includes('role="status"') || 
                  html.includes('aria-label=') || 
                  html.includes('aria-busy="true"') ||
                  html.includes('role="img"');
                  
  if (!hasA11y) {
    reportError(
      icon.htmlPath,
      icon.isHistorical,
      `No accessibility attributes (role="status", aria-label, aria-busy) found in layout`
    );
  }
});

logSuccess("HTML structural checks complete");

// ══════════════════════════════════════════════════════════════
// 4. VALIDATE DYNAMIC REGISTRY (loaders-data.js)
// ══════════════════════════════════════════════════════════════
logHeader("4. Auditing Dynamic Registry (loaders-data.js)");

if (!fs.existsSync(REGISTRY_PATH)) {
  console.log(`${COLORS.red}✘ Registry file not found at ${REGISTRY_PATH}${COLORS.reset}`);
  process.exit(1);
}

// Safely execute loaders-data.js inside VM context to read data
const registryCode = fs.readFileSync(REGISTRY_PATH, "utf8");
const sandbox = { loaders: null };
try {
  vm.createContext(sandbox);
  // Replace standard 'const loaders =' declaration with 'this.loaders =' to bind to VM sandbox context
  const executableCode = registryCode.replace(/\bconst loaders\s*=/, "this.loaders =");
  vm.runInContext(executableCode, sandbox);
} catch (e) {
  console.log(`${COLORS.red}✘ Failed to compile/parse loaders-data.js: ${e.message}${COLORS.reset}`);
  process.exit(1);
}

const registeredLoaders = sandbox.loaders;
if (!Array.isArray(registeredLoaders)) {
  console.log(`${COLORS.red}✘ Object 'loaders' is not declared or is not an array inside loaders-data.js${COLORS.reset}`);
  process.exit(1);
}

// 4.1 Validate Registry counts match directory scan
if (registeredLoaders.length !== validatedIcons.length) {
  reportWarning(
    REGISTRY_PATH,
    `Count mismatch. Folders: ${validatedIcons.length}, Registered: ${registeredLoaders.length}`
  );
}

// 4.2 Verify each folder icon is registered
validatedIcons.forEach((icon) => {
  const reg = registeredLoaders.find((l) => l.id === icon.id);
  if (!reg) {
    reportError(
      REGISTRY_PATH,
      icon.isHistorical,
      `Loader '${icon.id}' (${icon.folder}) is not registered in loaders-data.js`
    );
    return;
  }

  // 4.3 Validate registry fields structure
  const requiredFields = ["id", "name", "category", "tags", "html", "css"];
  requiredFields.forEach((field) => {
    if (reg[field] === undefined || reg[field] === null || reg[field] === "") {
      reportError(
        REGISTRY_PATH,
        icon.isHistorical,
        `Registered loader ID '${icon.id}' is missing required field: '${field}'`
      );
    }
  });

  // Category bounds
  const validCategories = ["spinners", "waves", "3d", "special", "glitch", "fluid", "progress", "cosmic"];
  if (reg.category && !validCategories.includes(reg.category)) {
    reportError(
      REGISTRY_PATH,
      icon.isHistorical,
      `Loader ID '${icon.id}' has invalid category '${reg.category}'. Must be one of: ${validCategories.join(", ")}`
    );
  }

  // 4.4 Dynamic customizer properties constraints in registry
  const cssPreview = reg.css || "";
  
  // Must react to speed customizer multiplier
  if (!cssPreview.includes("var(--loader-speed-scale)") && !cssPreview.includes("--loader-speed-scale") && icon.id !== "06") {
    reportWarning(
      REGISTRY_PATH,
      `Preview CSS for ID '${icon.id}' does not seem to bind animation duration to 'var(--loader-speed-scale)'`
    );
  }

  // Must react to cycles customizer variable
  if (!cssPreview.includes("var(--loader-cycles)") && !cssPreview.includes("--loader-cycles")) {
    reportWarning(
      REGISTRY_PATH,
      `Preview CSS for ID '${icon.id}' does not bind iteration count to 'var(--loader-cycles)'`
    );
  }
});

logSuccess("Registry validation audit complete");

// ══════════════════════════════════════════════════════════════
// 5. VALIDATE GLOBAL DOCUMENTATION SYNC (README.md)
// ══════════════════════════════════════════════════════════════
logHeader("5. Auditing Global Documentation Sync (README.md)");

if (!fs.existsSync(README_PATH)) {
  console.log(`${COLORS.red}✘ README.md not found at ${README_PATH}${COLORS.reset}`);
  process.exit(1);
}

const readme = fs.readFileSync(README_PATH, "utf8");

validatedIcons.forEach((icon) => {
  // 5.1 Check Catalog Table
  const tableRegex = new RegExp(`\\|\\s*${icon.id}\\s*\\|\\s*\\[[^\\]]+\\]\\(icons/${icon.folder}/\\)`);
  if (!tableRegex.test(readme)) {
    reportError(
      README_PATH,
      icon.isHistorical,
      `Icon ID '${icon.id}' is not linked properly in the Catalog Table (Region 1)`
    );
  }

  // 5.2 Check Getting Started HTML inclusion
  const htmlSnippet = `class="${icon.kebab}"`;
  let hasHtmlSnippet = readme.includes(htmlSnippet);
  
  // Historical exceptions
  if (!hasHtmlSnippet && icon.isHistorical) {
    const historicalClassOverrides = {
      "01": "spinner",
      "06": "skeleton",
      "07": "typing",
      "08": "circ-progress",
      "09": "morph",
    };
    if (historicalClassOverrides[icon.id]) {
      hasHtmlSnippet = readme.includes(`class="${historicalClassOverrides[icon.id]}"`);
    }
  }

  if (!hasHtmlSnippet) {
    reportError(
      README_PATH,
      icon.isHistorical,
      `HTML class '.${icon.kebab}' is missing from Getting Started list (Region 2)`
    );
  }

  // 5.3 Check Token reference
  let targetName = icon.kebab.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  if (icon.id === "01") targetName = "Classic Spinner";
  else if (icon.id === "06") targetName = "Shimmer Skeleton";
  else if (icon.id === "07") targetName = "Typing Indicator";
  else if (icon.id === "08") targetName = "Circular Progress";
  else if (icon.id === "09") targetName = "Morphing Shape";
  else if (icon.id === "45") targetName = "Newton's Cradle 3D";
  else if (icon.id === "48") targetName = "Bouncing Cube 3D";
  
  const tokenRegex = new RegExp(`\\|\\s*${targetName.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")}\\s*\\|`);
  if (!tokenRegex.test(readme)) {
    reportError(
      README_PATH,
      icon.isHistorical,
      `Icon name '${targetName}' is missing from Token Reference Table (Region 3)`
    );
  }

  // 5.4 Check Folder tree
  const treeEntry = `${icon.folder}/`;
  if (!readme.includes(treeEntry)) {
    reportError(
      README_PATH,
      icon.isHistorical,
      `Folder tree visual is missing directory entry '${treeEntry}' (Region 4)`
    );
  }

  // 5.5 Check Reduced Motion list inclusion
  let reducedMotionClass = `.${icon.kebab}`;
  if (icon.isHistorical) {
    const historicalClassOverrides = {
      "01": "spinner",
      "06": "demo-skel-line",
      "07": "typing",
      "08": "circ-progress__svg",
      "09": "morph",
    };
    if (historicalClassOverrides[icon.id]) {
      reducedMotionClass = `.${historicalClassOverrides[icon.id]}`;
    }
  }

  if (!readme.includes(reducedMotionClass)) {
    reportError(
      README_PATH,
      icon.isHistorical,
      `Class '${reducedMotionClass}' should be added to the Reduced Motion CSS list (Region 5) in README`
    );
  }
});

logSuccess("Documentation alignment audit complete");

// ══════════════════════════════════════════════════════════════
// SUMMARY REPORT & EXIT
// ══════════════════════════════════════════════════════════════
console.log(`\n${COLORS.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);
console.log(`${COLORS.bright}Validation Summary Report:${COLORS.reset}`);
console.log(`- Total Icons Checked: ${validatedIcons.length}`);
console.log(`- Errors: ${errorsCount > 0 ? COLORS.red : COLORS.green}${errorsCount}${COLORS.reset}`);
console.log(`- Warnings: ${warningsCount > 0 ? COLORS.yellow : COLORS.green}${warningsCount}${COLORS.reset}`);
console.log(`${COLORS.bright}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}`);

if (errorsCount > 0) {
  console.log(`${COLORS.bright}${COLORS.red}Validation FAILED! Please fix the errors listed above before pushing branch.${COLORS.reset}\n`);
  process.exit(1);
} else {
  console.log(`${COLORS.bright}${COLORS.green}Validation PASSED! The workspace is perfectly matching architectural guidelines.${COLORS.reset}\n`);
  process.exit(0);
}
