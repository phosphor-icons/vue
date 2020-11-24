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
        d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
        opacity="0.2"
      />
      <path
        d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M229.36426,151.35791A104.00619,104.00619,0,1,1,104.64111,26.63574a7.99975,7.99975,0,0,1,9.58741,9.58545A88.0856,88.0856,0,0,0,219.77734,141.77051a8.00049,8.00049,0,0,1,9.58692,9.5874Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
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
  name: "PhMoon",
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
