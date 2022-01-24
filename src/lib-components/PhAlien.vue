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
        d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M104,140a24.1,24.1,0,0,1-24-24v-4a24.1,24.1,0,0,1,24,24Z"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M152,140v-4a24.1,24.1,0,0,1,24-24v4a24.1,24.1,0,0,1-24,24Z"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="116"
        y1="184"
        x2="140"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M128,24a88,88,0,0,0-88,88c0,48.6,56,120,88,120s88-71.4,88-120A88,88,0,0,0,128,24ZM112,140a8,8,0,0,1-8,8,32,32,0,0,1-32-32v-4a8,8,0,0,1,8-8,32,32,0,0,1,32,32Zm72-24a32,32,0,0,1-32,32,8,8,0,0,1-8-8v-4a32,32,0,0,1,32-32,8,8,0,0,1,8,8Z"
        opacity="0.2"
      />
      <path
        d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,104h0a32,32,0,0,1,32,32v4a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v-4a8,8,0,0,1,8-8Z"
        transform="translate(184 252) rotate(-180)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M176,104h0a8,8,0,0,1,8,8v4a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v-4A32,32,0,0,1,176,104Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="112"
        y1="184"
        x2="144"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,16a96.2,96.2,0,0,0-96,96c0,24,12.6,55.1,33.6,83s44.5,45,62.4,45,41.2-16.8,62.4-45S224,136,224,112A96.2,96.2,0,0,0,128,16ZM64,116v-4a12,12,0,0,1,12-12,36,36,0,0,1,36,36v4a12,12,0,0,1-12,12A36,36,0,0,1,64,116Zm80,84H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm48-84a36,36,0,0,1-36,36,12,12,0,0,1-12-12v-4a36,36,0,0,1,36-36,12,12,0,0,1,12,12Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M80,104h0a32,32,0,0,1,32,32v4a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v-4A8,8,0,0,1,80,104Z"
        transform="translate(184 252) rotate(-180)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M176,104h0a8,8,0,0,1,8,8v4a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v-4a32,32,0,0,1,32-32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="112"
        y1="184"
        x2="144"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M80,104h0a32,32,0,0,1,32,32v4a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v-4a8,8,0,0,1,8-8Z"
        transform="translate(184 252) rotate(-180)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M176,104h0a8,8,0,0,1,8,8v4a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v-4a32,32,0,0,1,32-32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="112"
        y1="184"
        x2="144"
        y2="184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,104h0a32,32,0,0,1,32,32v4a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v-4a8,8,0,0,1,8-8Z"
        transform="translate(184 252) rotate(-180)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M176,104h0a8,8,0,0,1,8,8v4a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v-4a32,32,0,0,1,32-32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="112"
        y1="184"
        x2="144"
        y2="184"
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
  ContextGetter,
} from "../types";
export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhAlien",
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
    },
  },
});
</script>
