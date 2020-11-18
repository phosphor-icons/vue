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
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M119.79785,231.989A63.5838,63.5838,0,0,1,74.542,213.24463a8.00036,8.00036,0,0,1,11.31446-11.314,47.99793,47.99793,0,1,0,0-67.87915,8.00042,8.00042,0,0,1-13.55469-6.93505L87.90625,30.71265A8.00028,8.00028,0,0,1,95.80371,23.991h79.99414a8,8,0,1,1,0,16H102.61328L91.16406,110.71875A64.01436,64.01436,0,1,1,119.79785,231.989Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
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
  name: "PhNumberFive",
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
