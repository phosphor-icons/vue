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
        d="M160,232H96l8.7-46.2A52.1,52.1,0,0,1,28,140C28,88,128,24,128,24S228,88,228,140a52.1,52.1,0,0,1-76.7,45.8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z"
        opacity="0.2"
      />
      <path
        d="M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M232,140a56,56,0,0,1-56,56,55.2,55.2,0,0,1-25.9-6.4L162,225.5a7.8,7.8,0,0,1-1.1,7.2,7.9,7.9,0,0,1-6.4,3.3h-53a7.9,7.9,0,0,1-6.4-3.3,7.8,7.8,0,0,1-1.1-7.2l11.9-35.9A55.2,55.2,0,0,1,80,196a56,56,0,0,1-56-56C24,86.4,121.7,23.3,125.8,20.6a4.3,4.3,0,0,1,4.4,0C134.3,23.3,232,86.4,232,140Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z"
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
