/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="size"
    :height="size"
    :fill="color"
    :transform="mirrored ? 'scale(-1, 1)' : undefined"
    v-bind="$attrs"
  >
    <slot />
    <g v-if="weight === 'bold'">
      <path
        d="M102.11138,51.99974A24.0001,24.0001,0,1,1,120,92H24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M190.11128,91.99985A24.0001,24.0001,0,1,1,208,132H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M134.11121,212.00007A24.0001,24.0001,0,1,0,152,172H40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M184,184a32.00415,32.00415,0,0,1-62.01855,11.10449,8.00013,8.00013,0,1,1,15.00585-5.55273A16.00278,16.00278,0,1,0,152,168H40a8,8,0,0,1,0-16H152A32.03635,32.03635,0,0,1,184,184Zm-64-80A32,32,0,1,0,89.98145,60.89551a8.00013,8.00013,0,1,0,15.00585,5.55273A16.00278,16.00278,0,1,1,120,88H24a8,8,0,0,0,0,16Zm88-32a32.13165,32.13165,0,0,0-30.01855,20.89551,8.00013,8.00013,0,1,0,15.00585,5.55273A16.00278,16.00278,0,1,1,208,120H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SetupIconProps, PropValidator, PhosphorIcon } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

const component: PhosphorIcon = defineComponent({
  props: PropValidator,
  setup(props: SetupIconProps) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
export default component;
</script>
