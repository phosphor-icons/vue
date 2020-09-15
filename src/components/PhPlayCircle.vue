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
      <g>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
        <path
          d="M166.65625,118.01562l-48-32A12.00384,12.00384,0,0,0,100,96v64a11.99961,11.99961,0,0,0,18.65625,9.98437l48-32a11.99938,11.99938,0,0,0,0-19.96875Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="128" cy="128" r="96" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <polygon
        points="160 128 112 96 112 160 160 128"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <g>
        <rect width="256" height="256" fill="none" />
        <rect width="256" height="256" fill="none" />
        <path
          d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36.4375,110.65625-48,32A7.99612,7.99612,0,0,1,104,160V96a7.99612,7.99612,0,0,1,12.4375-6.65625l48,32a7.99959,7.99959,0,0,1,0,13.3125Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <g>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
        <path
          d="M163.32812,123.00781l-48-32A6.00193,6.00193,0,0,0,106,96v64a5.99981,5.99981,0,0,0,9.32812,4.99219l48-32a5.99969,5.99969,0,0,0,0-9.98438Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <g>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
        <path
          d="M162.21875,124.67187l-48-32A4.00114,4.00114,0,0,0,108,96v64a3.99987,3.99987,0,0,0,6.21875,3.32812l48-32a3.99979,3.99979,0,0,0,0-6.65625Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <g>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          :stroke="displayColor"
          stroke-miterlimit="10"
          stroke-width="16"
        />
        <polygon
          points="160 128 112 96 112 160 160 128"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
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
  name: "PhPlayCircle",
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
