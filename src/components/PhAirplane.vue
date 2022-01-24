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
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
        opacity="0.2"
      />
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M240.2,136v32a7.8,7.8,0,0,1-2.9,6.2,7.9,7.9,0,0,1-6.6,1.6l-70.5-14v26.9l13.5,13.7A7.9,7.9,0,0,1,176,208v24a7.9,7.9,0,0,1-3.5,6.6A8.2,8.2,0,0,1,168,240a8,8,0,0,1-3-.6l-37-14.8L91,239.4a8,8,0,0,1-7.5-.8A7.9,7.9,0,0,1,80,232V208a8.1,8.1,0,0,1,2.3-5.7L96,188.7V161.8l-70.4,14A7.9,7.9,0,0,1,16,168V136a8.2,8.2,0,0,1,4.4-7.2L96,91V48a32,32,0,0,1,64,0V91l75.6,37.8A8.2,8.2,0,0,1,240.2,136Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
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
  name: "PhAirplane",
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
