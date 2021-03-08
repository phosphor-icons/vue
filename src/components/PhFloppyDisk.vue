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
        d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="128"
        cy="156"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="156 92.009 100 92.009 100 40.009"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M213.65674,85.65686,170.34326,42.34314a8.00052,8.00052,0,0,0-5.657-2.343H48a7.99993,7.99993,0,0,0-8,8v160a8.00009,8.00009,0,0,0,8,8H208a8.00009,8.00009,0,0,0,8-8V91.3136A7.99918,7.99918,0,0,0,213.65674,85.65686Zm-85.65088,98.352a28,28,0,1,1,28-28A28,28,0,0,1,128.00586,184.00891Z"
        opacity="0.2"
      />
      <path
        d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128.00586"
        cy="156.00903"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="160 96.009 96 96.009 96 40.009"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M219.31445,79.99963,176.001,36.68811a15.88944,15.88944,0,0,0-11.31446-4.68848h-60.687L104,32.0094v48h56a8,8,0,0,1,0,16H96a8.00039,8.00039,0,0,1-8-8v-56l.00049-.00977H48a16.01833,16.01833,0,0,0-16,16v160a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V91.31409A15.898,15.898,0,0,0,219.31445,79.99963ZM128,180a24,24,0,1,1,24-24A24.02675,24.02675,0,0,1,128,180Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="128.00586"
        cy="156.00903"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="160 96.009 96 96.009 96 40.009"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="128.00586"
        cy="156.00903"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="160 96.009 96 96.009 96 40.009"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128.00586"
        cy="156.00903"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="160 96.009 96 96.009 96 40.009"
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
