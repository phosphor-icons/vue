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
      <ellipse
        cx="128"
        cy="80"
        rx="88"
        ry="48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <ellipse cx="128" cy="80" rx="88" ry="48" opacity="0.2" />
      <ellipse
        cx="128"
        cy="80"
        rx="88"
        ry="48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,24C74.2,24,32,48.6,32,80v96c0,31.4,42.2,56,96,56s96-24.6,96-56V80C224,48.6,181.8,24,128,24Zm80,104c0,9.6-7.9,19.4-21.6,26.9C170.9,163.4,150.2,168,128,168s-42.9-4.6-58.4-13.1C55.9,147.4,48,137.6,48,128V111.4C65.1,126.3,94.2,136,128,136s62.9-9.7,80-24.6Zm-21.6,74.9C170.9,211.4,150.2,216,128,216s-42.9-4.6-58.4-13.1C55.9,195.4,48,185.6,48,176V159.4C65.1,174.3,94.2,184,128,184s62.9-9.7,80-24.6V176C208,185.6,200.1,195.4,186.4,202.9Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <ellipse
        cx="128"
        cy="80"
        rx="88"
        ry="48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <ellipse
        cx="128"
        cy="80"
        rx="88"
        ry="48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <ellipse
        cx="128"
        cy="80"
        rx="88"
        ry="48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
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
  name: "PhDatabase",
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
