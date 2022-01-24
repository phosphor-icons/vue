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
        d="M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="127.9"
        y1="184"
        x2="127.9"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z"
        opacity="0.2"
      />
      <path
        d="M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="127.9"
        y1="184"
        x2="127.9"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M236.4,201.5,141.8,32.6a16,16,0,0,0-27.9,0L19.3,201.5a15.7,15.7,0,0,0,1.8,18.1,15.9,15.9,0,0,0,17.6,4.8l78.5-28.1a4.1,4.1,0,0,0,2.7-3.8V120.3a8.2,8.2,0,0,1,7.4-8.3,8,8,0,0,1,8.6,8v72.5a4,4,0,0,0,2.6,3.8l78.6,28.1a17,17,0,0,0,5.4.9,16,16,0,0,0,13.9-23.8Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="127.9"
        y1="184"
        x2="127.9"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="127.9"
        y1="184"
        x2="127.9"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="127.9"
        y1="184"
        x2="127.9"
        y2="120"
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
  name: "PhPaperPlane",
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
