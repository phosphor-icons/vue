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
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        opacity="0.2"
      />
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M246.65625,123.56213l-45.624-68.43652a15.9687,15.9687,0,0,0-13.31348-7.126H40a16.01833,16.01833,0,0,0-16,16v128a16.01833,16.01833,0,0,0,16,16H187.71875a15.96649,15.96649,0,0,0,13.31348-7.125l-.001.001,45.625-68.43848A7.99771,7.99771,0,0,0,246.65625,123.56213Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
