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
  <rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" opacity="0.2"/>
  <rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <path d="M240,116.68652,139.31348,16a16.01779,16.01779,0,0,0-22.627,0L16,116.68652a16.01779,16.01779,0,0,0,0,22.627L116.68652,240a16.01779,16.01779,0,0,0,22.627,0L240,139.31348A16.01779,16.01779,0,0,0,240,116.68652Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
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
  name: "PhDiamond",
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
