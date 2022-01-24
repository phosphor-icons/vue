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
        d="M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M163.9,80.1A70.2,70.2,0,0,1,168,104h0a72,72,0,0,1-72,72H92.1A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9Z"
        opacity="0.2"
      />
      <path
        d="M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M169.6,72.6A80,80,0,0,0,16,104v66a14,14,0,0,0,14,14H86.7A80.2,80.2,0,0,0,160,232h66a14,14,0,0,0,14-14V152A79.8,79.8,0,0,0,169.6,72.6ZM224,216H160a64.2,64.2,0,0,1-55.7-32.4A80.2,80.2,0,0,0,176,104a83.6,83.6,0,0,0-1.3-14.3A64,64,0,0,1,224,152Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9"
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
  name: "PhChatsTeardrop",
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
