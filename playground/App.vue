<template>
  <div>
    <h1 class="row">
      <PhPhosphorLogo /> Phosphor Icons Vue 3
    </h1>
    <div class="row">Total icon count: {{ total }}</div>
    <div v-for="icon in allIcons" class="row">
      <span class="name">{{ icon.name }}</span>
      <component :is="icon" size="32" />
      <component :is="icon" size="24" weight="thin" :mirrored="true" />
      <component :is="icon" size="32" weight="light" />
      <component :is="icon" size="48" />
      <component :is="icon" size="32" weight="bold" :color="c1" />
      <component :is="icon" size="32" weight="fill" :color="c2" />
      <component :is="icon" size="32" weight="duotone" :color="c3" />
    </div>
  </div>
</template>

<script setup>
import { PhPhosphorLogo } from "../src";
import * as icons from "../src";

const ALIASES = {
  "file-dashed": "file-dotted",
  "file-magnifying-glass": "file-search",
  "folder-dashed": "folder-dotted",
  "folder-simple-dashed": "folder-simple-dotted",
  pulse: "activity",
  seal: "circle-wavy",
  "seal-check": "circle-wavy-check",
  "seal-question": "circle-wavy-question",
  "seal-warning": "circle-wavy-warning",
  "text-b": "text-bolder",
};

const pascalAliases = new Set(
  Object.values(ALIASES).map(
    (name) =>
      "Ph" +
      name
        .split("-")
        .map((part) => part.replace(/^\w/, (c) => c.toUpperCase()))
        .join(""),
  ),
);

const allIcons = Object.fromEntries(
  Object.entries(icons).filter(([name]) => !pascalAliases.has(name)),
);

let total = Object.keys(allIcons).length;

let c1 = `#${Math.floor(Math.random() * (0xffffff + 1)).toString(16)}`;
let c2 = `#${Math.floor(Math.random() * (0xffffff + 1)).toString(16)}`;
let c3 = `#${Math.floor(Math.random() * (0xffffff + 1)).toString(16)}`;
</script>
