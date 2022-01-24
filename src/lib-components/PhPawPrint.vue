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
        d="M183.2,155.9a43.6,43.6,0,0,1-20.6-26h0a36,36,0,0,0-69.2,0h0a43.6,43.6,0,0,1-20.6,26A32,32,0,0,0,88,216a32.4,32.4,0,0,0,12.5-2.5,71.8,71.8,0,0,1,55,0A32.4,32.4,0,0,0,168,216a32,32,0,0,0,15.2-60.1Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="208" cy="104" r="24" />
      <circle cx="48" cy="104" r="24" />
      <circle cx="96" cy="56" r="24" />
      <circle cx="160" cy="56" r="24" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="212" cy="108" r="20" opacity="0.2" />
      <circle cx="44" cy="108" r="20" opacity="0.2" />
      <circle cx="92" cy="60" r="20" opacity="0.2" />
      <circle cx="164" cy="60" r="20" opacity="0.2" />
      <path
        d="M183.2,155.9a43.6,43.6,0,0,1-20.6-26h0a36,36,0,0,0-69.2,0h0a43.6,43.6,0,0,1-20.6,26A32,32,0,0,0,88,216a32.4,32.4,0,0,0,12.5-2.5,71.8,71.8,0,0,1,55,0A32.4,32.4,0,0,0,168,216a32,32,0,0,0,15.2-60.1Z"
        opacity="0.2"
      />
      <circle
        cx="212"
        cy="108"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="44"
        cy="108"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="92"
        cy="60"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="164"
        cy="60"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M183.2,155.9a43.6,43.6,0,0,1-20.6-26h0a36,36,0,0,0-69.2,0h0a43.6,43.6,0,0,1-20.6,26A32,32,0,0,0,88,216a32.4,32.4,0,0,0,12.5-2.5,71.8,71.8,0,0,1,55,0A32.4,32.4,0,0,0,168,216a32,32,0,0,0,15.2-60.1Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M240,108a28,28,0,1,1-28-28A28.1,28.1,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28.1,28.1,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28.1,28.1,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28.1,28.1,0,0,0,164,88Zm23.1,60.8a35.3,35.3,0,0,1-16.9-21.1,43.9,43.9,0,0,0-84.4,0A35.5,35.5,0,0,1,69,148.8,40,40,0,0,0,88,224a40.5,40.5,0,0,0,15.5-3.1,64.2,64.2,0,0,1,48.9-.1A39.6,39.6,0,0,0,168,224a40,40,0,0,0,19.1-75.2Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="212"
        cy="108"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="44"
        cy="108"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="92"
        cy="60"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="164"
        cy="60"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M183.2,155.9a43.6,43.6,0,0,1-20.6-26h0a36,36,0,0,0-69.2,0h0a43.6,43.6,0,0,1-20.6,26A32,32,0,0,0,88,216a32.4,32.4,0,0,0,12.5-2.5,71.8,71.8,0,0,1,55,0A32.4,32.4,0,0,0,168,216a32,32,0,0,0,15.2-60.1Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="212"
        cy="108"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="44"
        cy="108"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="92"
        cy="60"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="164"
        cy="60"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M183.2,155.9a43.6,43.6,0,0,1-20.6-26h0a36,36,0,0,0-69.2,0h0a43.6,43.6,0,0,1-20.6,26A32,32,0,0,0,88,216a32.4,32.4,0,0,0,12.5-2.5,71.8,71.8,0,0,1,55,0A32.4,32.4,0,0,0,168,216a32,32,0,0,0,15.2-60.1Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="212"
        cy="108"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="44"
        cy="108"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="92"
        cy="60"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="164"
        cy="60"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M183.2,155.9a43.6,43.6,0,0,1-20.6-26h0a36,36,0,0,0-69.2,0h0a43.6,43.6,0,0,1-20.6,26A32,32,0,0,0,88,216a32.4,32.4,0,0,0,12.5-2.5,71.8,71.8,0,0,1,55,0A32.4,32.4,0,0,0,168,216a32,32,0,0,0,15.2-60.1Z"
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
  name: "PhPawPrint",
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
