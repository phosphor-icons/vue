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
      <path
        d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
        opacity="0.2"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M177.98633,32a61.873,61.873,0,0,0-50,25.29688A62.02071,62.02071,0,0,0,15.98633,94c0,69.67188,103.40625,134.10156,107.8125,136.8125a7.977,7.977,0,0,0,8.375,0c4.40625-2.71094,107.8125-67.14062,107.8125-136.8125A62.06947,62.06947,0,0,0,177.98633,32Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
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
  name: "PhHeart",
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
