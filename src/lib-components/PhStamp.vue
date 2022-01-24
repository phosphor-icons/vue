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
        y1="224"
        x2="216"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M112,136,94.2,53a24,24,0,0,1,23.5-29h20.6a24,24,0,0,1,23.5,29L144,136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="40"
        y="136"
        width="176"
        height="48"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M112,136,94.2,53a24,24,0,0,1,23.5-29h20.6a24,24,0,0,1,23.5,29L144,136Z"
        opacity="0.2"
      />
      <line
        x1="40"
        y1="224"
        x2="216"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M112,136,94.2,53a24,24,0,0,1,23.5-29h20.6a24,24,0,0,1,23.5,29L144,136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="40"
        y="136"
        width="176"
        height="56"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm0-80v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h54.1L86.4,54.7A32,32,0,0,1,117.7,16h20.6a32,32,0,0,1,31.3,38.7L153.9,128H208A16,16,0,0,1,224,144Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="40"
        y1="224"
        x2="216"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M112,136,94.2,53a24,24,0,0,1,23.5-29h20.6a24,24,0,0,1,23.5,29L144,136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="40"
        y="136"
        width="176"
        height="56"
        rx="8"
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
        y1="224"
        x2="216"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M112,136,94.2,53a24,24,0,0,1,23.5-29h20.6a24,24,0,0,1,23.5,29L144,136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="40"
        y="136"
        width="176"
        height="56"
        rx="8"
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
        y1="224"
        x2="216"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M112,136,94.2,53a24,24,0,0,1,23.5-29h20.6a24,24,0,0,1,23.5,29L144,136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="40"
        y="136"
        width="176"
        height="56"
        rx="8"
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
  name: "PhStamp",
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
