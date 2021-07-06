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
        d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
        opacity="0.2"
      />
      <path
        d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M232,84v40a7.99977,7.99977,0,0,1-8,8,103.32406,103.32406,0,0,1-48.00049-11.70752L176,156A76,76,0,1,1,86.59766,81.17971,7.99952,7.99952,0,0,1,96,89.05569l-.00049,41.63916a7.99971,7.99971,0,0,1-4.56689,7.22607A20.00272,20.00272,0,1,0,120,156V28a7.99977,7.99977,0,0,1,8-8h40a7.99977,7.99977,0,0,1,8,8,48.05436,48.05436,0,0,0,48,48A7.99977,7.99977,0,0,1,232,84Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
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
  name: "PhTiktokLogo",
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
