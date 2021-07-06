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
        d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M43.17529,128a29.7852,29.7852,0,0,1,8.023,10.25977C56,148.16309,56,160.28125,56,172c0,24.31348,1.01953,36,24,36a8,8,0,0,1,0,16c-17.48145,0-29.32422-6.14355-35.19824-18.25977C40,195.83691,40,183.71875,40,172c0-24.31348-1.01953-36-24-36a8,8,0,0,1,0-16c22.98047,0,24-11.68652,24-36,0-11.71875,0-23.83691,4.80176-33.74023C50.67578,38.14355,62.51855,32,80,32a8,8,0,0,1,0,16C57.01953,48,56,59.68652,56,84c0,11.71875,0,23.83691-4.80176,33.74023A29.7852,29.7852,0,0,1,43.17529,128ZM240,120c-22.98047,0-24-11.68652-24-36,0-11.71875,0-23.83691-4.80176-33.74023C205.32422,38.14355,193.48145,32,176,32a8,8,0,0,0,0,16c22.98047,0,24,11.68652,24,36,0,11.71875,0,23.83691,4.80176,33.74023A29.7852,29.7852,0,0,0,212.82471,128a29.7852,29.7852,0,0,0-8.023,10.25977C200,148.16309,200,160.28125,200,172c0,24.31348-1.01953,36-24,36a8,8,0,0,0,0,16c17.48145,0,29.32422-6.14355,35.19824-18.25977C216,195.83691,216,183.71875,216,172c0-24.31348,1.01953-36,24-36a8,8,0,0,0,0-16Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
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
