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
      <path
        d="M101.3,158.2l-3.4,3.7a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-3.4,3.7"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M248,128a56,56,0,0,1-95.6,39.6l-.3-.4-60-67.6A39.5,39.5,0,0,0,64,88a40,40,0,1,0,0,80,39.5,39.5,0,0,0,28.1-11.6l8.5-9.6a8,8,0,0,1,12,10.6l-8.7,9.8-.3.4a56,56,0,0,1-79.2,0A56,56,0,0,1,64,72a55.5,55.5,0,0,1,39.6,16.4l.3.4,60,67.6A39.5,39.5,0,0,0,192,168a40,40,0,1,0,0-80,39.5,39.5,0,0,0-28.1,11.6l-8.5,9.6a8,8,0,0,1-12-10.6l8.7-9.8.3-.4A56,56,0,0,1,248,128Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
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
