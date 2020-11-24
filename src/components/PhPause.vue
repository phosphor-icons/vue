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
      <rect
        x="156"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="48"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="156" y="40" width="52" height="176" rx="8" opacity="0.2" />
      <rect x="48" y="40" width="52" height="176" rx="8" opacity="0.2" />
      <rect
        x="156"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="48"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M216,48V208a16.01833,16.01833,0,0,1-16,16H164a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h36A16.01833,16.01833,0,0,1,216,48ZM92,32H56A16.01833,16.01833,0,0,0,40,48V208a16.01833,16.01833,0,0,0,16,16H92a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,92,32Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="156"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="48"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="156"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="48"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="156"
        y="40"
        width="52"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="48"
        y="40"
        width="52"
        height="176"
        rx="8"
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
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhPause",
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
