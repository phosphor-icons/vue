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
        d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
        opacity="0.2"
      />
      <path
        d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M26.36035,158.87646a15.86839,15.86839,0,0,1,2.0293-16.96582L115.582,34.59668a15.99968,15.99968,0,0,1,24.83594.00049l87.19238,107.313A16.00008,16.00008,0,0,1,215.19238,168H40.80762A15.87032,15.87032,0,0,1,26.36035,158.87646ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
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
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhEjectSimple",
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
