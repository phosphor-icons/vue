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
      <rect
        x="-10"
        y="98"
        width="176"
        height="60"
        rx="8"
        transform="translate(206 50) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="90"
        y="98"
        width="176"
        height="60"
        rx="8"
        transform="translate(306 -50) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="-8"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(208 48) rotate(90)"
        opacity="0.2"
      />
      <rect
        x="88"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(304 -48) rotate(90)"
        opacity="0.2"
      />
      <rect
        x="-8"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(208 48) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="88"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(304 -48) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <rect x="40" y="32" width="80" height="192" rx="16" />
        <rect x="136" y="32" width="80" height="192" rx="16" />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="-8"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(208 48) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="88"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(304 -48) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="-8"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(208 48) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="88"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(304 -48) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="-8"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(208 48) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="88"
        y="96"
        width="176"
        height="64"
        rx="8"
        transform="translate(304 -48) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
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
