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
        d="M176,200a24,24,0,0,1-48,0V136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M32.3,136a7.9,7.9,0,0,1-7.9-8.7,104,104,0,0,1,207.2,0,7.9,7.9,0,0,1-7.9,8.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,136c0-72,40-104,40-104s40,32,40,104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M128,32a103.9,103.9,0,0,1,103.6,95.3,7.9,7.9,0,0,1-7.9,8.7H168c0-72-40-104-40-104"
        opacity="0.2"
      />
      <path
        d="M128,32A103.9,103.9,0,0,0,24.4,127.3a7.9,7.9,0,0,0,7.9,8.7H88c0-72,40-104,40-104"
        opacity="0.2"
      />
      <path
        d="M176,200a24,24,0,0,1-48,0V136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32.3,136a7.9,7.9,0,0,1-7.9-8.7,104,104,0,0,1,207.2,0,7.9,7.9,0,0,1-7.9,8.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,136c0-72,40-104,40-104s40,32,40,104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M239.6,126.6A112.1,112.1,0,0,0,128,24h0A112.1,112.1,0,0,0,16.4,126.6a15.7,15.7,0,0,0,4.2,12.2A15.9,15.9,0,0,0,32.3,144H120v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h87.7a15.9,15.9,0,0,0,11.7-5.2A15.7,15.7,0,0,0,239.6,126.6ZM32.3,128a95.9,95.9,0,0,1,75.9-85.9c-11.7,16-26.4,44-28,85.9Zm143.5,0c-1.6-41.9-16.3-69.9-28-85.9A95.9,95.9,0,0,1,223.7,128Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M176,200a24,24,0,0,1-48,0V136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M32.3,136a7.9,7.9,0,0,1-7.9-8.7,104,104,0,0,1,207.2,0,7.9,7.9,0,0,1-7.9,8.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88,136c0-72,40-104,40-104s40,32,40,104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M176,200a24,24,0,0,1-48,0V136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M32.3,136a7.9,7.9,0,0,1-7.9-8.7,104,104,0,0,1,207.2,0,7.9,7.9,0,0,1-7.9,8.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88,136c0-72,40-104,40-104s40,32,40,104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M176,200a24,24,0,0,1-48,0V136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32.3,136a7.9,7.9,0,0,1-7.9-8.7,104,104,0,0,1,207.2,0,7.9,7.9,0,0,1-7.9,8.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,136c0-72,40-104,40-104s40,32,40,104"
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
