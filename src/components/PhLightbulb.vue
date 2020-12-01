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
        x1="96.00244"
        y1="196"
        x2="160.00244"
        y2="196"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="104.00244"
        y1="232"
        x2="152.00244"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M75.0867,164.00066a80,80,0,1,1,105.82906.00214"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013" opacity="0.2" />
      <line
        x1="96.00244"
        y1="200"
        x2="160.00244"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="104.00244"
        y1="232"
        x2="152.00244"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path d="M160.00244,192h-64a8,8,0,1,0,0,16h64a8,8,0,0,0,0-16Z" />
        <path d="M152.00244,224h-48a8,8,0,1,0,0,16h48a8,8,0,0,0,0-16Z" />
        <path
          d="M128.00244,16a88.00456,88.00456,0,0,0-52.8125,158.39746,8.00073,8.00073,0,0,0,4.80567,1.60352h96.01367a8.0007,8.0007,0,0,0,4.80566-1.60352A88.00456,88.00456,0,0,0,128.00244,16Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="96.00244"
        y1="200"
        x2="160.00244"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="104.00244"
        y1="232"
        x2="152.00244"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="96.00244"
        y1="200"
        x2="160.00244"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="104.00244"
        y1="232"
        x2="152.00244"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="96.00244"
        y1="200"
        x2="160.00244"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="104.00244"
        y1="232"
        x2="152.00244"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
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
