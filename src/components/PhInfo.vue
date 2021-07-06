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
      <g opacity="0.1">
        <rect x="0.00146" width="256" height="256" fill="none" />
      </g>
      <circle
        cx="128.00146"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="120.001 124 128.001 124 128.001 176 136.001 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="126" cy="84" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <g opacity="0.1">
        <rect x="0.00244" width="256" height="256" fill="none" />
      </g>
      <circle cx="128.00244" cy="128" r="96" opacity="0.2" />
      <circle
        cx="128.00244"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="120.002 120 128.002 120 128.002 176 136.002 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="126.00244" cy="84" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <g opacity="0.1">
        <rect x="0.00195" width="256" height="256" fill="none" />
      </g>
      <path
        d="M128.00146,23.99963a104,104,0,1,0,104,104A104.11791,104.11791,0,0,0,128.00146,23.99963ZM126.002,72a12,12,0,1,1-12,12A12,12,0,0,1,126.002,72Zm9.99951,111.99963h-8a8.0004,8.0004,0,0,1-8-8v-48a8,8,0,1,1,0-16h8a8.00039,8.00039,0,0,1,8,8v48a8,8,0,0,1,0,16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <g opacity="0.1">
        <rect x="0.00098" width="256" height="256" fill="none" />
      </g>
      <circle
        cx="128.00098"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="120 120 128.001 120 128 176 136 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="126" cy="84" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <g opacity="0.1">
        <rect x="0.00049" width="256" height="256" fill="none" />
      </g>
      <circle
        cx="128.00049"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="120 120 128 120 128 176 136 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="126.00049" cy="84" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <g opacity="0.1"></g>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="120 120 128 120 128 176 136 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="126" cy="84" r="12" />
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
  name: "PhInfo",
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
