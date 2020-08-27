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
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="52" cy="204" r="18"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <g opacity="0.2">
    <path d="M48,96A112,112,0,0,1,160,208H56a8,8,0,0,1-8-8Z"/>
  </g>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,200V56.32988a8.09741,8.09741,0,0,1,8.3548-8.1155A160.01519,160.01519,0,0,1,207.78562,199.6452,8.09741,8.09741,0,0,1,199.67012,208H56A8,8,0,0,1,48,200Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,96A112,112,0,0,1,160,208H56a8,8,0,0,1-8-8Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M166.794,89.20569A167.544,167.544,0,0,0,56.76562,40.22522a15.84476,15.84476,0,0,0-11.70947,4.36719A16.26655,16.26655,0,0,0,40,56.32971V199.99963a16.01833,16.01833,0,0,0,16,16H199.66992a16.26536,16.26536,0,0,0,11.73779-5.05664,15.903,15.903,0,0,0,4.36719-11.709A167.55129,167.55129,0,0,0,166.794,89.20569Zm32.876,110.79394-31.93847.00244A119.99443,119.99443,0,0,0,56,88.26819V56.32971a.218.218,0,0,1,.05908-.12012A152.016,152.016,0,0,1,199.79,199.94006.21241.21241,0,0,1,199.66992,199.99963Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="52" cy="204" r="9"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="52" cy="204" r="6"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="52" cy="204" r="12"/>
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
  name: "WifiMediumAlt",
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
