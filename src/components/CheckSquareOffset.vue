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
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="128 152 64 216 32 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <rect x="44" y="44" width="168" height="168" opacity="0.2"/>
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="128 152 64 216 32 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <path d="M204.00146,36h-152a16,16,0,0,0-16,16V204a16,16,0,0,0,16,16h152a16,16,0,0,0,16-16V52A16,16,0,0,0,204.00146,36Zm-38.34375,97.65625-64,64a7.99708,7.99708,0,0,1-11.3125,0l-32-32a7.99915,7.99915,0,1,1,11.3125-11.3125L96.00146,180.6875l58.34375-58.34375a7.99915,7.99915,0,0,1,11.3125,11.3125Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="128 152 64 216 32 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="128 152 64 216 32 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="128 152 64 216 32 184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "CheckSquareOffset",
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
