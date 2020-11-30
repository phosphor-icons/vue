const path = require("path");

const ASSETS_PATH = path.join(__dirname, "../assets");
const COMPONENTS_PATH = path.join(__dirname, "../src/components");
const INDEX_PATH = path.join(__dirname, "../src/lib/index.ts");
const TYPES_PATH = path.join(__dirname, "../phosphor-vue.d.ts");

module.exports = { ASSETS_PATH, COMPONENTS_PATH, INDEX_PATH, TYPES_PATH };
