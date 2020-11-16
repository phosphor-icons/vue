/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
  >
    <g v-if="displayWeight === 'bold'">
      <path
        d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M120.00586,232A63.58111,63.58111,0,0,1,74.751,213.25464a8.00018,8.00018,0,1,1,11.31445-11.31348A48,48,0,1,0,120.00586,120a7.99983,7.99983,0,0,1-6.55469-12.58643l47.18164-67.42919H79.99414a8,8,0,0,1,0-16h96a7.99982,7.99982,0,0,1,6.55469,12.58642l-48.28906,69.0127A64.01232,64.01232,0,0,1,120.00586,232Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "@/lib/types";
export default defineComponent({
  name: "PhNumberThree",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight ?? contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size ?? contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color ?? contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
