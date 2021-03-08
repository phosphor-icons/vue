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
        points="172.002 32 172.002 128 139.995 104 108.002 128 108.002 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M48.00244,208a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="48.002 208 48.002 224 192.002 224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M176.00244,32v96l-32.00732-24-31.99268,24V32h-40a23.99994,23.99994,0,0,0-24,24V216a23.99994,23.99994,0,0,1,24-24h136V32Z"
        opacity="0.2"
      />
      <polyline
        points="48.002 216 48.002 224 192.002 224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48.00244,216a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208.00244,24h-136a32.03667,32.03667,0,0,0-32,32V224a8.00039,8.00039,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01833,16.01833,0,0,1,16-16h136a8.00039,8.00039,0,0,0,8-8V32A8.00039,8.00039,0,0,0,208.00244,24Zm-24,96.001L158.394,100.7998a4.0005,4.0005,0,0,0-4.7998,0L128.00244,119.999V40h56Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M48.00244,216a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="48.002 216 48.002 224 192.002 224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M48.00244,216a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="48.002 216 48.002 224 192.002 224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48.00244,216a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="48.002 216 48.002 224 192.002 224"
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
