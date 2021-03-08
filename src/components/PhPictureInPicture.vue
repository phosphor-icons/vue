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
        x="32"
        y="56"
        width="192"
        height="144"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M136,200V136a8,8,0,0,1,8-8h80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M216,56H40a7.99993,7.99993,0,0,0-8,8V192a7.99993,7.99993,0,0,0,8,8h96V136a7.99993,7.99993,0,0,1,8-8h80V64A7.99993,7.99993,0,0,0,216,56Z"
        opacity="0.2"
      />
      <rect
        x="32"
        y="56"
        width="192"
        height="144"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M136,200V136a8,8,0,0,1,8-8h80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M216,48H40A16.01833,16.01833,0,0,0,24,64V192a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,216,48ZM40,64H216l.00439,56H144a16.01833,16.01833,0,0,0-16,16v56H40Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="32"
        y="56"
        width="192"
        height="144"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M136,200V136a8,8,0,0,1,8-8h80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="32"
        y="56"
        width="192"
        height="144"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M136,200V136a8,8,0,0,1,8-8h80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="32"
        y="56"
        width="192"
        height="144"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M136,200V136a8,8,0,0,1,8-8h80"
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
