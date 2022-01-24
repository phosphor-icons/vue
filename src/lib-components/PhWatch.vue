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
        r="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="128 96 128 128 160 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,68.1l7-45.3a8,8,0,0,1,7.9-6.8h50.2a8,8,0,0,1,7.9,6.8l7,45.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,187.9l7,45.3a8,8,0,0,0,7.9,6.8h50.2a8,8,0,0,0,7.9-6.8l7-45.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="128" cy="128" r="72" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="72"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <polyline
        points="128 88 128 128 168 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,68.1l6.8-37.5a8,8,0,0,1,7.9-6.6h50.6a8,8,0,0,1,7.9,6.6L168,68.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,187.9l6.8,37.5a8,8,0,0,0,7.9,6.6h50.6a8,8,0,0,0,7.9-6.6l6.8-37.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M175.3,63.5l-6.2-34.4A16,16,0,0,0,153.3,16H102.7A16,16,0,0,0,86.9,29.1L80.7,63.5a80,80,0,0,0,0,129l6.2,34.4A16,16,0,0,0,102.7,240h50.6a16,16,0,0,0,15.8-13.1l6.2-34.4a80,80,0,0,0,0-129ZM102.7,32h50.6l3.9,21.6a78.9,78.9,0,0,0-58.4,0Zm50.6,192H102.7l-3.9-21.6a78.9,78.9,0,0,0,58.4,0ZM168,136H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="128"
        cy="128"
        r="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="128 88 128 128 168 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88,68.1l6.8-37.5a8,8,0,0,1,7.9-6.6h50.6a8,8,0,0,1,7.9,6.6L168,68.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88,187.9l6.8,37.5a8,8,0,0,0,7.9,6.6h50.6a8,8,0,0,0,7.9-6.6l6.8-37.5"
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
        r="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="128 88 128 128 168 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88,68.1l6.8-37.5a8,8,0,0,1,7.9-6.6h50.6a8,8,0,0,1,7.9,6.6L168,68.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88,187.9l6.8,37.5a8,8,0,0,0,7.9,6.6h50.6a8,8,0,0,0,7.9-6.6l6.8-37.5"
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
        r="72"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <polyline
        points="128 88 128 128 168 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,68.1l6.8-37.5a8,8,0,0,1,7.9-6.6h50.6a8,8,0,0,1,7.9,6.6L168,68.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,187.9l6.8,37.5a8,8,0,0,0,7.9,6.6h50.6a8,8,0,0,0,7.9-6.6l6.8-37.5"
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
  name: "PhWatch",
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
