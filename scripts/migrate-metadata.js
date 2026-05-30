/**
 * Metadata Migration Script — LoadIcons
 * ─────────────────────────────────────────────────────────────
 * This script extracts dynamic preview HTML/CSS data, categories,
 * and tags from loaders-data.js and writes them into a structured
 * 'metadata.json' file inside each individual icon folder.
 * 
 * This enables a decentralized, metadata-driven architecture where
 * each loader folder is completely self-contained.
 * ─────────────────────────────────────────────────────────────
 * Usage: node scripts/migrate-metadata.js
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const WORKSPACE = path.resolve(__dirname, "..");
const REGISTRY_PATH = path.join(WORKSPACE, "loaders-data.js");
const ICONS_DIR = path.join(WORKSPACE, "icons");

if (!fs.existsSync(REGISTRY_PATH)) {
  console.error(`✘ Registry file not found at ${REGISTRY_PATH}`);
  process.exit(1);
}

// 1. Read and Compile loaders-data.js
const registryCode = fs.readFileSync(REGISTRY_PATH, "utf8");
const sandbox = { loaders: null };
try {
  vm.createContext(sandbox);
  const executableCode = registryCode.replace(/\bconst loaders\s*=/, "this.loaders =");
  vm.runInContext(executableCode, sandbox);
} catch (e) {
  console.error(`✘ Failed to compile loaders-data.js: ${e.message}`);
  process.exit(1);
}

const loaders = sandbox.loaders;
if (!Array.isArray(loaders)) {
  console.error("✘ loaders array is invalid");
  process.exit(1);
}

// Helper to match folder overrides (identical to getLoaderFileMeta in index.html)
function getLoaderFolderName(loader) {
  let kebab = loader.name.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  let folderName = `${loader.id}-${kebab}`;

  // Exception overrides
  if (loader.id === "01") {
    folderName = "01-classic-spinner";
  } else if (loader.id === "29") {
    folderName = "29-gyro-spheres";
  } else if (loader.id === "32") {
    folderName = "32-infinite-loop";
  } else if (loader.id === "45") {
    folderName = "45-newton-cradle-3d";
  } else if (loader.id === "48") {
    folderName = "48-bouncing-cube";
  }

  return folderName;
}

console.log(`\nStarting migration of ${loaders.length} loaders metadata...`);

let migratedCount = 0;

loaders.forEach((loader) => {
  const folderName = getLoaderFolderName(loader);
  const folderPath = path.join(ICONS_DIR, folderName);

  if (!fs.existsSync(folderPath)) {
    console.warn(`⚠ Warning: Folder for loader '${loader.id}' does not exist at '${folderPath}'`);
    return;
  }

  // Create metadata object (excluding raw ID, which is derived from folder name sequence)
  const metadata = {
    name: loader.name,
    category: loader.category,
    tags: loader.tags,
    html: loader.html,
    css: loader.css
  };

  const metadataPath = path.join(folderPath, "metadata.json");
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), "utf8");
  migratedCount++;
});

console.log(`\n✔ Migration complete! Created ${migratedCount} metadata.json files in individual folders.\n`);
process.exit(0);
