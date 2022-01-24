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
        points="100 108 100 61.1 40 72 40 108 100 108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="216 108 216 40 140 53.8 140 108 216 108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="100 148 100 194.9 40 184 40 148 100 148"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="216 148 216 216 140 202.2 140 148 216 148"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon
        points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
        opacity="0.2"
      />
      <polygon
        points="104 195.6 40 184 40 144 104 144 104 195.6"
        opacity="0.2"
      />
      <polygon
        points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
        opacity="0.2"
      />
      <polygon points="104 60.4 40 72 40 112 104 112 104 60.4" opacity="0.2" />
      <polygon
        points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="104 195.6 40 184 40 144 104 144 104 195.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="104 60.4 40 72 40 112 104 112 104 60.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M112,144v51.6a8.1,8.1,0,0,1-2.9,6.2,7.8,7.8,0,0,1-5.1,1.8h-1.4l-64-11.6A8,8,0,0,1,32,184V144a8,8,0,0,1,8-8h64A8,8,0,0,1,112,144Zm-2.9-89.8a8,8,0,0,0-6.5-1.7l-64,11.6A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.4A8.1,8.1,0,0,0,109.1,54.2ZM216,136H136a8,8,0,0,0-8,8v57.5a8,8,0,0,0,6.6,7.8l80,14.6H216a7.4,7.4,0,0,0,5.1-1.9A7.9,7.9,0,0,0,224,216V144A8,8,0,0,0,216,136Zm5.1-102.1a7.7,7.7,0,0,0-6.5-1.8l-80,14.6a8,8,0,0,0-6.6,7.8V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A7.9,7.9,0,0,0,221.1,33.9Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polygon
        points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="104 195.6 40 184 40 144 104 144 104 195.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="104 60.4 40 72 40 112 104 112 104 60.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polygon
        points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="104 195.6 40 184 40 144 104 144 104 195.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="104 60.4 40 72 40 112 104 112 104 60.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polygon
        points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="104 195.6 40 184 40 144 104 144 104 195.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="104 60.4 40 72 40 112 104 112 104 60.4"
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
  name: "PhWindowsLogo",
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
