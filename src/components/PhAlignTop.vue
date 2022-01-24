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
    <g v-if="displayWeight === 'bold'"><line x1="216" y1="40" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="122" y="106" width="104" height="52" rx="8" transform="translate(306 -42) rotate(90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="56" y="80" width="52" height="144" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" opacity="0.2"/><rect x="56" y="72" width="56" height="152" rx="8" opacity="0.2"/><line x1="216" y1="40" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="56" y="72" width="56" height="152" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM192,64H152a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,192,64Zm-88,0H64A16,16,0,0,0,48,80V216a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,104,64Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="216" y1="40" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="56" y="72" width="56" height="152" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="216" y1="40" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="56" y="72" width="56" height="152" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="216" y1="40" x2="40" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="56" y="72" width="56" height="152" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhAlignTop",
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
