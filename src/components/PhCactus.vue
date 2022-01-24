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
      <line
        x1="40"
        y1="216"
        x2="216"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44Z"
        opacity="0.2"
      />
      <line
        x1="40"
        y1="216"
        x2="216"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H88V140H84A68.1,68.1,0,0,1,16,72a28,28,0,0,1,56,0A12,12,0,0,0,84,84h4V56a40,40,0,0,1,80,0v68h4a12,12,0,0,0,12-12,28,28,0,0,1,56,0,68.1,68.1,0,0,1-68,68h-4v28h48A8,8,0,0,1,224,216Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="40"
        y1="216"
        x2="216"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="40"
        y1="216"
        x2="216"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="40"
        y1="216"
        x2="216"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
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
  name: "PhCactus",
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
