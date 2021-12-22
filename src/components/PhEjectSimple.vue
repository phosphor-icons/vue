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
        d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
        opacity="0.2"
      />
      <path
        d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M26.4,158.9a15.9,15.9,0,0,1,2-17L115.6,34.6a16,16,0,0,1,24.8,0l87.2,107.3A16,16,0,0,1,215.2,168H40.8A15.8,15.8,0,0,1,26.4,158.9ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="224"
        y1="208"
        x2="32"
        y2="208"
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
