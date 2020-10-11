<img src="/meta/phosphor-mark-tight-yellow.png" width="192" align="right" />

# phosphor-vue

A clear, playful, and adaptable icon family for Vue, too! A complete list of icons can be found on [our website](https://phosphoricons.com).

[![NPM](https://img.shields.io/npm/v/phosphor-vue.svg?style=flat-square)](https://www.npmjs.com/package/phosphor-vue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Travis](https://img.shields.io/travis/com/rektdeckard/phosphor-vue.svg?style=flat-square)](https://travis-ci.com/github/rektdeckard/phosphor-vue)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/phosphor-vue?style=flat-square&label=Star)](https://github.com/phosphor-icons/phosphor-vue)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/phosphor-vue?style=flat-square&label=Fork)](https://github.com/phosphor-icons/phosphor-vue/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/phosphor-vue?style=flat-square&label=Watch)](https://github.com/phosphor-icons/phosphor-vue)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)

## Installation

```bash
yarn add phosphor-vue
```

or

```bash
npm install --save phosphor-vue
```

## Usage

```html
<template>
  <div>
    <PhHorse />
    <PhHeart :size="32" color="hotpink" weight="fill" />
    <PhCube />
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

Phosphor takes advantage of Vue's `provide`/`inject` options to make applying a default style to all icons simple. Create a `provide` object or function at the root of the app (or anywhere above the icons in the tree) that returns a configuration object with props to be applied by default to all icons below it in the tree:

```html
<template>
  <div>
    <PhHorse /> {/* I'm lime-green, 32px, and bold! */} 
    <PhHeart /> {/* Me too! */} 
    <PhCube />  {/* Me three :) */}
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
    },
    provide: {
      color: "limegreen",
      size: 32,
      weight: "bold",
      mirrored: false
    }
  };
</script>
```

You may create multiple providers for styling icons differently in separate regions of an application; icons use the nearest provider above them to determine their style.

**Note:** The **color**, **size**, **weight**, and **mirrored** properties are all _optional_ props when creating a context, but default to `"currentColor"`, `"1em"`, `"regular"` and `false`. Also be aware that when using this API, per Vue:

> The `provide` and `inject` bindings are NOT reactive. This is intentional. However, if you pass down an observed object, properties on that object do remain reactive.

## Related Projects

- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) ▲ Phosphor icon component library for React
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin

## License

MIT © [phosphor-icons](https://github.com/phosphor-icons)
