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
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="100" cy="92" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M40,176V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V160h0l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0Z"
        opacity="0.2"
      />
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="100" cy="92" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <circle cx="100" cy="92" r="12" />
      <path
        d="M208,32H48A16,16,0,0,0,32,48V176h0v32a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-28.7,80a16.1,16.1,0,0,0-22.6,0L112,156.7,91.3,136a16.1,16.1,0,0,0-22.6,0L48,156.7V48H208v92.7Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="100" cy="92" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="100" cy="92" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="100" cy="92" r="12" />
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
