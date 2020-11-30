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
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="48 224 48 232 192 232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M176.00244,32v96l-32.00732-24-31.99268,24V32H72A23.99994,23.99994,0,0,0,48,56V224a23.99994,23.99994,0,0,1,24-24H208V32Z"
        opacity="0.2"
      />
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="48 224 48 232 192 232"
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
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M207.99951,24h-136a32.03667,32.03667,0,0,0-32,32V232a8.00039,8.00039,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01833,16.01833,0,0,1,16-16h136a8.00039,8.00039,0,0,0,8-8V32A8.00039,8.00039,0,0,0,207.99951,24ZM128.00244,40h56v80.001L158.394,100.7998a4.0005,4.0005,0,0,0-4.7998,0L128.00244,119.999Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="48 224 48 232 192 232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="48 224 48 232 192 232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="48 224 48 232 192 232"
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
