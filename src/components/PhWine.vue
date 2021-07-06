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
        x1="128"
        y1="176"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="88"
        y1="232"
        x2="168"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M200.402,106.66714l1.65622,5.61085a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835l3.54259-12.00146h0C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713Z"
        opacity="0.2"
      />
      <line
        x1="128"
        y1="176"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="88"
        y1="232"
        x2="168"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M209.73047,110.01318,183.67285,21.73535A7.99985,7.99985,0,0,0,176,16H80a7.99985,7.99985,0,0,0-7.67285,5.73535L46.26953,110.01367A31.984,31.984,0,0,0,47.791,132.24951,88.23263,88.23263,0,0,0,120,183.62012V224H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.62012a88.2322,88.2322,0,0,0,72.209-51.3711A31.98167,31.98167,0,0,0,209.73047,110.01318ZM131.57764,96.84473C105.398,83.75488,84.38428,83.76318,69.66943,87.25586L85.97949,32h84.041l20.8125,70.5083C180.05664,107.001,159.75586,110.93359,131.57764,96.84473Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="128"
        y1="176"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="88"
        y1="232"
        x2="168"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="128"
        y1="176"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="88"
        y1="232"
        x2="168"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="128"
        y1="176"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="88"
        y1="232"
        x2="168"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
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
  name: "PhWine",
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
