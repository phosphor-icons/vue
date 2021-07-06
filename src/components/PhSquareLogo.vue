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
        y="40.00002"
        width="176"
        height="176"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="96"
        y="96.00002"
        width="64"
        height="64"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="96" y="96.00002" width="64" height="64" opacity="0.2" />
      <rect
        x="40"
        y="40.00002"
        width="176"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="96"
        y="96.00002"
        width="64"
        height="64"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32Zm0,176H48V48H208l.01025,159.99951ZM168,96v64a7.99977,7.99977,0,0,1-8,8H96a7.99977,7.99977,0,0,1-8-8V96a7.99977,7.99977,0,0,1,8-8h64A7.99977,7.99977,0,0,1,168,96Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="40"
        y="40.00002"
        width="176"
        height="176"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="96"
        y="96.00002"
        width="64"
        height="64"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="40"
        y="40.00002"
        width="176"
        height="176"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="96"
        y="96.00002"
        width="64"
        height="64"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="40"
        y="40.00002"
        width="176"
        height="176"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="96"
        y="96.00002"
        width="64"
        height="64"
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
  }
});
export default component;
</script>
