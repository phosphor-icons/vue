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
  <circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="76" r="16"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <path d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="76" r="12"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="127.99997" r="32"/>
  <path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06354,56.06354,0,0,0,56,56h88a56.06354,56.06354,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05437,48.05437,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="76" r="9"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="76" r="6"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <circle cx="128" cy="128" r="40" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="76" r="12"/>
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
  name: "PhInstagram",
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
