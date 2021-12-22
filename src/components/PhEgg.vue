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
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        opacity="0.2"
      />
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M216,152a88,88,0,0,1-176,0c0-30.8,10.7-64.5,29.3-92.4S109.5,16,128,16s40.5,16.3,58.7,43.6S216,121.2,216,152Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
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
