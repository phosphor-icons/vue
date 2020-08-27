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
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" opacity="0.2"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <path d="M227.30859,204.6875l-35.03613-35.0498c18.51856-27.083,21.3916-63.36915,3.92676-93.62989a87.95127,87.95127,0,1,0-32.20313,120.19532c2.02735-1.1709,3.67578-2.71387,5.57325-4.01856l35.11425,35.12793a15.99829,15.99829,0,0,0,22.625-22.625Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "MagnifyingGlass",
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
