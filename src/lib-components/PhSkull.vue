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
      <circle
        cx="92"
        cy="132"
        r="12"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="164"
        cy="132"
        r="12"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="108"
        y1="224"
        x2="108"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="148"
        y1="224"
        x2="148"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M180,224H76a8,8,0,0,1-8-8V185.7a92,92,0,0,1-32-69.5C35.9,66.1,76.6,24.7,126.7,24A92,92,0,0,1,188,185.7V216A8,8,0,0,1,180,224Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M128,24A92,92,0,0,0,80,194.5V216a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V194.5A92,92,0,0,0,128,24ZM92,152a20,20,0,1,1,20-20A20.1,20.1,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20.1,20.1,0,0,1,164,152Z"
        opacity="0.2"
      />
      <circle
        cx="92"
        cy="132"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="164"
        cy="132"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="112"
        y1="224"
        x2="112"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="144"
        y1="224"
        x2="144"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M124.1,16.1c-51.6,1.9-93.7,43.6-96,95.3A99.4,99.4,0,0,0,72,198.9V216a16,16,0,0,0,16,16h8a4,4,0,0,0,4-4V204.3a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v24a4,4,0,0,0,4,4h16a4,4,0,0,0,4-4V204.3a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v24a4,4,0,0,0,4,4h8a16,16,0,0,0,16-16V198.9A100,100,0,0,0,124.1,16.1ZM92,152a20,20,0,1,1,20-20A20.1,20.1,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20.1,20.1,0,0,1,164,152Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="92"
        cy="132"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="164"
        cy="132"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="112"
        y1="224"
        x2="112"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="144"
        y1="224"
        x2="144"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="92"
        cy="132"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="164"
        cy="132"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="112"
        y1="224"
        x2="112"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="144"
        y1="224"
        x2="144"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="92"
        cy="132"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="164"
        cy="132"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="112"
        y1="224"
        x2="112"
        y2="192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="144"
        y1="224"
        x2="144"
        y2="192"
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
  name: "PhSkull",
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
