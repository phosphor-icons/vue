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
      <circle cx="156" cy="76" r="16" />
      <path
        d="M16,184C247.8,234.7,223.8,75.5,217.2,45a8.2,8.2,0,0,0-6.2-6.2C180.5,32.2,21.3,8.2,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M201.3,152A96,96,0,0,1,104,54.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M104,54.6C75.9,75.2,55.7,115.4,64,192h0c76.6,8.3,116.8-11.9,137.4-40h-.1A96,96,0,0,1,104,54.6Z"
        opacity="0.2"
      />
      <circle cx="156" cy="76" r="12" />
      <path
        d="M16,184C247.8,234.7,223.8,75.5,217.2,45a8.2,8.2,0,0,0-6.2-6.2C180.5,32.2,21.3,8.2,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M201.3,152A96,96,0,0,1,104,54.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm30.2,92c-26.5,26.4-68.4,37.4-125.1,32.9,1.6,11.8,3.8,24.3,6.7,37.4a7.9,7.9,0,0,1-6.1,9.5L72,248a8,8,0,0,1-7.8-6.3c-3.3-14.9-5.7-29.1-7.4-42.5-13.4-1.7-27.6-4.2-42.5-7.4a8,8,0,0,1,3.4-15.7c13.1,2.9,25.6,5.2,37.4,6.8C50.6,126.2,61.6,84.3,88,57.8c41-41,105.8-30.9,124.7-26.8A15.9,15.9,0,0,1,225,43.3C229.1,62.2,239.2,127,198.2,168ZM209.4,46.7c-15-3.3-62.3-10.9-97.3,12.1a87.9,87.9,0,0,0,85.1,85.1C220.2,108.9,212.6,61.6,209.4,46.7Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="156" cy="76" r="10" />
      <path
        d="M16,184C247.8,234.7,223.8,75.5,217.2,45a8.2,8.2,0,0,0-6.2-6.2C180.5,32.2,21.3,8.2,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M201.3,152A96,96,0,0,1,104,54.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="156" cy="76" r="8" />
      <path
        d="M16,184C247.8,234.7,223.8,75.5,217.2,45a8.2,8.2,0,0,0-6.2-6.2C180.5,32.2,21.3,8.2,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M201.3,152A96,96,0,0,1,104,54.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="156" cy="76" r="12" />
      <path
        d="M16,184C247.8,234.7,223.8,75.5,217.2,45a8.2,8.2,0,0,0-6.2-6.2C180.5,32.2,21.3,8.2,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M201.3,152A96,96,0,0,1,104,54.6"
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
  name: "PhFishSimple",
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
