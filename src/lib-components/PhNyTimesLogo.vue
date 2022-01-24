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
      <circle cx="168" cy="148" r="16" />
      <path
        d="M205.6,163.4A80,80,0,1,1,127.9,64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M67.2,91.9A28,28,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="48.6 154.3 127.9 112 127.9 224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="91.9"
        y1="131.2"
        x2="91.9"
        y2="215.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M95.9,217.3a79.7,79.7,0,0,0,32,6.7V112l-32,17.1h0v88.2Z"
        opacity="0.2"
      />
      <circle cx="171.9" cy="148" r="12" />
      <path
        d="M205.6,163.4A80,80,0,1,1,127.9,64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M67.2,91.9A28,28,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="48.6 154.3 127.9 112 127.9 224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="95.9"
        y1="129.1"
        x2="95.9"
        y2="217.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M183.9,148a12,12,0,1,1-12-12A12,12,0,0,1,183.9,148Zm29.4,17.3A87.7,87.7,0,0,1,127.9,232a86.7,86.7,0,0,1-34.6-7.1l-1.2-.5a88.4,88.4,0,0,1-51.5-69.3h0a99.9,99.9,0,0,1-.7-11A87.3,87.3,0,0,1,54,96.3,36,36,0,0,1,70,28a8.5,8.5,0,0,1,3.5.8L187.7,83.9A20,20,0,0,0,186,44a8,8,0,0,1,0-16,36,36,0,0,1,0,72,8.5,8.5,0,0,1-3.5-.8L126.3,72A72.1,72.1,0,0,0,56,141.3L92.1,122h0l32.1-17.1a8,8,0,0,1,11.7,7.1V215.5a71.7,71.7,0,0,0,61.9-54.1,8,8,0,0,1,15.5,3.9Zm-93.4-40-16,8.6v78a71.5,71.5,0,0,0,16,3.6ZM64.4,83.2a87.4,87.4,0,0,1,37.1-23.1l-33.2-16a20,20,0,0,0-3.9,39.1ZM87.9,203.8V142.4L57.4,158.7A72.1,72.1,0,0,0,87.9,203.8Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="172" cy="148" r="10" />
      <path
        d="M205.6,163.4A80,80,0,1,1,127.9,64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M67.2,91.9A28,28,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="48.6 154.3 127.9 112 127.9 224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="95.9"
        y1="129.1"
        x2="95.9"
        y2="217.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="172" cy="148" r="8" />
      <path
        d="M205.6,163.4A80,80,0,1,1,127.9,64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M67.2,91.9A28,28,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="48.6 154.3 127.9 112 127.9 224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="95.9"
        y1="129.1"
        x2="95.9"
        y2="217.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="171.9" cy="148" r="12" />
      <path
        d="M205.6,163.4A80,80,0,1,1,127.9,64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M67.2,91.9A28,28,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="48.6 154.3 127.9 112 127.9 224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="95.9"
        y1="129.1"
        x2="95.9"
        y2="217.3"
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
  ContextGetter,
} from "../types";
export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhNyTimesLogo",
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
    },
  },
});
</script>
