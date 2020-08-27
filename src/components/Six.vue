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
    <g v-if="displayWeight === 'bold'">
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <g opacity="0.2">
    <rect x="256" width="256" height="256" fill="none"/>
  </g>
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </g>
</g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter,
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "Six",
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
