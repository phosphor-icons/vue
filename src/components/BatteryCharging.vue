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
  <line x1="240" y1="96" x2="240" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" opacity="0.2"/>
  <line x1="240" y1="96" x2="240" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <path d="M240,168a7.99993,7.99993,0,0,1-8-8V96a8,8,0,0,1,16,0v64A7.99993,7.99993,0,0,1,240,168Z"/>
  <path d="M192,47.99805H40a24.02624,24.02624,0,0,0-24,24v112a24.02625,24.02625,0,0,0,24,24H192a24.02624,24.02624,0,0,0,24-24v-112A24.02624,24.02624,0,0,0,192,47.99805ZM139.42188,130.9668l-16,40a7.99361,7.99361,0,1,1-14.84375-5.9375l11.60937-29.03125H100a7.9927,7.9927,0,0,1-7.42187-10.96875l16-40a7.99361,7.99361,0,1,1,14.84375,5.9375L111.8125,119.99805H132a7.99271,7.99271,0,0,1,7.42188,10.96875Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <line x1="240" y1="96" x2="240" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <line x1="240" y1="96" x2="240" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <line x1="240" y1="96" x2="240" y2="160" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "BatteryCharging",
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
