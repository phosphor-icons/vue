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
      <circle cx="128" cy="68" r="16" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="16"
        transform="translate(256) rotate(90)"
        opacity="0.2"
      />
      <circle cx="128" cy="68" r="12" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M192,24H64A24.0275,24.0275,0,0,0,40,48V208a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24V48A24.0275,24.0275,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="128" cy="68" r="9" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="128" cy="68" r="6" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="16"
        transform="translate(256) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="128" cy="68" r="12" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="16"
        transform="translate(256) rotate(90)"
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
import { IconProps, PropValidator } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

export default defineComponent({
  props: PropValidator,
  setup(props: Readonly<Partial<IconProps>>) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
</script>
