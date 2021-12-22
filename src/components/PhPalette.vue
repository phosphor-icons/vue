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
        d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="128" cy="76" r="16" />
      <circle cx="83" cy="102" r="16" />
      <circle cx="83" cy="154" r="16" />
      <circle cx="173" cy="102" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
        opacity="0.2"
      />
      <path
        d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="76" r="12" />
      <circle cx="83" cy="102" r="12" />
      <circle cx="83" cy="154" r="12" />
      <circle cx="173" cy="102" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M200.8,53.9A103.4,103.4,0,0,0,128,24h-1.1A104,104,0,0,0,93.4,226.1,32,32,0,0,0,136,195.9V192a16,16,0,0,1,16-16h46.2a31.7,31.7,0,0,0,31.2-24.9,101.5,101.5,0,0,0,2.6-24A102.9,102.9,0,0,0,200.8,53.9ZM89,164.4A12,12,0,1,1,93.4,148,12,12,0,0,1,89,164.4ZM93.4,108A12,12,0,1,1,89,91.6,12.1,12.1,0,0,1,93.4,108ZM128,88a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm51,24.4A12,12,0,1,1,183.4,96,12.1,12.1,0,0,1,179,112.4Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="128" cy="76" r="10" />
      <circle cx="83" cy="102" r="10" />
      <circle cx="83" cy="154" r="10" />
      <circle cx="173" cy="102" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="128" cy="76" r="8" />
      <circle cx="83" cy="102" r="8" />
      <circle cx="83" cy="154" r="8" />
      <circle cx="173" cy="102" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="76" r="12" />
      <circle cx="83" cy="102" r="12" />
      <circle cx="83" cy="154" r="12" />
      <circle cx="173" cy="102" r="12" />
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
  name: "PhPalette",
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
