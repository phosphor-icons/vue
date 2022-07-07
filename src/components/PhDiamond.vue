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
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        opacity="0.2"
      />
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M236,139.3,139.3,236a15.9,15.9,0,0,1-22.6,0L20,139.3a16.1,16.1,0,0,1,0-22.6L116.7,20a16.1,16.1,0,0,1,22.6,0L236,116.7A16.1,16.1,0,0,1,236,139.3Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="51.6"
        y="51.6"
        width="152.7"
        height="152.74"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
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
  name: "PhDiamond",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight || contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size || contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color || contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored || contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
