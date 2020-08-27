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
  <circle cx="52" cy="204" r="18"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <path d="M48,200V56.32988a8.09741,8.09741,0,0,1,8.3548-8.1155A160.01519,160.01519,0,0,1,207.78562,199.6452,8.09741,8.09741,0,0,1,199.67012,208H56A8,8,0,0,1,48,200Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <path d="M199.66992,215.99963H56a16.01833,16.01833,0,0,1-16-16V56.32971a16.26655,16.26655,0,0,1,5.05615-11.7373,15.86032,15.86032,0,0,1,11.70947-4.36719A168.01354,168.01354,0,0,1,215.7749,199.234a15.903,15.903,0,0,1-4.36719,11.709A16.26536,16.26536,0,0,1,199.66992,215.99963ZM56.05908,56.20959A.218.218,0,0,0,56,56.32971V199.99963l.00049.01075,143.66943-.01075a.21241.21241,0,0,0,.12012-.05957A152.016,152.016,0,0,0,56.05908,56.20959Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <circle cx="52" cy="204" r="9"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <circle cx="52" cy="204" r="6"/>
</g>
    <g v-if="displayWeight === 'regular'">
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
  name: "WifiNoneAlt",
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
