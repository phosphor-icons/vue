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
        x1="216.00488"
        y1="216.00586"
        x2="40.00488"
        y2="216.00586"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="122"
        y="98"
        width="104"
        height="52"
        rx="8"
        transform="translate(50 298) rotate(-90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="56"
        y="32"
        width="52"
        height="144"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="116"
        y="100"
        width="112"
        height="56"
        rx="8"
        transform="translate(44 300) rotate(-90)"
        opacity="0.2"
      />
      <rect x="56" y="32" width="56" height="152" rx="8" opacity="0.2" />
      <line
        x1="216.00488"
        y1="216.00586"
        x2="40.00488"
        y2="216.00586"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="116"
        y="100"
        width="112"
        height="56"
        rx="8"
        transform="translate(44 300) rotate(-90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="56"
        y="32"
        width="56"
        height="152"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M224.00488,216.00586a8.00008,8.00008,0,0,1-8,8h-176a8,8,0,1,1,0-16h176A8.00008,8.00008,0,0,1,224.00488,216.00586ZM152,192h40a16.01833,16.01833,0,0,0,16-16V80a16.01833,16.01833,0,0,0-16-16H152a16.01833,16.01833,0,0,0-16,16v96A16.01833,16.01833,0,0,0,152,192Zm-88,0h40a16.01833,16.01833,0,0,0,16-16V40a16.01833,16.01833,0,0,0-16-16H64A16.01833,16.01833,0,0,0,48,40V176A16.01833,16.01833,0,0,0,64,192Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="216.00488"
        y1="216.00586"
        x2="40.00488"
        y2="216.00586"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="116"
        y="100"
        width="112"
        height="56"
        rx="8"
        transform="translate(44 300) rotate(-90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="56"
        y="32"
        width="56"
        height="152"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="216.00488"
        y1="216.00586"
        x2="40.00488"
        y2="216.00586"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="116"
        y="100"
        width="112"
        height="56"
        rx="8"
        transform="translate(44 300) rotate(-90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="56"
        y="32"
        width="56"
        height="152"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="216.00488"
        y1="216.00586"
        x2="40.00488"
        y2="216.00586"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="116"
        y="100"
        width="112"
        height="56"
        rx="8"
        transform="translate(44 300) rotate(-90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="56"
        y="32"
        width="56"
        height="152"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
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
