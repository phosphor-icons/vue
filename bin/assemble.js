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
    .replace(/^.*<\?xml.*/g, "")
    .replace(/<svg.*/g, "")
    .replace(/<\/svg>\n/g, "")
    .replace(/<title.*/g, "")
    .replace(/stroke="#000"/g, ':stroke="color"')
    .replace(
      /<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*\/>/g,
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
      const weight = filename
        .split(".svg")[0]
        .split("-")
        .slice(-1)[0];
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
    fs.rmdirSync(COMPONENTS_PATH, { recursive: true });
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
    :width="size"
    :height="size"
    :fill="color"
    :transform="mirrored ? 'scale(-1, 1)' : undefined"
    v-bind="$attrs"
  >
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
    <g v${index > 0 ? "-else" : ""}-if="weight === '${weight}'">${
        icon[weight]
      }</g>\n`;
    });
    componentString += `\
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconProps, PropValidator } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

export default defineComponent({
  props: PropValidator,
  setup(props: Readonly<Partial<IconProps>>) {
    return { ...useDefaultPropsFromContext(props) };
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
export { default as Ph${name} } from "../components/Ph${name}.vue";
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
