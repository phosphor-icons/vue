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
        x1="72"
        y1="104"
        x2="152"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="96"
        y1="188"
        x2="70.6"
        y2="214.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="68"
        y1="160"
        x2="42.6"
        y2="186.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2a8,8,0,0,0,11.6-.3L191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L152,184,72,104Z"
        opacity="0.2"
      />
      <line
        x1="72"
        y1="104"
        x2="152"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="101.8"
        y1="183.4"
        x2="70.6"
        y2="214.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="73.8"
        y1="155.4"
        x2="42.6"
        y2="186.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M230.6,25.4a31.9,31.9,0,0,0-45.2,0l-.3.3L130.2,86.9,121,77.7a23.9,23.9,0,0,0-34,0L10.3,154.3a8.1,8.1,0,0,0,0,11.4l80,80a8.2,8.2,0,0,0,11.4,0L178.3,169a23.9,23.9,0,0,0,0-34l-9.2-9.2,61.2-54.9.3-.3A31.9,31.9,0,0,0,230.6,25.4ZM96,228.7,81.9,214.6,107.4,189a8,8,0,0,0-11.3-11.3L70.6,203.3,53.9,186.6,79.4,161a8,8,0,0,0-11.3-11.3L42.6,175.3,27.3,160,72,115.3,140.7,184Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="72"
        y1="104"
        x2="152"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="101.8"
        y1="183.4"
        x2="70.6"
        y2="214.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="73.8"
        y1="155.4"
        x2="42.6"
        y2="186.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="72"
        y1="104"
        x2="152"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="101.8"
        y1="183.4"
        x2="70.6"
        y2="214.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="73.8"
        y1="155.4"
        x2="42.6"
        y2="186.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="72"
        y1="104"
        x2="152"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="101.8"
        y1="183.4"
        x2="70.6"
        y2="214.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="73.8"
        y1="155.4"
        x2="42.6"
        y2="186.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
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
} from "../types";

export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhPaintBrushHousehold",
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
