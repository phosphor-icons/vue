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
      <polyline
        points="80 136 32 88 80 40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polyline
        points="80 136 32 88 80 40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M232,144a64.07239,64.07239,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H88v40a8.00018,8.00018,0,0,1-13.65723,5.65674l-48-48a8,8,0,0,1,0-11.31348l48-48A8.0001,8.0001,0,0,1,88,40V80h80A64.07207,64.07207,0,0,1,232,144Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="80 136 32 88 80 40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="80 136 32 88 80 40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="80 136 32 88 80 40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
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
