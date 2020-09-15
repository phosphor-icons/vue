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
    <g v-if="displayWeight === 'bold'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
        opacity="0.2"
      />
      <polygon
        points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M198.99805,108.11719a8.0083,8.0083,0,0,0-7-4.125h-40v-88a7.9975,7.9975,0,0,0-14.78125-4.23438l-80,128a7.99394,7.99394,0,0,0,6.78125,12.23438h40v88a8.00635,8.00635,0,0,0,5.79687,7.6875,7.62249,7.62249,0,0,0,2.20313.3125,7.97106,7.97106,0,0,0,6.78125-3.76563l80-128A7.97859,7.97859,0,0,0,198.99805,108.11719Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
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
  name: "PhLightning",
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
