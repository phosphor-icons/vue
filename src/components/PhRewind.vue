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
    <g v-if="displayWeight === 'bold'">
      <rect width="256" height="256" fill="none" />
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
      <polygon
        points="176 160 128 128 176 96 176 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="112 160 64 128 112 96 112 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon points="176 160 128 128 176 96 176 160" />
      <polygon points="112 160 64 128 112 96 112 160" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
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
      <polygon
        points="176 160 128 128 176 96 176 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="112 160 64 128 112 96 112 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M24,128A104,104,0,1,0,128,24,104.11791,104.11791,0,0,0,24,128Zm32,0a7.99943,7.99943,0,0,1,3.5625-6.65625l48-32A8.00016,8.00016,0,0,1,120,96v32a7.99943,7.99943,0,0,1,3.5625-6.65625l48-32A8.00016,8.00016,0,0,1,184,96v64a7.99975,7.99975,0,0,1-12.4375,6.65625l-48-32A7.99943,7.99943,0,0,1,120,128v32a7.99975,7.99975,0,0,1-12.4375,6.65625l-48-32A7.99943,7.99943,0,0,1,56,128Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
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
      <polygon
        points="172 160 124 128 172 96 172 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="116 160 68 128 116 96 116 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
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
      <polygon
        points="172 160 124 128 172 96 172 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="116 160 68 128 116 96 116 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect width="256" height="256" fill="none" />
      <rect width="256" height="256" fill="none" />
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
      <polygon
        points="176 160 128 128 176 96 176 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="112 160 64 128 112 96 112 160"
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
  name: "PhRewind",
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
