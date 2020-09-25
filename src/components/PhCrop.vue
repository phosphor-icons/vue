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
  <line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <g>
    <path d="M240.00244,192.001h-176V16a8,8,0,0,0-16,0V48h-32a8,8,0,0,0,0,16h32V200.001a8.00039,8.00039,0,0,0,8,8h136v32a8,8,0,0,0,16,0v-32h32a8,8,0,0,0,0-16Z"/>
    <path d="M87.99365,64H192.00244V168.001a8,8,0,0,0,16,0V56a8.00008,8.00008,0,0,0-8-8H87.99365a8,8,0,0,0,0,16Z"/>
  </g>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect width="255.99316" height="255.99316" fill="none"/>
  <line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "PhCrop",
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
