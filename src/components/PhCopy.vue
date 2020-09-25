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
  <rect width="255.99316" height="255.99316" fill="none"/>
  <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <polygon points="168 87.993 168 167.993 216 167.993 216 39.993 88 39.993 88 87.993 168 87.993" opacity="0.2"/>
  <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <rect x="32.00684" y="79.99414" width="144" height="144" rx="8"/>
  <path d="M192.00684,79.99414v96h24a7.9954,7.9954,0,0,0,8-8v-128a7.99541,7.99541,0,0,0-8-8h-128a7.9954,7.9954,0,0,0-8,8v24h96A16.0008,16.0008,0,0,1,192.00684,79.99414Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
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
  name: "PhCopy",
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
