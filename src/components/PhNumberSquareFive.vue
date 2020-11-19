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
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
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
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
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
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208,32H48A16.02085,16.02085,0,0,0,32,48V208a16.02085,16.02085,0,0,0,16,16H208a16.02085,16.02085,0,0,0,16-16V48A16.02085,16.02085,0,0,0,208,32Zm-58.64062,90.54688A36.00168,36.00168,0,0,1,98.4375,173.45313a8.00467,8.00467,0,1,1,11.32813-11.3125c7.53125,7.5625,20.73437,7.5625,28.26562,0a19.97387,19.97387,0,0,0,.00781-28.27344c-7.54687-7.57813-20.74218-7.57031-28.27343-.00781a8.00314,8.00314,0,0,1-13.5625-6.92969L104,78.71875a8.00568,8.00568,0,0,1,7.89844-6.72656h40a8,8,0,0,1,0,16h-33.1875l-4.07813,25.20312A36.59927,36.59927,0,0,1,149.35938,122.54688Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
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
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
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
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
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
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconProps, PropValidator } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

export default defineComponent({
  props: PropValidator,
  setup(props: Readonly<Partial<IconProps>>) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
</script>
