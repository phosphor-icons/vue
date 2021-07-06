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
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M154.34315,29.65685,92,92S64.256,78.128,34.60125,102.05044a8.01406,8.01406,0,0,0-.64838,11.90243L141.84933,221.84933a7.99324,7.99324,0,0,0,12.04036-.83167C162.28278,209.86184,175.46546,186.93092,164,164l62.34315-62.34315a8,8,0,0,0,0-11.3137l-60.6863-60.6863A8,8,0,0,0,154.34315,29.65685Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M154.34315,29.65685,92,92S64.256,78.128,34.60125,102.05044a8.01406,8.01406,0,0,0-.64838,11.90243L141.84933,221.84933a7.99324,7.99324,0,0,0,12.04036-.83167C162.28278,209.86184,175.46546,186.93092,164,164l62.34315-62.34315a8,8,0,0,0,0-11.3137l-60.6863-60.6863A8,8,0,0,0,154.34315,29.65685Z"
        opacity="0.2"
      />
      <line
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M154.34315,29.65685,92,92S64.256,78.128,34.60125,102.05044a8.01406,8.01406,0,0,0-.64838,11.90243L141.84933,221.84933a7.99324,7.99324,0,0,0,12.04036-.83167C162.28278,209.86184,175.46546,186.93092,164,164l62.34315-62.34315a8,8,0,0,0,0-11.3137l-60.6863-60.6863A8,8,0,0,0,154.34315,29.65685Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M231.999,107.31445,173.47168,165.8418c4.55664,12.67968,6.44531,33.88965-13.18945,59.98584a15.96991,15.96991,0,0,1-11.64649,6.33007q-.5625.03955-1.124.03956a16.0039,16.0039,0,0,1-11.31934-4.69141L88,179.314,53.65723,213.65674a8.00018,8.00018,0,0,1-11.31446-11.31348L76.686,168,28.2959,119.60986a16.01339,16.01339,0,0,1,1.2832-23.78613C55.00488,75.312,79.34082,79.35205,89.99316,82.69287L148.68555,24l.001-.001a16.02135,16.02135,0,0,1,22.627,0L232,84.68652a15.99888,15.99888,0,0,1-.001,22.62793Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M154.34315,29.65685,92,92S64.256,78.128,34.60125,102.05044a8.01406,8.01406,0,0,0-.64838,11.90243L141.84933,221.84933a7.99324,7.99324,0,0,0,12.04036-.83167C162.28278,209.86184,175.46546,186.93092,164,164l62.34315-62.34315a8,8,0,0,0,0-11.3137l-60.6863-60.6863A8,8,0,0,0,154.34315,29.65685Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M154.34315,29.65685,92,92S64.256,78.128,34.60125,102.05044a8.01406,8.01406,0,0,0-.64838,11.90243L141.84933,221.84933a7.99324,7.99324,0,0,0,12.04036-.83167C162.28278,209.86184,175.46546,186.93092,164,164l62.34315-62.34315a8,8,0,0,0,0-11.3137l-60.6863-60.6863A8,8,0,0,0,154.34315,29.65685Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="88"
        y1="168"
        x2="48"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M154.34315,29.65685,92,92S64.256,78.128,34.60125,102.05044a8.01406,8.01406,0,0,0-.64838,11.90243L141.84933,221.84933a7.99324,7.99324,0,0,0,12.04036-.83167C162.28278,209.86184,175.46546,186.93092,164,164l62.34315-62.34315a8,8,0,0,0,0-11.3137l-60.6863-60.6863A8,8,0,0,0,154.34315,29.65685Z"
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
