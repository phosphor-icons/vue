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
        y1="232"
        x2="128"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="128"
        y1="152"
        x2="80"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="128"
        y1="128"
        x2="176"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z"
        opacity="0.2"
      />
      <line
        x1="128"
        y1="232"
        x2="128"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="152"
        x2="80"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="128"
        x2="176"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,187.9h0a91.6,91.6,0,0,1-8,4.6V232a8,8,0,0,0,16,0V192.5a91.6,91.6,0,0,1-8-4.6Z"
      />
      <path
        d="M198.1,62.6a76,76,0,0,0-140.2,0A72.3,72.3,0,0,0,16,127.8C15.9,166.6,47.4,199,86.1,200a71.9,71.9,0,0,0,33.9-7.5V156.9L76.4,135.2a8,8,0,1,1,7.2-14.4L120,139.1V88a8,8,0,0,1,16,0v27.1l36.4-18.3a8,8,0,0,1,7.2,14.4L136,132.9v59.6a72,72,0,0,0,32,7.5h1.9c38.7-1,70.2-33.4,70.1-72.2A72.3,72.3,0,0,0,198.1,62.6Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="128"
        y1="232"
        x2="128"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="128"
        y1="152"
        x2="80"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="128"
        y1="128"
        x2="176"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z"
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
        y1="232"
        x2="128"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="128"
        y1="152"
        x2="80"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="128"
        y1="128"
        x2="176"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z"
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
        y1="232"
        x2="128"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="152"
        x2="80"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="128"
        x2="176"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z"
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
  name: "PhTree",
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
