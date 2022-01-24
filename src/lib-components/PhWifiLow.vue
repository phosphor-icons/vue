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
        d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="128" cy="200" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M71.1,148.9a87.9,87.9,0,0,1,113.8,0l-50.9,60a7.9,7.9,0,0,1-12.1-.1Z"
        opacity="0.2"
      />
      <path
        d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M71.1,148.9a87.9,87.9,0,0,1,113.8,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M246.8,80.5a15.7,15.7,0,0,0-6.2-11c-66.3-50-158.9-50-225.2,0h0a16.1,16.1,0,0,0-6.2,11,16.6,16.6,0,0,0,3.7,12.3L115.8,214a16.4,16.4,0,0,0,4,3.4,15.6,15.6,0,0,0,8.2,2.3h0a15.7,15.7,0,0,0,10.9-4.4,6.8,6.8,0,0,0,1.2-1.2l103-121.4A16,16,0,0,0,246.8,80.5Zm-15.9,1.9-47.1,55.5a95.9,95.9,0,0,0-111.6,0L25.1,82.4h0c60.6-45.7,145.3-45.7,205.8,0Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="128" cy="200" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="128" cy="200" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
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
  name: "PhWifiLow",
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
