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
        d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="84" cy="84" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z"
        opacity="0.2"
      />
      <path
        d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="84" cy="84" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M240,126.9,135.5,22.4A15.9,15.9,0,0,0,121.1,18L40.4,34.2a7.9,7.9,0,0,0-6.2,6.2L18,121.1a15.9,15.9,0,0,0,4.4,14.4L126.9,240a15.9,15.9,0,0,0,22.6,0L240,149.5a15.9,15.9,0,0,0,0-22.6ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="84" cy="84" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="84" cy="84" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="84" cy="84" r="12" />
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
  name: "PhTag",
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
