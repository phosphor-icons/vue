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
      <line
        x1="100"
        y1="12"
        x2="156"
        y2="12"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="56"
        y="48"
        width="144"
        height="180"
        rx="16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="128 178 144 138 112 138 128 98"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="56" y="40" width="144" height="184" rx="16" opacity="0.2" />
      <line
        x1="96"
        y1="8"
        x2="160"
        y2="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="56"
        y="40"
        width="144"
        height="184"
        rx="16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="128 172 144 132 112 132 128 92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path d="M96,16h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Z" />
      <path
        d="M184,32H72A24.1,24.1,0,0,0,48,56V208a24.1,24.1,0,0,0,24,24H184a24.1,24.1,0,0,0,24-24V56A24.1,24.1,0,0,0,184,32ZM151.4,135l-16,40a7.9,7.9,0,0,1-7.4,5,8,8,0,0,1-3-.6,7.9,7.9,0,0,1-4.4-10.4l11.6-29H112a7.9,7.9,0,0,1-6.6-3.5,8,8,0,0,1-.8-7.5l16-40a8,8,0,1,1,14.8,6l-11.6,29H144a7.9,7.9,0,0,1,6.6,3.5A8,8,0,0,1,151.4,135Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="96"
        y1="8"
        x2="160"
        y2="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="56"
        y="40"
        width="144"
        height="184"
        rx="16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="128 172 144 132 112 132 128 92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="96"
        y1="8"
        x2="160"
        y2="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="56"
        y="40"
        width="144"
        height="184"
        rx="16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="128 172 144 132 112 132 128 92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="96"
        y1="8"
        x2="160"
        y2="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="56"
        y="40"
        width="144"
        height="184"
        rx="16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="128 172 144 132 112 132 128 92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
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
  name: "PhBatteryChargingVertical",
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
