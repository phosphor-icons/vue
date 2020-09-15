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
      <g>
        <circle
          cx="76"
          cy="76"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
        <circle
          cx="180"
          cy="76"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
      </g>
      <g>
        <circle
          cx="76"
          cy="180"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
        <circle
          cx="180"
          cy="180"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <g opacity="0.2">
        <circle cx="76" cy="76" r="36" />
        <circle cx="180" cy="76" r="36" />
      </g>
      <g opacity="0.2">
        <circle cx="76" cy="180" r="36" />
        <circle cx="180" cy="180" r="36" />
      </g>
      <g>
        <circle
          cx="76"
          cy="76"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <circle
          cx="180"
          cy="76"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
      <g>
        <circle
          cx="76"
          cy="180"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <circle
          cx="180"
          cy="180"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <g>
        <circle
          cx="76"
          cy="76"
          r="36"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <circle
          cx="180"
          cy="76"
          r="36"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
      <g>
        <circle
          cx="76"
          cy="180"
          r="36"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <circle
          cx="180"
          cy="180"
          r="36"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <g>
        <circle
          cx="76"
          cy="76"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
        <circle
          cx="180"
          cy="76"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
      </g>
      <g>
        <circle
          cx="76"
          cy="180"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
        <circle
          cx="180"
          cy="180"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <g>
        <circle
          cx="76"
          cy="76"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
        <circle
          cx="180"
          cy="76"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
      </g>
      <g>
        <circle
          cx="76"
          cy="180"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
        <circle
          cx="180"
          cy="180"
          r="36"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect width="256" height="256" fill="none" />
      <g>
        <g>
          <circle
            cx="76"
            cy="76"
            r="36"
            fill="none"
            :stroke="displayColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <circle
            cx="180"
            cy="76"
            r="36"
            fill="none"
            :stroke="displayColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </g>
        <g>
          <circle
            cx="76"
            cy="180"
            r="36"
            fill="none"
            :stroke="displayColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <circle
            cx="180"
            cy="180"
            r="36"
            fill="none"
            :stroke="displayColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </g>
      </g>
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
  name: "PhCirclesFour",
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
