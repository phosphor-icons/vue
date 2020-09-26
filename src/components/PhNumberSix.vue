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
      <path
        d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="79.50573"
        y1="139.97912"
        x2="141.85014"
        y2="31.98842"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="79.50573"
        y1="139.97912"
        x2="141.85014"
        y2="31.98842"
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
        d="M189.81543,151.415a63.99579,63.99579,0,0,0-78.37988-45.25513c-1.30127.34863-2.57886.74927-3.845,1.17359L148.7793,35.98828a8.00032,8.00032,0,0,0-13.85743-7.99951L72.57715,135.97925a64.04261,64.04261,0,0,0,55.31933,96.0271,64.36221,64.36221,0,0,0,16.667-2.208,63.999,63.999,0,0,0,45.25195-78.3833Zm-20.25,40.564a48.00237,48.00237,0,1,1,4.79492-36.42285A47.67844,47.67844,0,0,1,169.56543,191.979Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="79.50573"
        y1="139.97912"
        x2="141.85014"
        y2="31.98842"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="79.50573"
        y1="139.97912"
        x2="141.85014"
        y2="31.98842"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="79.50573"
        y1="139.97912"
        x2="141.85014"
        y2="31.98842"
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
  name: "PhNumberSix",
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
