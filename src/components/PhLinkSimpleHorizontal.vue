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
    <g v-if="displayWeight === 'bold'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <line
        x1="79.97949"
        y1="127.99219"
        x2="175.97949"
        y2="127.99219"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M103.97266,175.99609h-40a48,48,0,0,1,0-96h40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M151.97949,175.99609h40a48,48,0,0,0,0-96h-40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <line
        x1="79.96582"
        y1="127.99219"
        x2="175.96582"
        y2="127.99219"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M103.959,175.99609h-40a48,48,0,0,1,0-96h40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M151.96582,175.99609h40a48,48,0,0,0,0-96h-40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <g>
        <path
          d="M71.97266,127.99219a8.00009,8.00009,0,0,0,8,8h96a8,8,0,0,0,0-16h-96A8.00008,8.00008,0,0,0,71.97266,127.99219Z"
        />
        <path
          d="M103.96582,167.99609h-40a40,40,0,0,1,0-80h40a8,8,0,0,0,0-16h-40a56,56,0,0,0,0,112h40a8,8,0,0,0,0-16Z"
        />
        <path
          d="M191.97266,71.99609h-40a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80h-40a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <line
        x1="79.98633"
        y1="127.99219"
        x2="175.98633"
        y2="127.99219"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M103.97949,175.99609h-40a48,48,0,0,1,0-96h40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M151.98633,175.99609h40a48,48,0,0,0,0-96h-40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <line
        x1="79.99316"
        y1="127.99219"
        x2="175.99316"
        y2="127.99219"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M103.98633,175.99609h-40a48,48,0,0,1,0-96h40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M151.99316,175.99609h40a48,48,0,0,0,0-96h-40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <line
        x1="80"
        y1="127.99219"
        x2="176"
        y2="127.99219"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M152,175.99609h40a48,48,0,0,0,0-96H152"
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
  name: "PhLinkSimpleHorizontal",
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
