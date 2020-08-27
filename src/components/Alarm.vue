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
  <circle cx="128" cy="128" r="88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="128 72 128 128 184 128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="196" y1="28" x2="228" y2="60" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="60" y1="28" x2="28" y2="60" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <circle cx="128" cy="128" r="88" opacity="0.2"/>
  <circle cx="128" cy="128" r="88" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
  <polyline points="128 72 128 128 184 128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="192" y1="32" x2="224" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="32" x2="32" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <path d="M128,32a96,96,0,1,0,96,96A96.10874,96.10874,0,0,0,128,32Zm56,104H128a8.00008,8.00008,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"/>
  <path d="M229.65674,58.34326l-32-32a7.99984,7.99984,0,0,0-11.31348,11.31348l32,32a7.99984,7.99984,0,1,0,11.31348-11.31348Z"/>
  <path d="M37.65674,69.65674l32-32A7.99984,7.99984,0,0,0,58.34326,26.34326l-32,32A7.99984,7.99984,0,1,0,37.65674,69.65674Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <circle cx="128" cy="128" r="88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="128 72 128 128 184 128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="192" y1="32" x2="224" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64" y1="32" x2="32" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <circle cx="128" cy="128" r="88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="128 72 128 128 184 128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="192" y1="32" x2="224" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64" y1="32" x2="32" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <circle cx="128" cy="128" r="88" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
  <polyline points="128 72 128 128 184 128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="192" y1="32" x2="224" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="32" x2="32" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "Alarm",
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
