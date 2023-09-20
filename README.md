> **ATTENTION:** As part of a major update, we will be replacing the existing `phosphor-vue` package with `@phosphor-icons/vue`. We recommend using this new version, as it has improved performance and significantly smaller bundle size. No APIs have been changed, so drop-in replacement should be straightforward. The legacy package will continue to recieve maintenance, but will not be updated with new icons upstream. [Take me to the legacy version ➜](https://github.com/phosphor-icons/vue/tree/vue2)

<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# Vue Phosphor icons

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

[![NPM](https://img.shields.io/npm/v/phosphor-vue.svg?style=flat-square)](https://www.npmjs.com/package/phosphor-vue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Travis](https://img.shields.io/travis/com/rektdeckard/phosphor-vue.svg?style=flat-square)](https://travis-ci.com/github/rektdeckard/phosphor-vue)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/phosphor-vue?style=flat-square&label=Star)](https://github.com/phosphor-icons/phosphor-vue)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/phosphor-vue?style=flat-square&label=Fork)](https://github.com/phosphor-icons/phosphor-vue/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/phosphor-vue?style=flat-square&label=Watch)](https://github.com/phosphor-icons/phosphor-vue)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)


## Playground

Check out our playground in StackBlitz and start experimenting!

[![Open in StackBlitz](https://img.shields.io/static/v1?style=for-the-badge&label=Stackblitz&message=open%20playground&color=%231269D3&logo=stackblitz)](https://stackblitz.com/github/phosphor-icons/vue/tree/main?file=src%2FApp.vue)

## Installation

```bash
yarn add @phosphor-icons/vue
```

or

```bash
npm install @phosphor-icons/vue
```

## Usage

```html
<template>
  <PhHorse />
  <PhHeart :size="32" color="hotpink" weight="fill" />
  <PhCube />
</template>

<script lang="ts" setup>
  import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";
</script>
```

### Global install

Allthough we strongly advise against installing your icons globally, you can do so by registering it in your app as follows:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import PhosphorIcons from "@phosphor-icons/vue"

let app = createApp(App)

app.use(PhosphorIcons)

app.mount('#app')
```

> Why do we advise against global installs?
>
> Bundlers such as Vite and Webpack rely on ESM imports to do tree-shaking. When you install entire library globally, you lose the ability to do tree-shaking, since all components are registered within vue, and the bundler cannot know which components are actually used in your app.

### Props

Icon components accept all attributes that you can pass to a normal SVG element, including inline `height`/`width`, `x`/`y`, `opacity`, plus `@click` and other `v-on` handlers. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.

### Composition

Phosphor takes advantage of Vue's `provide`/`inject` options to make applying a default style to all icons simple. Create a `provide` object or function at the root of the app (or anywhere above the icons in the tree) that returns a configuration object with props to be applied by default to all icons below it in the tree:

```html
<template>
  <PhHorse /> {/* I'm lime-green, 32px, and bold! */}
  <PhHeart /> {/* Me too! */}
  <PhCube /> {/* Me three :) */}
</template>

<script lang="ts" setup>
  import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";
  import { provide } from "vue"

  provide("color", "limegreen")
  provide("size", 32)
  provide("weight", "bold")
  provide("mirrored", false)
</script>
```

You may create multiple providers for styling icons differently in separate regions of an application; icons use the nearest provider above them to determine their style.

**Note:** The **color**, **size**, **weight**, and **mirrored** properties are all _optional_ props when creating a context, but default to `"currentColor"`, `"1em"`, `"regular"` and `false`.

### Slots

<img src="/meta/cube-rotate.svg" width="128" align="right" />

Components have a `<slot>` for arbitrary SVG elements, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations and more. The slotted children will be placed _below_ the normal icon contents.

The following will cause the Cube icon to rotate and pulse:

```html
<template>
  <PhCube color="darkorchid" weight="duotone">
    <animate
      attributeName="opacity"
      values="0;1;0"
      dur="4s"
      repeatCount="indefinite"
    />
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      dur="5s"
      from="0 0 0"
      to="360 0 0"
      repeatCount="indefinite"
    />
  </PhCube>
</template>
```

**Note:** The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is a 256x256 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

## Development

This repository leverages git-submodules to stay up-to-date with the [phosphor-icons/core](https://github.com/phosphor-icons/core) repository, which means that for local developoment, you'll need to clone this repository with the `--recurse-submodules` git clone flag.

After you've successfully cloned the repository, you will find a `core` directory containing the aforementioned core repository.

Now you can install all local dependencies with `npm install` and start developing.

### Project structure

`/bin`: Holds the assembly script, which uses the raw SVG icon files from the core directory to assemble all Vue components

`/core`: Git submodule directory for the core repository

`/dist`: Will be created upon building the library and holds all dist bundles

`/node_modules`: You should know by now what this directory is about

`/src`: Holds the entry point for this library

### Assembling

To assemble the Vue components you will need to run `npm run assemble`. This will loop through all icons in the `/core/assets` directory and create all Vue components including all weights and configuration props. These Vue components are then saved under `/src/components` which will then be used by the bundler to create the final package bundle.

NOTE: Upon cloning this repository, the `/src/components` directory does not exist yet. You will first need to run the `assemble` script for this directory to be generated.

## Related Projects

- [phosphor-home](https://github.com/phosphor-icons/phosphor-home) ▲ Phosphor homepage and general info
- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) ▲ Phosphor icon component library for React
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-flutter](https://github.com/phosphor-icons/phosphor-flutter) ▲ Phosphor IconData library for Flutter
- [phosphor-webcomponents](https://github.com/phosphor-icons/phosphor-webcomponents) ▲ Phosphor icons as Web Components
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin
- [phosphor-sketch](https://github.com/phosphor-icons/phosphor-sketch) ▲ Phosphor icons Sketch plugin

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views
- [ruby-phosphor-icons](https://github.com/maful/ruby-phosphor-icons) ▲ Phosphor icons for Ruby and Rails applications
