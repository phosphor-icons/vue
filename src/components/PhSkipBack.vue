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
        d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
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
        d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
        opacity="0.2"
      />
      <path
        d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
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
        d="M56,32a8.00008,8.00008,0,0,1,8,8v73.73535l119.65723-73.124A16.0002,16.0002,0,0,1,208,54.26465v147.4707a16.004,16.004,0,0,1-24.34375,13.65283L64,142.26416V216a8,8,0,0,1-16,0V40A8.00008,8.00008,0,0,1,56,32Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
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
        d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
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
        d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
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
  }
});
export default component;
</script>
