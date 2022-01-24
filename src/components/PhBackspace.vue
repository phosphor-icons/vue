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
    <g v-if="displayWeight === 'bold'"><path d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="104" x2="112" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="152" x2="112" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z" opacity="0.2"/><path d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="104" x2="112" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="152" x2="112" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M216,40H68.5a16.2,16.2,0,0,0-13.7,7.8L9.1,123.9a8,8,0,0,0,0,8.2l45.7,76.1h0A16.1,16.1,0,0,0,68.5,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM165.7,146.3a8.1,8.1,0,0,1,0,11.4A8.5,8.5,0,0,1,160,160a8.3,8.3,0,0,1-5.7-2.3L136,139.3l-18.3,18.4A8.5,8.5,0,0,1,112,160a8.3,8.3,0,0,1-5.7-2.3,8.1,8.1,0,0,1,0-11.4L124.7,128l-18.4-18.3a8.1,8.1,0,0,1,11.4-11.4L136,116.7l18.3-18.4a8.1,8.1,0,0,1,11.4,11.4L147.3,128Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="160" y1="104" x2="112" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="160" y1="152" x2="112" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="160" y1="104" x2="112" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="160" y1="152" x2="112" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="104" x2="112" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="152" x2="112" y2="104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhBackspace",
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
