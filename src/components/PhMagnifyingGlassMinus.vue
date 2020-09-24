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
      <rect
        x="-0.00293"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99512 256.00098) rotate(180)"
        fill="none"
      />
      <circle
        cx="119.99707"
        cy="120"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="87.99707"
        y1="120"
        x2="151.99707"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="182.22428"
        y1="182.22672"
        x2="223.99805"
        y2="224.00049"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect
        x="-0.00488"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99121 256.00098) rotate(180)"
        fill="none"
      />
      <circle cx="119.99512" cy="120" r="87.98531" opacity="0.2" />
      <circle
        cx="119.99512"
        cy="120"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="87.99512"
        y1="120"
        x2="151.99512"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="182.22232"
        y1="182.22672"
        x2="223.99609"
        y2="224.00049"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect
        x="-0.00391"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99316 256.00098) rotate(180)"
        fill="none"
      />
      <path
        d="M229.6543,218.34375l-36.33106-36.33136a96.49907,96.49907,0,1,0-25.335,21.11359,97.03552,97.03552,0,0,0,13.9856-9.83509l36.366,36.36634a8.00018,8.00018,0,1,0,11.31446-11.31348ZM151.99609,128h-64a8,8,0,1,1,0-16h64a8,8,0,0,1,0,16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="-0.00195"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99707 256.00098) rotate(180)"
        fill="none"
      />
      <circle
        cx="119.99805"
        cy="120"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="87.99805"
        y1="120"
        x2="151.99805"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="182.22525"
        y1="182.22672"
        x2="223.99902"
        y2="224.00049"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="-0.00098"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99902 256.00098) rotate(180)"
        fill="none"
      />
      <circle
        cx="119.99902"
        cy="120"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="87.99902"
        y1="120"
        x2="151.99902"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="182.22623"
        y1="182.22672"
        x2="224"
        y2="224.00049"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        width="256.00098"
        height="256.00098"
        transform="translate(256.00098 256.00098) rotate(180)"
        fill="none"
      />
      <circle
        cx="120"
        cy="120"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="88"
        y1="120"
        x2="152"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="182.22721"
        y1="182.22672"
        x2="224.00098"
        y2="224.00049"
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
  name: "PhMagnifyingGlassMinus",
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
