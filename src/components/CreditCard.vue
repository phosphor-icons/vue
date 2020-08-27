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
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96Z" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM111.99414,184h-48a8,8,0,0,1,0-16h48a8,8,0,1,1,0,16ZM40,88V56H216l.0022,32Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "CreditCard",
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
