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
      <polyline
        points="120 176 168 224 216 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polyline
        points="120 176 168 224 216 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M221.65723,170.34326a8.00122,8.00122,0,0,0-11.31446,0L176,204.68652V88A64,64,0,0,0,48,88v88a8,8,0,0,0,16,0V88a48,48,0,0,1,96,0V204.68652l-34.34277-34.34326a8.00018,8.00018,0,0,0-11.31446,11.31348l48,48c.01612.01611.03394.0293.05.04541.17163.1687.34961.33105.53589.48389.09448.07763.19385.145.291.21777.11206.08374.22143.17041.33789.24853.11474.07666.23388.14331.3518.21363.1062.06347.21.13012.31934.18872.11987.06421.24341.11865.366.17627.11425.05395.22656.11084.34375.15942.11816.04907.23877.08862.35888.13159.12647.04541.25122.09375.38062.13306.11963.03613.24121.06274.3623.093.13184.0332.262.07031.39624.09692.14087.02783.283.04443.42481.0647.11645.0166.23095.03882.34912.05029.26245.02588.52588.04.78955.04s.5271-.01416.78955-.04c.11816-.01147.23267-.03369.34912-.05029.14185-.02027.28394-.03687.42481-.0647.13427-.02661.2644-.06372.39624-.09692.12109-.03028.24267-.05689.3623-.093.1294-.03931.25415-.08765.38062-.13306.12011-.043.24072-.08252.35888-.13159.11719-.04858.2295-.10547.34375-.15942.12256-.05762.2461-.11206.366-.17627.10938-.0586.21313-.12525.31934-.18872.11792-.07032.23706-.137.3518-.21363.11646-.07812.22583-.16479.33789-.24853.09717-.07276.19654-.14014.291-.21777.18628-.15284.36426-.31519.53589-.48389.01611-.01611.03393-.0293.05-.04541l48-48A8,8,0,0,0,221.65723,170.34326Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="120 176 168 224 216 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="120 176 168 224 216 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="120 176 168 224 216 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224"
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
  },
});
export default component;
</script>
