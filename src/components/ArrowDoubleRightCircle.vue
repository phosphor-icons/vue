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
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="88 160 120 128 88 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="144 160 176 128 144 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <g>
    <polyline points="88 160 120 128 88 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <polyline points="144 160 176 128 144 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </g>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <path d="M201.53906,54.46094a103.95314,103.95314,0,1,0,0,147.07812A104.12262,104.12262,0,0,0,201.53906,54.46094Zm-75.88281,79.19531-32,32a7.99915,7.99915,0,0,1-11.3125-11.3125L108.6875,128,82.34375,101.65625a7.99915,7.99915,0,0,1,11.3125-11.3125l32,32A7.99708,7.99708,0,0,1,125.65625,133.65625Zm56,0-32,32a7.99915,7.99915,0,0,1-11.3125-11.3125L164.6875,128l-26.34375-26.34375a7.99915,7.99915,0,0,1,11.3125-11.3125l32,32A7.99708,7.99708,0,0,1,181.65625,133.65625Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="88 160 120 128 88 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="144 160 176 128 144 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="88 160 120 128 88 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="144 160 176 128 144 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="88 160 120 128 88 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="144 160 176 128 144 96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "ArrowDoubleRightCircle",
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
