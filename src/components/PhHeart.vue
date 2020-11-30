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
    <g v-if="weight === 'bold'">
      <path
        d="M128.01758,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.01766,71.965l-.0002.00008A52.00882,52.00882,0,0,1,228.01758,92C228.01758,160,128.01758,216,128.01758,216Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M128.0293,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.02938,71.965l-.0002.00008A52.00882,52.00882,0,0,1,228.0293,92C228.0293,160,128.0293,216,128.0293,216Z"
        opacity="0.2"
      />
      <path
        d="M128.0293,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.02938,71.965l-.0002.00008A52.00882,52.00882,0,0,1,228.0293,92C228.0293,160,128.0293,216,128.0293,216Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M176.02344,32a59.85506,59.85506,0,0,0-48,23.95947A60.02029,60.02029,0,0,0,20.02344,92c0,71.86279,99.84082,128.6001,104.09082,130.98a8.00089,8.00089,0,0,0,7.81836,0A317.34027,317.34027,0,0,0,183.375,185.44629C218.30957,154.00488,236.02344,122.56494,236.02344,92A60.06812,60.06812,0,0,0,176.02344,32Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M128.01172,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.0118,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228.01172,92C228.01172,160,128.01172,216,128.01172,216Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M128.00586,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.00594,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228.00586,92C228.00586,160,128.00586,216,128.00586,216Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M128,216S28,160,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92C228,160,128,216,128,216Z"
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
