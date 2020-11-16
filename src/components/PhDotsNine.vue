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
  
  <circle cx="60" cy="60" r="16"/>
  <circle cx="128" cy="60" r="16"/>
  <circle cx="196" cy="60" r="16"/>
  <circle cx="60" cy="128" r="16"/>
  <circle cx="128" cy="128" r="16"/>
  <circle cx="196" cy="128" r="16"/>
  <circle cx="60" cy="196" r="16"/>
  <circle cx="128" cy="196" r="16"/>
  <circle cx="196" cy="196" r="16"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  
  <circle cx="60" cy="60" r="12"/>
  <circle cx="128" cy="60" r="12"/>
  <circle cx="196" cy="60" r="12"/>
  <circle cx="60" cy="128" r="12"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="196" cy="128" r="12"/>
  <circle cx="60" cy="196" r="12"/>
  <circle cx="128" cy="196" r="12"/>
  <circle cx="196" cy="196" r="12"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  
  <g>
    <circle cx="60" cy="60" r="12"/>
    <circle cx="128" cy="60" r="12"/>
    <circle cx="196" cy="60" r="12"/>
    <circle cx="60" cy="128" r="12"/>
    <circle cx="128" cy="128" r="12"/>
    <circle cx="196" cy="128" r="12"/>
    <circle cx="60" cy="196" r="12"/>
    <circle cx="128" cy="196" r="12"/>
    <circle cx="196" cy="196" r="12"/>
  </g>
</g>
    <g v-else-if="displayWeight === 'light'">
  
  <circle cx="60" cy="60" r="9"/>
  <circle cx="128" cy="60" r="9"/>
  <circle cx="196" cy="60" r="9"/>
  <circle cx="60" cy="128" r="9"/>
  <circle cx="128" cy="128" r="9"/>
  <circle cx="196" cy="128" r="9"/>
  <circle cx="60" cy="196" r="9"/>
  <circle cx="128" cy="196" r="9"/>
  <circle cx="196" cy="196" r="9"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  
  <circle cx="60" cy="60" r="6"/>
  <circle cx="128" cy="60" r="6"/>
  <circle cx="196" cy="60" r="6"/>
  <circle cx="60" cy="128" r="6"/>
  <circle cx="128" cy="128" r="6"/>
  <circle cx="196" cy="128" r="6"/>
  <circle cx="60" cy="196" r="6"/>
  <circle cx="128" cy="196" r="6"/>
  <circle cx="196" cy="196" r="6"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  
  <circle cx="60" cy="60" r="12"/>
  <circle cx="128" cy="60" r="12"/>
  <circle cx="196" cy="60" r="12"/>
  <circle cx="60" cy="128" r="12"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="196" cy="128" r="12"/>
  <circle cx="60" cy="196" r="12"/>
  <circle cx="128" cy="196" r="12"/>
  <circle cx="196" cy="196" r="12"/>
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
  name: "PhDotsNine",
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
