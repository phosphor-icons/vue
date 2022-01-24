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
    <g v-if="displayWeight === 'bold'"><path d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z" opacity="0.2"/><path d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M165.8,224H208a16,16,0,0,0,16-16V170.3a7.9,7.9,0,0,0-3.6-6.6,7.7,7.7,0,0,0-7.5-.7,24.3,24.3,0,0,1-8.9,1.7c-13.2,0-24-11.1-24-24.7s10.8-24.7,24-24.7a24.3,24.3,0,0,1,8.9,1.7,7.7,7.7,0,0,0,7.5-.7,7.9,7.9,0,0,0,3.6-6.6V72a16,16,0,0,0-16-16H171.8c.1-1.3.2-2.7.2-4a36,36,0,0,0-72,0c0,1.3.1,2.7.2,4H64A16,16,0,0,0,48,72v32.2l-4-.2a36,36,0,0,0,0,72l4-.2V208a16,16,0,0,0,16,16h42.2"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhPuzzlePiece",
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
