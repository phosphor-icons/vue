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
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="120"
        y1="112.00094"
        x2="120"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="88"
        y1="112.00094"
        x2="88"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="88" cy="80.00094" r="16" />
      <path
        d="M120,140.00094a28,28,0,1,1,56,0v36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="120"
        y1="112.00094"
        x2="120"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="88"
        y1="112.00094"
        x2="88"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="88" cy="80.00094" r="12" />
      <path
        d="M120,140.00094a28,28,0,1,1,56,0v36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32ZM96,176.00094a8,8,0,0,1-16,0v-64a8,8,0,0,1,16,0Zm-8-84a12,12,0,1,1,12-12A12,12,0,0,1,88,92.00094Zm96,84a8,8,0,0,1-16,0v-36a20,20,0,1,0-40,0v36a8,8,0,0,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77856A35.98123,35.98123,0,0,1,184,140.00094Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="120"
        y1="112.00094"
        x2="120"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="88"
        y1="112.00094"
        x2="88"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="88" cy="80.00094" r="9" />
      <path
        d="M120,140.00094a28,28,0,1,1,56,0v36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="120"
        y1="112.00094"
        x2="120"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="88"
        y1="112.00094"
        x2="88"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="88" cy="80.00094" r="6" />
      <path
        d="M120,140.00094a28,28,0,1,1,56,0v36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="120"
        y1="112.00094"
        x2="120"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="88"
        y1="112.00094"
        x2="88"
        y2="176.00094"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="88" cy="80.00094" r="12" />
      <path
        d="M120,140.00094a28,28,0,1,1,56,0v36"
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
  name: "PhLinkedin",
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
