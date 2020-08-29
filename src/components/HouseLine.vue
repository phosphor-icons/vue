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
  <path d="M215.98242,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M15.98242,216h224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="151.977 215.992 151.977 151.992 103.977 151.992 103.977 215.992" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <path d="M151.96484,215.99158v-64h-48v64L39.9707,216V115.53855a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509a8,8,0,0,1,2.6185,5.91942V216Z" opacity="0.2"/>
  <path d="M215.9707,216V115.53887a8,8,0,0,0-2.6185-5.91942L133.3467,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M15.9707,216h224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="151.965 215.992 151.965 151.992 103.965 151.992 103.965 215.992" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <path d="M239.97656,208h-16V115.53882A16.03729,16.03729,0,0,0,218.74023,103.7L138.7334,30.96484a15.93607,15.93607,0,0,0-21.52637.001L37.21289,103.7a16.034,16.034,0,0,0-5.23633,11.83862V208h-16a8,8,0,0,0,0,16h224a8,8,0,0,0,0-16ZM103.99414,152h48v56h-48Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <path d="M215.98828,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M15.98828,216h224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="151.982 215.992 151.982 151.992 103.982 151.992 103.982 215.992" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <path d="M215.99414,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M15.99414,216h224" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="151.988 215.992 151.988 151.992 103.988 151.992 103.988 215.992" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <path d="M216,216V115.53887a8,8,0,0,0-2.6185-5.91942L133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M16,216H240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="151.994 215.992 151.994 151.992 103.994 151.992 103.994 215.992" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "HouseLine",
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
