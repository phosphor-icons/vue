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
      <path
        d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M163.1,152A35.8,35.8,0,0,1,136,179.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
        opacity="0.2"
      />
      <path
        d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M136.1,191.2a47.9,47.9,0,0,0,39.2-39.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M174,47.8A259.4,259.4,0,0,0,132.6,9.4a8.1,8.1,0,0,0-9.2,0A259.4,259.4,0,0,0,82,47.8C54.5,79.3,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.5,79.3,174,47.8Zm9.2,105.6a55.8,55.8,0,0,1-45.8,45.7h-1.3a8,8,0,0,1-1.3-15.9,39.7,39.7,0,0,0,32.6-32.6,8,8,0,0,1,9.3-6.5A7.9,7.9,0,0,1,183.2,153.4Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M136.1,191.2a47.9,47.9,0,0,0,39.2-39.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M136.1,191.2a47.9,47.9,0,0,0,39.2-39.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M136.1,191.2a47.9,47.9,0,0,0,39.2-39.1"
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
  name: "PhDrop",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight || contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size || contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color || contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored || contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
