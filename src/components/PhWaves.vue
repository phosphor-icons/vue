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
    <g v-if="displayWeight === 'bold'"><path d="M40,72s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M40,128s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M40,184s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M40,72s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,128s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,184s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M33.7,77A8,8,0,0,1,35,65.8,81.8,81.8,0,0,1,64.1,52.2c16.1-4,41.1-5,68.3,13.1,42.4,28.3,77.2,1.6,78.6.4A8.2,8.2,0,0,1,222.3,67,8,8,0,0,1,221,78.2a81.8,81.8,0,0,1-29.1,13.6,81,81,0,0,1-19.7,2.4c-14,0-30.8-3.7-48.6-15.5C81.2,50.4,46.4,77.1,45,78.3A8.2,8.2,0,0,1,33.7,77ZM211,121.7c-1.4,1.2-36.2,27.9-78.6-.4-27.2-18.1-52.2-17.1-68.3-13.1A81.8,81.8,0,0,0,35,121.8,8,8,0,0,0,33.7,133,8.2,8.2,0,0,0,45,134.3c1.4-1.2,36.2-27.9,78.6.4,17.8,11.8,34.6,15.5,48.6,15.5a81,81,0,0,0,19.7-2.4A81.8,81.8,0,0,0,221,134.2a8,8,0,0,0,1.3-11.2A8.2,8.2,0,0,0,211,121.7Zm0,56c-1.4,1.2-36.2,27.9-78.6-.4-27.2-18.1-52.2-17.1-68.3-13.1A81.8,81.8,0,0,0,35,177.8,8,8,0,0,0,33.7,189,8.2,8.2,0,0,0,45,190.3c1.4-1.2,36.2-27.9,78.6.4,17.8,11.8,34.6,15.5,48.6,15.5a82.6,82.6,0,0,0,48.8-16,8,8,0,0,0,1.3-11.2A8.2,8.2,0,0,0,211,177.7Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M40,72s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M40,128s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M40,184s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M40,72s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,128s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,184s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M40,72s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,128s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,184s40-32,88,0,88,0,88,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhWaves",
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
