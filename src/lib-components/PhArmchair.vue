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
      <line
        x1="92"
        y1="136"
        x2="164"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M164,164V128a40,40,0,1,1,44,39.8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V167.8A40,40,0,1,1,92,128v36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M48,88.2V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V88.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M208,160v40a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V160h0a32,32,0,0,1,0-64V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96a32,32,0,0,1,0,64Z"
        opacity="0.2"
      />
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M216,159v41a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V159a32,32,0,1,1,40-31v40a8,8,0,0,0,16,0V136h64v32a8,8,0,0,0,16,0V128a32,32,0,1,1,40,31ZM95.3,120h65.4A48,48,0,0,1,208,80h3.7a3.9,3.9,0,0,0,4.3-3.9V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72v4.2a3.9,3.9,0,0,0,4.3,3.9H48A48,48,0,0,1,95.3,120Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,168V128a32,32,0,1,0-32,32h0v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160h0a32,32,0,1,0-32-32v40"
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
  name: "PhArmchair",
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
