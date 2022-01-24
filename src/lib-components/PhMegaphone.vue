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
        d="M144,79.5V203.1a7.9,7.9,0,0,0,4.4,7.1l18.7,9.3a7.9,7.9,0,0,0,11.3-5.2L192,160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M192,160a40,40,0,0,0,0-80H152S97.5,80,45.1,36.1A8,8,0,0,0,32,42.2V197.8a8,8,0,0,0,13.1,6.1C97.5,160,152,160,152,160Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path d="M152,160h40a40,40,0,0,0,0-80H152Z" opacity="0.2" />
      <path
        d="M152,80V203.7a7.9,7.9,0,0,0,3.6,6.7l11,7.3a8,8,0,0,0,12.2-4.7L192,160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M192,160a40,40,0,0,0,0-80H152S97.5,80,45.1,36.1A8,8,0,0,0,32,42.2V197.8a8,8,0,0,0,13.1,6.1C97.5,160,152,160,152,160Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M240,120a48,48,0,0,0-48-48H152c-.5,0-52.4-.7-101.7-42.1a15.9,15.9,0,0,0-17.1-2.2A15.7,15.7,0,0,0,24,42.2V197.8a15.7,15.7,0,0,0,9.2,14.5,16.4,16.4,0,0,0,6.8,1.5,15.9,15.9,0,0,0,10.3-3.7c37.9-31.8,77.2-39.6,93.7-41.5v35.1a15.9,15.9,0,0,0,7.1,13.3l11,7.4a16.8,16.8,0,0,0,14.7,1.6,15.9,15.9,0,0,0,9.7-11.1l11.9-47.3A48.2,48.2,0,0,0,240,120Zm-69,91-11-7.3V168h21.8Zm21-59H160V88h32a32,32,0,0,1,0,64Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M152,80V203.7a7.9,7.9,0,0,0,3.6,6.7l11,7.3a8,8,0,0,0,12.2-4.7L192,160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M192,160a40,40,0,0,0,0-80H152S97.5,80,45.1,36.1A8,8,0,0,0,32,42.2V197.8a8,8,0,0,0,13.1,6.1C97.5,160,152,160,152,160Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M152,80V203.7a7.9,7.9,0,0,0,3.6,6.7l11,7.3a8,8,0,0,0,12.2-4.7L192,160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M192,160a40,40,0,0,0,0-80H152S97.5,80,45.1,36.1A8,8,0,0,0,32,42.2V197.8a8,8,0,0,0,13.1,6.1C97.5,160,152,160,152,160Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M152,80V203.7a7.9,7.9,0,0,0,3.6,6.7l11,7.3a8,8,0,0,0,12.2-4.7L192,160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M192,160a40,40,0,0,0,0-80H152S97.5,80,45.1,36.1A8,8,0,0,0,32,42.2V197.8a8,8,0,0,0,13.1,6.1C97.5,160,152,160,152,160Z"
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
  name: "PhMegaphone",
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
