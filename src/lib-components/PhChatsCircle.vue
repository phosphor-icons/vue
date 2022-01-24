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
    <g v-if="displayWeight === 'bold'"><path d="M34.1,140.7a72.1,72.1,0,1,1,25.2,25.2h0L34.4,173a6,6,0,0,1-7.4-7.4l7.1-24.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M92.1,175.9a71.9,71.9,0,0,0,104.6,38h0l24.9,7.1a6,6,0,0,0,7.4-7.4l-7.1-24.9h0a71.9,71.9,0,0,0-58-108.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M92.1,175.9a71.9,71.9,0,0,0,104.6,38h0l24.9,7.1a6,6,0,0,0,7.4-7.4l-7.1-24.9h0a71.9,71.9,0,0,0-58-108.6h0A70.2,70.2,0,0,1,168,104a72,72,0,0,1-72,72Z" opacity="0.2"/><path d="M34.1,140.7a72.1,72.1,0,1,1,25.2,25.2h0L34.4,173a6,6,0,0,1-7.4-7.4l7.1-24.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.1,175.9a71.9,71.9,0,0,0,104.6,38h0l24.9,7.1a6,6,0,0,0,7.4-7.4l-7.1-24.9h0a71.9,71.9,0,0,0-58-108.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M230.5,189.8A80,80,0,0,0,169.6,72.6,80,80,0,1,0,25.5,141.8l-6.2,21.6a13.9,13.9,0,0,0,17.3,17.3l21.6-6.2a80.8,80.8,0,0,0,28.2,8.9,80,80,0,0,0,111.4,39.1l21.6,6.2a13.9,13.9,0,0,0,17.3-17.3Zm-15.4-5.1a7.6,7.6,0,0,0-.9,6.2l6.2,21.5-21.5-6.2a7.6,7.6,0,0,0-6.2.9,64.2,64.2,0,0,1-88.4-23.5A80.2,80.2,0,0,0,176,104a83.6,83.6,0,0,0-1.3-14.3A64,64,0,0,1,224,152,64.8,64.8,0,0,1,215.1,184.7Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M34.1,140.7a72.1,72.1,0,1,1,25.2,25.2h0L34.4,173a6,6,0,0,1-7.4-7.4l7.1-24.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M92.1,175.9a71.9,71.9,0,0,0,104.6,38h0l24.9,7.1a6,6,0,0,0,7.4-7.4l-7.1-24.9h0a71.9,71.9,0,0,0-58-108.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M34.1,140.7a72.1,72.1,0,1,1,25.2,25.2h0L34.4,173a6,6,0,0,1-7.4-7.4l7.1-24.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M92.1,175.9a71.9,71.9,0,0,0,104.6,38h0l24.9,7.1a6,6,0,0,0,7.4-7.4l-7.1-24.9h0a71.9,71.9,0,0,0-58-108.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M34.1,140.7a72.1,72.1,0,1,1,25.2,25.2h0L34.4,173a6,6,0,0,1-7.4-7.4l7.1-24.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.1,175.9a71.9,71.9,0,0,0,104.6,38h0l24.9,7.1a6,6,0,0,0,7.4-7.4l-7.1-24.9h0a71.9,71.9,0,0,0-58-108.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhChatsCircle",
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
