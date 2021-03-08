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
        x1="63.99414"
        y1="64"
        x2="24.00244"
        y2="64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="64.002 24 64.002 192.001 232.002 192.001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="192.002 152.001 192.002 64 103.994 64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="192.00244"
        y1="232.00098"
        x2="192.00244"
        y2="192.00098"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <line
        x1="63.99414"
        y1="64"
        x2="24.00244"
        y2="64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="64.002 24 64.002 192.001 232.002 192.001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="192.002 160.001 192.002 64 95.994 64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="192.00244"
        y1="232.00098"
        x2="192.00244"
        y2="192.00098"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M240.00244,192.001a8.00039,8.00039,0,0,1-8,8h-32v32a8,8,0,0,1-16,0v-32h-120a8.00039,8.00039,0,0,1-8-8V72h-32a8,8,0,0,1,0-16h32V24a8,8,0,1,1,16,0V184.001h160A8.00039,8.00039,0,0,1,240.00244,192.001ZM95.99365,72h88.00879v88.001a8,8,0,0,0,16,0V64a8.00008,8.00008,0,0,0-8-8H95.99365a8,8,0,0,0,0,16Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="63.99414"
        y1="64"
        x2="24.00244"
        y2="64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="64.002 24 64.002 192.001 232.002 192.001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="192.002 160.001 192.002 64 95.994 64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="192.00244"
        y1="232.00098"
        x2="192.00244"
        y2="192.00098"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="63.99414"
        y1="64"
        x2="24.00244"
        y2="64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="64.002 24 64.002 192.001 232.002 192.001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="192.002 160.001 192.002 64 95.994 64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="192.00244"
        y1="232.00098"
        x2="192.00244"
        y2="192.00098"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="63.99414"
        y1="64"
        x2="24.00244"
        y2="64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="64.002 24 64.002 192.001 232.002 192.001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="192.002 160.001 192.002 64 95.994 64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="192.00244"
        y1="232.00098"
        x2="192.00244"
        y2="192.00098"
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
