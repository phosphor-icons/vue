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
        cx="74"
        cy="182"
        r="26"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="182"
        cy="182"
        r="26"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="100"
        y1="182"
        x2="156"
        y2="182"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="12"
        y1="120"
        x2="244"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M40,120,89.3,49.6a8,8,0,0,1,13.2.1L121.3,78a8,8,0,0,0,13.4,0l18.8-28.3a8,8,0,0,1,13.2-.1L216,120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="76" cy="180" r="28" opacity="0.2" />
      <circle cx="180" cy="180" r="28" opacity="0.2" />
      <path
        d="M40,120,89.3,49.6a8,8,0,0,1,13.2.1L121.3,78a8,8,0,0,0,13.4,0l18.8-28.3a8,8,0,0,1,13.2-.1L216,120Z"
        opacity="0.2"
      />
      <circle
        cx="76"
        cy="180"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="104"
        y1="180"
        x2="152"
        y2="180"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="8"
        y1="120"
        x2="248"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,120,89.3,49.6a8,8,0,0,1,13.2.1L121.3,78a8,8,0,0,0,13.4,0l18.8-28.3a8,8,0,0,1,13.2-.1L216,120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M216,180a36,36,0,0,1-71.1,8H111.1a36,36,0,1,1,0-16h33.8a36,36,0,0,1,71.1,8Zm32-68H220.2L173.3,45a16.1,16.1,0,0,0-26.5.3L128,73.6,109.2,45.3A16.1,16.1,0,0,0,82.7,45L35.8,112H8a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="76"
        cy="180"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="104"
        y1="180"
        x2="152"
        y2="180"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="8"
        y1="120"
        x2="248"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M40,120,89.3,49.6a8,8,0,0,1,13.2.1L121.3,78a8,8,0,0,0,13.4,0l18.8-28.3a8,8,0,0,1,13.2-.1L216,120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="76"
        cy="180"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="104"
        y1="180"
        x2="152"
        y2="180"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="8"
        y1="120"
        x2="248"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M40,120,89.3,49.6a8,8,0,0,1,13.2.1L121.3,78a8,8,0,0,0,13.4,0l18.8-28.3a8,8,0,0,1,13.2-.1L216,120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="76"
        cy="180"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="104"
        y1="180"
        x2="152"
        y2="180"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="8"
        y1="120"
        x2="248"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,120,89.3,49.6a8,8,0,0,1,13.2.1L121.3,78a8,8,0,0,0,13.4,0l18.8-28.3a8,8,0,0,1,13.2-.1L216,120"
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
  name: "PhDetective",
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
