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
  >
    <g v-if="displayWeight === 'bold'">
  
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="103.75129" y1="133.98956" x2="134.92552" y2="79.99421" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  
  <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="103.75129" y1="133.98956" x2="134.92552" y2="79.99421" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  
  <g>
    <path d="M138,130.67188a19.8777,19.8777,0,0,0-9.96875-2.69532,20.09909,20.09909,0,0,0-5.20313.69532,20.00581,20.00581,0,1,0,15.17188,2Z"/>
    <path d="M208,32H48A16.02085,16.02085,0,0,0,32,48V208a16.02085,16.02085,0,0,0,16,16H208a16.02085,16.02085,0,0,0,16-16V48A16.02085,16.02085,0,0,0,208,32ZM159.17969,165.99219a35.79748,35.79748,0,0,1-21.85157,16.77344,36.33046,36.33046,0,0,1-9.375,1.24218,36.01571,36.01571,0,0,1-31.13281-54.01562l31.17188-54a8.00128,8.00128,0,1,1,13.85937,8L125.6543,112.05176a36.01393,36.01393,0,0,1,33.52539,53.94043Z"/>
  </g>
</g>
    <g v-else-if="displayWeight === 'light'">
  
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="103.75129" y1="133.98956" x2="134.92552" y2="79.99421" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="103.75129" y1="133.98956" x2="134.92552" y2="79.99421" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="103.75129" y1="133.98956" x2="134.92552" y2="79.99421" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter,
} from "@/lib/types";
export default defineComponent({
  name: "PhNumberSquareSix",
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
