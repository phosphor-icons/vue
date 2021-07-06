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
        points="176.167 99.716 224.167 99.716 224.167 51.716"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="79.833 156.284 31.833 156.284 31.833 204.284"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polyline
        points="176.167 99.716 224.167 99.716 224.167 51.716"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="79.833 156.284 31.833 156.284 31.833 204.284"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M232.167,51.71582v48a8.00039,8.00039,0,0,1-8,8h-48a8.00065,8.00065,0,0,1-5.65722-13.65723l18.34277-18.34277-4.28418-4.28418a80.08769,80.08769,0,0,0-113.13672,0A8.00052,8.00052,0,0,1,60.11719,60.11719a96.11137,96.11137,0,0,1,135.76562,0l4.28418,4.28418,18.34278-18.34278A8.00065,8.00065,0,0,1,232.167,51.71582ZM184.56836,184.56836a80.08769,80.08769,0,0,1-113.13672,0l-4.28418-4.28418,18.34277-18.34277A8.00065,8.00065,0,0,0,79.833,148.28418h-48a8.00039,8.00039,0,0,0-8,8v48a8.00052,8.00052,0,0,0,13.65722,5.65723L55.833,191.59863l4.28418,4.28418a96.11136,96.11136,0,0,0,135.76562,0,8.00052,8.00052,0,0,0-11.31445-11.31445Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polyline
        points="176.167 99.716 224.167 99.716 224.167 51.716"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="79.833 156.284 31.833 156.284 31.833 204.284"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polyline
        points="176.167 99.716 224.167 99.716 224.167 51.716"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="79.833 156.284 31.833 156.284 31.833 204.284"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polyline
        points="176.167 99.716 224.167 99.716 224.167 51.716"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="79.833 156.284 31.833 156.284 31.833 204.284"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
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
  name: "PhArrowsClockwise",
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
