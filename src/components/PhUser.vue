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
      <circle
        cx="128"
        cy="96"
        r="64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="128" cy="96" r="64" opacity="0.2" />
      <circle
        cx="128"
        cy="96"
        r="64"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <path
        d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M231.93652,211.98633a120.48718,120.48718,0,0,0-67.12-54.14258,72.00007,72.00007,0,1,0-73.63294,0,120.48813,120.48813,0,0,0-67.11865,54.14062,7.99981,7.99981,0,0,0,6.92432,12.00635l194.023.002a7.99957,7.99957,0,0,0,6.92431-12.00635Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="128"
        cy="96"
        r="64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="128"
        cy="96"
        r="64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="128"
        cy="96"
        r="64"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <path
        d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
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
