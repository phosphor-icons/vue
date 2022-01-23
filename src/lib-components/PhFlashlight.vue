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
    <g v-if="displayWeight === 'bold'"><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M192,77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V64H192Z" opacity="0.2"/><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M184,16H72A16,16,0,0,0,56,32V77.3a15.6,15.6,0,0,0,3.2,9.6L80,114.7V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V114.7l20.8-27.8a15.6,15.6,0,0,0,3.2-9.6V32A16,16,0,0,0,184,16ZM136,152a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM72,56V32H184V56Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="120" x2="128" y2="152" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="64" x2="192" y2="64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhFlashlight",
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
