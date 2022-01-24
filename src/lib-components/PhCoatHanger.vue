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
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M241.6,171.2,141.3,96l23.5-17.6A8.1,8.1,0,0,0,168,72a40,40,0,0,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.7-3.8L123.3,89.5l-.2.2L14.4,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM24,184l104-78,104,78H24Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
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
} from "../types";

export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhCoatHanger",
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
