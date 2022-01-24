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
        d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="92" cy="108" r="16" />
      <circle cx="164" cy="108" r="16" />
      <path
        d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
        opacity="0.2"
      />
      <path
        d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="92" cy="108" r="12" />
      <circle cx="164" cy="108" r="12" />
      <path
        d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,24a104,104,0,0,0,0,208,102.2,102.2,0,0,0,30.6-4.6,6.7,6.7,0,0,0,3.3-2l63.5-63.5a7.2,7.2,0,0,0,2-3.3A102.2,102.2,0,0,0,232,128,104.2,104.2,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.5,60a56,56,0,0,1-97,0,8,8,0,1,1,13.8-8,40.1,40.1,0,0,0,69.4,0,8,8,0,0,1,13.8,8Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="92" cy="108" r="10" />
      <circle cx="164" cy="108" r="10" />
      <path
        d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="92" cy="108" r="8" />
      <circle cx="164" cy="108" r="8" />
      <path
        d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="92" cy="108" r="12" />
      <circle cx="164" cy="108" r="12" />
      <path
        d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
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
  name: "PhSmileySticker",
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
