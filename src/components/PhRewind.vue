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
        d="M18.5,121.3l89.2-57.4A8,8,0,0,1,120,70.7V185.3a8,8,0,0,1-12.3,6.8L18.5,134.7A7.9,7.9,0,0,1,18.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
        opacity="0.2"
      />
      <path
        d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
        opacity="0.2"
      />
      <path
        d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M10.1,114.5,99.3,57.2A16,16,0,0,1,124,70.7v42.6l87.3-56.1A16,16,0,0,1,236,70.7V185.3a16.1,16.1,0,0,1-8.3,14.1,16.5,16.5,0,0,1-16.4-.6L124,142.7v42.6a16.1,16.1,0,0,1-8.3,14.1,16.5,16.5,0,0,1-16.4-.6L10.1,141.5a16.1,16.1,0,0,1,0-27Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
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
