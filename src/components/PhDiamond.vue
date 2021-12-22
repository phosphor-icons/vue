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
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        opacity="0.2"
      />
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M236,139.3,139.3,236a15.9,15.9,0,0,1-22.6,0L20,139.3a16.1,16.1,0,0,1,0-22.6L116.7,20a16.1,16.1,0,0,1,22.6,0L236,116.7A16.1,16.1,0,0,1,236,139.3Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
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
