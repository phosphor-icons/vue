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
        x1="48"
        y1="40"
        x2="208"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M96,192v8a32,32,0,0,0,64,0v-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M186.2,192H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68v-8A72.4,72.4,0,0,1,68.9,63"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M100,37.7A71.1,71.1,0,0,1,128.5,32c39.6.3,71.3,33.2,71.3,72.9V112a187.1,187.1,0,0,0,3.8,39.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M56.2,104a71.8,71.8,0,0,1,72.3-72c39.6.3,71.3,33.2,71.3,72.9V112c0,35.8,7.5,56.6,14.1,67.9A8,8,0,0,1,207,192H49a8,8,0,0,1-6.9-12.1c6.6-11.3,14.1-32.1,14.1-67.9Z"
        opacity="0.2"
      />
      <line
        x1="48"
        y1="40"
        x2="208"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M96,192v8a32,32,0,0,0,64,0v-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M186.2,192H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68v-8A72.4,72.4,0,0,1,68.9,63"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M92.5,41.4a70.8,70.8,0,0,1,36-9.4c39.6.3,71.3,33.2,71.3,72.9V112c0,26.7,4.2,45,9,57.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M53.9,34.6A8,8,0,0,0,42.1,45.4L58.9,63.9A80.2,80.2,0,0,0,48.2,104v8c0,34.3-7.1,53.7-13,63.9A16,16,0,0,0,49,200H88a40,40,0,0,0,80,0h14.6l19.5,21.4A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM86.6,46.8a8.1,8.1,0,0,1,1.9-12.4A80.2,80.2,0,0,1,128.6,24c43.7.3,79.2,36.6,79.2,80.9V112c0,21.9,2.8,40.1,8.4,54.4a8,8,0,0,1-13.3,8.3Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="48"
        y1="40"
        x2="208"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M96,192v8a32,32,0,0,0,64,0v-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M186.2,192H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68v-8A72.4,72.4,0,0,1,68.9,63"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M92.5,41.4a70.8,70.8,0,0,1,36-9.4c39.6.3,71.3,33.2,71.3,72.9V112c0,26.7,4.2,45,9,57.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="48"
        y1="40"
        x2="208"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M96,192v8a32,32,0,0,0,64,0v-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M186.2,192H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68v-8A72.4,72.4,0,0,1,68.9,63"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M92.5,41.4a70.8,70.8,0,0,1,36-9.4c39.6.3,71.3,33.2,71.3,72.9V112c0,26.7,4.2,45,9,57.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="48"
        y1="40"
        x2="208"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M96,192v8a32,32,0,0,0,64,0v-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M186.2,192H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68v-8A72.4,72.4,0,0,1,68.9,63"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M92.5,41.4a70.8,70.8,0,0,1,36-9.4c39.6.3,71.3,33.2,71.3,72.9V112c0,26.7,4.2,45,9,57.3"
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
  name: "PhBellSlash",
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
