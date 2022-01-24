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
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="176"
        y1="32"
        x2="176"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M156.6,152H200a16,16,0,0,0,16-16V32H72A32,32,0,0,0,40,64v72a16,16,0,0,0,16,16H99.4a8,8,0,0,1,8,8.6L104,208a24,24,0,0,0,48,0l-3.4-47.4A8,8,0,0,1,156.6,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M40,112H216v24a16,16,0,0,1-16,16H153.2a8,8,0,0,0-7.9,9.1L152,208a24,24,0,0,1-48,0l6.7-46.9a8,8,0,0,0-7.9-9.1H56a16,16,0,0,1-16-16Z"
        opacity="0.2"
      />
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M102.8,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2a8,8,0,0,0-7.9,9.1L152,208a24,24,0,0,1-48,0l6.7-46.9A8,8,0,0,0,102.8,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="184"
        y1="32"
        x2="184"
        y2="80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M216,24H72A40,40,0,0,0,32,64v72a24.1,24.1,0,0,0,24,24h46.8l-6.7,46.9A3.7,3.7,0,0,0,96,208a32,32,0,0,0,64,0,3.7,3.7,0,0,0-.1-1.1L153.2,160H200a24.1,24.1,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v64H48V64A24.1,24.1,0,0,1,72,40Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M102.8,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2a8,8,0,0,0-7.9,9.1L152,208a24,24,0,0,1-48,0l6.7-46.9A8,8,0,0,0,102.8,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="184"
        y1="32"
        x2="184"
        y2="80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M102.8,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2a8,8,0,0,0-7.9,9.1L152,208a24,24,0,0,1-48,0l6.7-46.9A8,8,0,0,0,102.8,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="184"
        y1="32"
        x2="184"
        y2="80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M102.8,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2a8,8,0,0,0-7.9,9.1L152,208a24,24,0,0,1-48,0l6.7-46.9A8,8,0,0,0,102.8,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="184"
        y1="32"
        x2="184"
        y2="80"
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
  ContextGetter,
} from "../types";

export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhPaintBrushBroad",
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
