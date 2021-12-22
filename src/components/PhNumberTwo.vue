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
        d="M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M184,224a8,8,0,0,1-8,8H80a7.3,7.3,0,0,1-2.5-.4A8,8,0,0,1,72,224a8,8,0,0,1,1.7-5l87.6-116.8A40,40,0,1,0,91.1,64.4a8,8,0,1,1-14.7-6.2,56,56,0,1,1,98,53.1c0,.1-.1.2-.2.3L96,216h80A8,8,0,0,1,184,224Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96"
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
