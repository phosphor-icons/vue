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
    <g v-if="weight === 'bold'"><circle cx="128" cy="200" r="16" /></g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8.1,8.1,0,0,1,237,87.5c-19,22.5-83,97.8-103,121.4a7.9,7.9,0,0,1-12,0C102,185.3,38,110,19,87.5A8.1,8.1,0,0,1,20.2,75.9Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M128,219.7a16,16,0,0,1-12.1-5.6L12.9,92.7A15.8,15.8,0,0,1,9.2,80.5a16.3,16.3,0,0,1,6.2-11c66.3-50,158.9-50,225.2,0a16.3,16.3,0,0,1,6.2,11,16,16,0,0,1-3.7,12.2l-103,121.4A16,16,0,0,1,128,219.7ZM25.1,82.3h0L128,203.6,230.9,82.4v-.2C170.4,36.6,85.7,36.6,25.1,82.3Zm-.1,0Zm-4.8-6.4Z"
      />
    </g>
    <g v-else-if="weight === 'light'"><circle cx="128" cy="200" r="10" /></g>
    <g v-else-if="weight === 'thin'"><circle cx="128" cy="200" r="8" /></g>
    <g v-else-if="weight === 'regular'"><circle cx="128" cy="200" r="12" /></g>
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
