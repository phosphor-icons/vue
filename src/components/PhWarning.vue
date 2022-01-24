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
    <g v-if="displayWeight === 'bold'"><line x1="128" y1="104" x2="128" y2="136" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="176" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z" opacity="0.2"/><line x1="128" y1="112" x2="128" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="180" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M236.7,188,148.8,36a24,24,0,0,0-41.6,0h0L19.3,188A23.9,23.9,0,0,0,40,224H216a23.9,23.9,0,0,0,20.7-36ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="128" y1="104" x2="128" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="180" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="128" y1="104" x2="128" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="180" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="128" y1="104" x2="128" y2="144" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="180" r="12"/></g>
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
  name: "PhWarning",
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
