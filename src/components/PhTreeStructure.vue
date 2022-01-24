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
        x="24"
        y="100"
        width="56"
        height="56"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="160"
        y="40"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="160"
        y="152"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="80"
        y1="128"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="24" y="100" width="56" height="56" rx="8" opacity="0.2" />
      <rect x="160" y="40" width="64" height="64" rx="8" opacity="0.2" />
      <rect x="160" y="152" width="64" height="64" rx="8" opacity="0.2" />
      <rect
        x="24"
        y="100"
        width="56"
        height="56"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="160"
        y="40"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="160"
        y="152"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="80"
        y1="128"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M156,92V80H144a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h12V164a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v40a16,16,0,0,1-16,16H172a16,16,0,0,1-16-16V192H144a32.1,32.1,0,0,1-32-32V136H84v8a16,16,0,0,1-16,16H36a16,16,0,0,1-16-16V112A16,16,0,0,1,36,96H68a16,16,0,0,1,16,16v8h28V96a32.1,32.1,0,0,1,32-32h12V52a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16V92a16,16,0,0,1-16,16H172A16,16,0,0,1,156,92Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="24"
        y="100"
        width="56"
        height="56"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="160"
        y="40"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="160"
        y="152"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="80"
        y1="128"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="24"
        y="100"
        width="56"
        height="56"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="160"
        y="40"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="160"
        y="152"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="80"
        y1="128"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="24"
        y="100"
        width="56"
        height="56"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="160"
        y="40"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="160"
        y="152"
        width="64"
        height="64"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="80"
        y1="128"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16"
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
  name: "PhTreeStructure",
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
