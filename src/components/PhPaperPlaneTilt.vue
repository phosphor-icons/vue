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
    <g v-if="displayWeight === 'bold'"><path d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="110.9" y1="145.1" x2="156.1" y2="99.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z" opacity="0.2"/><path d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="110.9" y1="145.1" x2="156.1" y2="99.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M227.7,48.3,175.3,234.2a15.9,15.9,0,0,1-14.1,11.6h-1.4a16,16,0,0,1-14.4-9.1l-35.7-75.4a4.1,4.1,0,0,1,.8-4.6l51.3-51.3a8,8,0,1,0-11.3-11.3L99.2,145.5a4.1,4.1,0,0,1-4.6.8l-75-35.5a16.6,16.6,0,0,1-9.5-15.6A15.9,15.9,0,0,1,21.8,80.7L208.1,28.2a16,16,0,0,1,17.7,6.5A16.7,16.7,0,0,1,227.7,48.3Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="110.9" y1="145.1" x2="156.1" y2="99.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="110.9" y1="145.1" x2="156.1" y2="99.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="110.9" y1="145.1" x2="156.1" y2="99.9" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhPaperPlaneTilt",
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
