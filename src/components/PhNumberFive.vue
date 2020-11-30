/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="size"
    :height="size"
    :fill="color"
    :transform="mirrored ? 'scale(-1, 1)' : undefined"
    v-bind="$attrs"
  >
    <g v-if="weight === 'bold'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M119.79785,231.989A63.5838,63.5838,0,0,1,74.542,213.24463a8.00036,8.00036,0,0,1,11.31446-11.314,47.99793,47.99793,0,1,0,0-67.87915,8.00042,8.00042,0,0,1-13.55469-6.93505L87.90625,30.71265A8.00028,8.00028,0,0,1,95.80371,23.991h79.99414a8,8,0,1,1,0,16H102.61328L91.16406,110.71875A64.01436,64.01436,0,1,1,119.79785,231.989Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SetupIconProps, PropValidator, PhosphorIcon } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

const component: PhosphorIcon = defineComponent({
  props: PropValidator,
  setup(props: SetupIconProps) {
    return { ...useDefaultPropsFromContext(props) };
  },
});
export default component;
</script>
