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
        d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M146.5,90.5l51.4-52.6a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7Z"
        opacity="0.2"
      />
      <path
        d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M231.8,32.2a28.1,28.1,0,0,0-39.7.1L18.3,210.4a8,8,0,0,0,3.9,13.4,154.1,154.1,0,0,0,35,4c33.4,0,66.8-10.9,98.3-32.2a232,232,0,0,0,50.9-46.8,8.1,8.1,0,0,0-.7-10.5l-18.8-18.7,45-47.9A28,28,0,0,0,231.8,32.2ZM189.2,144.5a227,227,0,0,1-43.1,38.2c-34.5,23.2-70,32.6-105.8,28.1L146.6,101.9l23.3,23.3c.1.1.2.3.4.4h.1Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
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
  name: "PhKnife",
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
