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
      <rect
        x="46"
        y="38"
        width="144"
        height="180"
        rx="16"
        transform="translate(246 10) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="64"
        y1="164"
        x2="64"
        y2="92"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="100"
        y1="164"
        x2="100"
        y2="92"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="244"
        y1="96"
        x2="244"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="52"
        y="36"
        width="144"
        height="184"
        rx="16"
        transform="translate(252 4) rotate(90)"
        opacity="0.2"
      />
      <line
        x1="248"
        y1="96"
        x2="248"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="52"
        y="36"
        width="144"
        height="184"
        rx="16"
        transform="translate(252 4) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="105.6"
        y1="168.00043"
        x2="105.6"
        y2="88.00043"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="68.8"
        y1="168.00043"
        x2="68.8"
        y2="88.00043"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path
          d="M248,88a7.99977,7.99977,0,0,0-8,8v64a8,8,0,0,0,16,0V96A7.99977,7.99977,0,0,0,248,88Z"
        />
        <path
          d="M200,48H48A24.0275,24.0275,0,0,0,24,72V184a24.0275,24.0275,0,0,0,24,24H200a24.0275,24.0275,0,0,0,24-24V72A24.0275,24.0275,0,0,0,200,48Zm8,136a8.00917,8.00917,0,0,1-8,8H48a8.00917,8.00917,0,0,1-8-8V72a8.00917,8.00917,0,0,1,8-8H200a8.00917,8.00917,0,0,1,8,8Z"
        />
        <rect x="56" y="80.00049" width="72" height="96" rx="8" />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="248"
        y1="96"
        x2="248"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="52"
        y="36"
        width="144"
        height="184"
        rx="16"
        transform="translate(252 4) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="105.6"
        y1="168.00043"
        x2="105.6"
        y2="88.00043"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="68.8"
        y1="168.00043"
        x2="68.8"
        y2="88.00043"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="248"
        y1="96"
        x2="248"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="52"
        y="36"
        width="144"
        height="184"
        rx="16"
        transform="translate(252 4) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="105.6"
        y1="168.00043"
        x2="105.6"
        y2="88.00043"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="68.8"
        y1="168.00043"
        x2="68.8"
        y2="88.00043"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="248"
        y1="96"
        x2="248"
        y2="160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="52"
        y="36"
        width="144"
        height="184"
        rx="16"
        transform="translate(252 4) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="105.6"
        y1="168.00043"
        x2="105.6"
        y2="88.00043"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="68.8"
        y1="168.00043"
        x2="68.8"
        y2="88.00043"
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
