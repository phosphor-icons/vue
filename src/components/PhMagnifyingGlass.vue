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
        y="0.00293"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99512 256.00684) rotate(180)"
        fill="none"
      />
      <circle
        cx="119.99707"
        cy="120.00293"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="182.22428"
        y1="182.22965"
        x2="223.99805"
        y2="224.00342"
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
        y="0.00293"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99121 256.00684) rotate(180)"
        fill="none"
      />
      <circle cx="119.99512" cy="120.00293" r="87.98531" opacity="0.2" />
      <circle
        cx="119.99512"
        cy="120.00293"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="182.22232"
        y1="182.22965"
        x2="223.99609"
        y2="224.00342"
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
        y="0.00293"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99316 256.00684) rotate(180)"
        fill="none"
      />
      <g>
        <circle cx="119.99023" cy="120.00098" r="64" />
        <path
          d="M229.6543,218.34668l-36.33106-36.3313a96.49933,96.49933,0,1,0-25.335,21.11353,97.03552,97.03552,0,0,0,13.9856-9.83509l36.366,36.36634a8.00018,8.00018,0,1,0,11.31446-11.31348ZM119.99023,200.001a80,80,0,1,1,80-80A80.09041,80.09041,0,0,1,119.99023,200.001Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="-0.00195"
        y="0.00293"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99707 256.00684) rotate(180)"
        fill="none"
      />
      <circle
        cx="119.99805"
        cy="120.00293"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="182.22525"
        y1="182.22965"
        x2="223.99902"
        y2="224.00342"
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
        y="0.00293"
        width="256.00098"
        height="256.00098"
        transform="translate(255.99902 256.00684) rotate(180)"
        fill="none"
      />
      <circle
        cx="119.99902"
        cy="120.00293"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="182.22623"
        y1="182.22965"
        x2="224"
        y2="224.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        y="0.00293"
        width="256.00098"
        height="256.00098"
        transform="translate(256.00098 256.00684) rotate(180)"
        fill="none"
      />
      <circle
        cx="120"
        cy="120.00293"
        r="87.98531"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="182.22721"
        y1="182.22965"
        x2="224.00098"
        y2="224.00342"
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
  name: "PhMagnifyingGlass",
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
