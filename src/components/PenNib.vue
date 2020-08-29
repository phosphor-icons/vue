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
  <line x1="128.00001" y1="136" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128.00001" cy="112" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M41.56652,100.75177A111.60148,111.60148,0,0,0,71.99863,24.00022H184.0013a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect x="-0.00001" width="256" height="256" fill="none"/>
  <path d="M184.00122,24H71.99854a111.60071,111.60071,0,0,1-30.43213,76.75195L128,240l86.29053-139.40039A111.6,111.6,0,0,1,184.00122,24ZM128,136a24,24,0,1,1,24-24A23.99994,23.99994,0,0,1,128,136Z" opacity="0.2"/>
  <line x1="128" y1="136" x2="128" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="112" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M41.56651,100.75177A111.60148,111.60148,0,0,0,71.99862,24.00022H184.00129a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <rect x="0.0715" width="256" height="256" fill="none"/>
  <g>
    <path d="M220.19727,95.12695a103.59433,103.59433,0,0,1-28.124-71.126,8.00039,8.00039,0,0,0-8-8.001H72.07031a8.00041,8.00041,0,0,0-8,8.00049A103.57867,103.57867,0,0,1,35.8125,95.26807a8.00035,8.00035,0,0,0-.97168,9.70263l85.23047,137.30957v-99.293a32,32,0,1,1,16,0v99.28809l85.09277-137.46484A7.99866,7.99866,0,0,0,220.19727,95.12695Z"/>
    <circle cx="128.07129" cy="112" r="16"/>
  </g>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <line x1="128.00001" y1="136" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128.00001" cy="112" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M41.56652,100.75177A111.60148,111.60148,0,0,0,71.99863,24.00022H184.0013a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <line x1="128.00001" y1="136" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128.00001" cy="112" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M41.56652,100.75177A111.60148,111.60148,0,0,0,71.99863,24.00022H184.0013a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <line x1="128.00001" y1="136" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128.00001" cy="112" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M41.56652,100.75177A111.60148,111.60148,0,0,0,71.99863,24.00022H184.0013a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "PenNib",
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
