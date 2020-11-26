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
        d="M88,96a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,78.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="160" cy="216" r="16" />
      <circle cx="112" cy="216" r="16" />
      <circle cx="64" cy="216" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        opacity="0.2"
      />
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="76" cy="196" r="12" />
      <circle cx="116" cy="212" r="12" />
      <circle cx="164" cy="196" r="12" />
      <circle cx="68" cy="236" r="12" />
      <circle cx="156" cy="236" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M175.99512,196a12,12,0,1,1-12-12A12.01375,12.01375,0,0,1,175.99512,196Zm-100-12a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,75.99512,184Zm40,16a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,115.99512,200Zm-48,24a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,67.99512,224Zm88,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,155.99512,224Zm0-208A76.1302,76.1302,0,0,0,85.03931,64.76562l-.007.01758A75.62312,75.62312,0,0,0,79.99512,92a8,8,0,0,1-16,0,91.68713,91.68713,0,0,1,4.16967-27.40967A52.0014,52.0014,0,0,0,75.99512,168h80a76,76,0,0,0,0-152Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="76" cy="196" r="10" />
      <circle cx="116" cy="212" r="10" />
      <circle cx="164" cy="196" r="10" />
      <circle cx="68" cy="236" r="10" />
      <circle cx="156" cy="236" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="76" cy="196" r="8" />
      <circle cx="116" cy="212" r="8" />
      <circle cx="164" cy="196" r="8" />
      <circle cx="68" cy="236" r="8" />
      <circle cx="156" cy="236" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="76" cy="196" r="12" />
      <circle cx="116" cy="212" r="12" />
      <circle cx="164" cy="196" r="12" />
      <circle cx="68" cy="236" r="12" />
      <circle cx="156" cy="236" r="12" />
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
  name: "PhCloudSnow",
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
