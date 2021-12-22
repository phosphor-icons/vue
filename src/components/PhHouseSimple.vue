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
        d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
        opacity="0.2"
      />
      <path
        d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M218.8,103.7h0L138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.5A16,16,0,0,0,218.8,103.7Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
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
