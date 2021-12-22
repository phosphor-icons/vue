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
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        opacity="0.2"
      />
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M32,120v16H16a8,8,0,0,1,0-16Zm0,57.3a16,16,0,0,0,13.1,15.8l160,29.1h0l2.9.2a16.5,16.5,0,0,0,10.3-3.7,16.1,16.1,0,0,0,5.7-12.3V136H32ZM240,120H224v16h16a8,8,0,0,0,0-16ZM224,49.6a16.1,16.1,0,0,0-5.7-12.3,16.6,16.6,0,0,0-13.2-3.5L45.1,62.9A16,16,0,0,0,32,78.7V120H224Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
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
