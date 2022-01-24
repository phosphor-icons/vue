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
      <circle cx="92" cy="60" r="16" />
      <circle cx="164" cy="60" r="16" />
      <circle cx="92" cy="128" r="16" />
      <circle cx="164" cy="128" r="16" />
      <circle cx="92" cy="196" r="16" />
      <circle cx="164" cy="196" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="92" cy="60" r="12" />
      <circle cx="164" cy="60" r="12" />
      <circle cx="92" cy="128" r="12" />
      <circle cx="164" cy="128" r="12" />
      <circle cx="92" cy="196" r="12" />
      <circle cx="164" cy="196" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="92" cy="60" r="10" />
      <circle cx="164" cy="60" r="10" />
      <circle cx="92" cy="128" r="10" />
      <circle cx="164" cy="128" r="10" />
      <circle cx="92" cy="196" r="10" />
      <circle cx="164" cy="196" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="92" cy="60" r="8" />
      <circle cx="164" cy="60" r="8" />
      <circle cx="92" cy="128" r="8" />
      <circle cx="164" cy="128" r="8" />
      <circle cx="92" cy="196" r="8" />
      <circle cx="164" cy="196" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="92" cy="60" r="12" />
      <circle cx="164" cy="60" r="12" />
      <circle cx="92" cy="128" r="12" />
      <circle cx="164" cy="128" r="12" />
      <circle cx="92" cy="196" r="12" />
      <circle cx="164" cy="196" r="12" />
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
} from "../types";

export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhDotsSixVertical",
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
