#!/usr/bin/env node
import fs from "fs";
import path from "path";
import chalk from "chalk";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const ASSETS_PATH = path.join(__dirname, "../core/assets");
const COMPONENTS_PATH = path.join(__dirname, "../src/components");
const INDEX_PATH = path.join(__dirname, "../src/components/index.ts");

if (!fs.existsSync(ASSETS_PATH)) {
  console.error(
    `${chalk.inverse.red(
      " FAIL ",
    )} Could not find assets directory, please make sure all git submodules are initialized and up to date.`,
  );
  process.exit(1);
}

const mappings = readFiles();

generateComponents(mappings);
generateExports(mappings);

console.log(chalk.green(`Compiled ${Object.keys(mappings).length} icons`));

function readFiles(): Record<string, Record<string, string>> {
  const mappings = {};

  const variants = fs.readdirSync(ASSETS_PATH, "utf-8");

  variants.forEach((variant) => {
    const variantPath = path.join(ASSETS_PATH, variant);

    // Skip non-directories
    if (!fs.lstatSync(variantPath).isDirectory()) return;

    // Read all icons in variant
    const icons = fs.readdirSync(variantPath, "utf-8");

    icons.forEach((icon) => {
      let key: string | undefined = undefined;
      if (variant === "regular") {
        key = icon.replace(".svg", "");
      } else {
        key = icon.replace(".svg", "").split("-").slice(0, -1).join("-");
      }
      // Create variant object if it doesn't exist
      if (!mappings[key]) mappings[key] = {};

      const iconPath = path.join(variantPath, icon);
      // Skip directories
      if (fs.lstatSync(iconPath).isDirectory()) return;

      mappings[key][variant] = readFile(iconPath);
    });
  });

  return mappings;
}

function readFile(path: string) {
  return fs
    .readFileSync(path)
    .toString("utf-8")
    .replace(/<svg.*?>/g, "")
    .replace(/<\/svg>/g, "");
}

// function checkFiles(icon) {
//   const weightsPresent = Object.keys(icon);
//   return (
//     weightsPresent.length === 6 &&
//     weightsPresent.every((w) => weights.includes(w))
//   );
// }

function generateComponents(mappings: Record<string, Record<string, string>>) {
  let passes = 0;
  let fails = 0;

  if (fs.existsSync(COMPONENTS_PATH)) {
    fs.rmSync(COMPONENTS_PATH, { recursive: true });
  }

  fs.mkdirSync(COMPONENTS_PATH);

  for (const icon in mappings) {
    const variants = mappings[icon];

    const name = icon
      .split("-")
      .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
      .join("");

    const content = Object.entries(variants)
      .map(([variant, content], index) => {
        return `\n<g v-${
          index > 0 ? "else-" : ""
        }if="displayWeight === '${variant}'">${content}</g>`;
      })
      .join("");

    const componentString = `\
<script lang="ts">
export default {
  name: "Ph${name}"
}
</script>

<script lang="ts" setup>
import { computed, inject, PropType } from "vue";

const props = defineProps({
  weight: {
    type: String as PropType<"thin" | "light" | "regular" | "bold" | "fill" | "duotone">
  },
  size: {
    type: [String, Number]
  },
  color: {
    type: String
  },
  mirrored: {
    type: Boolean
  },
})

const contextWeight = inject("weight", "regular")
const contextSize = inject("size", "1em")
const contextColor = inject("color", "currentColor")
const contextMirrored = inject("mirrored", false)

const displayWeight = computed(() => props.weight ?? contextWeight)
const displaySize = computed(() => props.size ?? contextSize)
const displayColor = computed(() => props.color ?? contextColor)
const displayMirrored = computed(() => (props.mirrored !== undefined ? (props.mirrored ? "scale(-1, 1)" : undefined) : (contextMirrored ? "scale(-1, 1)" : undefined)))
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
  >
    <slot />${content}
  </svg>
</template>
`;
    try {
      fs.writeFileSync(
        path.join(COMPONENTS_PATH, `Ph${name}.vue`),
        componentString,
        {
          flag: "w",
        },
      );
      console.log(`${chalk.inverse.green(" DONE ")} Ph${name}`);
      passes += 1;
    } catch (err) {
      console.error(
        `${chalk.inverse.red(" FAIL ")} Ph${name} could not be saved`,
      );
      console.group();
      console.error(err);
      console.groupEnd();
      fails += 1;
    }
  }
}
// TODO: implement logging with async writeFile()

function generateExports(mappings: Record<string, Record<string, string>>) {
  const indexString = Object.entries(mappings)
    .map(([name]) => {
      const pascalCasedName = name
        .split("-")
        .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
        .join("");

      return `\nexport { default as Ph${pascalCasedName} } from "./Ph${pascalCasedName}.vue";`;
    })
    .reduce(
      (acc, cur) => acc + cur,
      "/* eslint-disable import/prefer-default-export */",
    );

  try {
    fs.writeFileSync(INDEX_PATH, indexString, {
      flag: "w",
    });
    console.log(chalk.green("Export success"));
  } catch (err) {
    console.error(chalk.red("Export failed"));
    console.group();
    console.error(err);
    console.groupEnd();
  }
}
