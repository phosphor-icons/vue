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
  <path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" opacity="0.2"/>
  <path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M215.99512,71.99805H130.65625L102.917,51.19336a16.07363,16.07363,0,0,0-9.57812-3.19531H39.99512a16.01581,16.01581,0,0,0-16,16v136a16.01582,16.01582,0,0,0,16,16h176a16.01583,16.01583,0,0,0,16-16v-112A16.01582,16.01582,0,0,0,215.99512,71.99805Zm-176-8H93.33887l21.32617,15.999-21.3418,16.001H39.99512Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "PhFolderDip",
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
