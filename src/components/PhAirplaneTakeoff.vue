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
        x1="24"
        y1="216"
        x2="168"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M16.9,140.4l37.7,35.3a32,32,0,0,0,38,4.3L244,92,225.4,69.2a32,32,0,0,0-41-7.3L140,88,80,68,63.5,75.1a8,8,0,0,0-2.2,13.3L92,116,64,132,36,120l-16.8,7.2A8,8,0,0,0,16.9,140.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M16.9,140.4l37.7,35.3a32,32,0,0,0,38,4.3L244,92,225.4,69.2a32,32,0,0,0-41-7.3L140,88,80,68,63.5,75.1a8,8,0,0,0-2.2,13.3L92,116,64,132,36,120l-16.8,7.2A8,8,0,0,0,16.9,140.4Z"
        opacity="0.2"
      />
      <line
        x1="24"
        y1="216"
        x2="168"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M16.9,140.4l37.7,35.3a32,32,0,0,0,38,4.3L244,92,225.4,69.2a32,32,0,0,0-41-7.3L140,88,80,68,63.5,75.1a8,8,0,0,0-2.2,13.3L92,116,64,132,36,120l-16.8,7.2A8,8,0,0,0,16.9,140.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.1,89.5,228.5,66.7a35.9,35.9,0,0,0-46.2-8.2L139.5,83.6,81.3,64.2a4.1,4.1,0,0,0-2.9.1L61.9,71.4a12,12,0,0,0-3.3,19.9l26.6,24L63.7,127.5,37.6,116.3a4.4,4.4,0,0,0-3.2,0l-16.7,7.2a12,12,0,0,0-3.5,19.8h0l37.7,35.3a35.8,35.8,0,0,0,42.7,4.9L246,95.5a4,4,0,0,0,1.9-2.8A4.1,4.1,0,0,0,247.1,89.5Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="24"
        y1="216"
        x2="168"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M16.9,140.4l37.7,35.3a32,32,0,0,0,38,4.3L244,92,225.4,69.2a32,32,0,0,0-41-7.3L140,88,80,68,63.5,75.1a8,8,0,0,0-2.2,13.3L92,116,64,132,36,120l-16.8,7.2A8,8,0,0,0,16.9,140.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="24"
        y1="216"
        x2="168"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M16.9,140.4l37.7,35.3a32,32,0,0,0,38,4.3L244,92,225.4,69.2a32,32,0,0,0-41-7.3L140,88,80,68,63.5,75.1a8,8,0,0,0-2.2,13.3L92,116,64,132,36,120l-16.8,7.2A8,8,0,0,0,16.9,140.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="24"
        y1="216"
        x2="168"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M16.9,140.4l37.7,35.3a32,32,0,0,0,38,4.3L244,92,225.4,69.2a32,32,0,0,0-41-7.3L140,88,80,68,63.5,75.1a8,8,0,0,0-2.2,13.3L92,116,64,132,36,120l-16.8,7.2A8,8,0,0,0,16.9,140.4Z"
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
  name: "PhAirplaneTakeoff",
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
