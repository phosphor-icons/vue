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
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="80" width="192" height="128" rx="8" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M85.99414,112c0,22.09139,18.804,40,42,40s42-17.90861,42-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect x="32" y="80" width="192" height="128" rx="8" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="80" width="192" height="128" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M85.99414,112c0,22.09139,18.804,40,42,40s42-17.90861,42-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM127.99414,160c-27.57031,0-50-21.53271-50-48a8,8,0,0,1,16,0c0,17.64453,15.25195,32,34,32s34-14.35547,34-32a8,8,0,0,1,16,0C177.99414,138.46729,155.56445,160,127.99414,160ZM216,72H40V56H216l.001,16Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="80" width="192" height="128" rx="8" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M85.99414,112c0,22.09139,18.804,40,42,40s42-17.90861,42-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="80" width="192" height="128" rx="8" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M85.99414,112c0,22.09139,18.804,40,42,40s42-17.90861,42-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="80" width="192" height="128" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M85.99414,112c0,22.09139,18.804,40,42,40s42-17.90861,42-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "ShoppingBagOpen",
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
