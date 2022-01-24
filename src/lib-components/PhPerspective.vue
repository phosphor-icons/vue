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
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        opacity="0.2"
      />
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M32,120v16H16a8,8,0,0,1,0-16Zm0,57.3a16,16,0,0,0,13.1,15.8l160,29.1h0l2.9.2a16.5,16.5,0,0,0,10.3-3.7,16.1,16.1,0,0,0,5.7-12.3V136H32ZM240,120H224v16h16a8,8,0,0,0,0-16ZM224,49.6a16.1,16.1,0,0,0-5.7-12.3,16.6,16.6,0,0,0-13.2-3.5L45.1,62.9A16,16,0,0,0,32,78.7V120H224Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
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
  name: "PhPerspective",
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
