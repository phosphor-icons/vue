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
        d="M40,156H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M76.7,160a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V160Z"
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
        d="M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208,32H48A16,16,0,0,0,32,48V159.9h0V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V168H76.7L96,187.3a15.9,15.9,0,0,0,11.3,4.7h41.4a15.9,15.9,0,0,0,11.3-4.7L179.3,168H208v40Z"
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
        d="M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216"
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
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216"
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
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216"
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
