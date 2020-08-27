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
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" opacity="0.2"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "ChartPieSlice",
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
