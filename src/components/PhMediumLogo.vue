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
      <ellipse
        cx="70"
        cy="128"
        rx="54"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <ellipse
        cx="182"
        cy="128"
        rx="22"
        ry="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="240"
        y1="72"
        x2="240"
        y2="184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <ellipse cx="72" cy="128" rx="56" ry="60" opacity="0.2" />
      <ellipse cx="184" cy="128" rx="24" ry="56" opacity="0.2" />
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="240"
        y1="72"
        x2="240"
        y2="184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M136,128c0,37.5-28.7,68-64,68S8,165.5,8,128,36.7,60,72,60,136,90.5,136,128Zm48-64c-5.7,0-16.4,2.8-24.3,21.3-5,11.5-7.7,26.7-7.7,42.7s2.7,31.2,7.7,42.7c7.9,18.5,18.6,21.3,24.3,21.3s16.4-2.8,24.3-21.3c5-11.5,7.7-26.7,7.7-42.7s-2.7-31.2-7.7-42.7C200.4,66.8,189.7,64,184,64Zm56,0a8,8,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8,8,0,0,0,240,64Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="240"
        y1="72"
        x2="240"
        y2="184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="240"
        y1="72"
        x2="240"
        y2="184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="240"
        y1="72"
        x2="240"
        y2="184"
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
