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
        points="79.833 99.716 31.833 99.716 31.833 51.716"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polyline
        points="79.833 99.716 31.833 99.716 31.833 51.716"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M195.88281,195.88281a96.11136,96.11136,0,0,1-135.76562,0,8.00052,8.00052,0,0,1,11.31445-11.31445,79.99992,79.99992,0,1,0,0-113.13721L67.147,75.71582,85.49023,94.05908A8.00037,8.00037,0,0,1,79.833,107.71582h-48a8.00008,8.00008,0,0,1-8-8v-48a8.00009,8.00009,0,0,1,13.65722-5.65674L55.833,64.40186l4.28418-4.28418A96.00062,96.00062,0,0,1,195.88281,195.88281Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="79.833 99.716 31.833 99.716 31.833 51.716"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="79.833 99.716 31.833 99.716 31.833 51.716"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="79.833 99.716 31.833 99.716 31.833 51.716"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
  }
});
export default component;
</script>
