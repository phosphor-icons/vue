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
  <path d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128.00586" cy="156.00903" r="28" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="160 96.009 96 96.009 96 40.009" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <path d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z" opacity="0.2"/>
  <path d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128.00586" cy="156.00903" r="28" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 96.009 96 96.009 96 40.009" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M219.31445,79.99963,176.001,36.68811a15.88944,15.88944,0,0,0-11.31446-4.68848h-60.687L104,32.0094v56h56a8,8,0,0,1,0,16H96a8.00039,8.00039,0,0,1-8-8v-64l.00049-.00977H48a16.01833,16.01833,0,0,0-16,16v160a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V91.31409A15.898,15.898,0,0,0,219.31445,79.99963ZM128.00586,176.0094a20,20,0,1,1,20-20A20.02229,20.02229,0,0,1,128.00586,176.0094Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <path d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128.00586" cy="156.00903" r="28" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="160 96.009 96 96.009 96 40.009" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <path d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128.00586" cy="156.00903" r="28" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="160 96.009 96 96.009 96 40.009" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <path d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128.00586" cy="156.00903" r="28" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 96.009 96 96.009 96 40.009" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "FloppyDisk",
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
