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
      <line
        x1="116"
        y1="88"
        x2="116"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="116" cy="164" r="16" />
      <line
        x1="240"
        y1="96.00452"
        x2="240"
        y2="160.00452"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="44"
        y="36.00452"
        width="144"
        height="184"
        rx="16"
        transform="translate(244.00452 12.00452) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="44"
        y="36.00452"
        width="144"
        height="184"
        rx="16"
        transform="translate(244.00452 12.00452) rotate(90)"
        opacity="0.2"
      />
      <line
        x1="116"
        y1="88"
        x2="116"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="116" cy="164" r="12" />
      <line
        x1="240"
        y1="96.00452"
        x2="240"
        y2="160.00452"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="44"
        y="36.00452"
        width="144"
        height="184"
        rx="16"
        transform="translate(244.00452 12.00452) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path
          d="M240,88.00452a7.99977,7.99977,0,0,0-8,8v64a8,8,0,0,0,16,0v-64A7.99977,7.99977,0,0,0,240,88.00452Z"
        />
        <path
          d="M192,48.00452H40a24.0275,24.0275,0,0,0-24,24v112a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24v-112A24.0275,24.0275,0,0,0,192,48.00452Zm-84,39.9956a8,8,0,1,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,116,176.00012Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="116"
        y1="88"
        x2="116"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="116" cy="164.00452" r="9" />
      <line
        x1="240"
        y1="96.00452"
        x2="240"
        y2="160.00452"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="44"
        y="36.00452"
        width="144"
        height="184"
        rx="16"
        transform="translate(244.00452 12.00452) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="116"
        y1="88"
        x2="116"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="116" cy="164" r="6" />
      <line
        x1="240"
        y1="96.00452"
        x2="240"
        y2="160.00452"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="44"
        y="36.00452"
        width="144"
        height="184"
        rx="16"
        transform="translate(244.00452 12.00452) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="116"
        y1="88"
        x2="116"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="116" cy="164" r="12" />
      <line
        x1="240"
        y1="96.00452"
        x2="240"
        y2="160.00452"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="44"
        y="36.00452"
        width="144"
        height="184"
        rx="16"
        transform="translate(244.00452 12.00452) rotate(90)"
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
