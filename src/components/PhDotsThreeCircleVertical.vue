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
      <circle cx="128" cy="100" r="16" />
      <circle cx="128" cy="156" r="16" />
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
      <circle cx="128" cy="128" r="12" />
      <circle cx="128" cy="80" r="12" />
      <circle cx="128" cy="176" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M232,128A104,104,0,1,0,128,232,104.12041,104.12041,0,0,0,232,128ZM116,80a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,80Zm0,48a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,128Zm0,48a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,176Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
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
      <circle cx="128" cy="80" r="10" />
      <circle cx="128" cy="128" r="10" />
      <circle cx="128" cy="176" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
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
      <circle cx="128" cy="80" r="8" />
      <circle cx="128" cy="128" r="8" />
      <circle cx="128" cy="176" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <circle cx="128" cy="128" r="12" />
      <circle cx="128" cy="80" r="12" />
      <circle cx="128" cy="176" r="12" />
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
  name: "PhDotsThreeCircleVertical",
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
