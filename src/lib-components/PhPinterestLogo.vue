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
        x1="120"
        y1="88"
        x2="88"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <line
        x1="120"
        y1="88"
        x2="88"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M232,131.2c-1.7,54.5-45.8,98.9-100.3,100.7a103.7,103.7,0,0,1-28.6-2.9,4.1,4.1,0,0,1-2.9-4.9l8.9-35.4A50.5,50.5,0,0,0,136,196c37,0,66.7-33.5,63.8-73.4-2.6-35.9-32-64.6-68-66.5A72,72,0,0,0,56,128a73.3,73.3,0,0,0,5.2,27,8,8,0,0,0,14.9-6A55.5,55.5,0,0,1,72,128.9a56,56,0,1,1,112-.9c0,28.7-21.5,52-48,52-10.5,0-17.8-3.7-22.8-8l14.6-58.1a8,8,0,1,0-15.6-3.8L85.4,217.5a4,4,0,0,1-5.7,2.6A104,104,0,1,1,232,131.2Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="120"
        y1="88"
        x2="88"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="120"
        y1="88"
        x2="88"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="120"
        y1="88"
        x2="88"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
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
  name: "PhPinterestLogo",
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
