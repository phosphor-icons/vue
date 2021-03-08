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
        x="51.63247"
        y="51.63247"
        width="152.73506"
        height="152.73506"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="51.63247"
        y="51.63247"
        width="152.73506"
        height="152.73506"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        opacity="0.2"
      />
      <rect
        x="51.63247"
        y="51.63247"
        width="152.73506"
        height="152.73506"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M236,139.31348,139.31348,236a16.01779,16.01779,0,0,1-22.627,0L20,139.31348a16.01779,16.01779,0,0,1,0-22.627L116.68652,20a16.01779,16.01779,0,0,1,22.627,0L236,116.68652A16.01779,16.01779,0,0,1,236,139.31348Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="51.63247"
        y="51.63247"
        width="152.73506"
        height="152.73506"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="51.63247"
        y="51.63247"
        width="152.73506"
        height="152.73506"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="51.63247"
        y="51.63247"
        width="152.73506"
        height="152.73506"
        rx="8"
        transform="translate(-53.01934 128) rotate(-45)"
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
  },
});
export default component;
</script>
