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
      <path
        d="M179.1,116.3a112.1,112.1,0,0,0-102.3.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M158.7,155.3A68.4,68.4,0,0,0,128,148a67.6,67.6,0,0,0-30.8,7.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="128" cy="128" r="96" opacity="0.2" />
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
      <path
        d="M179.1,108.3a112.1,112.1,0,0,0-102.3.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M164.3,136.7a79.9,79.9,0,0,0-72.7.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M149.5,165.1A47.3,47.3,0,0,0,128,160a48.7,48.7,0,0,0-21.6,5.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm28.6,144.7a8,8,0,0,1-10.7,3.5A39.6,39.6,0,0,0,128,168a39.1,39.1,0,0,0-18,4.3,8.6,8.6,0,0,1-3.6.8,8,8,0,0,1-3.6-15.1,55.3,55.3,0,0,1,25.2-6,56.1,56.1,0,0,1,25.1,5.9A8.1,8.1,0,0,1,156.6,168.7Zm14.8-28.3a7.9,7.9,0,0,1-10.7,3.4,72,72,0,0,0-65.4.1,8.4,8.4,0,0,1-3.7.9,7.9,7.9,0,0,1-7.1-4.4A8,8,0,0,1,88,129.6a87.9,87.9,0,0,1,79.9,0A8,8,0,0,1,171.4,140.4ZM186.2,112a7.9,7.9,0,0,1-10.7,3.4A104.3,104.3,0,0,0,128,104a103.2,103.2,0,0,0-47.6,11.5,7.7,7.7,0,0,1-3.6.9,8,8,0,0,1-3.7-15.1,120.2,120.2,0,0,1,109.7-.1A8,8,0,0,1,186.2,112Z"
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
      <path
        d="M179.1,108.3a112.1,112.1,0,0,0-102.3.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M164.3,136.7a79.9,79.9,0,0,0-72.7.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M149.5,165.1A47.3,47.3,0,0,0,128,160a48.7,48.7,0,0,0-21.6,5.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
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
      <path
        d="M179.1,108.3a112.1,112.1,0,0,0-102.3.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M164.3,136.7a79.9,79.9,0,0,0-72.7.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M149.5,165.1A47.3,47.3,0,0,0,128,160a48.7,48.7,0,0,0-21.6,5.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
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
      <path
        d="M179.1,108.3a112.1,112.1,0,0,0-102.3.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M164.3,136.7a79.9,79.9,0,0,0-72.7.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M149.5,165.1A47.3,47.3,0,0,0,128,160a48.7,48.7,0,0,0-21.6,5.1"
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
  name: "PhSpotifyLogo",
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
