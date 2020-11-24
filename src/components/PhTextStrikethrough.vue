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
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M171.73144,79.99989C169.29943,62.00014,150.648,48,128,48c-24.30053,0-44,16.11775-44,36a32.40178,32.40178,0,0,0,2.00532,12.00253"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M153.03855,127.9992C171.72987,135.814,184,146.83949,184,164c0,28-25.072,44-56,44-25.63327,0-47.244-13.53195-53.892-32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M171.73144,79.99989C169.29943,62.00014,150.648,48,128,48c-24.30053,0-44,16.11775-44,36a32.40178,32.40178,0,0,0,2.00532,12.00253"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M153.03855,127.9992C171.72987,135.814,184,146.83949,184,164c0,28-25.072,44-56,44-25.63327,0-47.244-13.53195-53.892-32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M224,128a7.99977,7.99977,0,0,1-8,8H180.28784C188.071,143.907,192,153.26367,192,164c0,30.6167-26.31787,52-64,52-28.25928,0-53.51562-15.33447-61.41943-37.29053a8.00013,8.00013,0,0,1,15.05468-5.41894C87.2959,189.0166,106.36182,200,128,200c23.89209,0,48-11.13135,48-36,0-7.45044-2.60071-18.385-24.61145-28H40a8,8,0,0,1,0-16H152.95728c.03759-.00049.075,0,.11267,0H216A7.99977,7.99977,0,0,1,224,128ZM86.00781,104.00439a8.00453,8.00453,0,0,0,7.43946-10.9375A24.60019,24.60019,0,0,1,92,84c0-15.43945,16.14941-28,36-28,18.17725,0,33.90381,11.0127,35.80371,25.07129a7.99979,7.99979,0,0,0,15.85547-2.14258C176.66064,56.73584,154.45215,40,128,40,99.32715,40,76,59.73828,76,84a40.124,40.124,0,0,0,2.56348,14.938A8.00176,8.00176,0,0,0,86.00781,104.00439Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M171.73144,79.99989C169.29943,62.00014,150.648,48,128,48c-24.30053,0-44,16.11775-44,36a32.40178,32.40178,0,0,0,2.00532,12.00253"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M153.03855,127.9992C171.72987,135.814,184,146.83949,184,164c0,28-25.072,44-56,44-25.63327,0-47.244-13.53195-53.892-32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M171.73144,79.99989C169.29943,62.00014,150.648,48,128,48c-24.30053,0-44,16.11775-44,36a32.40178,32.40178,0,0,0,2.00532,12.00253"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M153.03855,127.9992C171.72987,135.814,184,146.83949,184,164c0,28-25.072,44-56,44-25.63327,0-47.244-13.53195-53.892-32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M171.73144,79.99989C169.29943,62.00014,150.648,48,128,48c-24.30053,0-44,16.11775-44,36a32.40178,32.40178,0,0,0,2.00532,12.00253"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M153.03855,127.9992C171.72987,135.814,184,146.83949,184,164c0,28-25.072,44-56,44-25.63327,0-47.244-13.53195-53.892-32"
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
  name: "PhTextStrikethrough",
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
