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
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="92" cy="128" r="16" />
      <circle cx="164" cy="128" r="16" />
      <path
        d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M128,32c-16,20-16,40-16,40a16.00421,16.00421,0,0,0,24.00155,13.85859"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="128" cy="128" r="96" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="92" cy="128" r="12" />
      <circle cx="164" cy="128" r="12" />
      <path
        d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M131.92139,24.0813C120.32031,40.37354,120.002,55.87939,120,56.044A8.00006,8.00006,0,0,0,136,56a8,8,0,0,1,16,0,24,24,0,0,1-48,0c0-.72876.125-14.4248,8.57715-30.85474a104.06072,104.06072,0,1,0,19.34424-1.064ZM80,128a12,12,0,1,1,12,12A12,12,0,0,1,80,128Zm78.9668,46.665a56.03047,56.03047,0,0,1-61.93213.001,7.99982,7.99982,0,1,1,8.85742-13.32422,40.03347,40.03347,0,0,0,44.21777-.001A7.99969,7.99969,0,1,1,158.9668,174.665ZM164,140a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="92" cy="128" r="10" />
      <circle cx="164" cy="128" r="10" />
      <path
        d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="92" cy="128" r="8" />
      <circle cx="164" cy="128" r="8" />
      <path
        d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="92" cy="128" r="12" />
      <circle cx="164" cy="128" r="12" />
      <path
        d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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
  name: "PhBaby",
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
