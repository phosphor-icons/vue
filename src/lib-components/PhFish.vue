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
    <g v-if="displayWeight === 'bold'"><circle cx="156" cy="76" r="16"/><path d="M186.3,167.9H184a48,48,0,0,1-48-48A48,48,0,0,1,88,72a17.7,17.7,0,0,1,.1-2.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M62.2,153.2,12,176l52,16,16,52,22.8-50.2h0c138.4-3.3,120-122.9,114.4-148.9a8.2,8.2,0,0,0-6.1-6.1c-26-5.6-145.6-24-148.9,114.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M88.1,69.7c-14.8,17.9-25,44.4-25.9,83.5h0L8,176l56,16,16,56,22.8-54.2h0c39-.9,65.6-11.1,83.5-25.9H184a48,48,0,0,1-48-48A48,48,0,0,1,88,72,17.7,17.7,0,0,1,88.1,69.7Z" opacity="0.2"/><circle cx="156" cy="76" r="12"/><path d="M186.3,167.9H184a48,48,0,0,1-48-48A48,48,0,0,1,88,72a17.7,17.7,0,0,1,.1-2.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M62.2,153.2,8,176l56,16,16,56,22.8-54.2h0c138.4-3.3,120-122.9,114.4-148.9a8.2,8.2,0,0,0-6.1-6.1c-26-5.6-145.6-24-148.9,114.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm37.7,83.5c-20.4,25.9-53.2,40.1-97.5,42.1L87.4,251.1A8.1,8.1,0,0,1,80,256h-.5a7.9,7.9,0,0,1-7.2-5.8L57.5,198.5,5.8,183.7a8,8,0,0,1-.9-15.1l49.5-20.8c2-44.3,16.1-77.1,42.1-97.5,41.1-32.4,99.4-23,116.3-19.3A15.9,15.9,0,0,1,225,43.2C228.7,60.1,238.1,118.4,205.7,159.5Zm3.7-112.9c-15.2-3.2-67.4-11.8-103,16.3A74.1,74.1,0,0,0,96,72.7,40.1,40.1,0,0,0,136,112a8,8,0,0,1,8,8,40.1,40.1,0,0,0,39.3,40,80,80,0,0,0,9.8-10.4C221.2,114,212.6,61.8,209.4,46.6Z"/></g>
    <g v-else-if="displayWeight === 'light'"><circle cx="156" cy="76" r="10"/><path d="M186.3,167.9H184a48,48,0,0,1-48-48A48,48,0,0,1,88,72a17.7,17.7,0,0,1,.1-2.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M62.2,153.2,8,176l56,16,16,56,22.8-54.2h0c138.4-3.3,120-122.9,114.4-148.9a8.2,8.2,0,0,0-6.1-6.1c-26-5.6-145.6-24-148.9,114.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><circle cx="156" cy="76" r="8"/><path d="M186.3,167.9H184a48,48,0,0,1-48-48A48,48,0,0,1,88,72a17.7,17.7,0,0,1,.1-2.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M62.2,153.2,8,176l56,16,16,56,22.8-54.2h0c138.4-3.3,120-122.9,114.4-148.9a8.2,8.2,0,0,0-6.1-6.1c-26-5.6-145.6-24-148.9,114.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><circle cx="156" cy="76" r="12"/><path d="M186.3,167.9H184a48,48,0,0,1-48-48A48,48,0,0,1,88,72a17.7,17.7,0,0,1,.1-2.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M62.2,153.2,8,176l56,16,16,56,22.8-54.2h0c138.4-3.3,120-122.9,114.4-148.9a8.2,8.2,0,0,0-6.1-6.1c-26-5.6-145.6-24-148.9,114.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhFish",
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
