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
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M128,24S48,72,48,144a79.9,79.9,0,0,0,77.9,79.9A39.9,39.9,0,0,1,88,184c0-40,40-64,40-64s40,24,40,64a39.9,39.9,0,0,1-37.9,39.9A79.9,79.9,0,0,0,208,144C208,72,128,24,128,24Z"
        opacity="0.2"
      />
      <path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M173.8,51.5a221.5,221.5,0,0,0-41.7-34.4,8,8,0,0,0-8.2,0A221.5,221.5,0,0,0,82.2,51.5C54.6,80.5,40,112.5,40,144a88,88,0,0,0,176,0C216,112.5,201.4,80.5,173.8,51.5ZM96,184c0-27.7,22.5-47.3,32-54.3,9.5,7,32,26.6,32,54.3a32,32,0,0,1-64,0Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
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
  name: "PhFlame",
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
