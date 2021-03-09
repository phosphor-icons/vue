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
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M128,24S48,72,48,144a79.98371,79.98371,0,0,0,77.94141,79.948A40.00143,40.00143,0,0,1,88,184c0-40,40-64,40-64s40,24,40,64a40.00143,40.00143,0,0,1-37.94141,39.948A79.98337,79.98337,0,0,0,208,144C208,72,128,24,128,24Z"
        opacity="0.2"
      />
      <path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M173.793,51.48242a220.94852,220.94852,0,0,0-41.67676-34.34277,8.00334,8.00334,0,0,0-8.23242,0A220.94852,220.94852,0,0,0,82.207,51.48242C54.59473,80.47559,40,112.4668,40,144a88,88,0,0,0,176,0C216,112.4668,201.40527,80.47559,173.793,51.48242ZM96,184c0-27.67285,22.52637-47.27734,31.999-54.29688C137.48193,136.72949,160,156.332,160,184a32,32,0,0,1-64,0Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
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
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhFlame",
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
