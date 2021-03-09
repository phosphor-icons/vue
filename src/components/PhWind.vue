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
        d="M102.11138,51.99974A24.0001,24.0001,0,1,1,120,92H24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M190.11128,91.99985A24.0001,24.0001,0,1,1,208,132H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M134.11121,212.00007A24.0001,24.0001,0,1,0,152,172H40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M184,184a32.00415,32.00415,0,0,1-62.01855,11.10449,8.00013,8.00013,0,1,1,15.00585-5.55273A16.00278,16.00278,0,1,0,152,168H40a8,8,0,0,1,0-16H152A32.03635,32.03635,0,0,1,184,184Zm-64-80A32,32,0,1,0,89.98145,60.89551a8.00013,8.00013,0,1,0,15.00585,5.55273A16.00278,16.00278,0,1,1,120,88H24a8,8,0,0,0,0,16Zm88-32a32.13165,32.13165,0,0,0-30.01855,20.89551,8.00013,8.00013,0,1,0,15.00585,5.55273A16.00278,16.00278,0,1,1,208,120H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
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
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhWind",
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
