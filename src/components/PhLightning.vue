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
      <rect width="256" height="256" fill="none" />
      <polygon
        points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
        opacity="0.2"
      />
      <polygon
        points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M215.78857,118.16406a8.00125,8.00125,0,0,0-4.97949-5.6626L153.17871,90.89014l14.666-73.3291a8.00018,8.00018,0,0,0-13.69336-7.02735l-112,120a7.99995,7.99995,0,0,0,3.03955,12.94922l57.63037,21.61133-14.666,73.3291a7.99991,7.99991,0,0,0,13.69336,7.02734l112-120A8.00057,8.00057,0,0,0,215.78857,118.16406Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect width="256" height="256" fill="none" />
      <polygon
        points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
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
  name: "PhLightning",
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
