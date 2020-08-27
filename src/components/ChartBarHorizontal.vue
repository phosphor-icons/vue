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
  <line x1="40" y1="216" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="40" y="56" width="128" height="48" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <rect x="40" y="56" width="128" height="48" opacity="0.2"/>
  <rect x="40" y="104" width="176" height="48" opacity="0.2"/>
  <rect x="40" y="152" width="96" height="48" opacity="0.2"/>
  <line x1="40" y1="216" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="56" width="128" height="48" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M216,104H48V96H168a7.99977,7.99977,0,0,0,8-8V56a7.99977,7.99977,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a7.99977,7.99977,0,0,0,8-8V168a7.99977,7.99977,0,0,0-8-8H48v-8H216a7.99977,7.99977,0,0,0,8-8V112A7.99977,7.99977,0,0,0,216,104Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="216" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="40" y="56" width="128" height="48" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="216" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="40" y="56" width="128" height="48" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="216" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="56" width="128" height="48" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
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
  name: "ChartBarHorizontal",
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
