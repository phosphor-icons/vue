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
        d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M175.9,130a68.8,68.8,0,0,0-16.4-11.4,59.4,59.4,0,0,0,9.9-7.4,53.6,53.6,0,0,0,0-79.1,61.3,61.3,0,0,0-82.8,0,53.6,53.6,0,0,0,0,79.1,59.4,59.4,0,0,0,9.9,7.4A68.8,68.8,0,0,0,80.1,130a61.9,61.9,0,0,0,0,91.3,70.7,70.7,0,0,0,95.8,0,61.9,61.9,0,0,0,0-91.3ZM97.6,99.5a37.5,37.5,0,0,1,0-55.7,45.1,45.1,0,0,1,60.8,0,37.5,37.5,0,0,1,0,55.7,45.1,45.1,0,0,1-60.8,0ZM165,209.7a55,55,0,0,1-74,0,46,46,0,0,1,0-68,54.7,54.7,0,0,1,74,0,46,46,0,0,1,0,68Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
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
  name: "PhNumberEight",
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
