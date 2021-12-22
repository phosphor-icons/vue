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
        d="M122.1,38.4,45,118.5A8,8,0,0,0,50.8,132H205.2a8,8,0,0,0,5.8-13.5L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
        opacity="0.2"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        opacity="0.2"
      />
      <path
        d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M35.6,134.4a15.8,15.8,0,0,1,2.9-17.3l77.7-84.2h0a16.2,16.2,0,0,1,23.6,0l77.7,84.2A16,16,0,0,1,205.7,144H50.3A15.9,15.9,0,0,1,35.6,134.4ZM208,160H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V176A16,16,0,0,0,208,160Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
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
