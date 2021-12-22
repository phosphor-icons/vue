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
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        opacity="0.2"
      />
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208,100V32a8,8,0,0,0-8-8H56a8,8,0,0,0-5.5,13.8L107.9,92H56a8,8,0,0,0-8,8v68a7.9,7.9,0,0,0,2.5,5.8l72,68A8.2,8.2,0,0,0,128,244a7.4,7.4,0,0,0,3.2-.7A7.9,7.9,0,0,0,136,236V176h64a8,8,0,0,0,5.5-13.8L148.1,108H200A8,8,0,0,0,208,100Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
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
