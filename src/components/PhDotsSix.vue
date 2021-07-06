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
      <circle cx="60" cy="92" r="16" />
      <circle cx="128" cy="92" r="16" />
      <circle cx="196" cy="92" r="16" />
      <circle cx="60" cy="164" r="16" />
      <circle cx="128" cy="164.0001" r="16" />
      <circle cx="196" cy="164" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="60" cy="92" r="12" />
      <circle cx="128" cy="92" r="12" />
      <circle cx="196" cy="92" r="12" />
      <circle cx="60" cy="164" r="12" />
      <circle cx="128" cy="164.0001" r="12" />
      <circle cx="196" cy="164" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M72,92.0001a12,12,0,1,1-12-12A12,12,0,0,1,72,92.0001Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80.0001Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104.0001Zm-136,48a12,12,0,1,0,12,12A12,12,0,0,0,60,152.0001Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152.0001Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152.0001Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="60" cy="92" r="10" />
      <circle cx="128" cy="92" r="10" />
      <circle cx="196" cy="92" r="10" />
      <circle cx="60" cy="164" r="10" />
      <circle cx="128" cy="164.0001" r="10" />
      <circle cx="196" cy="164" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="60" cy="92" r="8" />
      <circle cx="128" cy="92" r="8" />
      <circle cx="196" cy="92" r="8" />
      <circle cx="60" cy="164" r="8" />
      <circle cx="128" cy="164.0001" r="8" />
      <circle cx="196" cy="164" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="60" cy="92" r="12" />
      <circle cx="128" cy="92" r="12" />
      <circle cx="196" cy="92" r="12" />
      <circle cx="60" cy="164" r="12" />
      <circle cx="128" cy="164.0001" r="12" />
      <circle cx="196" cy="164" r="12" />
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
