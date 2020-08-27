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
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" opacity="0.2"/>
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <g>
    <path d="M159.9248,224.012h-64a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/>
    <path d="M128,24.00024a88.09957,88.09957,0,0,0-88,88v.06739l.66992,80.0791a16.04734,16.04734,0,0,0,16,15.86523H199.3125a16.048,16.048,0,0,0,16-15.8623L216,112.00024A88.09957,88.09957,0,0,0,128,24.00024Z"/>
  </g>
</g>
    <g v-if="displayWeight === 'light'">
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "BellSimple",
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
