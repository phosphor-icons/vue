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
      <path
        d="M216.66238,152.64951A92.03175,92.03175,0,0,1,103.35039,39.338l.00255.00078A92.01376,92.01376,0,1,0,216.66147,152.64624Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M216.66238,152.64951A92.03175,92.03175,0,0,1,103.35039,39.338l.00255.00078A92.01376,92.01376,0,1,0,216.66147,152.64624Z"
        opacity="0.2"
      />
      <path
        d="M216.66238,152.64951A92.03175,92.03175,0,0,1,103.35039,39.338l.00255.00078A92.01376,92.01376,0,1,0,216.66147,152.64624Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M224.30762,150.29346a8.00288,8.00288,0,0,0-10.01416-5.28955A84.03122,84.03122,0,0,1,111.01514,41.6377a8.00207,8.00207,0,0,0-9.96582-9.96192,100.01386,100.01386,0,1,0,123.29,123.2207A8.0018,8.0018,0,0,0,224.30762,150.29346Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M216.66238,152.64951A92.03175,92.03175,0,0,1,103.35039,39.338l.00255.00078A92.01376,92.01376,0,1,0,216.66147,152.64624Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M216.66238,152.64951A92.03175,92.03175,0,0,1,103.35039,39.338l.00255.00078A92.01376,92.01376,0,1,0,216.66147,152.64624Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M216.66238,152.64951A92.03175,92.03175,0,0,1,103.35039,39.338l.00255.00078A92.01376,92.01376,0,1,0,216.66147,152.64624Z"
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
