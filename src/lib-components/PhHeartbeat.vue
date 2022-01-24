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
      <polyline
        points="32 128 72 128 88 104 120 152 136 128 160 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M28.1,88.2A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-33.7-18.9-62-48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
        opacity="0.2"
      />
      <polyline
        points="32 128 72 128 88 104 120 152 136 128 160 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M236,92c0,30.6-17.7,62-52.6,93.4A314.3,314.3,0,0,1,131.9,223a8.1,8.1,0,0,1-7.8,0c-3.2-1.8-60.4-34.3-88.6-80.9a4,4,0,0,1,3.4-6.1H72a7.9,7.9,0,0,0,6.7-3.6l9.3-14,25.3,38a8.1,8.1,0,0,0,9.2,3.2,8.8,8.8,0,0,0,4.3-3.3L140.3,136h19.4a8.2,8.2,0,0,0,8.3-7.5,8,8,0,0,0-8-8.5H136a7.9,7.9,0,0,0-6.7,3.6l-9.3,14-25.3-38a8.1,8.1,0,0,0-9.2-3.2,8.8,8.8,0,0,0-4.3,3.3L67.7,120H27.8a4,4,0,0,1-3.8-2.8A86.2,86.2,0,0,1,20,92,60,60,0,0,1,128,56,60,60,0,0,1,236,92Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polyline
        points="32 128 72 128 88 104 120 152 136 128 160 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polyline
        points="32 128 72 128 88 104 120 152 136 128 160 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polyline
        points="32 128 72 128 88 104 120 152 136 128 160 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
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
  name: "PhHeartbeat",
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
