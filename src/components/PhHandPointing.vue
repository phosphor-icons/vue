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
  <path d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M168,112V100a20,20,0,0,0-40,0v4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <path d="M168,112V100a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0Z" opacity="0.2"/>
  <path d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M168,112V100a20,20,0,0,0-40,0v4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <path d="M188,84a27.82842,27.82842,0,0,0-14.6416,4.145A27.97776,27.97776,0,0,0,136,74.707V36a28,28,0,0,0-56,0v91.41016l-6.999-12.12354a28.00028,28.00028,0,0,0-48.6709,27.69629C56.77832,211.39941,78.39355,240,128,240a88.09957,88.09957,0,0,0,88-88V112A28.03146,28.03146,0,0,0,188,84Zm12,68a72.08124,72.08124,0,0,1-72,72c-20.17871,0-34.22656-5.45459-46.97461-18.23828-12.499-12.53369-24.77246-32.78565-42.36426-69.90137q-.13916-.293-.30175-.57422a12.00011,12.00011,0,0,1,20.78515-11.99951l21.92774,37.97949a7.9997,7.9997,0,0,0,14.92773-4V36a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0v12a8,8,0,0,0,16,0,12,12,0,0,1,24,0Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <path d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M168,112V100a20,20,0,0,0-40,0v4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <path d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M168,112V100a20,20,0,0,0-40,0v4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <path d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M168,112V100a20,20,0,0,0-40,0v4" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "PhHandPointing",
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
