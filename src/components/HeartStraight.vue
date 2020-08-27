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
  <path d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <path d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z" opacity="0.2"/>
  <path d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M224.627,51.90625a59.54956,59.54956,0,0,0-43.0625-19.89063,60.69786,60.69786,0,0,0-43.98437,17.55469L128.002,59.14844l-7.5-7.49219c-23.32812-23.35156-61.29687-25.3125-84.57812-4.29687a59.974,59.974,0,0,0-2.34375,87.07031l83.10937,83.10937a16.013,16.013,0,0,0,22.625,0l81.03125-81.03125C243.68945,113.15625,245.61133,75.20312,224.627,51.90625Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <path d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <path d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <rect x="255.99348" width="256" height="256" fill="none"/>
  <path d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "HeartStraight",
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
