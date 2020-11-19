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
    <g v-if="weight === 'bold'">
      <rect
        x="32"
        y="48"
        width="192"
        height="144"
        rx="16"
        transform="translate(256 240) rotate(180)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="160"
        y1="224"
        x2="96"
        y2="224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="32"
        y="48"
        width="192"
        height="144"
        rx="16"
        transform="translate(256 240) rotate(180)"
        opacity="0.2"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="144"
        rx="16"
        transform="translate(256 240) rotate(180)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="160"
        y1="224"
        x2="96"
        y2="224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <rect x="24" y="40.0002" width="208" height="160" rx="24" />
        <path d="M160,216.0002H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z" />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="32"
        y="48"
        width="192"
        height="144"
        rx="16"
        transform="translate(256 240) rotate(180)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="160"
        y1="224"
        x2="96"
        y2="224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="32"
        y="48"
        width="192"
        height="144"
        rx="16"
        transform="translate(256 240) rotate(180)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="160"
        y1="224"
        x2="96"
        y2="224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="32"
        y="48"
        width="192"
        height="144"
        rx="16"
        transform="translate(256 240) rotate(180)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="160"
        y1="224"
        x2="96"
        y2="224"
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
import { IconProps, PropValidator } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

export default defineComponent({
  props: PropValidator,
  setup(props: Readonly<Partial<IconProps>>) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
</script>
