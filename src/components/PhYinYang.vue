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
    <g v-if="displayWeight === 'bold'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="176" r="16"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="80" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><g opacity="0.2"><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96,96,96,0,0,1,0,192Z"/></g><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="176" r="12"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="80" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M140,80a12,12,0,1,1-12-12A12,12,0,0,1,140,80Zm92,48A104,104,0,1,1,128,24,104.2,104.2,0,0,1,232,128Zm-92,48a12,12,0,1,0-12,12A12,12,0,0,0,140,176Zm32-92a44,44,0,0,0-44-44A88,88,0,0,0,81.1,202.4,51.1,51.1,0,0,1,76,180a52,52,0,0,1,52-52A44,44,0,0,0,172,84Z"/></g>
    <g v-else-if="displayWeight === 'light'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="176" r="12"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="80" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="176" r="8"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="80" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="176" r="12"/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="80" r="12"/></g>
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
  name: "PhYinYang",
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
    }
  }
});
</script>
