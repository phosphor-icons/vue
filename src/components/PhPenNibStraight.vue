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
        x1="128.00587"
        y1="156.00342"
        x2="128.00587"
        y2="244.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="128.00587"
        cy="132.00342"
        r="24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="72.006 72.003 42.463 131.799 128.006 244.003 213.549 131.799 184.006 72.003 72.006 72.003"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M211.39209,127.43359,184.00586,72.00342h-112L44.61914,127.43408a8.0009,8.0009,0,0,0,.73,8.28662l82.65674,112.28272,82.65625-112.28321A7.99983,7.99983,0,0,0,211.39209,127.43359Zm-83.38623,24.56983a20,20,0,1,1,20-20A19.99974,19.99974,0,0,1,128.00586,152.00342Z"
        opacity="0.2"
      />
      <line
        x1="128.00587"
        y1="152.00342"
        x2="128.00586"
        y2="248.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128.00587"
        cy="132.00342"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M72.00586,72.00342l-27.3866,55.43077a8,8,0,0,0,.72977,8.28632l82.65684,112.28291,82.65647-112.28335a8,8,0,0,0,.72976-8.28628L184.00586,72.00342Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <circle cx="128.00586" cy="132.00342" r="16" />
      <path
        d="M218.56445,123.89014,192.00586,70.13477V32.00342a16,16,0,0,0-16-16h-96a16,16,0,0,0-16,16V70.13477L37.44678,123.89062a15.944,15.944,0,0,0,1.45947,16.57276l73.87832,100.35748a4,4,0,0,0,7.22129-2.37135V162.99072a32,32,0,1,1,16,0v75.45864a4,4,0,0,0,7.2213,2.37133L217.105,140.4624A15.94312,15.94312,0,0,0,218.56445,123.89014ZM176.00586,64.00342h-96v-32h96Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="128.00587"
        y1="152.00342"
        x2="128.00587"
        y2="248.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="128.00587"
        cy="132.00342"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M72.00586,72.00342l-27.3866,55.43077a8,8,0,0,0,.72977,8.28632l82.65684,112.28291,82.65647-112.28335a8,8,0,0,0,.72976-8.28628L184.00586,72.00342Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="128.00587"
        y1="152.00342"
        x2="128.00587"
        y2="248.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="128.00587"
        cy="132.00342"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M72.00586,72.00342l-27.3866,55.43077a8,8,0,0,0,.72977,8.28632l82.65684,112.28291,82.65647-112.28335a8,8,0,0,0,.72976-8.28628L184.00586,72.00342Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="128.00587"
        y1="152.00342"
        x2="128.00587"
        y2="248.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128.00587"
        cy="132.00342"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M72.00586,72.00342l-27.3866,55.43077a8,8,0,0,0,.72977,8.28632l82.65684,112.28291,82.65647-112.28335a8,8,0,0,0,.72976-8.28628L184.00586,72.00342Z"
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
  name: "PhPenNibStraight",
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
