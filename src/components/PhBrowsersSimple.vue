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
    <g v-if="displayWeight === 'bold'">
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        opacity="0.2"
      />
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <g>
        <rect x="24.00781" y="72" width="176" height="144" rx="16" />
        <path
          d="M216.00781,40h-152a8,8,0,0,0,0,16h152V176a8,8,0,0,0,16,0V56A16.01833,16.01833,0,0,0,216.00781,40Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176"
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
  ContextGetter
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhBrowsersSimple",
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
