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
    v-on="$listeners"
  >
    <slot />
    <g v-if="displayWeight === 'bold'">
      <path
        d="M72,32H208a8,8,0,0,1,8,8V144a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64A32,32,0,0,1,72,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M112,152l-8,56a24,24,0,0,0,48,0l-8-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="168"
        y1="32"
        x2="168"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path d="M216,112v32a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112Z" opacity="0.2" />
      <path d="M112,152l-8,56a24,24,0,0,0,48,0l-8-56Z" opacity="0.2" />
      <path
        d="M72,32H208a8,8,0,0,1,8,8V144a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64A32,32,0,0,1,72,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M112,152l-8,56a24,24,0,0,0,48,0l-8-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="168"
        y1="32"
        x2="168"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M208,24H72A40.04552,40.04552,0,0,0,32,64v80a16.01833,16.01833,0,0,0,16,16h54.776l-6.69543,46.86816A7.97979,7.97979,0,0,0,96,208a32,32,0,0,0,64,0,7.97979,7.97979,0,0,0-.08057-1.13184L153.224,160H208a16.01833,16.01833,0,0,0,16-16V40A16.01833,16.01833,0,0,0,208,24ZM72,40h88V72a8,8,0,0,0,16,0V40h32l.00635,64H48V64A24.0275,24.0275,0,0,1,72,40Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M72,32H208a8,8,0,0,1,8,8V144a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64A32,32,0,0,1,72,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M112,152l-8,56a24,24,0,0,0,48,0l-8-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="168"
        y1="32"
        x2="168"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M72,32H208a8,8,0,0,1,8,8V144a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64A32,32,0,0,1,72,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M112,152l-8,56a24,24,0,0,0,48,0l-8-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="168"
        y1="32"
        x2="168"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M72,32H208a8,8,0,0,1,8,8V144a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64A32,32,0,0,1,72,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M112,152l-8,56a24,24,0,0,0,48,0l-8-56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="40"
        y1="112"
        x2="216"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="168"
        y1="32"
        x2="168"
        y2="72"
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
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter,
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhPaintBrushBroad",
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
    },
  },
});
</script>
