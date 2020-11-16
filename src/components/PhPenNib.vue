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
  >
    <g v-if="displayWeight === 'bold'">
  
  <line x1="128.00001" y1="144" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128.00001" cy="120" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  
  <path d="M184,32H72a111.5987,111.5987,0,0,1-29.54346,75.7959L128,240l85.543-132.20459A111.59817,111.59817,0,0,1,184,32ZM128,144a24,24,0,1,1,24-24A23.99994,23.99994,0,0,1,128,144Z" opacity="0.2"/>
  <line x1="128.00001" y1="144" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128.00001" cy="120" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  
  <g>
    <path d="M219.43164,102.37988A103.69573,103.69573,0,0,1,192,32.0937,8.04,8.04,0,0,0,184,24H72a8.03995,8.03995,0,0,0-8,8.09369,103.69821,103.69821,0,0,1-27.4316,70.28717,8,8,0,0,0-.82813,9.76123l76.90148,118.84827A4,4,0,0,0,120,228.81736V150.9873a32,32,0,1,1,16,0v77.83a4,4,0,0,0,7.35829,2.173L220.25977,112.1416A8.00061,8.00061,0,0,0,219.43164,102.37988Z"/>
    <circle cx="128" cy="120" r="16"/>
  </g>
</g>
    <g v-else-if="displayWeight === 'light'">
  
  <line x1="128.00001" y1="144" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128.00001" cy="120" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  
  <line x1="128.00001" y1="144" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128.00001" cy="120" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  
  <line x1="128.00001" y1="144" x2="128.00001" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128.00001" cy="120" r="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter,
} from "@/lib/types";
export default defineComponent({
  name: "PhPenNib",
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
