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
      <rect
        x="40"
        y="144"
        width="176"
        height="64"
        rx="8"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="40"
        y="48"
        width="176"
        height="64"
        rx="8"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="180.00054" cy="80" r="16" />
      <circle cx="180.00054" cy="176" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="40" y="144" width="176" height="64" rx="8" opacity="0.2" />
      <rect x="40" y="48" width="176" height="64" rx="8" opacity="0.2" />
      <rect
        x="40"
        y="144"
        width="176"
        height="64"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="40"
        y="48"
        width="176"
        height="64"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="180.00054" cy="80" r="12" />
      <circle cx="180.00054" cy="176" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <g>
        <path
          d="M208,40H48A16.01833,16.01833,0,0,0,32,56v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,208,40ZM180.00049,92a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,92Z"
        />
        <path
          d="M208,136H48a16.01833,16.01833,0,0,0-16,16v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,208,136Zm-27.99951,52a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,188Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="40"
        y="144"
        width="176"
        height="64"
        rx="8"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="40"
        y="48"
        width="176"
        height="64"
        rx="8"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="180.00054" cy="80" r="9" />
      <circle cx="180.00054" cy="176" r="9" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="40"
        y="144"
        width="176"
        height="64"
        rx="8"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="40"
        y="48"
        width="176"
        height="64"
        rx="8"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="180.00054" cy="80" r="6" />
      <circle cx="180.00054" cy="176" r="6" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="40"
        y="144"
        width="176"
        height="64"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="40"
        y="48"
        width="176"
        height="64"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="180.00054" cy="80" r="12" />
      <circle cx="180.00054" cy="176" r="12" />
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
  name: "PhHardDrives",
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
