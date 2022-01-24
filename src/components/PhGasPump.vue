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
        d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="32"
        y1="216"
        x2="192"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h4a16,16,0,0,0,16-16V86.6a16.1,16.1,0,0,0-4.7-11.3L220,56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="128"
        y1="112"
        x2="96"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216"
        opacity="0.2"
      />
      <path
        d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="32"
        y1="216"
        x2="192"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.6a16.1,16.1,0,0,0-4.7-11.3L216,56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="136"
        y1="112"
        x2="88"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M241,69.7,221.7,50.3a8.1,8.1,0,0,0-11.4,11.4L229.7,81a7.9,7.9,0,0,1,2.3,5.6V168a8,8,0,0,1-16,0V128a24.1,24.1,0,0,0-24-24H176V56a24.1,24.1,0,0,0-24-24H72A24.1,24.1,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.6A23.8,23.8,0,0,0,241,69.7ZM144,120H80a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="32"
        y1="216"
        x2="192"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.6a16.1,16.1,0,0,0-4.7-11.3L216,56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="136"
        y1="112"
        x2="88"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="32"
        y1="216"
        x2="192"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.6a16.1,16.1,0,0,0-4.7-11.3L216,56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="136"
        y1="112"
        x2="88"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="32"
        y1="216"
        x2="192"
        y2="216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.6a16.1,16.1,0,0,0-4.7-11.3L216,56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="136"
        y1="112"
        x2="88"
        y2="112"
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
  name: "PhGasPump",
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
