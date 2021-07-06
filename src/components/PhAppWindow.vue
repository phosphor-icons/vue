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
        x="32"
        y="48.00586"
        width="192"
        height="160"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="76" cy="92.00586" r="16" />
      <circle cx="124" cy="92.00586" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="32" y="48.00586" width="192" height="160" rx="8" opacity="0.2" />
      <rect
        x="32"
        y="48.00586"
        width="192"
        height="160"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="68" cy="84.00586" r="12" />
      <circle cx="108" cy="84.00586" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M216,40.00586H40a16.01833,16.01833,0,0,0-16,16v144a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16v-144A16.01833,16.01833,0,0,0,216,40.00586Zm-148,56a12,12,0,1,1,12-12A12,12,0,0,1,68,96.00586Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96.00586Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="32"
        y="48.00586"
        width="192"
        height="160"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="68" cy="84.00586" r="10" />
      <circle cx="108" cy="84.00586" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="32"
        y="48.00586"
        width="192"
        height="160"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="68" cy="84.00586" r="8" />
      <circle cx="108" cy="84.00586" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="32"
        y="48.00586"
        width="192"
        height="160"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="68" cy="84.00586" r="12" />
      <circle cx="108" cy="84.00586" r="12" />
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
