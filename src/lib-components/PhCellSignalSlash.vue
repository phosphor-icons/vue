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
    <g v-if="displayWeight === 'bold'"><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M141.1,82.9l45.2-45.2A8,8,0,0,1,200,43.3V147.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a7.9,7.9,0,0,1-5.6-13.6L186.3,37.7A8,8,0,0,1,200,43.3Z" opacity="0.2"/><path d="M135.4,88.6l50.9-50.9A8,8,0,0,1,200,43.3V159.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M129.5,94a8,8,0,0,1,.3-11.1L180.7,32A16,16,0,0,1,208,43.3V159.6a8,8,0,0,1-5.1,7.5,7.4,7.4,0,0,1-2.9.5,7.9,7.9,0,0,1-5.9-2.6Zm84.4,116.6-160-176a8,8,0,0,0-11.3-.5,7.9,7.9,0,0,0-.5,11.3L101.7,111,16,196.7A16,16,0,0,0,27.3,224H208a8.2,8.2,0,0,0,5.4-2.1A8,8,0,0,0,213.9,210.6Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M135.4,88.6l50.9-50.9A8,8,0,0,1,200,43.3V159.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M135.4,88.6l50.9-50.9A8,8,0,0,1,200,43.3V159.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="48" y1="40" x2="208" y2="216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M135.4,88.6l50.9-50.9A8,8,0,0,1,200,43.3V159.6" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhCellSignalSlash",
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
