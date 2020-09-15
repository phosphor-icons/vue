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
        width="256.00098"
        height="256.00098"
        transform="translate(256.00098 256.00098) rotate(180)"
        fill="none"
      />
      <circle
        cx="120"
        cy="120"
        r="79.98664"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="176.56643"
        y1="176.56594"
        x2="216.00098"
        y2="216.00049"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="87.97656"
        y1="120"
        x2="151.97656"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect
        width="256.00098"
        height="256.00098"
        transform="translate(256.00098 256.00098) rotate(180)"
        fill="none"
      />
      <circle cx="120" cy="120" r="79.98664" opacity="0.2" />
      <circle
        cx="120"
        cy="120"
        r="79.98664"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="176.56643"
        y1="176.56594"
        x2="216.00098"
        y2="216.00049"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="87.96094"
        y1="120"
        x2="151.96094"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect
        width="256.00098"
        height="256.00098"
        transform="translate(256.00098 256.00098) rotate(180)"
        fill="none"
      />
      <path
        d="M227.30859,204.68689l-35.03613-35.04883c18.51856-27.084,21.3916-63.37109,3.92676-93.63086a87.95127,87.95127,0,1,0-32.20313,120.19532c2.02735-1.16993,3.67578-2.7129,5.57325-4.01758l35.11425,35.12695a15.99829,15.99829,0,0,0,22.625-22.625ZM151.9668,128.00525h-64a8,8,0,0,1,0-16h64a8,8,0,1,1,0,16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        width="256.00098"
        height="256.00098"
        transform="translate(256.00098 256.00098) rotate(180)"
        fill="none"
      />
      <circle
        cx="120"
        cy="120"
        r="79.98664"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="176.56643"
        y1="176.56594"
        x2="216.00098"
        y2="216.00049"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="87.98437"
        y1="120"
        x2="151.98437"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        width="256.00098"
        height="256.00098"
        transform="translate(256.00098 256.00098) rotate(180)"
        fill="none"
      />
      <circle
        cx="120"
        cy="120"
        r="79.98664"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="176.56643"
        y1="176.56594"
        x2="216.00098"
        y2="216.00049"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="87.99219"
        y1="120"
        x2="151.99219"
        y2="120"
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
        r="79.98664"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="176.56643"
        y1="176.56594"
        x2="216.00098"
        y2="216.00049"
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
