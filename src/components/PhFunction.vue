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
        x1="72"
        y1="128"
        x2="184"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <line
        x1="72"
        y1="128"
        x2="184"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208,40a8,8,0,0,1-8,8H170.7a24,24,0,0,0-23.6,19.7L137.6,120H184a8,8,0,0,1,0,16H134.7l-10.1,55.2A39.9,39.9,0,0,1,85.3,224H56a8,8,0,0,1,0-16H85.3a24,24,0,0,0,23.6-19.7l9.5-52.3H72a8,8,0,0,1,0-16h49.3l10.1-55.2A39.9,39.9,0,0,1,170.7,32H200A8,8,0,0,1,208,40Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="72"
        y1="128"
        x2="184"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="72"
        y1="128"
        x2="184"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="72"
        y1="128"
        x2="184"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200"
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
