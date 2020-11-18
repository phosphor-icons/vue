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
    <slot />
    <g v-if="displayWeight === 'bold'">
      <path
        d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M79.999,232.00049a8.00363,8.00363,0,0,1-6.26757-12.97534l87.54687-116.82141a39.99539,39.99539,0,0,0-25.208-61.39087,40.65956,40.65956,0,0,0-16.14062,0,39.72508,39.72508,0,0,0-14.28809,6.01379,40.13954,40.13954,0,0,0-14.501,17.60474A7.99961,7.99961,0,1,1,76.4043,58.20117a55.984,55.984,0,0,1,40.31836-33.0636,56.72449,56.72449,0,0,1,22.55468,0,55.7479,55.7479,0,0,1,20.03809,8.431A56.10872,56.10872,0,0,1,179.5957,58.20117a55.65429,55.65429,0,0,1,3.2666,10.52307,56.45745,56.45745,0,0,1,0,22.55384,55.79161,55.79161,0,0,1-8.42968,20.03662q-.10987.16278-.22852.32019L96.001,215.98853H176a8,8,0,0,1,0,16H80.43555Q80.21729,232.00061,79.999,232.00049Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
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
  ContextGetter
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhNumberTwo",
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
    }
  }
});
</script>
