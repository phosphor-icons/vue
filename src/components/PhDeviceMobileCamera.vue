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
      <rect
        x="24"
        y="64"
        width="208"
        height="128"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="68" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="24"
        y="64"
        width="208"
        height="128"
        rx="16"
        transform="translate(256) rotate(90)"
        opacity="0.2"
      />
      <rect
        x="24"
        y="64"
        width="208"
        height="128"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="60" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M176,16H80A24.0275,24.0275,0,0,0,56,40V216a24.0275,24.0275,0,0,0,24,24h96a24.0275,24.0275,0,0,0,24-24V40A24.0275,24.0275,0,0,0,176,16ZM128,72a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="24"
        y="64"
        width="208"
        height="128"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="60" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="24"
        y="64"
        width="208"
        height="128"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="60" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="24"
        y="64"
        width="208"
        height="128"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="60" r="12" />
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
