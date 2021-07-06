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
        d="M191.98242,224,127.975,184l-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M191.9707,224l-64.0074-40L63.9707,224V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
        opacity="0.2"
      />
      <path
        d="M191.9707,224l-64.0074-40L63.9707,224V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M183.97656,32h-112a16.01833,16.01833,0,0,0-16,16V224a8.00043,8.00043,0,0,0,12.24024,6.78418l59.75293-37.35059,59.76709,37.35059A8,8,0,0,0,199.97656,224V48A16.01833,16.01833,0,0,0,183.97656,32Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M191.98828,224l-64.0074-40-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M191.99414,224l-64.0074-40-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M192,224l-64.0074-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z"
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
