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
  <rect x="63.99414" y="40" width="128" height="40" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="63.99414" y="152" width="128" height="72" stroke-width="24" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="187.99414" cy="116" r="18"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <path d="M214.66089,80H41.32751c-9.57287,0-17.33337,7.16357-17.33337,16v80h40V152h128v24h40V96C231.99414,87.16357,224.23376,80,214.66089,80Zm-26.66675,48a12,12,0,1,1,12-12A12,12,0,0,1,187.99414,128Z" opacity="0.2"/>
  <rect x="63.99414" y="40" width="128" height="40" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="63.99414" y="152" width="128" height="72" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="187.99414" cy="116" r="12"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <path d="M214.66064,72h-14.6665V40a8.00008,8.00008,0,0,0-8-8h-128a8.00008,8.00008,0,0,0-8,8V72H41.32764c-13.96875,0-25.3335,10.7666-25.3335,24v80a8.00008,8.00008,0,0,0,8,8h32v40a8.00008,8.00008,0,0,0,8,8h128a8.00008,8.00008,0,0,0,8-8V184h32a8.00008,8.00008,0,0,0,8-8V96C239.99414,82.7666,228.62939,72,214.66064,72Zm-26.6665,56a12,12,0,1,1,12-12A12,12,0,0,1,187.99414,128Zm-116-80h112V72h-112Zm112,168h-112V160h112Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect x="63.99414" y="40" width="128" height="40" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="63.99414" y="152" width="128" height="72" stroke-width="12" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="187.99414" cy="116" r="9"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect x="63.99414" y="40" width="128" height="40" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="63.99414" y="152" width="128" height="72" stroke-width="8" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="187.99414" cy="116" r="6"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect x="63.99414" y="40" width="128" height="40" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="63.99414" y="152" width="128" height="72" stroke-width="16" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="187.99414" cy="116" r="12"/>
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
  name: "Printer",
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
