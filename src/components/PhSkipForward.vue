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
        d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="200"
        y1="40"
        x2="200"
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
        d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
        opacity="0.2"
      />
      <path
        d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="40"
        x2="200"
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
        d="M208,40V216a8,8,0,0,1-16,0V142.26416l-119.65625,73.124A16.00029,16.00029,0,0,1,48,201.73535V54.26465A16.0002,16.0002,0,0,1,72.34277,40.61133L192,113.73535V40a8,8,0,0,1,16,0Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="200"
        y1="40"
        x2="200"
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
        d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="200"
        y1="40"
        x2="200"
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
        d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="40"
        x2="200"
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
