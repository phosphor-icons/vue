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
      <ellipse
        cx="128"
        cy="58"
        rx="64"
        ry="34"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <ellipse cx="128" cy="58" rx="64" ry="34" opacity="0.2" />
      <ellipse
        cx="128"
        cy="58"
        rx="64"
        ry="34"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M128,16C87.6,16,56,34.4,56,58V198c0,23.6,31.6,42,72,42s72-18.4,72-42V58C200,34.4,168.4,16,128,16Zm0,208c-33,0-56-13.7-56-26V84.7c13.1,9.4,33.1,15.3,56,15.3s42.9-5.9,56-15.3V198C184,210.3,161,224,128,224Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <ellipse
        cx="128"
        cy="58"
        rx="64"
        ry="34"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58"
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
        cy="58"
        rx="64"
        ry="34"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58"
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
        cy="58"
        rx="64"
        ry="34"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58"
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
