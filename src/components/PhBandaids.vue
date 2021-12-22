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
        d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M206.6,94.6a32,32,0,0,0-45.2-45.2L128,82.7,173.3,128Z"
        opacity="0.2"
      />
      <path
        d="M49.4,161.4a32,32,0,0,0,45.2,45.2L128,173.3,82.7,128Z"
        opacity="0.2"
      />
      <path
        d="M94.6,49.4A32,32,0,0,0,49.4,94.6L82.7,128,128,82.7Z"
        opacity="0.2"
      />
      <path
        d="M173.3,128,128,173.3l33.4,33.3a32,32,0,0,0,45.2-45.2Z"
        opacity="0.2"
      />
      <path
        d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        opacity="0.5"
      />
      <circle cx="128" cy="128" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <circle cx="128" cy="128" r="12" />
      <path
        d="M184.6,128l27.7-27.7a40,40,0,0,0-56.6-56.6L128,71.4,100.3,43.7a40,40,0,0,0-56.6,56.6L71.4,128,43.7,155.7a40,40,0,0,0,56.6,56.6L128,184.6l27.7,27.7a40,40,0,0,0,56.6-56.6ZM128,94.1,161.9,128,128,161.9,94.1,128ZM167,55a24,24,0,0,1,34,34l-27.7,27.7-34-34ZM89,201a24,24,0,0,1-34-34l27.7-27.7,34,34Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
        opacity="0.5"
      />
      <circle cx="128" cy="128" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        opacity="0.5"
      />
      <circle cx="128" cy="128" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        opacity="0.5"
      />
      <circle cx="128" cy="128" r="12" />
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
