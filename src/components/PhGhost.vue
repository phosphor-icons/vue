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
      <circle cx="100" cy="116" r="16" />
      <circle cx="156" cy="116" r="16" />
      <path
        d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
        opacity="0.2"
      />
      <circle cx="100" cy="116" r="12" />
      <circle cx="156" cy="116" r="12" />
      <path
        d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,24a96.2,96.2,0,0,0-96,96v96a8.1,8.1,0,0,0,13.1,6.2l24.2-19.9,24.3,19.9a8,8,0,0,0,10.1,0L128,202.3l24.3,19.9a8,8,0,0,0,10.1,0l24.3-19.9,24.2,19.9a7.9,7.9,0,0,0,8.5,1A7.9,7.9,0,0,0,224,216V120A96.2,96.2,0,0,0,128,24ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="100" cy="116" r="10" />
      <circle cx="156" cy="116" r="10" />
      <path
        d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="100" cy="116" r="8" />
      <circle cx="156" cy="116" r="8" />
      <path
        d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="100" cy="116" r="12" />
      <circle cx="156" cy="116" r="12" />
      <path
        d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
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
  name: "PhGhost",
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
