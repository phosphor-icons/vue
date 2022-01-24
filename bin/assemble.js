#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { ASSETS_PATH, COMPONENTS_PATH, INDEX_PATH } = require("./index");

const icons = {};
const weights = ["thin", "light", "regular", "bold", "fill", "duotone"];

function readFile(folder, pathname, weight) {
  const file = fs.readFileSync(pathname);
  icons[folder][weight] = file
    .toString("utf-8")
    .replace(/^.*<\?xml.*?\>/g, "")
    .replace(/<svg.*?>/g, "")
    .replace(/<\/svg>/g, "")
    .replace(/<title.*?/, "")
    .replace(/stroke="#000"/g, ':stroke="displayColor"')
    .replace(
      /<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*?\/>/g,
      ""
    );
}

function readFiles() {
  const folders = fs.readdirSync(ASSETS_PATH, "utf-8");

  folders.forEach((folder) => {
    if (!fs.lstatSync(path.join(ASSETS_PATH, folder)).isDirectory()) return;
    icons[folder] = {};

    const files = fs.readdirSync(path.join(ASSETS_PATH, folder));
    files.forEach((filename) => {
      const filepath = path.join(ASSETS_PATH, folder, filename);
      const weight = filename.split(".svg")[0].split("-").slice(-1)[0];
      switch (weight) {
        case "thin":
        case "light":
        case "bold":
        case "fill":
        case "duotone":
          readFile(folder, filepath, weight);
          break;
        default:
          readFile(folder, filepath, "regular");
          break;
      }
    });
  });
}

function checkFiles(icon) {
  const weightsPresent = Object.keys(icon);
  return (
    weightsPresent.length === 6 &&
    weightsPresent.every((w) => weights.includes(w))
  );
}

function generateComponents() {
  let passes = 0;
  let fails = 0;

  if (fs.existsSync(COMPONENTS_PATH)) {
    fs.rmSync(COMPONENTS_PATH, { recursive: true });
  }
  fs.mkdirSync(COMPONENTS_PATH);

  for (let key in icons) {
    const icon = icons[key];
    const name = key
      .split("-")
      .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
      .join("");
    let componentString = `\
/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
`;

    if (!checkFiles(icon)) {
      fails += 1;
      console.error(
        `${chalk.inverse.red(" FAIL ")} Ph${name} is missing weights`
      );
      console.group();
      console.error(weights.filter((w) => !Object.keys(icon).includes(w)));
      console.groupEnd();
      continue;
    }

    Object.keys(icon).forEach((weight, index) => {
      // for (let weight in icon) {
      componentString += `\
    <g v${index > 0 ? "-else" : ""}-if="displayWeight === '${weight}'">${
        icon[weight]
      }</g>\n`;
    });
    componentString += `\
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "../types";

export default /*#__PURE__*/Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "Ph${name}",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight ?? contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size ?? contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color ?? contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined;
    },
  },
});
</script>
`;
    try {
      fs.writeFileSync(
        path.join(COMPONENTS_PATH, `Ph${name}.vue`),
        componentString,
        {
          flag: "w"
        }
      );
      console.log(`${chalk.inverse.green(" DONE ")} Ph${name}`);
      passes += 1;
    } catch (err) {
      console.error(
        `${chalk.inverse.red(" FAIL ")} Ph${name} could not be saved`
      );
      console.group();
      console.error(err);
      console.groupEnd();
      fails += 1;
    }
  }
  // TODO: implement logging with async writeFile()
  if (passes > 0)
    console.log(
      chalk.green(`${passes} component${passes > 1 ? "s" : ""} generated`)
    );
  if (fails > 0)
    console.log(chalk.red(`${fails} component${fails > 1 ? "s" : ""} failed`));
}

function generateExports() {
  let indexString = `/* eslint-disable import/prefer-default-export */
`;

  for (let key in icons) {
    const name = key
      .split("-")
      .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
      .join("");
    indexString += `\
export { default as Ph${name} } from "./Ph${name}.vue";
`;
  }
  try {
    fs.writeFileSync(INDEX_PATH, indexString, {
      flag: "w"
    });
    console.log(chalk.green("Export success"));
  } catch (err) {
    console.error(chalk.red("Export failed"));
    console.group();
    console.error(err);
    console.groupEnd();
  }
}

readFiles();
generateComponents();
generateExports();
