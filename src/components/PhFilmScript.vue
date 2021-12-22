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
        x="48"
        y="32"
        width="160"
        height="192"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="92" cy="80" r="16" />
      <circle cx="92" cy="176" r="16" />
      <circle cx="92" cy="128" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="48" y="32" width="160" height="192" rx="8" opacity="0.2" />
      <rect
        x="48"
        y="32"
        width="160"
        height="192"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="84" cy="80" r="12" />
      <circle cx="84" cy="176" r="12" />
      <circle cx="84" cy="128" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM76,188a12,12,0,1,1,12-12A12,12,0,0,1,76,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-48A12,12,0,1,1,88,80,12,12,0,0,1,76,92Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="48"
        y="32"
        width="160"
        height="192"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="84" cy="80" r="10" />
      <circle cx="84" cy="176" r="10" />
      <circle cx="84" cy="128" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="48"
        y="32"
        width="160"
        height="192"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="84" cy="80" r="8" />
      <circle cx="84" cy="176" r="8" />
      <circle cx="84" cy="128" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="48"
        y="32"
        width="160"
        height="192"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="84" cy="76" r="12" />
      <circle cx="84" cy="180" r="12" />
      <circle cx="84" cy="128" r="12" />
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
