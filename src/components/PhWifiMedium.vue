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
    <g v-if="displayWeight === 'bold'"><path d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M59,132.1a98.8,98.8,0,0,1,138,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="200" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M134,208.9a7.9,7.9,0,0,1-12.1-.1L50.4,124.5a119.9,119.9,0,0,1,155.2,0Z" opacity="0.2"/><path d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M50.4,124.5a119.9,119.9,0,0,1,155.2,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M240.6,69.6C174.3,19.5,81.7,19.5,15.4,69.5a16.1,16.1,0,0,0-6.2,11,16.6,16.6,0,0,0,3.7,12.3L115.8,214a16.1,16.1,0,0,0,12.2,5.7h0a16,16,0,0,0,12.1-5.6h0l103-121.4a16,16,0,0,0,3.7-12.2A15.6,15.6,0,0,0,240.6,69.6ZM25,82.3Zm179.5,31.2a131,131,0,0,0-17-10.7l-.8-.4a122.1,122.1,0,0,0-17.8-7.6l-1.5-.4A115.2,115.2,0,0,0,149,89.8l-1.6-.2a118.4,118.4,0,0,0-38.8,0l-1.6.2a126.7,126.7,0,0,0-18.4,4.5l-1.5.5a127,127,0,0,0-17.8,7.6l-.8.4a123.5,123.5,0,0,0-16.9,10.7h0L25.1,82.3c60.6-45.7,145.3-45.7,205.8.1Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M59,132.1a98.8,98.8,0,0,1,138,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="200" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M59,132.1a98.8,98.8,0,0,1,138,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="200" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M59,132.1a98.8,98.8,0,0,1,138,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="200" r="12"/></g>
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
  name: "PhWifiMedium",
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
