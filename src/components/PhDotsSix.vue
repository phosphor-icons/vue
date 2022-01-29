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
      <circle cx="60" cy="92" r="16" />
      <circle cx="128" cy="92" r="16" />
      <circle cx="196" cy="92" r="16" />
      <circle cx="60" cy="164" r="16" />
      <circle cx="128" cy="164" r="16" />
      <circle cx="196" cy="164" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="60" cy="92" r="12" />
      <circle cx="128" cy="92" r="12" />
      <circle cx="196" cy="92" r="12" />
      <circle cx="60" cy="164" r="12" />
      <circle cx="128" cy="164" r="12" />
      <circle cx="196" cy="164" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="60" cy="92" r="10" />
      <circle cx="128" cy="92" r="10" />
      <circle cx="196" cy="92" r="10" />
      <circle cx="60" cy="164" r="10" />
      <circle cx="128" cy="164" r="10" />
      <circle cx="196" cy="164" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="60" cy="92" r="8" />
      <circle cx="128" cy="92" r="8" />
      <circle cx="196" cy="92" r="8" />
      <circle cx="60" cy="164" r="8" />
      <circle cx="128" cy="164" r="8" />
      <circle cx="196" cy="164" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="60" cy="92" r="12" />
      <circle cx="128" cy="92" r="12" />
      <circle cx="196" cy="92" r="12" />
      <circle cx="60" cy="164" r="12" />
      <circle cx="128" cy="164" r="12" />
      <circle cx="196" cy="164" r="12" />
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
} from "../types";
export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhDotsSix",
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
