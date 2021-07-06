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
        d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M165.17383,122.73535a64.11724,64.11724,0,0,1-90.81836,90.53174,7.99968,7.99968,0,1,1,11.28906-11.3374,47.99883,47.99883,0,1,0,0-67.85645,7.99971,7.99971,0,0,1-13.541-6.95215L87.77344,30.7168A8.00076,8.00076,0,0,1,95.66992,24H176a8,8,0,0,1,0,16H102.47461l-11.501,70.75537a64.53171,64.53171,0,0,1,74.2002,11.98Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
