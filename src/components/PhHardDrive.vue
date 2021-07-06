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
        x="24"
        y="72"
        width="208"
        height="112"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="180" cy="128" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="24" y="72" width="208" height="112" rx="8" opacity="0.2" />
      <rect
        x="24"
        y="72"
        width="208"
        height="112"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="188" cy="128" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M224,64H32A16.01833,16.01833,0,0,0,16,80v96a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,224,64Zm-35.99951,76a12,12,0,1,1,12-12A12,12,0,0,1,188.00049,140Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="24"
        y="72"
        width="208"
        height="112"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="188" cy="128" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="24"
        y="72"
        width="208"
        height="112"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="188" cy="128" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="24"
        y="72"
        width="208"
        height="112"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="188" cy="128" r="12" />
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
