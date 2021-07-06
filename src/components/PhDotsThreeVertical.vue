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
      <circle cx="128" cy="64" r="16" />
      <circle cx="128" cy="128" r="16" />
      <circle cx="128" cy="192" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="128" cy="128" r="12" />
      <circle cx="128" cy="64" r="12" />
      <circle cx="128" cy="192" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,104a12,12,0,1,0,12,12A12,12,0,0,0,128,180Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="128" cy="64" r="10" />
      <circle cx="128" cy="128" r="10" />
      <circle cx="128" cy="192" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="128" cy="64" r="8" />
      <circle cx="128" cy="128" r="8" />
      <circle cx="128" cy="192" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="128" cy="128" r="12" />
      <circle cx="128" cy="64" r="12" />
      <circle cx="128" cy="192" r="12" />
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
