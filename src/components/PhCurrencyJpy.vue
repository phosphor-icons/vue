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
      <line
        x1="80"
        y1="176"
        x2="176"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <g>
        <line
          x1="128"
          y1="136"
          x2="128"
          y2="216"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
        <polyline
          points="200 48 128 136 56 48"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <line
        x1="80"
        y1="168"
        x2="176"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <g>
        <line
          x1="128"
          y1="136"
          x2="128"
          y2="216"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <polyline
          points="200 48 128 136 56 48"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M206.19141,53.06592,144.88184,128H176a8,8,0,0,1,0,16H136v16h40a8,8,0,0,1,0,16H136v40a8,8,0,0,1-16,0V176H80a8,8,0,0,1,0-16h40V144H80a8,8,0,0,1,0-16h31.11816L49.80859,53.06592A7.99982,7.99982,0,1,1,62.19141,42.93408L128,123.3667l65.80859-80.43262a7.99982,7.99982,0,1,1,12.38282,10.13184Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="80"
        y1="168"
        x2="176"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <g>
        <line
          x1="128"
          y1="136"
          x2="128"
          y2="216"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
        <polyline
          points="200 48 128 136 56 48"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="80"
        y1="168"
        x2="176"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <g>
        <line
          x1="128"
          y1="136"
          x2="128"
          y2="216"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
        <polyline
          points="200 48 128 136 56 48"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="80"
        y1="168"
        x2="176"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <g>
        <line
          x1="128"
          y1="136"
          x2="128"
          y2="216"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <polyline
          points="200 48 128 136 56 48"
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
  name: "PhCurrencyJpy",
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
