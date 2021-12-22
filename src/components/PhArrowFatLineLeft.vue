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
      <polygon
        points="120 32 24 128 120 224 120 176 176 176 176 80 120 80 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="216"
        y1="176"
        x2="216"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon
        points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
        opacity="0.2"
      />
      <polygon
        points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="216"
        y1="176"
        x2="216"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M114.3,229.7l-96-96a8.1,8.1,0,0,1,0-11.4l96-96a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,128,32V72h56a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-4.9,7.4A8.4,8.4,0,0,1,114.3,229.7ZM216,184a8,8,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8,8,0,0,0,216,184Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polygon
        points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="216"
        y1="176"
        x2="216"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polygon
        points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="216"
        y1="176"
        x2="216"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polygon
        points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="216"
        y1="176"
        x2="216"
        y2="80"
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
  },
});
export default component;
</script>
