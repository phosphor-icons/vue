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
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="76" cy="92" r="16" />
      <circle cx="124" cy="92" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="68" cy="84" r="12" />
      <circle cx="108" cy="84" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM68,96A12,12,0,1,1,80,84,12,12,0,0,1,68,96Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="68" cy="84" r="10" />
      <circle cx="108" cy="84" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="68" cy="84" r="8" />
      <circle cx="108" cy="84" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="68" cy="84" r="12" />
      <circle cx="108" cy="84" r="12" />
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
  name: "PhAppWindow",
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
