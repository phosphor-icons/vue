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
        d="M88,96a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
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
        d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
        opacity="0.2"
      />
      <path
        d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
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
        d="M176,196a12,12,0,1,1-12-12A12,12,0,0,1,176,196ZM76,184a12,12,0,1,0,12,12A12,12,0,0,0,76,184Zm40,16a12,12,0,1,0,12,12A12,12,0,0,0,116,200ZM68,224a12,12,0,1,0,12,12A12,12,0,0,0,68,224Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,156,224Zm3.3-207.9A76.1,76.1,0,0,0,85,64.8h0a74.8,74.8,0,0,0-5,26.9,8.3,8.3,0,0,1-7.4,8.3A8,8,0,0,1,64,92a91.6,91.6,0,0,1,2.4-21.1,4,4,0,0,0-5-4.8A52.1,52.1,0,0,0,24,116.3C24.2,145,48.1,168,76.8,168H156a76,76,0,0,0,3.3-151.9Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
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
        d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
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
        d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
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
