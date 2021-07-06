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
      <line
        x1="100"
        y1="12"
        x2="156"
        y2="12"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="56.00586"
        y="48"
        width="144"
        height="180"
        rx="16"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="128"
        y1="96"
        x2="128"
        y2="136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="128" cy="176" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="56" y="40" width="144" height="184" rx="16" opacity="0.2" />
      <line
        x1="128"
        y1="92"
        x2="128"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="8"
        x2="160"
        y2="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="56"
        y="40"
        width="144"
        height="184"
        rx="16"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="168" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M88,8a7.99977,7.99977,0,0,1,8-8h64a8,8,0,0,1,0,16H96A7.99977,7.99977,0,0,1,88,8ZM208,56V208a24.0275,24.0275,0,0,1-24,24H72a24.0275,24.0275,0,0,1-24-24V56A24.0275,24.0275,0,0,1,72,32H184A24.0275,24.0275,0,0,1,208,56Zm-88,76a8,8,0,0,0,16,0V92a8,8,0,0,0-16,0Zm20,36a12,12,0,1,0-12,12A12.01375,12.01375,0,0,0,140,168Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="128"
        y1="92"
        x2="128"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="96"
        y1="8"
        x2="160"
        y2="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="56"
        y="40"
        width="144"
        height="184"
        rx="16"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="168" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="128"
        y1="92"
        x2="128"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="96"
        y1="8"
        x2="160"
        y2="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="56"
        y="40"
        width="144"
        height="184"
        rx="16"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="168" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="128"
        y1="92"
        x2="128"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="8"
        x2="160"
        y2="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="56"
        y="40"
        width="144"
        height="184"
        rx="16"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="168" r="12" />
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
