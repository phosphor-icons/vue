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
    <g v-if="displayWeight === 'bold'">
      <circle cx="60" cy="60" r="16" />
      <circle cx="128" cy="60" r="16" />
      <circle cx="196" cy="60" r="16" />
      <circle cx="60" cy="128" r="16" />
      <circle cx="128" cy="128" r="16" />
      <circle cx="196" cy="128" r="16" />
      <circle cx="60" cy="196" r="16" />
      <circle cx="128" cy="196" r="16" />
      <circle cx="196" cy="196" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="60" cy="60" r="12" />
      <circle cx="128" cy="60" r="12" />
      <circle cx="196" cy="60" r="12" />
      <circle cx="60" cy="128" r="12" />
      <circle cx="128" cy="128" r="12" />
      <circle cx="196" cy="128" r="12" />
      <circle cx="60" cy="196" r="12" />
      <circle cx="128" cy="196" r="12" />
      <circle cx="196" cy="196" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M60,48A12,12,0,1,0,72,60,12,12,0,0,0,60,48Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="60" cy="60" r="10" />
      <circle cx="128" cy="60" r="10" />
      <circle cx="196" cy="60" r="10" />
      <circle cx="60" cy="128" r="10" />
      <circle cx="128" cy="128" r="10" />
      <circle cx="196" cy="128" r="10" />
      <circle cx="60" cy="196" r="10" />
      <circle cx="128" cy="196" r="10" />
      <circle cx="196" cy="196" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="60" cy="60" r="8" />
      <circle cx="128" cy="60" r="8" />
      <circle cx="196" cy="60" r="8" />
      <circle cx="60" cy="128" r="8" />
      <circle cx="128" cy="128" r="8" />
      <circle cx="196" cy="128" r="8" />
      <circle cx="60" cy="196" r="8" />
      <circle cx="128" cy="196" r="8" />
      <circle cx="196" cy="196" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="60" cy="60" r="12" />
      <circle cx="128" cy="60" r="12" />
      <circle cx="196" cy="60" r="12" />
      <circle cx="60" cy="128" r="12" />
      <circle cx="128" cy="128" r="12" />
      <circle cx="196" cy="128" r="12" />
      <circle cx="60" cy="196" r="12" />
      <circle cx="128" cy="196" r="12" />
      <circle cx="196" cy="196" r="12" />
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
  ContextGetter
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
    }
  }
});
</script>
