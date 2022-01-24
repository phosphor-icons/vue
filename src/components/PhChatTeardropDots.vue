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
        d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="132" cy="128" r="16" />
      <circle cx="180" cy="128" r="16" />
      <circle cx="84" cy="128" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
        opacity="0.2"
      />
      <path
        d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="132" cy="128" r="12" />
      <circle cx="84" cy="128" r="12" />
      <circle cx="180" cy="128" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M132,24A100.2,100.2,0,0,0,32,124v84.3A15.7,15.7,0,0,0,47.7,224H132a100,100,0,0,0,0-200ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,132,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,180,140Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="132" cy="128" r="10" />
      <circle cx="180" cy="128" r="10" />
      <circle cx="84" cy="128" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="132" cy="128" r="8" />
      <circle cx="84" cy="128" r="8" />
      <circle cx="180" cy="128" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="132" cy="128" r="12" />
      <circle cx="84" cy="128" r="12" />
      <circle cx="180" cy="128" r="12" />
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
  name: "PhChatTeardropDots",
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
