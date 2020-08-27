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
  <polygon points="176 160 128 128 176 96 176 160" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="112 160 64 128 112 96 112 160" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="176 160 128 128 176 96 176 160" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="112 160 64 128 112 96 112 160" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <path d="M24,128A104,104,0,1,0,128,24,104.11791,104.11791,0,0,0,24,128Zm32,0a7.99943,7.99943,0,0,1,3.5625-6.65625l48-32A8.00016,8.00016,0,0,1,120,96v32a7.99943,7.99943,0,0,1,3.5625-6.65625l48-32A8.00016,8.00016,0,0,1,184,96v64a7.99975,7.99975,0,0,1-12.4375,6.65625l-48-32A7.99943,7.99943,0,0,1,120,128v32a7.99975,7.99975,0,0,1-12.4375,6.65625l-48-32A7.99943,7.99943,0,0,1,56,128Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M118.67188,123.00781l48-32A6.00192,6.00192,0,0,1,176,96v64a5.99981,5.99981,0,0,1-9.32812,4.99219l-48-32a5.99969,5.99969,0,0,1,0-9.98438Z"/>
  <path d="M66.67188,123.00781l48-32A6.00192,6.00192,0,0,1,124,96v64a5.99981,5.99981,0,0,1-9.32812,4.99219l-48-32a5.99969,5.99969,0,0,1,0-9.98438Z"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M121.78125,124.67188l48-32a3.95153,3.95153,0,0,1,4.10938-.19532A3.99679,3.99679,0,0,1,176,96v64a3.99988,3.99988,0,0,1-6.21875,3.32813l-48-32a3.99979,3.99979,0,0,1,0-6.65625Z"/>
  <path d="M65.78125,124.67188l48-32a3.94992,3.94992,0,0,1,4.10938-.19532A3.99679,3.99679,0,0,1,120,96v64a3.99988,3.99988,0,0,1-6.21875,3.32813l-48-32a3.99979,3.99979,0,0,1,0-6.65625Z"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="176 160 128 128 176 96 176 160" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="112 160 64 128 112 96 112 160" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <g opacity="0.2">
    <rect x="255.99934" width="256" height="256" fill="none"/>
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
  name: "Rewind",
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
