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
        d="M56,48A152,152,0,0,1,208,200"
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
        d="M55.99414,48a152,152,0,0,1,152,152"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M55.99414,120a80,80,0,0,1,80,80"
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
        d="M215.99414,199.99963a8,8,0,0,1-16,0c0-79.40234-64.59814-144-144-144a8,8,0,0,1,0-16C144.21826,39.99963,215.99414,111.775,215.99414,199.99963Zm-160-88a8,8,0,1,0,0,16,72.08124,72.08124,0,0,1,72,72,8,8,0,0,0,16,0A88.09957,88.09957,0,0,0,55.99414,111.99963Zm0,76a12,12,0,1,0,12,12A12.01344,12.01344,0,0,0,55.99414,187.99963Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M56,48A152,152,0,0,1,208,200"
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
        d="M56,48A152,152,0,0,1,208,200"
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
        d="M56,48A152,152,0,0,1,208,200"
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
