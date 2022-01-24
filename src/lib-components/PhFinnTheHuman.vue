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
      <rect
        x="56"
        y="100"
        width="144"
        height="80"
        rx="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M20,64a24,24,0,0,1,48,0H188a24,24,0,0,1,48,0v88a64.1,64.1,0,0,1-64,64H84a64.1,64.1,0,0,1-64-64Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="96" cy="140" r="16" />
      <circle cx="160" cy="140" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M208,40a23.9,23.9,0,0,0-24,24H72a24,24,0,0,0-48,0v80a64.1,64.1,0,0,0,64,64h80a64.1,64.1,0,0,0,64-64V64A23.9,23.9,0,0,0,208,40Zm-8,104a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32v-8a32,32,0,0,1,32-32h80a32,32,0,0,1,32,32Z"
        opacity="0.2"
      />
      <rect
        x="56"
        y="104"
        width="144"
        height="72"
        rx="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="92" cy="140" r="12" />
      <circle cx="164" cy="140" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M176,140a12,12,0,1,1-12-12A12,12,0,0,1,176,140ZM92,128a12,12,0,1,0,12,12A12,12,0,0,0,92,128ZM240,64v80a72.1,72.1,0,0,1-72,72H88a72.1,72.1,0,0,1-72-72V64a32,32,0,0,1,63-8h98a32,32,0,0,1,63,8Zm-40,72a32,32,0,0,0-32-32H88a32,32,0,0,0-32,32v8a32,32,0,0,0,32,32h80a32,32,0,0,0,32-32Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="56"
        y="104"
        width="144"
        height="72"
        rx="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="92" cy="140" r="10" />
      <circle cx="164" cy="140" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="56"
        y="104"
        width="144"
        height="72"
        rx="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="92" cy="140" r="8" />
      <circle cx="164" cy="140" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="56"
        y="104"
        width="144"
        height="72"
        rx="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="92" cy="140" r="12" />
      <circle cx="164" cy="140" r="12" />
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
  name: "PhFinnTheHuman",
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
