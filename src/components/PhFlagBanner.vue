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
        points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon
        points="40 48 40 48 224 48 176 108 224 168 40 168 40 48"
        opacity="0.2"
      />
      <polyline
        points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M230.24694,163.00293A8,8,0,0,1,223.99988,176H48v40a8,8,0,1,1-16,0V48a8.00039,8.00039,0,0,1,8-8H223.99988a8,8,0,0,1,6.24706,12.99707L186.245,108Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
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
