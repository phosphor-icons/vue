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
    <g v-if="displayWeight === 'bold'"><line x1="224" y1="104" x2="176" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="224" y1="152" x2="176" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M200,184v24a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z" opacity="0.2"/><line x1="224" y1="104" x2="176" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="224" y1="152" x2="176" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,173.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V82.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M229.7,146.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L200,139.3l-18.3,18.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L188.7,128l-18.4-18.3a8.1,8.1,0,0,1,11.4-11.4L200,116.7l18.3-18.4a8.1,8.1,0,0,1,11.4,11.4L211.3,128Zm-26.9,18.5a3.9,3.9,0,0,0-5.6,0L193,169a24,24,0,0,1-17,7,23.6,23.6,0,0,1-17.2-7.3c-9.2-9.5-8.7-24.7.6-34.1l6.7-6.6-6.7-6.6c-9.5-9.6-9.7-25.4,0-34.7A24.1,24.1,0,0,1,193,87l4.2,4.2a3.9,3.9,0,0,0,5.6,0L207,87h0a2.9,2.9,0,0,0,1-2.3V43.8a16.6,16.6,0,0,0-9.2-15A15.9,15.9,0,0,0,180.7,32L16.3,196.4a16.3,16.3,0,0,0-4,17,15.9,15.9,0,0,0,15,10.6H192a16,16,0,0,0,16-16V171.2a3,3,0,0,0-1-2.2h0Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="224" y1="104" x2="176" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="224" y1="152" x2="176" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M200,173.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V82.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="224" y1="104" x2="176" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="224" y1="152" x2="176" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M200,173.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V82.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="224" y1="104" x2="176" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="224" y1="152" x2="176" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,173.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V82.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhCellSignalX",
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
