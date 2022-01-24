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
      <path
        d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
        opacity="0.3"
      />
      <line
        x1="184"
        y1="72"
        x2="168"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M212.3,43.7a40.1,40.1,0,0,0-56.6,0l-24,24a8.1,8.1,0,0,0-2.2,4.3C120.7,123.3,36,208.7,34.4,210.3h-.1a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0h0c.8-.9,86.8-86.4,138.3-95.2a8.1,8.1,0,0,0,4.3-2.2l24-24a40.1,40.1,0,0,0,0-56.6Zm-22.6,34-16,16a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l16-16a8.1,8.1,0,0,1,11.4,11.4Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="184"
        y1="72"
        x2="168"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="184"
        y1="72"
        x2="168"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="184"
        y1="72"
        x2="168"
        y2="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
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
  name: "PhNeedle",
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
