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
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <rect width="256" height="256" fill="none"/>
  <g opacity="0.2">
    <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z"/>
  </g>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <rect width="256" height="256" fill="none"/>
  <path d="M224.0625,62.77344l-88-51.33594a16.03841,16.03841,0,0,0-16.125.00781L31.95312,62.77344A16.018,16.018,0,0,0,24,76.59375v102.8125a16.03667,16.03667,0,0,0,7.9375,13.82031l88,51.33594a16.02593,16.02593,0,0,0,16.125-.00781l87.98437-51.32813A16.018,16.018,0,0,0,232,179.40625V76.59375A16.03669,16.03669,0,0,0,224.0625,62.77344Z"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <rect width="256" height="256" fill="none"/>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <rect width="256" height="256" fill="none"/>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <rect width="256" height="256" fill="none"/>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "Hexagon",
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
