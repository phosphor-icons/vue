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
  <polyline points="172 104 113.333 160 84 132" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <polyline points="172 104 113.333 160 84 132" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M208.00146,32h-160a16.01582,16.01582,0,0,0-16,16V208a16.01583,16.01583,0,0,0,16,16h160a16.01582,16.01582,0,0,0,16-16V48A16.01581,16.01581,0,0,0,208.00146,32ZM177.5249,109.78125l-58.67187,56a7.98451,7.98451,0,0,1-11.04688,0l-29.32812-28a7.99571,7.99571,0,1,1,11.04687-11.5625l23.80469,22.71875L166.478,98.21875a7.99571,7.99571,0,1,1,11.04687,11.5625Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <polyline points="172 104 113.333 160 84 132" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <polyline points="172 104 113.333 160 84 132" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <polyline points="172 104 113.333 160 84 132" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
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
  name: "CheckSquare",
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
