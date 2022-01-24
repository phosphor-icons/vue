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
    <slot />
    <g v-if="displayWeight === 'bold'"><line x1="72" y1="216" x2="216" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z" opacity="0.2"/><line x1="72" y1="216" x2="216" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M224,216a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM208,100H153.8L110.9,53.3A3.9,3.9,0,0,0,108,52H91.1a11.6,11.6,0,0,0-9.7,5,11.9,11.9,0,0,0-1.7,10.8L90.5,100H65.9L47.1,77.4A4.1,4.1,0,0,0,44,76H26.8a12.1,12.1,0,0,0-9.7,4.8,11.9,11.9,0,0,0-1.8,10.6l14,46.9A35.8,35.8,0,0,0,63.8,164H240a4,4,0,0,0,4-4V136A36,36,0,0,0,208,100Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="72" y1="216" x2="216" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="72" y1="216" x2="216" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="72" y1="216" x2="216" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "../types";
export default /*#__PURE__*/Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhAirplaneInFlight",
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
    }
  }
});
</script>
