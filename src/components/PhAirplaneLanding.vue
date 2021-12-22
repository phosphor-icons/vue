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
      <line
        x1="96"
        y1="216"
        x2="240"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
        opacity="0.2"
      />
      <line
        x1="96"
        y1="216"
        x2="240"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M248,216a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16H240A8,8,0,0,1,248,216Zm-24-28a4.1,4.1,0,0,0,2.4-.8A4,4,0,0,0,228,184V148.3a36.1,36.1,0,0,0-26.4-34.7l-46.9-13L123.5,46a4.3,4.3,0,0,0-2.2-1.8l-13.5-4.5A11.9,11.9,0,0,0,97,41.4a11.6,11.6,0,0,0-5,9.7V82.6L66.8,74.7,51.5,46.1a4.1,4.1,0,0,0-2.2-1.9L35.8,39.7A11.9,11.9,0,0,0,25,41.4a11.6,11.6,0,0,0-5,9.7v52.6a36.1,36.1,0,0,0,26.3,34.7l176.6,49.5Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="96"
        y1="216"
        x2="240"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="96"
        y1="216"
        x2="240"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="96"
        y1="216"
        x2="240"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
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
