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
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M105.886,94.65812a24.00387,24.00387,0,1,1,42.01514,22.7605v0L104,176v-.00575h48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M105.886,94.65812a24.00387,24.00387,0,1,1,42.01514,22.7605v0L104,176v-.00575h48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32ZM152,167.99414a8,8,0,0,1,0,16H104.31738c-.10644.0044-.21191.00635-.31836.00635a8.00251,8.00251,0,0,1-6.30078-12.93164L141.37012,112.793a16.0039,16.0039,0,1,0-28.11621-15.01856A8,8,0,1,1,98.51758,91.542a32.00411,32.00411,0,1,1,56.01269,30.35547c-.07324.10791-.14843.21436-.22754.31836l-34.30566,45.77832Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M105.886,94.65812a24.00387,24.00387,0,1,1,42.01514,22.7605v0L104,176v-.00575h48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M105.886,94.65812a24.00387,24.00387,0,1,1,42.01514,22.7605v0L104,176v-.00575h48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M105.886,94.65812a24.00387,24.00387,0,1,1,42.01514,22.7605v0L104,176v-.00575h48"
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
