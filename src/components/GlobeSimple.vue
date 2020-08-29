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
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
  <rect x="-256" width="256" height="256" fill="none" opacity="0.2"/>
  <rect x="256" width="256" height="256" fill="red" opacity="0.2"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M96.3721,135.99968c1.81156,28.752,13.17873,55.70995,31.6279,74.44525,18.44917-18.7353,29.81634-45.69321,31.6279-74.44525Z"/>
  <path d="M128,45.5543c-18.44917,18.7353-29.81634,45.69321-31.6279,74.44525h63.2558C157.81634,91.24751,146.44917,64.2896,128,45.5543Z"/>
  <path d="M133.25,28.54649c25.31732,22.06343,40.39056,55.08383,42.35472,91.45306l55.9891,0a104.06959,104.06959,0,0,0-103.55573-95.998Z"/>
  <path d="M80.39528,119.99955C82.35944,83.63032,97.43268,50.60992,122.75,28.54649l5.21191-4.54492a104.06959,104.06959,0,0,0-103.55573,95.998Z"/>
  <path d="M122.75,227.45274c-25.31727-22.06337-40.39049-55.08368-42.35422-91.45294l-55.9896-.0001a104.06959,104.06959,0,0,0,103.55573,95.998Z"/>
  <path d="M175.60472,135.99968c-1.96416,36.36923-17.0374,69.38963-42.35472,91.45306l-5.21191,4.54492a104.06863,104.06863,0,0,0,103.55511-95.9978Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" :stroke="displayColor" stroke-miterlimit="10" stroke-width="16"/>
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
  name: "GlobeSimple",
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
