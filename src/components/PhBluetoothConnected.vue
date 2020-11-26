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
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="52" cy="128" r="16" />
      <circle cx="196" cy="128" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon points="120 32 184 80 120 128 120 32" opacity="0.2" />
      <polygon points="120 128 184 176 120 224 120 128" opacity="0.2" />
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="52" cy="128" r="12" />
      <circle cx="196" cy="128" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M188.7998,169.6,133.334,128.00037,188.7998,86.40076a8.00048,8.00048,0,0,0,0-12.80078l-64-48A8.0003,8.0003,0,0,0,112,32.00037v79.99957L60.7998,73.6a8.00019,8.00019,0,0,0-9.5996,12.80078L106.666,128.00037,51.2002,169.6a8.00019,8.00019,0,0,0,9.5996,12.80078l51.2002-38.4v79.99958a8.00024,8.00024,0,0,0,12.7998,6.40039l64-48a8.00048,8.00048,0,0,0,0-12.80078ZM128,48.00037l42.667,32-42.667,32Zm0,160v-64l42.667,32Zm80-80a12,12,0,1,1-12-12A12.01344,12.01344,0,0,1,208,128.00037Zm-156,12a12,12,0,1,1,12-12A12.01344,12.01344,0,0,1,52,140.00037Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="52" cy="128" r="10" />
      <circle cx="196" cy="128" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="52" cy="128" r="8" />
      <circle cx="196" cy="128" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="52" cy="128" r="12" />
      <circle cx="196" cy="128" r="12" />
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
  name: "PhBluetoothConnected",
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
