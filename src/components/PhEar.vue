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
        d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M178.3,160a20,20,0,0,1-38.3-8c0-24,28-24,28-48a40,40,0,0,0-80,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0C208,144,209,169,161.9,216Z"
        opacity="0.2"
      />
      <path
        d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M188,152a28,28,0,0,1-56,0c0-15.7,9.3-23.7,16.8-30.1S160,111.9,160,104a32,32,0,0,0-64,0,8,8,0,0,1-16,0,48,48,0,0,1,96,0c0,15.7-9.3,23.7-16.8,30.1S148,144.1,148,152a12,12,0,0,0,24,0,8,8,0,0,1,16,0ZM128,16a88.1,88.1,0,0,0-88,88c0,33.5,12.5,45.5,22.5,55.2,7.8,7.5,13.5,13,13.5,28.8a52,52,0,0,0,92.1,33.1,8.1,8.1,0,0,0-1.1-11.3,7.9,7.9,0,0,0-11.2,1.1A36,36,0,0,1,92,188c0-22.6-9.8-32-18.4-40.4S56,130.7,56,104a72,72,0,0,1,144,0,8,8,0,0,0,16,0A88.1,88.1,0,0,0,128,16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0"
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
  name: "PhEar",
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
