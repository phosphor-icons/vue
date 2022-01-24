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
    <g v-if="displayWeight === 'bold'"><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M193.9,200.5A80.1,80.1,0,0,1,160,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M80,128A79,79,0,0,1,91.1,87.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M119.4,59.1A79,79,0,0,1,160,48a80.1,80.1,0,0,1,64.8,127" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M80,127.6a80,80,0,1,1,80,80H72a56,56,0,0,1,0-112,53,53,0,0,1,13.9,1.8" opacity="0.2"/><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M193.9,200.5A80.1,80.1,0,0,1,160,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112.6,63.5A80,80,0,0,1,219.7,181.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,128A79,79,0,0,1,91.1,87.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M53.9,34.6A8,8,0,0,0,42.1,45.4L81.3,88.5v.2A58.2,58.2,0,0,0,72,88a64,64,0,0,0,0,128h88a87.9,87.9,0,0,0,31.8-5.9l10.3,11.3A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3Z"/><path d="M160,40a87.2,87.2,0,0,0-52.1,17.1,7.9,7.9,0,0,0-3.2,5.6,7.8,7.8,0,0,0,2,6.2L213.8,186.7a8.1,8.1,0,0,0,5.9,2.6h0a7.8,7.8,0,0,0,5.9-2.7A88,88,0,0,0,160,40Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M193.9,200.5A80.1,80.1,0,0,1,160,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M112.6,63.5A80,80,0,0,1,219.7,181.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M80,128A79,79,0,0,1,91.1,87.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M193.9,200.5A80.1,80.1,0,0,1,160,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M112.6,63.5A80,80,0,0,1,219.7,181.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M80,128A79,79,0,0,1,91.1,87.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M193.9,200.5A80.1,80.1,0,0,1,160,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112.6,63.5A80,80,0,0,1,219.7,181.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,128A79,79,0,0,1,91.1,87.4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhCloudSlash",
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
