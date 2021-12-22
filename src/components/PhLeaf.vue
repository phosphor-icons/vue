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
        x1="160"
        y1="96"
        x2="40"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
        opacity="0.2"
      />
      <line
        x1="160"
        y1="96"
        x2="40"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M224,39.5a8.1,8.1,0,0,0-7.5-7.5C140.2,27.5,79.1,50.5,53,93.6a87.3,87.3,0,0,0-12.8,49.1c.6,15.9,5.2,32.1,13.8,48L154.3,90.3a8.1,8.1,0,0,1,11.4,11.4L65.3,202c15.9,8.6,32.1,13.2,48,13.8h3.3A87,87,0,0,0,162.4,203C205.5,176.9,228.5,115.8,224,39.5Z"
      />
      <path
        d="M57.1,196.1c-1.1-1.8-2.1-3.6-3.1-5.4L34.3,210.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L65.3,202l-5.4-3.1A9.3,9.3,0,0,1,57.1,196.1Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="160"
        y1="96"
        x2="40"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="160"
        y1="96"
        x2="40"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="160"
        y1="96"
        x2="40"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
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
