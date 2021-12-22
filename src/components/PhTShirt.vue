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
        d="M192,120h26.7a8.1,8.1,0,0,0,7.4-4.9l15.3-36.8a8.1,8.1,0,0,0-3.2-9.9L192,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M64,120H37.3a8.1,8.1,0,0,1-7.4-4.9L14.6,78.3a8.1,8.1,0,0,1,3.2-9.9L64,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40Z"
        opacity="0.2"
      />
      <path
        d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40Z"
        opacity="0.2"
      />
      <path
        d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M245.4,61.3,196,33.1h0a8,8,0,0,0-4-1.1H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-4,1.1h0L10.6,61.3a15.9,15.9,0,0,0-6.4,21l18.4,36.9A16,16,0,0,0,36.9,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h19.1a16,16,0,0,0,14.3-8.8l18.4-36.9A15.9,15.9,0,0,0,245.4,61.3ZM36.9,112,18.5,75.2,56,53.8V112Zm182.2,0H200V53.8l37.5,21.4Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
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
