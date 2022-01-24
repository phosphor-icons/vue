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
    <g v-if="displayWeight === 'bold'"><line x1="128" y1="56" x2="128" y2="180" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M187.1,152.4c7.9.4,29.1-1.3,36.9-32.4s14.9-72-16-72-80,48-80,80c0-32-49.1-80-80-80S24,88,32,120s29,32.8,36.9,32.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,144.2A36,36,0,1,0,128,180a36,36,0,1,0,40-35.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M224,120c-7.8,31.1-29,32.8-36.9,32.4h0A36,36,0,1,1,128,180a36,36,0,1,1-59.1-27.6h0c-7.9.4-29.1-1.3-36.9-32.4S17.1,48,48,48s80,48,80,80c0-32,49.1-80,80-80S232,88,224,120Z" opacity="0.2"/><line x1="128" y1="56" x2="128" y2="180" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M187.1,152.4c7.9.4,29.1-1.3,36.9-32.4s14.9-72-16-72-80,48-80,80c0-32-49.1-80-80-80S24,88,32,120s29,32.8,36.9,32.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,144.2A36,36,0,1,0,128,180a36,36,0,1,0,40-35.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M136,87.5V56a8,8,0,0,0-16,0V87.5a98.7,98.7,0,0,1,8,12.7A98.7,98.7,0,0,1,136,87.5Z"/><path d="M231.4,50.4C227.7,45.6,220.7,40,208,40c-16.7,0-38.1,11.3-57.2,30.3A144.2,144.2,0,0,0,136,87.5V172a8,8,0,0,1-16,0V87.5a144.2,144.2,0,0,0-14.8-17.2C86.1,51.3,64.7,40,48,40c-12.7,0-19.7,5.6-23.4,10.4-6.8,8.7-12.2,24.1-.4,71.5,6.6,26.3,22,34.9,33.5,37.5a40,40,0,1,0,70.3,38,40,40,0,1,0,70.3-38c11.5-2.6,26.9-11.2,33.5-37.5S243.6,66,231.4,50.4Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="128" y1="56" x2="128" y2="180" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M187.1,152.4c7.9.4,29.1-1.3,36.9-32.4s14.9-72-16-72-80,48-80,80c0-32-49.1-80-80-80S24,88,32,120s29,32.8,36.9,32.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M88,144.2A36,36,0,1,0,128,180a36,36,0,1,0,40-35.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="128" y1="56" x2="128" y2="180" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M187.1,152.4c7.9.4,29.1-1.3,36.9-32.4s14.9-72-16-72-80,48-80,80c0-32-49.1-80-80-80S24,88,32,120s29,32.8,36.9,32.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M88,144.2A36,36,0,1,0,128,180a36,36,0,1,0,40-35.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="128" y1="56" x2="128" y2="180" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M187.1,152.4c7.9.4,29.1-1.3,36.9-32.4s14.9-72-16-72-80,48-80,80c0-32-49.1-80-80-80S24,88,32,120s29,32.8,36.9,32.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,144.2A36,36,0,1,0,128,180a36,36,0,1,0,40-35.8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhButterfly",
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
