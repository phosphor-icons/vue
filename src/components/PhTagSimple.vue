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
        d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
        opacity="0.2"
      />
      <path
        d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M246.7,123.6,201,55.1A15.9,15.9,0,0,0,187.7,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.7a15.9,15.9,0,0,0,13.3-7.1h0l45.7-68.5A8.2,8.2,0,0,0,246.7,123.6Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
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
  name: "PhTagSimple",
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
