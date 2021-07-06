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
        d="M160,232H96l8.66461-46.21023A52.01694,52.01694,0,0,1,28,140C28,88,128,24,128,24S228,88,228,140a52.01693,52.01693,0,0,1-76.66484,45.78964Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
        opacity="0.2"
      />
      <path
        d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M232,140a55.99915,55.99915,0,0,1-81.90137,49.64941l11.94092,35.82129A7.99929,7.99929,0,0,1,154.4502,236H101.5498a7.99966,7.99966,0,0,1-7.58935-10.53027l11.94092-35.82032A55.99915,55.99915,0,0,1,24,140C24,86.42676,121.68555,23.292,125.84375,20.63086a3.9978,3.9978,0,0,1,4.3125,0C134.31445,23.292,232,86.42676,232,140Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
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
