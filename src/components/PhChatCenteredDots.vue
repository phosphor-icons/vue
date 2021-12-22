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
        d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="100" cy="120" r="16" />
      <circle cx="156" cy="120" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
        opacity="0.2"
      />
      <path
        d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="120" r="12" />
      <circle cx="80" cy="120" r="12" />
      <circle cx="176" cy="120" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H99.5l14.8,24.7a16,16,0,0,0,27.4,0L156.5,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,132a12,12,0,1,1,12-12A12,12,0,0,1,80,132Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128,132Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176,132Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="128" cy="120" r="10" />
      <circle cx="176" cy="120" r="10" />
      <circle cx="80" cy="120" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="128" cy="120" r="8" />
      <circle cx="80" cy="120" r="8" />
      <circle cx="176" cy="120" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="120" r="12" />
      <circle cx="80" cy="120" r="12" />
      <circle cx="176" cy="120" r="12" />
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
