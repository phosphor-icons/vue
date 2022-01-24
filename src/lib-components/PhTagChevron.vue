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
    <g v-if="displayWeight === 'bold'"><path d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z" opacity="0.2"/><path d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M235.7,136.9l-42.7,64h0a15.9,15.9,0,0,1-13.3,7.1H24a7.8,7.8,0,0,1-7-4.2,8,8,0,0,1,.3-8.2L62.4,128,17.3,60.4a8,8,0,0,1-.3-8.2A7.8,7.8,0,0,1,24,48H179.7A15.9,15.9,0,0,1,193,55.1l42.7,64A16,16,0,0,1,235.7,136.9Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhTagChevron",
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
