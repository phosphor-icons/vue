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
        d="M132,132V24a60,60,0,0,1,36,108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M132,124H24A60,60,0,0,1,132,88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M124,124V232A60,60,0,0,1,88,124"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M124,132H232a60,60,0,0,1-108,36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path d="M132,132V24a60,60,0,0,1,36,108Z" opacity="0.2" />
      <path d="M124,124V232A60,60,0,0,1,88,124Z" opacity="0.2" />
      <path
        d="M132,132V24a60,60,0,0,1,36,108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M132,124H24A60,60,0,0,1,132,88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M124,124V232A60,60,0,0,1,88,124"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M124,132H232a60,60,0,0,1-108,36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M232,124H187a67.4,67.4,0,0,0,13-40,68.1,68.1,0,0,0-68-68,8,8,0,0,0-8,8V69A67.4,67.4,0,0,0,84,56a68.1,68.1,0,0,0-68,68,8,8,0,0,0,8,8H69a67.4,67.4,0,0,0-13,40,68.1,68.1,0,0,0,68,68,8,8,0,0,0,8-8V187a67.4,67.4,0,0,0,40,13,68.1,68.1,0,0,0,68-68A8,8,0,0,0,232,124ZM84,72a51.5,51.5,0,0,1,40,18.8V116H32.6A52.1,52.1,0,0,1,84,72Zm88,112a51.5,51.5,0,0,1-40-18.8V140h91.4A52.1,52.1,0,0,1,172,184Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M132,132V24a60,60,0,0,1,36,108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M132,124H24A60,60,0,0,1,132,88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M124,124V232A60,60,0,0,1,88,124"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M124,132H232a60,60,0,0,1-108,36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M132,132V24a60,60,0,0,1,36,108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M132,124H24A60,60,0,0,1,132,88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M124,124V232A60,60,0,0,1,88,124"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M124,132H232a60,60,0,0,1-108,36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M132,132V24a60,60,0,0,1,36,108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M132,124H24A60,60,0,0,1,132,88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M124,124V232A60,60,0,0,1,88,124"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M124,132H232a60,60,0,0,1-108,36"
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
  name: "PhGooglePhotosLogo",
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
