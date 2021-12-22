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
        points="176.2 99.7 224.2 99.7 224.2 51.7"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="79.8 156.3 31.8 156.3 31.8 204.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polyline
        points="176.2 99.7 224.2 99.7 224.2 51.7"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="79.8 156.3 31.8 156.3 31.8 204.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1-5.7-13.6l18.4-18.4-4.3-4.3a80.2,80.2,0,0,0-113.2,0,7.9,7.9,0,0,1-11.3,0,8,8,0,0,1,0-11.3,96.2,96.2,0,0,1,135.8,0l4.3,4.3,18.3-18.3a8,8,0,0,1,8.7-1.8A8.2,8.2,0,0,1,232.2,51.7ZM184.6,184.6a80.2,80.2,0,0,1-113.2,0l-4.3-4.3,18.4-18.4a8,8,0,0,0-5.7-13.6h-48a8,8,0,0,0-8,8v48a8.2,8.2,0,0,0,5,7.4,8,8,0,0,0,3,.6,7.8,7.8,0,0,0,5.7-2.4l18.3-18.3,4.3,4.3a96.1,96.1,0,0,0,135.8,0,8,8,0,0,0,0-11.3A7.9,7.9,0,0,0,184.6,184.6Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="176.2 99.7 224.2 99.7 224.2 51.7"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="79.8 156.3 31.8 156.3 31.8 204.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="176.2 99.7 224.2 99.7 224.2 51.7"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="79.8 156.3 31.8 156.3 31.8 204.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="176.2 99.7 224.2 99.7 224.2 51.7"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="79.8 156.3 31.8 156.3 31.8 204.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
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
