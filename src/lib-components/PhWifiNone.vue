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
    <g v-if="displayWeight === 'bold'"><circle cx="128" cy="200" r="16" /></g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8.1,8.1,0,0,1,237,87.5c-19,22.5-83,97.8-103,121.4a7.9,7.9,0,0,1-12,0C102,185.3,38,110,19,87.5A8.1,8.1,0,0,1,20.2,75.9Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,219.7a16,16,0,0,1-12.1-5.6L12.9,92.7A15.8,15.8,0,0,1,9.2,80.5a16.3,16.3,0,0,1,6.2-11c66.3-50,158.9-50,225.2,0a16.3,16.3,0,0,1,6.2,11,16,16,0,0,1-3.7,12.2l-103,121.4A16,16,0,0,1,128,219.7ZM25.1,82.3h0L128,203.6,230.9,82.4v-.2C170.4,36.6,85.7,36.6,25.1,82.3Zm-.1,0Zm-4.8-6.4Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="128" cy="200" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="128" cy="200" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="128" cy="200" r="12" />
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
  name: "PhWifiNone",
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
