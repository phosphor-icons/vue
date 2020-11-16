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
  >
    <g v-if="displayWeight === 'bold'">
      <path
        d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="109.97266"
        y="101.97266"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 319.94533) rotate(-90)"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
        opacity="0.2"
      />
      <rect
        x="109.97266"
        y="101.97266"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 319.94533) rotate(-90)"
        opacity="0.2"
      />
      <path
        d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="109.97266"
        y="101.97266"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 319.94533) rotate(-90)"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M39.208,136.43311a15.805,15.805,0,0,1,2.81738-17.24341l76.12695-83.44824v-.00025a15.99974,15.99974,0,0,1,23.64063,0l76.12695,83.44824a15.99994,15.99994,0,0,1-11.82129,26.78321H53.84668A15.80678,15.80678,0,0,1,39.208,136.43311Zm170.76465,25.53955h-160a16.01833,16.01833,0,0,0-16,16v24a16.01833,16.01833,0,0,0,16,16h160a16.01834,16.01834,0,0,0,16-16v-24A16.01833,16.01833,0,0,0,209.97266,161.97266Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="109.97266"
        y="101.97266"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 319.94533) rotate(-90)"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="109.97266"
        y="101.97266"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 319.94533) rotate(-90)"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="109.97266"
        y="101.97266"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 319.94533) rotate(-90)"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "@/lib/types";
export default defineComponent({
  name: "PhEject",
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
