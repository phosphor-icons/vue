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
        d="M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M139.2,55.2A52,52,0,0,1,228,92c0,68-100,124-100,124S28,160,28,92a52,52,0,0,1,98.3-23.8Z"
        opacity="0.2"
      />
      <path
        d="M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M236,92c0,30.6-17.7,62-52.6,93.4A314.3,314.3,0,0,1,131.9,223a8.1,8.1,0,0,1-7.8,0C119.8,220.6,20,163.9,20,92a60,60,0,0,1,92.3-50.6,4,4,0,0,1,.6,6.2l-18,18a8,8,0,0,0,0,11.3l34.4,34.3-15,15.1a7.9,7.9,0,0,0,0,11.3,8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3l20.7-20.7a8,8,0,0,0,0-11.3L111.9,71.2l21.7-21.6h0A59.3,59.3,0,0,1,176,32,60,60,0,0,1,236,92Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16"
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
