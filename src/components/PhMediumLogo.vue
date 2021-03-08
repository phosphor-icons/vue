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
        cx="70"
        cy="128"
        rx="54"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <ellipse
        cx="182"
        cy="128"
        rx="22"
        ry="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="240"
        y1="72.00003"
        x2="240"
        y2="184.00001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <ellipse cx="72" cy="128" rx="56" ry="60" opacity="0.2" />
      <ellipse cx="184" cy="128" rx="24" ry="55.99999" opacity="0.2" />
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="55.99999"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="240"
        y1="72.00003"
        x2="240"
        y2="184.00001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M136,128c0,37.49512-28.71,68-64,68S8,165.49514,8,128,36.71,60,72,60,136,90.5049,136,128Zm48-64c-5.68262,0-16.39941,2.76074-24.32373,21.251C154.72607,96.8008,152,111.98342,152,128s2.72607,31.19922,7.67627,42.749C167.60059,189.23928,178.31738,192,184,192s16.39941-2.76074,24.32373-21.251C213.27393,159.19924,216,144.01662,216,128s-2.72607-31.19922-7.67627-42.749C200.39941,66.76076,189.68262,64,184,64Zm56,0a8.00039,8.00039,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8.00039,8.00039,0,0,0,240,64Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="55.99999"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="240"
        y1="72.00003"
        x2="240"
        y2="184.00001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="55.99999"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="240"
        y1="72.00003"
        x2="240"
        y2="184.00001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="55.99999"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="240"
        y1="72.00003"
        x2="240"
        y2="184.00001"
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
