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
    <g v-if="displayWeight === 'bold'"><line x1="40" y1="216" x2="40" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M40,168c64-48,112,48,176,0V48C152,96,104,0,40,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M216,106.1c-64,48-112-48-176,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="100" y1="37.4" x2="100" y2="157.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="156" y1="58.6" x2="156" y2="178.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><g opacity="0.2"><path d="M40,106.1c21.4-16,41-16,60-10.6V37.4C81,32,61.4,32,40,48Z"/></g><g opacity="0.2"><path d="M156,58.6C175,64,194.6,64,216,48v58.1c-21.4,16.1-41,16-60,10.7Z"/></g><g opacity="0.2"><path d="M156,116.8c-18.9-5.4-37.1-15.9-56-21.3v61.9c18.9,5.3,37.1,15.9,56,21.2Z"/></g><line x1="40" y1="216" x2="40" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,168c64-48,112,48,176,0V48C152,96,104,0,40,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,106.1c-64,48-112-48-176,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="100" y1="37.4" x2="100" y2="157.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="156" y1="58.6" x2="156" y2="178.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M219.6,40.8a8.2,8.2,0,0,0-8.4.8c-28.3,21.2-52.3,11-80-.9s-60.3-25.9-96,.9A8,8,0,0,0,32,48h0V216a8,8,0,0,0,16,0V172.1c26.9-18.1,50.1-8.2,76.8,3.3,16.3,6.9,33.8,14.4,52.6,14.4,13.8,0,28.3-4,43.4-15.4A8.1,8.1,0,0,0,224,168V48A8.2,8.2,0,0,0,219.6,40.8ZM156,170.3V116.8c-18.9-5.4-37.1-15.9-56-21.3v53.6c-16.3-4.2-33.6-4.8-52,4.5V100.8c18.3-10.6,35.4-10,52-5.3V45.7a243.3,243.3,0,0,1,24.8,9.7c10,4.2,20.4,8.7,31.2,11.5v49.9c16.6,4.7,33.7,5.3,52-5.3v52.4C189.7,176.2,173.1,175.6,156,170.3Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="40" y1="216" x2="40" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M40,168c64-48,112,48,176,0V48C152,96,104,0,40,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M216,106.1c-64,48-112-48-176,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="100" y1="37.4" x2="100" y2="157.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="156" y1="58.6" x2="156" y2="178.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="40" y1="216" x2="40" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,168c64-48,112,48,176,0V48C152,96,104,0,40,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M216,106.1c-64,48-112-48-176,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="100" y1="37.4" x2="100" y2="157.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="156" y1="58.6" x2="156" y2="178.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="40" y1="216" x2="40" y2="48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,168c64-48,112,48,176,0V48C152,96,104,0,40,48" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,106.1c-64,48-112-48-176,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="100" y1="37.4" x2="100" y2="157.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="156" y1="58.6" x2="156" y2="178.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhFlagCheckered",
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
