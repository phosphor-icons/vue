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
    <g v-if="displayWeight === 'bold'">
  <rect width="256" height="256" fill="none"/>
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
  <rect width="256" height="256" fill="none"/>
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
  <rect width="256" height="256" fill="none"/>
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
    <g v-else-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
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
  <rect width="256" height="256" fill="none"/>
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
  <rect width="256" height="256" fill="none"/>
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
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter,
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
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
