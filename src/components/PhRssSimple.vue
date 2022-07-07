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
        d="M56,48A152.1,152.1,0,0,1,208,200"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="56" cy="200" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M56,48A152.1,152.1,0,0,1,208,200"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="56" cy="200" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M216,200a8,8,0,0,1-16,0c0-79.4-64.6-144-144-144a8,8,0,0,1,0-16C144.2,40,216,111.8,216,200ZM56,112a8,8,0,0,0,0,16,72.1,72.1,0,0,1,72,72,8,8,0,0,0,16,0A88.1,88.1,0,0,0,56,112Zm0,76a12,12,0,1,0,12,12A12,12,0,0,0,56,188Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M56,48A152.1,152.1,0,0,1,208,200"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="56" cy="200" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M56,48A152.1,152.1,0,0,1,208,200"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="56" cy="200" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M56,48A152.1,152.1,0,0,1,208,200"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,120a80,80,0,0,1,80,80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="56" cy="200" r="12" />
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
  name: "PhRssSimple",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight || contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size || contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color || contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored || contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
