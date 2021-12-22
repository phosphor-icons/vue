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
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M154.3,29.7,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c8.4-11.1,21.6-34.1,10.1-57l62.3-62.3a8,8,0,0,0,0-11.4L165.7,29.7A8,8,0,0,0,154.3,29.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M154.3,29.7,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c8.4-11.1,21.6-34.1,10.1-57l62.3-62.3a8,8,0,0,0,0-11.4L165.7,29.7A8,8,0,0,0,154.3,29.7Z"
        opacity="0.2"
      />
      <line
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M154.3,29.7,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c8.4-11.1,21.6-34.1,10.1-57l62.3-62.3a8,8,0,0,0,0-11.4L165.7,29.7A8,8,0,0,0,154.3,29.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M232,107.3l-58.5,58.5c4.5,12.7,6.4,33.9-13.2,60a16.3,16.3,0,0,1-11.7,6.4h-1.1a16.1,16.1,0,0,1-11.3-4.7L88,179.3,53.7,213.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L76.7,168,28.3,119.6a15.9,15.9,0,0,1,1.3-23.8C55,75.3,79.3,79.4,90,82.7L148.7,24h0a16.1,16.1,0,0,1,22.6,0L232,84.7a15.9,15.9,0,0,1,0,22.6Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M154.3,29.7,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c8.4-11.1,21.6-34.1,10.1-57l62.3-62.3a8,8,0,0,0,0-11.4L165.7,29.7A8,8,0,0,0,154.3,29.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M154.3,29.7,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c8.4-11.1,21.6-34.1,10.1-57l62.3-62.3a8,8,0,0,0,0-11.4L165.7,29.7A8,8,0,0,0,154.3,29.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M154.3,29.7,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c8.4-11.1,21.6-34.1,10.1-57l62.3-62.3a8,8,0,0,0,0-11.4L165.7,29.7A8,8,0,0,0,154.3,29.7Z"
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
  name: "PhPushPin",
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
