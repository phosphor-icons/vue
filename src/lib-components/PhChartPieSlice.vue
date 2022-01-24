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
        x1="128"
        y1="128"
        x2="128"
        y2="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="211.1"
        y1="80"
        x2="44.9"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M128,32A96,96,0,1,1,45.2,176.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,106.1,32.5,138.2c-.3-3.4-.5-6.8-.5-10.2A96,96,0,0,1,88,40.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
        opacity="0.2"
      />
      <line
        x1="128"
        y1="128"
        x2="128"
        y2="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="211.1"
        y1="80"
        x2="44.9"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M128,32A96,96,0,1,1,45.2,176.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M100,116.5a8.1,8.1,0,0,0,4-7v-72a8,8,0,0,0-10.7-7.6A104.3,104.3,0,0,0,24,128a109.1,109.1,0,0,0,1.7,19,8.1,8.1,0,0,0,4.5,5.8,8.4,8.4,0,0,0,3.4.8,8,8,0,0,0,4-1.1ZM88,49.6v55.3L40.1,132.6c-.1-1.6-.1-3.1-.1-4.6A88.3,88.3,0,0,1,88,49.6Z"
      />
      <path
        d="M218.3,76.4a.8.8,0,0,1-.2-.4l-.4-.5A103.9,103.9,0,0,0,128,24a8,8,0,0,0-8,8v91.4L40.9,169.1a7.9,7.9,0,0,0-3,10.9v.2l.3.5A104,104,0,0,0,232,128,103.5,103.5,0,0,0,218.3,76.4Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="128"
        y1="128"
        x2="128"
        y2="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="211.1"
        y1="80"
        x2="44.9"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M128,32A96,96,0,1,1,45.2,176.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="128"
        y1="128"
        x2="128"
        y2="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="211.1"
        y1="80"
        x2="44.9"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M128,32A96,96,0,1,1,45.2,176.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="128"
        y1="128"
        x2="128"
        y2="32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="211.1"
        y1="80"
        x2="44.9"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M128,32A96,96,0,1,1,45.2,176.6"
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
  name: "PhChartPieSlice",
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
