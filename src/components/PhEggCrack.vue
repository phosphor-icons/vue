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
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        opacity="0.2"
      />
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M186.7,59.6l-.7-1.1a4.1,4.1,0,0,0-6.3-.4L143.5,98.4l18,7a8.1,8.1,0,0,1,5,9l-7.2,37.1a8.1,8.1,0,0,1-7.9,6.5h-1.5a8.4,8.4,0,0,1-6.3-9.7l5.9-30.3-22.6-8.7a8.3,8.3,0,0,1-4.9-5.6,8.1,8.1,0,0,1,1.8-7.2l46.6-51.9a4,4,0,0,0-.1-5.5c-14.1-14.7-29-23-42.3-23-18.5,0-40.5,16.3-58.7,43.6s-28,57.6-29.2,86.8C38,197,77.6,240.1,128.2,240A88.1,88.1,0,0,0,216,152C216,121.2,205.3,87.5,186.7,59.6Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
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
} from "../types";
export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhEggCrack",
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
