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
      <polyline
        points="163.882 148.118 227.882 148.118 227.882 84.118"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polyline
        points="163.882 148.118 227.882 148.118 227.882 84.118"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M235.88184,84.11816v64a8.0004,8.0004,0,0,1-8,8h-64a8.00064,8.00064,0,0,1-5.65723-13.65722l26.08032-26.08008A87.99487,87.99487,0,0,0,40,184a8,8,0,0,1-16,0,104.00481,104.00481,0,0,1,171.667-78.98145l26.55762-26.55761a8.00065,8.00065,0,0,1,13.65723,5.65722Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="163.882 148.118 227.882 148.118 227.882 84.118"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="163.882 148.118 227.882 148.118 227.882 84.118"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="163.882 148.118 227.882 148.118 227.882 84.118"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
