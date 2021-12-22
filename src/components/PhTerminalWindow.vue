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
        points="80 96 120 128 80 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="144"
        y1="160"
        x2="176"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8.5"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="32" y="48" width="192" height="160" rx="8.5" opacity="0.2" />
      <polyline
        points="80 96 120 128 80 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="136"
        y1="160"
        x2="176"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8.5"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16.97"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M215.5,39.5H40.5a17,17,0,0,0-17,17v143a17,17,0,0,0,17,17h175a17,17,0,0,0,17-17V56.5A17,17,0,0,0,215.5,39.5ZM121,134.2l-40,32a7.9,7.9,0,0,1-5,1.8,7.8,7.8,0,0,1-6.2-3A7.9,7.9,0,0,1,71,153.8L103.2,128,71,102.2A8,8,0,1,1,81,89.8l40,32a7.9,7.9,0,0,1,0,12.4ZM180,168H140a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="80 96 120 128 80 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="136"
        y1="160"
        x2="176"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8.5"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="80 96 120 128 80 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="136"
        y1="160"
        x2="176"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8.5"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="80 96 120 128 80 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="136"
        y1="160"
        x2="176"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8.5"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16.97"
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
