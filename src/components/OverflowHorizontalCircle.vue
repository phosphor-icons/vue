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
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="128" r="16"/>
  <circle cx="80" cy="128" r="16"/>
  <circle cx="176" cy="128" r="16"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="80" cy="128" r="12"/>
  <circle cx="176" cy="128" r="12"/>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24ZM80,140a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,80,140Zm48,0a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,128,140Zm48,0a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,176,140Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="128" r="9"/>
  <circle cx="80" cy="128" r="9"/>
  <circle cx="176" cy="128" r="9"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="128" r="6"/>
  <circle cx="80" cy="128" r="6"/>
  <circle cx="176" cy="128" r="6"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="80" cy="128" r="12"/>
  <circle cx="176" cy="128" r="12"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
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
  name: "OverflowHorizontalCircle",
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
