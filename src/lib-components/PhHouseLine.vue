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
    <g v-if="displayWeight === 'bold'"><path d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="16" y1="216" x2="240" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M152,216V152H104v64H40V115.5a7.9,7.9,0,0,1,2.6-5.9l80-72.7a7.9,7.9,0,0,1,10.7,0l80.1,72.7a8.3,8.3,0,0,1,2.6,5.9V216Z" opacity="0.2"/><path d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9L133.3,36.9a7.9,7.9,0,0,0-10.7,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="216" x2="240" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M240,208H224V115.5a15.7,15.7,0,0,0-5.3-11.8L138.7,31a15.9,15.9,0,0,0-21.5,0l-80,72.7A16,16,0,0,0,32,115.5V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-88,0H104V160a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="16" y1="216" x2="240" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="16" y1="216" x2="240" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="216" x2="240" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhHouseLine",
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
