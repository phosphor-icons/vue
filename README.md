<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# phosphor-vue

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

<img alt="Due to a bug in the official Vue Rollup plugin, tree-shaking of components currently fails in Vue 3. Follow issue #6 for details." src="/meta/tree-shaking-warning.svg" />

For Vue 2 support, check out the [vue2](https://github.com/phosphor-icons/phosphor-vue) branch.

[![NPM](https://img.shields.io/npm/v/phosphor-vue/next?style=flat-square)](https://www.npmjs.com/package/phosphor-vue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Travis](https://img.shields.io/travis/com/rektdeckard/phosphor-vue/next?style=flat-square)](https://travis-ci.com/github/rektdeckard/phosphor-vue)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/phosphor-vue?style=flat-square&label=Star)](https://github.com/phosphor-icons/phosphor-vue)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/phosphor-vue?style=flat-square&label=Fork)](https://github.com/phosphor-icons/phosphor-vue/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/phosphor-vue?style=flat-square&label=Watch)](https://github.com/phosphor-icons/phosphor-vue)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)

## Installation

```bash
yarn add phosphor-vue@next
```

or

```bash
npm install --save phosphor-vue@next
```

## Usage

### Registration

Before you can use Phosphor icons in your project, you'll need to register the ones you intend to use, just like any other Vue component.

#### Global Plugin

The easiest way to use Phosphor in your Vue project is to load the whole library as a global plugin in your app entry point like so:

```js
import { createApp } from "vue";
import PhosphorVue from "phosphor-vue";
import App from "./App.vue";

const app = createApp(App);
app.use(PhosphorVue);
app.mount("#app");
```

You can then use any of the icons in your app's templates without specifically registering them:

```html
<!-- SomeComponent.vue -->
<template>
  <div>
    <ph-horse />
    <ph-heart :size="32" color="hotpink" weight="fill" />
    <ph-cube />
  </div>
</template>
```

#### Register Individual Icons

If you're only using a few Phosphor icons and want to take advantage of tree-shaking, you can globally register just the icons you need:

```js
import { createApp } from "vue";
import { PhHorse, PhHeart, PhCube } from "phosphor-vue";
import App from "./App.vue";

const app = createApp(App);
app.component("PhHorse", PhHorse);
app.component("PhHeart", PhHeart);
app.component("PhCube", PhCube);
app.mount("#app");
```

You can also register them locally directly in SFCs if you prefer:

```html
<template>
  <div>
    <ph-horse />
    <ph-heart :size="32" color="hotpink" weight="fill" />
    <ph-cube />
  </div>
</template>

<script>
  import { PhHorse, PhHeart, PhCube } from "phosphor-vue";
  export default {
    name: "App",
    components: {
      PhHorse,
      PhHeart,
      PhCube
    }
  };
</script>
```

### Props

Icon components accept all attributes that you can pass to a normal SVG element, including inline `height`/`width`, `x`/`y`, `opacity`, plus `@click` and other `v-on` handlers. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.

### Composition

Phosphor takes advantage of [Vue's `provide`/`inject` options](https://v3.vuejs.org/guide/component-provide-inject.htm) to make applying a default style to all icons simple. Declare a `provide` at the root of the app (or anywhere above the icons in the tree) with props to be applied by default to all icons below it in the tree:

```html
<template>
  <div>
    <ph-horse /> {/* I'm lime-green, 32px, and bold! */} 
    <ph-heart /> {/* Me too! */} 
    <ph-cube />  {/* Me three :) */}
  </div>
</template>

<script>
  import { defineComponent, provide } from "vue";
  import { PhHorse, PhHeart, PhCube } from "phosphor-vue";

  export default defineComponent({
    name: "App",
    components: {
      PhHorse,
      PhHeart,
      PhCube
    },
    provide: {
      color: "limegreen",
      size: 32,
      weight: "bold",
      mirrored: false
    },
    // Or using the Composition API
    setup() {
      // ... other setup code ...
      provide("color", "limegreen");
      provide("size", 32);
      provide("weight", "bold");
      provide("mirrored", false);

      return { /* ... */ };
    },
  });
</script>
```

You may create multiple providers for styling icons differently in separate regions of an application; icons use the nearest provider above them to determine their style.

**Note:** The **color**, **size**, **weight**, and **mirrored** properties are all _optional_ props when creating a context, but default to `"currentColor"`, `"1em"`, `"regular"` and `false`. Also be aware that when using this API, per [Vue](https://v3.vuejs.org/guide/component-provide-inject.html#working-with-reactivity):

> ... `provide`/`inject` bindings are not reactive by default. We can change this behavior by passing a `ref` property or `reactive` object to `provide`.

For example, this will make child icons sizes react to changes to `iconSize`:

```js
const iconSize = ref(32);
provide("size", iconSize);
```

### Slots

<img src="/meta/cube-rotate.svg" width="128" align="right" />

Components have a `<slot>` for arbitrary SVG elements, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations and more. The slotted children will be placed *below* the normal icon contents.

The following will cause the Cube icon to rotate and pulse:

```html
<template>
  <ph-cube color="darkorchid" weight="duotone">
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
  </ph-cube>
</template>
```

**Note:** The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is a 256x256 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

## Related Projects

- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) ▲ Phosphor icon component library for React
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin
- [phosphor-webcomponents](https://github.com/phosphor-icons/phosphor-webcomponents) ▲ Phosphor icons as Web Components


## License

MIT © [phosphor-icons](https://github.com/phosphor-icons)
