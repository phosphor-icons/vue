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
        d="M56,48A152,152,0,0,1,208,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="56" cy="200" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M55.99414,48a152,152,0,0,1,152,152"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M55.99414,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="56" cy="200" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M215.99414,199.99963a8,8,0,0,1-16,0c0-79.40234-64.59814-144-144-144a8,8,0,0,1,0-16C144.21826,39.99963,215.99414,111.775,215.99414,199.99963Zm-160-88a8,8,0,1,0,0,16,72.08124,72.08124,0,0,1,72,72,8,8,0,0,0,16,0A88.09957,88.09957,0,0,0,55.99414,111.99963Zm0,76a12,12,0,1,0,12,12A12.01344,12.01344,0,0,0,55.99414,187.99963Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M56,48A152,152,0,0,1,208,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="56" cy="200" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M56,48A152,152,0,0,1,208,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="56" cy="200" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M56,48A152,152,0,0,1,208,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="56" cy="200" r="12" />
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
