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
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <path d="M88,72V216l-47.99219,0a8,8,0,0,1-8-8v-128a8,8,0,0,1,8-8Z" opacity="0.2"/>
  <path d="M168.00781,72V216l47.99219,0a8,8,0,0,0,8-8v-128a8,8,0,0,0-8-8Z" opacity="0.2"/>
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <path d="M216.01562,64H176V224h40.01562a16.01582,16.01582,0,0,0,16-16V80A16.01582,16.01582,0,0,0,216.01562,64Z"/>
  <rect x="96" y="64" width="64" height="160"/>
  <path d="M160,32H96A16.01582,16.01582,0,0,0,80,48V64H96V48h64V64h16V48A16.01583,16.01583,0,0,0,160,32Z"/>
  <path d="M24.01562,80V208a16.01583,16.01583,0,0,0,16,16H80V64H40.01562A16.01583,16.01583,0,0,0,24.01562,80Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "Briefcase",
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
