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
        d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M68,136s20-16,52,0,52,0,52,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M68,136s20-16,52,0,52,0,52,0L94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162Z"
        opacity="0.2"
      />
      <path
        d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M68,136s20-16,52,0,52,0,52,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M237.65674,86.34326l-60-60a8.00063,8.00063,0,0,0-11.314,0L62.39453,130.29193l-.01172.01129-26.04,26.04a44.76956,44.76956,0,0,0,63.314,63.31348L177.605,141.70868l.0127-.01288,34.70361-34.70361,22.2085-7.40283a7.9996,7.9996,0,0,0,3.127-13.2461Zm-32.18653,6.06738a8.00221,8.00221,0,0,0-3.12744,1.93262l-35.59814,35.59821c-2.148,1.51983-17.895,11.53961-43.167-1.09674-10.99854-5.49964-20.811-7.63062-29.18116-7.92743L172,43.314l45.19043,45.19Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M68,136s20-16,52,0,52,0,52,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M68,136s20-16,52,0,52,0,52,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M68,136s20-16,52,0,52,0,52,0"
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
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhTestTube",
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
