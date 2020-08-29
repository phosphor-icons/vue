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
  <rect width="256" height="256" fill="none"/>
  <circle cx="155.99951" cy="100" r="16"/>
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="32 168 88 112 144 168 176 136 224 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <path d="M32,167.99982,87.99981,112l56,56,32-32,48,48L224,56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z" opacity="0.2"/>
  <circle cx="155.99951" cy="100" r="12"/>
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="32 168 88 112 144 168 176 136 224 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="155.99951" cy="100" r="12"/>
  <path d="M216.00049,40.00012h-176a16.01833,16.01833,0,0,0-16,16V199.99963a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V56.00012A16.01834,16.01834,0,0,0,216.00049,40.00012Zm0,16,.00732,108.69367-34.35107-34.35041a8.00121,8.00121,0,0,0-11.31445,0l-26.34278,26.34278L93.65674,106.34338a8.00121,8.00121,0,0,0-11.31445,0l-42.3418,42.34107V56.00012Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="155.99951" cy="100" r="9"/>
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="32 168 88 112 144 168 176 136 224 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="155.99951" cy="100" r="6"/>
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="32 168 88 112 144 168 176 136 224 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="155.99951" cy="100" r="12"/>
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="32 168 88 112 144 168 176 136 224 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "PictureLandscape",
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
