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
        <line
          x1="128"
          y1="23.99627"
          x2="128"
          y2="183.99627"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
        <polyline
          points="56 111.996 128 183.996 200 111.996"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
      </g>
      <line
        x1="48"
        y1="215.99627"
        x2="208"
        y2="215.99627"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <g>
        <line
          x1="128"
          y1="23.99627"
          x2="128"
          y2="183.99627"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <polyline
          points="56 111.996 128 183.996 200 111.996"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
      <line
        x1="48"
        y1="215.99627"
        x2="208"
        y2="215.99627"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <g>
        <line
          x1="128"
          y1="23.99627"
          x2="128"
          y2="183.99627"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <polyline
          points="56 111.996 128 183.996 200 111.996"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
      <line
        x1="48"
        y1="215.99627"
        x2="208"
        y2="215.99627"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <g>
        <line
          x1="128"
          y1="23.99627"
          x2="128"
          y2="183.99627"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
        <polyline
          points="56 111.996 128 183.996 200 111.996"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
      </g>
      <line
        x1="48"
        y1="215.99627"
        x2="208"
        y2="215.99627"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <g>
        <line
          x1="128"
          y1="23.99627"
          x2="128"
          y2="183.99627"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
        <polyline
          points="56 111.996 128 183.996 200 111.996"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
      </g>
      <line
        x1="48"
        y1="215.99627"
        x2="208"
        y2="215.99627"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <g>
        <rect width="256" height="256" fill="none" />
        <g>
          <line
            x1="128"
            y1="23.99627"
            x2="128"
            y2="183.99627"
            fill="none"
            :stroke="displayColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <polyline
            points="56 111.996 128 183.996 200 111.996"
            fill="none"
            :stroke="displayColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </g>
        <line
          x1="48"
          y1="215.99627"
          x2="208"
          y2="215.99627"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
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
  name: "PhArrowDownLine",
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
