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
        cx="128"
        cy="128"
        r="84"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M179.5,61.6c30.1-8.9,52.9-8.8,59.4,2.4,11,19.1-29.7,63.3-90.9,98.6S28.2,211.1,17.1,192c-6.4-11.2,4.9-31,27.7-52.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="128" cy="128" r="88" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M184.2,60.3c27.7-7.6,48.5-6.9,54.7,3.7,11,19.1-29.7,63.3-90.9,98.6S28.2,211.1,17.1,192c-6.1-10.6,3.7-29,24.1-49.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M223.3,116a117.3,117.3,0,0,1,.7,12A96,96,0,0,1,70,204.5c24.6-6.2,53.5-18.5,82-34.9S205.6,134.2,223.3,116Zm22.5-56c-5.5-9.5-20.3-18.4-59.8-8.5A96,96,0,0,0,32,128a117.3,117.3,0,0,0,.7,12C4.4,169.2,4.8,186.5,10.2,196c3.7,6.4,11.9,12.8,29.8,12.8a121.7,121.7,0,0,0,25.5-3.2l4.5-1.1a105,105,0,0,1-14.2-13.3c-18.7,3.3-29.3,1-31.7-3.2-1.5-2.6-.7-7.5,2.3-13.4A85.7,85.7,0,0,1,37.1,159a95.2,95.2,0,0,0,18.7,32.2l6.2-1.3c24-5.3,53.1-17.5,82-34.2s54-35.8,70.6-53.9a62,62,0,0,0,4.3-4.8,95.2,95.2,0,0,0-18.7-32.2,83.9,83.9,0,0,1,19-1.5c6.6.4,11.2,2.1,12.7,4.7,2.4,4.2-.9,14.5-13,29a107.3,107.3,0,0,1,4.4,19l3.1-3.3C251.7,85.2,250.9,68.9,245.8,60Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M184.2,60.3c27.7-7.6,48.5-6.9,54.7,3.7,11,19.1-29.7,63.3-90.9,98.6S28.2,211.1,17.1,192c-6.1-10.6,3.7-29,24.1-49.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M184.2,60.3c27.7-7.6,48.5-6.9,54.7,3.7,11,19.1-29.7,63.3-90.9,98.6S28.2,211.1,17.1,192c-6.1-10.6,3.7-29,24.1-49.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M184.2,60.3c27.7-7.6,48.5-6.9,54.7,3.7,11,19.1-29.7,63.3-90.9,98.6S28.2,211.1,17.1,192c-6.1-10.6,3.7-29,24.1-49.2"
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
  name: "PhPlanet",
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
