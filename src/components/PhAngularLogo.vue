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
      <polygon
        points="128 232 208 192 224 72 128 32 32 72 48 192 128 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="164 160 128 88 92 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="100.7"
        y1="142.7"
        x2="155.3"
        y2="142.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon
        points="128 232 208 192 224 72 128 32 32 72 48 192 128 232"
        opacity="0.2"
      />
      <polygon
        points="128 232 208 192 224 72 128 32 32 72 48 192 128 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="164 160 128 88 92 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="102.7"
        y1="138.7"
        x2="153.3"
        y2="138.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M227.1,64.6l-96-40a8.3,8.3,0,0,0-6.2,0l-96,40a8.1,8.1,0,0,0-4.8,8.5l16,120a8.1,8.1,0,0,0,4.3,6.1l80,40a8.5,8.5,0,0,0,7.2,0l80-40a8.1,8.1,0,0,0,4.3-6.1l16-120A8.1,8.1,0,0,0,227.1,64.6ZM167.6,167.2a9.4,9.4,0,0,1-3.6.8,8.1,8.1,0,0,1-7.2-4.4l-8.4-16.9H107.6l-8.4,16.9a8,8,0,0,1-14.4-7.2l36-72a8.1,8.1,0,0,1,14.4,0l36,72A8.2,8.2,0,0,1,167.6,167.2ZM128,105.9l12.4,24.8H115.6Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polygon
        points="128 232 208 192 224 72 128 32 32 72 48 192 128 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="164 160 128 88 92 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="102.7"
        y1="138.7"
        x2="153.3"
        y2="138.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polygon
        points="128 232 208 192 224 72 128 32 32 72 48 192 128 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="164 160 128 88 92 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="102.7"
        y1="138.7"
        x2="153.3"
        y2="138.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polygon
        points="128 232 208 192 224 72 128 32 32 72 48 192 128 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="164 160 128 88 92 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="102.7"
        y1="138.7"
        x2="153.3"
        y2="138.7"
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
  name: "PhAngularLogo",
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
