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
        y="56"
        width="208"
        height="144"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="164"
        y1="164"
        x2="196"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="108"
        y1="164"
        x2="124"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="24"
        y1="96.9"
        x2="232"
        y2="96.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M24,96.9H232V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
        opacity="0.2"
      />
      <rect
        x="24"
        y="56"
        width="208"
        height="144"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="168"
        y1="168"
        x2="200"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="120"
        y1="168"
        x2="136"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="24"
        y1="96.9"
        x2="232"
        y2="96.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M224,48H32A16,16,0,0,0,16,64V96.9h0v95a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM136,176H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm64,0H168a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM32,88.9V64H224V88.9Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="24"
        y="56"
        width="208"
        height="144"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="168"
        y1="168"
        x2="200"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="120"
        y1="168"
        x2="136"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="24"
        y1="96.9"
        x2="232"
        y2="96.9"
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
        y="56"
        width="208"
        height="144"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="168"
        y1="168"
        x2="200"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="120"
        y1="168"
        x2="136"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="24"
        y1="96.9"
        x2="232"
        y2="96.9"
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
        y="56"
        width="208"
        height="144"
        rx="8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="168"
        y1="168"
        x2="200"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="120"
        y1="168"
        x2="136"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="24"
        y1="96.9"
        x2="232"
        y2="96.9"
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
  name: "PhCreditCard",
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
