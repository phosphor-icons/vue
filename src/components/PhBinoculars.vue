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
        x1="104"
        y1="92"
        x2="152"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="64"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="192"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="64" cy="168" r="40" opacity="0.2" />
      <circle cx="192" cy="168" r="40" opacity="0.2" />
      <line
        x1="104"
        y1="92"
        x2="152"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="64"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="192"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M237.2,151.9h0c0-.1-.1-.1-.1-.2a42.3,42.3,0,0,0-2.3-5.3L193.3,51.8a8.1,8.1,0,0,0-1.7-2.4,32,32,0,0,0-45.3,0A7.9,7.9,0,0,0,144,55V84H112V55a7.9,7.9,0,0,0-2.3-5.6,32,32,0,0,0-45.3,0,8.1,8.1,0,0,0-1.7,2.4L21.2,146.3a42.3,42.3,0,0,0-2.3,5.3c0,.1-.1.1-.1.2h0A48,48,0,1,0,112,167.8V100h32v67.8a48,48,0,1,0,93.2-15.9Zm-143.1,27a32,32,0,0,1-60.2-21.7l1.8-4.1A32,32,0,0,1,96,167.9h0A32.1,32.1,0,0,1,94.1,178.9Zm108.8,19.2A32,32,0,0,1,160,168h0a32,32,0,0,1,60.3-14.8l1.8,4.1A32,32,0,0,1,202.9,198.1Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="104"
        y1="92"
        x2="152"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="64"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="192"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="104"
        y1="92"
        x2="152"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="64"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="192"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="104"
        y1="92"
        x2="152"
        y2="92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="64"
        cy="168"
        r="40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="192"
        cy="168"
        r="40"
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
  name: "PhBinoculars",
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
