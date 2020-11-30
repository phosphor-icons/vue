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
      <ellipse
        cx="128"
        cy="128"
        rx="72"
        ry="104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <ellipse
        cx="128"
        cy="128"
        rx="72"
        ry="104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M128,240c-25.75977,0-46.99219-12.57129-61.40039-36.35474C54.60547,183.848,48,156.98334,48,128c0-28.98566,6.60547-55.8512,18.59961-75.64771C81.00781,28.57043,102.24023,16,128,16s46.99219,12.57043,61.40039,36.35229C201.39453,72.1488,208,99.01434,208,128c0,28.98334-6.60547,55.848-18.59961,75.64526C174.99219,227.42871,153.75977,240,128,240Zm0-208c-44.21094,0-64,48.2157-64,96s19.78906,96,64,96,64-48.2157,64-96S172.21094,32,128,32Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <ellipse
        cx="128"
        cy="128"
        rx="72"
        ry="104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <ellipse
        cx="128"
        cy="128"
        rx="72"
        ry="104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <ellipse
        cx="128"
        cy="128"
        rx="72"
        ry="104"
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
