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
      <rect
        x="26.17662"
        y="82.74517"
        width="203.64675"
        height="90.50967"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="132"
        y1="60"
        x2="164"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="96"
        y1="96"
        x2="128"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="60"
        y1="132"
        x2="92"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect
        x="26.17662"
        y="82.74517"
        width="203.64675"
        height="90.50967"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        opacity="0.2"
      />
      <rect
        x="26.17662"
        y="82.74517"
        width="203.64675"
        height="90.50967"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="132"
        y1="60"
        x2="164"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="96"
        x2="128"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="60"
        y1="132"
        x2="92"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M232,76.68652,179.31348,23.999A16.02162,16.02162,0,0,0,156.68555,24L132,48.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L120.686,60,96,84.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L84.686,96,60,120.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L48.686,132,24.001,156.68555A15.99888,15.99888,0,0,0,24,179.31348L76.68652,232.001A16.02252,16.02252,0,0,0,99.31445,232L232,99.31348a15.9989,15.9989,0,0,0,0-22.627Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="26.17662"
        y="82.74517"
        width="203.64675"
        height="90.50967"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="132"
        y1="60"
        x2="164"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="96"
        y1="96"
        x2="128"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="60"
        y1="132"
        x2="92"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="26.17662"
        y="82.74517"
        width="203.64675"
        height="90.50967"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="132"
        y1="60"
        x2="164"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="96"
        y1="96"
        x2="128"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="60"
        y1="132"
        x2="92"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="26.17662"
        y="82.74517"
        width="203.64675"
        height="90.50967"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="132"
        y1="60"
        x2="164"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="96"
        x2="128"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="60"
        y1="132"
        x2="92"
        y2="164"
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
  name: "PhRuler",
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
