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
      <polygon
        points="72 40 184 40 240 104 128 224 16 104 72 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="177.1 104 128 224 78.9 104 128 40 177.1 104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="16"
        y1="104"
        x2="240"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon
        points="184 40 128 40 78.9 104 128 224 240 104 184 40"
        opacity="0.2"
      />
      <polygon
        points="72 40 184 40 240 104 128 224 16 104 72 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="177.1 104 128 224 78.9 104 128 40 177.1 104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="104"
        x2="240"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M246,98.7l-56-64a8,8,0,0,0-6-2.7H72a8,8,0,0,0-6,2.7l-56,64a8.1,8.1,0,0,0,.2,10.8l112,120a8,8,0,0,0,11.6,0l112-120A8.1,8.1,0,0,0,246,98.7ZM222.4,96H181L144.2,48h36.2ZM73.5,112l30.6,74.6L34.4,112Zm109,0h39.1l-69.7,74.6ZM75.6,48h36.2L75,96H33.6Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polygon
        points="72 40 184 40 240 104 128 224 16 104 72 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="177.1 104 128 224 78.9 104 128 40 177.1 104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="16"
        y1="104"
        x2="240"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polygon
        points="72 40 184 40 240 104 128 224 16 104 72 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="177.1 104 128 224 78.9 104 128 40 177.1 104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="16"
        y1="104"
        x2="240"
        y2="104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polygon
        points="72 40 184 40 240 104 128 224 16 104 72 40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="177.1 104 128 224 78.9 104 128 40 177.1 104"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="104"
        x2="240"
        y2="104"
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
  name: "PhSketchLogo",
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
