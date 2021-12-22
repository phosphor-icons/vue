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
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M146.6,129A28,28,0,1,0,100,108a28.5,28.5,0,0,0,9.4,21L98.9,165.8a8,8,0,0,0,7.7,10.2h42.8a8,8,0,0,0,7.7-10.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
        opacity="0.2"
      />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm18.4-81.8,12.5,29.1a12,12,0,0,1-11,16.7H108.1a12,12,0,0,1-11-16.7l12.5-29.1a32,32,0,0,1-2.9-50.1,32.4,32.4,0,0,1,25-7.9,32,32,0,0,1,14.7,58Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
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
