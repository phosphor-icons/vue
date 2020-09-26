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
      <rect width="256" height="256" fill="none" />
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        opacity="0.2"
      />
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M246.65625,123.56213l-45.624-68.43652a15.9687,15.9687,0,0,0-13.31348-7.126H40a16.01833,16.01833,0,0,0-16,16v128a16.01833,16.01833,0,0,0,16,16H187.71875a15.96649,15.96649,0,0,0,13.31348-7.125l-.001.001,45.625-68.43848A7.99771,7.99771,0,0,0,246.65625,123.56213Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
  name: "PhTagSimple",
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
