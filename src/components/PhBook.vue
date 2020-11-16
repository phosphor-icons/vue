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
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="48 224 48 232 192 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        opacity="0.2"
      />
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="48 224 48 232 192 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M207.99414,23.9971h-136a32.03667,32.03667,0,0,0-32,32v176a7.9954,7.9954,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01583,16.01583,0,0,1,16-16h136a7.99539,7.99539,0,0,0,8-8v-168A7.9954,7.9954,0,0,0,207.99414,23.9971Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="48 224 48 232 192 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="48 224 48 232 192 232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="48 224 48 232 192 232"
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
  name: "PhBook",
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
