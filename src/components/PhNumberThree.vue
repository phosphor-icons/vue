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
        d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M184,168.00488a63.99178,63.99178,0,0,1-109.24219,45.251,8,8,0,0,1,11.31446-11.313,47.994,47.994,0,1,0,33.93554-81.93408,7.99947,7.99947,0,0,1-6.55469-12.58594L160.626,40H80a8,8,0,0,1,0-16h95.9873A7.99946,7.99946,0,0,1,182.542,36.58594l-48.28125,69.00683A64.055,64.055,0,0,1,184,168.00488Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
  name: "PhNumberThree",
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
