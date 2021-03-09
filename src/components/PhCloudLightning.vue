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
      <polyline
        points="128 240 154.25 200 104 200 130.25 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        opacity="0.2"
      />
      <polyline
        points="128 240 154.25 200 104 200 130.25 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M134.564,168l-15.75,24h35.43116a8.00016,8.00016,0,0,1,6.68847,12.38916l-26.25,40a8,8,0,1,1-13.377-8.77832L139.42627,208H103.99512a8.00017,8.00017,0,0,1-6.68848-12.38916L115.42627,168H75.99512A52.0014,52.0014,0,0,1,68.16479,64.59033,91.68713,91.68713,0,0,0,63.99512,92a8,8,0,0,0,16,0,75.62312,75.62312,0,0,1,5.03723-27.2168l.007-.01758A76.00126,76.00126,0,1,1,155.99512,168Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polyline
        points="128 240 154.25 200 104 200 130.25 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polyline
        points="128 240 154.25 200 104 200 130.25 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polyline
        points="128 240 154.25 200 104 200 130.25 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
  ContextGetter,
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhCloudLightning",
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
