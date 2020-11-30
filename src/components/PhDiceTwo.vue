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
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="148" cy="148" r="16" />
      <circle cx="108" cy="108" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2" />
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="148" cy="148" r="12" />
      <circle cx="108" cy="108" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M192,32H64A32.03667,32.03667,0,0,0,32,64V192a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V64A32.03667,32.03667,0,0,0,192,32Zm-84,88a12,12,0,1,1,12-12A12,12,0,0,1,108,120Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,148,160Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="148" cy="148" r="9" />
      <circle cx="108" cy="108" r="9" opacity="0.8" />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="148" cy="148" r="6" />
      <circle cx="108" cy="108" r="6" />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="148" cy="148" r="12" />
      <circle cx="108" cy="108" r="12" />
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
