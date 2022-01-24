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
        d="M208,104c0,44.2-35.8,92-80,92s-80-47.8-80-92a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="144.7 193.7 160 232 96 232 111.3 193.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M140,70a36.8,36.8,0,0,1,22,22"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M208,104a80,80,0,0,0-160,0c0,40.5,30.1,87.5,69.2,95h0L104,232h48l-13.2-33h0C177.9,191.5,208,144.5,208,104Z"
        opacity="0.2"
      />
      <path
        d="M208,104c0,44.2-35.8,96-80,96s-80-51.8-80-96a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="138.8 199 152 232 104 232 117.2 199"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M136,56.7A47.8,47.8,0,0,1,175.3,96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,16a88.1,88.1,0,0,0-88,88c0,23.4,9.4,49.4,25.1,69.5,11.9,15.2,26.2,25.7,41.3,30.9L96.6,229a8,8,0,0,0,.8,7.5A7.9,7.9,0,0,0,104,240h48a7.9,7.9,0,0,0,6.6-3.5,8,8,0,0,0,.8-7.5l-9.8-24.6c15.1-5.2,29.4-15.7,41.3-30.9C206.6,153.4,216,127.4,216,104A88.1,88.1,0,0,0,128,16Zm48.7,87.9h-1.4a8.1,8.1,0,0,1-7.9-6.7,39.7,39.7,0,0,0-32.7-32.7,8.1,8.1,0,0,1-6.6-9.3,7.9,7.9,0,0,1,9.2-6.5,55.9,55.9,0,0,1,45.9,45.9A7.9,7.9,0,0,1,176.7,103.9Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M208,104c0,44.2-35.8,96-80,96s-80-51.8-80-96a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="138.8 199 152 232 104 232 117.2 199"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M136,56.7A47.8,47.8,0,0,1,175.3,96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M208,104c0,44.2-35.8,96-80,96s-80-51.8-80-96a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="138.8 199 152 232 104 232 117.2 199"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M136,56.7A47.8,47.8,0,0,1,175.3,96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M208,104c0,44.2-35.8,96-80,96s-80-51.8-80-96a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="138.8 199 152 232 104 232 117.2 199"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M136,56.7A47.8,47.8,0,0,1,175.3,96"
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
} from "../types";

export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhBalloon",
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
