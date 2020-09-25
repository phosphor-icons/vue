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
  <line x1="228" y1="208" x2="28" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="68" y="120" width="120" height="56" transform="translate(-20 276) rotate(-90)" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="36" y="144" width="72" height="56" transform="translate(-100 244) rotate(-90)" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect x="156" y="40" width="56" height="168" opacity="0.2"/>
  <line x1="228" y1="208" x2="28" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="68" y="120" width="120" height="56" transform="translate(-20 276) rotate(-90)" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="36" y="144" width="72" height="56" transform="translate(-100 244) rotate(-90)" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <path d="M228,200h-8V40a8.00008,8.00008,0,0,0-8-8H164a8.00008,8.00008,0,0,0-8,8V200H140V80H104a7.99993,7.99993,0,0,0-8,8V200H80V128H44a7.99993,7.99993,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <line x1="228" y1="208" x2="28" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="68" y="120" width="120" height="56" transform="translate(-20 276) rotate(-90)" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="36" y="144" width="72" height="56" transform="translate(-100 244) rotate(-90)" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <line x1="228" y1="208" x2="28" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="68" y="120" width="120" height="56" transform="translate(-20 276) rotate(-90)" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="36" y="144" width="72" height="56" transform="translate(-100 244) rotate(-90)" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <line x1="228" y1="208" x2="28" y2="208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="68" y="120" width="120" height="56" transform="translate(-20 276) rotate(-90)" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="36" y="144" width="72" height="56" transform="translate(-100 244) rotate(-90)" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
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
  name: "PhChartBar",
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
