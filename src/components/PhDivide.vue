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
    <g v-if="displayWeight === 'bold'"><line x1="40" y1="128" x2="216" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="64" r="20"/><circle cx="128" cy="192" r="20"/></g>
    <g v-else-if="displayWeight === 'duotone'"><line x1="40" y1="128" x2="216" y2="128" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="64" r="16"/><circle cx="128" cy="192" r="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM128,80a16,16,0,1,0-16-16A16,16,0,0,0,128,80Zm0,96a16,16,0,1,0,16,16A16,16,0,0,0,128,176Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="40" y1="128" x2="216" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="64" r="14"/><circle cx="128" cy="192" r="14"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="40" y1="128" x2="216" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="64" r="12"/><circle cx="128" cy="192" r="12"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="40" y1="128" x2="216" y2="128" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="64" r="16"/><circle cx="128" cy="192" r="16"/></g>
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
  name: "PhDivide",
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
