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
    <slot />
    <g v-if="weight === 'bold'">
      <path
        d="M237.532,121.27057,148.32606,63.9239A8,8,0,0,0,136,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L237.532,134.72943A8,8,0,0,0,237.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
        opacity="0.2"
      />
      <path
        d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
        opacity="0.2"
      />
      <path
        d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M253.20605,128a15.9352,15.9352,0,0,1-7.34765,13.459l-89.20606,57.34668A16.00057,16.00057,0,0,1,132,185.34668V142.65381L44.65234,198.80566A16.00057,16.00057,0,0,1,20,185.34668V70.65332a16.00057,16.00057,0,0,1,24.65234-13.459L132,113.34619V70.65332a16.00057,16.00057,0,0,1,24.65234-13.459L245.8584,114.541A15.9352,15.9352,0,0,1,253.20605,128Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
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
  }
});
export default component;
</script>
