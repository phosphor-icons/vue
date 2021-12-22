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
      <circle cx="92" cy="60" r="16" />
      <circle cx="164" cy="60" r="16" />
      <circle cx="92" cy="128" r="16" />
      <circle cx="164" cy="128" r="16" />
      <circle cx="92" cy="196" r="16" />
      <circle cx="164" cy="196" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="92" cy="60" r="12" />
      <circle cx="164" cy="60" r="12" />
      <circle cx="92" cy="128" r="12" />
      <circle cx="164" cy="128" r="12" />
      <circle cx="92" cy="196" r="12" />
      <circle cx="164" cy="196" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="92" cy="60" r="10" />
      <circle cx="164" cy="60" r="10" />
      <circle cx="92" cy="128" r="10" />
      <circle cx="164" cy="128" r="10" />
      <circle cx="92" cy="196" r="10" />
      <circle cx="164" cy="196" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="92" cy="60" r="8" />
      <circle cx="164" cy="60" r="8" />
      <circle cx="92" cy="128" r="8" />
      <circle cx="164" cy="128" r="8" />
      <circle cx="92" cy="196" r="8" />
      <circle cx="164" cy="196" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="92" cy="60" r="12" />
      <circle cx="164" cy="60" r="12" />
      <circle cx="92" cy="128" r="12" />
      <circle cx="164" cy="128" r="12" />
      <circle cx="92" cy="196" r="12" />
      <circle cx="164" cy="196" r="12" />
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
