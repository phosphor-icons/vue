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
  >
    <g v-if="displayWeight === 'bold'">
  
  <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  
  <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" opacity="0.2"/>
  <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  
  <path d="M216,152a88,88,0,0,1-176,0c0-23.2168,7.68311-47.043,22.83545-70.81738a7.99928,7.99928,0,0,1,11.62842-2.03711l25.75537,19.84277,28.26221-77.72266a7.99985,7.99985,0,0,1,12.43017-3.58007C143.97754,20.06934,216,76.9502,216,152Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  
  <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  
  <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  
  <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter,
} from "@/lib/types";
export default defineComponent({
  name: "PhFire",
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
