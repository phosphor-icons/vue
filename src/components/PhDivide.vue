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
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="128" cy="56" r="24" />
      <circle cx="128" cy="200" r="24" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="64" r="18" />
      <circle cx="128" cy="192" r="18" />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path d="M216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
        <circle cx="128" cy="64" r="18" />
        <circle cx="128" cy="192" r="18" />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="128" cy="68" r="16" />
      <circle cx="128" cy="188" r="16" />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="128" cy="72" r="12" />
      <circle cx="128" cy="184" r="12" />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="64" r="18" />
      <circle cx="128" cy="192" r="18" />
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
  }
});
export default component;
</script>
