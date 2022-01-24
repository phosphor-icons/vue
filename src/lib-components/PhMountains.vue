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
      <circle
        cx="164"
        cy="52"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M12,200,85.1,75.7a8.1,8.1,0,0,1,13.8,0L172,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="54.4"
        y1="128"
        x2="129.6"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M172,200h67.3l-52.4-88.4a8.1,8.1,0,0,0-13.8,0l-26.6,45"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="164" cy="52" r="20" opacity="0.2" />
      <path
        d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168Z"
        opacity="0.2"
      />
      <path d="M50.4,128h75.2L94.9,75.7a8.1,8.1,0,0,0-13.8,0Z" opacity="0.2" />
      <circle
        cx="164"
        cy="52"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="50.4"
        y1="128"
        x2="125.6"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M140,52a24,24,0,1,1,24,24A24.1,24.1,0,0,1,140,52ZM255,204a8.1,8.1,0,0,1-7,4H8a7.8,7.8,0,0,1-6.9-4,7.9,7.9,0,0,1,0-8.1L74.2,71.7a16,16,0,0,1,27.6,0l42.3,71.9,26.1-44.1a16.1,16.1,0,0,1,27.6,0l57.1,96.4A8.3,8.3,0,0,1,255,204ZM64.3,120h47.4L88,79.8Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="164"
        cy="52"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="50.4"
        y1="128"
        x2="125.6"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="164"
        cy="52"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="50.4"
        y1="128"
        x2="125.6"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="164"
        cy="52"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="50.4"
        y1="128"
        x2="125.6"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
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
  name: "PhMountains",
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
