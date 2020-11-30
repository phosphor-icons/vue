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
    <g v-if="weight === 'bold'">
      <line
        x1="128"
        y1="92"
        x2="128"
        y2="148"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="128" cy="184" r="16" />
      <line
        x1="96"
        y1="16"
        x2="160"
        y2="16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="56"
        y="48"
        width="144"
        height="184"
        rx="16"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="56" y="48" width="144" height="184" rx="16" opacity="0.2" />
      <line
        x1="128"
        y1="92"
        x2="128"
        y2="148"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="184" r="12" />
      <line
        x1="96"
        y1="16"
        x2="160"
        y2="16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="56"
        y="48"
        width="144"
        height="184"
        rx="16"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path d="M96,24h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Z" />
        <path
          d="M184,40H72A24.0275,24.0275,0,0,0,48,64V216a24.0275,24.0275,0,0,0,24,24H184a24.0275,24.0275,0,0,0,24-24V64A24.0275,24.0275,0,0,0,184,40ZM120,92a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,196Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="128"
        y1="92"
        x2="128"
        y2="148"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="128" cy="184" r="9" />
      <line
        x1="96"
        y1="16"
        x2="160"
        y2="16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="56"
        y="48"
        width="144"
        height="184"
        rx="16"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="128"
        y1="92"
        x2="128"
        y2="148"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="128" cy="184" r="6" />
      <line
        x1="96"
        y1="16"
        x2="160"
        y2="16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="56"
        y="48"
        width="144"
        height="184"
        rx="16"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="128"
        y1="100"
        x2="128"
        y2="140"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="176" r="12" />
      <line
        x1="96"
        y1="16"
        x2="160"
        y2="16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="56"
        y="48"
        width="144"
        height="184"
        rx="16"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
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
