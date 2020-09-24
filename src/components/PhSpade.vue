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
    <g v-if="displayWeight === 'bold'">
      <path
        d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
        opacity="0.2"
      />
      <path
        d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M131.90918,17.01953a8.00426,8.00426,0,0,0-7.81836,0A317.37283,317.37283,0,0,0,72.64844,54.55371C37.71338,85.99512,20,117.43457,20,148a60.04467,60.04467,0,0,0,75.77344,57.90332l-7.40918,23.71094A8.00032,8.00032,0,0,0,96,240h64a8.00068,8.00068,0,0,0,7.63574-10.38672l-7.41015-23.71A60.04552,60.04552,0,0,0,236,148C236,76.1377,136.15918,19.40039,131.90918,17.01953Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
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
  name: "PhSpade",
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
