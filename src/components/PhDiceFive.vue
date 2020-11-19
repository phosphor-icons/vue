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
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="128" r="16" />
      <circle cx="164" cy="92" r="16" />
      <circle cx="164" cy="164" r="16" />
      <circle cx="92" cy="92" r="16" />
      <circle cx="92" cy="164" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2" />
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="128" r="12" />
      <circle cx="164" cy="92" r="12" />
      <circle cx="164" cy="164" r="12" />
      <circle cx="92" cy="92" r="12" />
      <circle cx="92" cy="164" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M192,32H64A32.03667,32.03667,0,0,0,32,64V192a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V64A32.03667,32.03667,0,0,0,192,32ZM92,176a12,12,0,1,1,12-12A12,12,0,0,1,92,176Zm0-72a12,12,0,1,1,12-12A12,12,0,0,1,92,104Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,164,176Zm0-72a12,12,0,1,1,12-12A12,12,0,0,1,164,104Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="128" r="9" />
      <circle cx="164" cy="92" r="9" />
      <circle cx="164" cy="164" r="9" />
      <circle cx="92" cy="92" r="9" />
      <circle cx="92" cy="164" r="9" />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="128" r="6" />
      <circle cx="164" cy="92" r="6" />
      <circle cx="164" cy="164" r="6" />
      <circle cx="92" cy="92" r="6" />
      <circle cx="92" cy="164" r="6" />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="128" cy="128" r="12" />
      <circle cx="164" cy="92" r="12" />
      <circle cx="164" cy="164" r="12" />
      <circle cx="92" cy="92" r="12" />
      <circle cx="92" cy="164" r="12" />
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
