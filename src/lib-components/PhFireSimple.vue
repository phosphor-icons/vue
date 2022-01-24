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
        d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
        opacity="0.2"
      />
      <path
        d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M219.9,140a92,92,0,0,1-184,0c0-23.1,9.9-49.7,29.4-79.1a8,8,0,0,1,5-3.4,8.2,8.2,0,0,1,6.1,1.2l32.2,21.5,30.9-64.8a7.9,7.9,0,0,1,5.8-4.4,8.1,8.1,0,0,1,7.1,2.2c14.7,14.7,31.5,32.6,44.6,53.4C212.4,91.1,219.9,115.1,219.9,140Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
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
  name: "PhFireSimple",
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
