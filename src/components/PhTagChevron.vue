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
        d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
        opacity="0.2"
      />
      <path
        d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M235.7,136.9l-42.7,64h0a15.9,15.9,0,0,1-13.3,7.1H24a7.8,7.8,0,0,1-7-4.2,8,8,0,0,1,.3-8.2L62.4,128,17.3,60.4a8,8,0,0,1-.3-8.2A7.8,7.8,0,0,1,24,48H179.7A15.9,15.9,0,0,1,193,55.1l42.7,64A16,16,0,0,1,235.7,136.9Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
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
