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
      <line
        x1="94.1"
        y1="161.9"
        x2="161.9"
        y2="94"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <line
        x1="94.1"
        y1="161.9"
        x2="161.9"
        y2="94"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M156.3,88.4,88.4,156.3a8,8,0,0,0,0,11.3,8.1,8.1,0,0,0,11.3,0l67.9-67.9a8,8,0,0,0-11.3-11.3Z"
      />
      <path
        d="M139.3,173.3,111,201.5a39.7,39.7,0,0,1-56.5,0,40,40,0,0,1,0-56.5l28.2-28.3a8,8,0,0,0-11.3-11.3L43.1,133.7a56,56,0,0,0,79.2,79.2l28.3-28.3a8,8,0,0,0,0-11.3A7.9,7.9,0,0,0,139.3,173.3Z"
      />
      <path
        d="M212.9,43.1a56,56,0,0,0-79.2,0L105.4,71.4a8,8,0,0,0,11.3,11.3L145,54.5a39.7,39.7,0,0,1,56.5,0,40,40,0,0,1,0,56.5l-28.2,28.3a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l28.3-28.3A56.1,56.1,0,0,0,212.9,43.1Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="94.1"
        y1="161.9"
        x2="161.9"
        y2="94"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="94.1"
        y1="161.9"
        x2="161.9"
        y2="94"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="94.1"
        y1="161.9"
        x2="161.9"
        y2="94"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
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
