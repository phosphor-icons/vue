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
    <g v-if="displayWeight === 'bold'"><circle cx="68" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="188" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="160" x2="152" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,164V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M200,48a23.9,23.9,0,0,1,24,24v92" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><circle cx="68" cy="164" r="36" opacity="0.2"/><circle cx="188" cy="164" r="36" opacity="0.2"/><circle cx="68" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="188" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="160" x2="152" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,164V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,48a23.9,23.9,0,0,1,24,24v92" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M232,72v92a44,44,0,0,1-87.8,4H111.8A44,44,0,0,1,24,164V72A32.1,32.1,0,0,1,56,40a8,8,0,0,1,0,16A16,16,0,0,0,40,72v58.1A43.9,43.9,0,0,1,110.3,152h35.4A43.9,43.9,0,0,1,216,130.1V72a16,16,0,0,0-16-16,8,8,0,0,1,0-16A32.1,32.1,0,0,1,232,72Z"/></g>
    <g v-else-if="displayWeight === 'light'"><circle cx="68" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="188" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="104" y1="160" x2="152" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M32,164V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M200,48a23.9,23.9,0,0,1,24,24v92" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><circle cx="68" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="188" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="104" y1="160" x2="152" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M32,164V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M200,48a23.9,23.9,0,0,1,24,24v92" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><circle cx="68" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="188" cy="164" r="36" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="160" x2="152" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,164V72A23.9,23.9,0,0,1,56,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,48a23.9,23.9,0,0,1,24,24v92" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhEyeglasses",
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
