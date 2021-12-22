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
        d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="56"
        y1="40"
        x2="56"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z"
        opacity="0.2"
      />
      <path
        d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="40"
        x2="56"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M56,32a8,8,0,0,1,8,8v73.7L183.7,40.6A16,16,0,0,1,208,54.3V201.7a15.9,15.9,0,0,1-8.2,14,15.4,15.4,0,0,1-7.8,2,16.2,16.2,0,0,1-8.3-2.3L64,142.3V216a8,8,0,0,1-16,0V40A8,8,0,0,1,56,32Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="56"
        y1="40"
        x2="56"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="56"
        y1="40"
        x2="56"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="40"
        x2="56"
        y2="216"
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
