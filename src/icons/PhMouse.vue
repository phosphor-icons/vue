/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhMouse"
}
</script>

<script lang="ts" setup>
import { computed, inject, PropType } from "vue";

const props = defineProps({
  weight: {
    type: String as PropType<"thin" | "light" | "regular" | "bold" | "fill" | "duotone">
  },
  size: {
    type: [String, Number]
  },
  color: {
    type: String
  },
  mirrored: {
    type: Boolean
  },
})

const contextWeight = inject("weight", "regular")
const contextSize = inject("size", "1em")
const contextColor = inject("color", "currentColor")
const contextMirrored = inject("mirrored", false)

const displayWeight = computed(() => props.weight ?? contextWeight)
const displaySize = computed(() => props.size ?? contextSize)
const displayColor = computed(() => props.color ?? contextColor)
const displayMirrored = computed(() => (props.mirrored !== undefined ? (props.mirrored ? "scale(-1, 1)" : undefined) : (contextMirrored ? "scale(-1, 1)" : undefined)))
</script>

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
    <slot />
<g v-if="displayWeight === 'bold'"><path d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H140V36h4A44.05,44.05,0,0,1,188,80ZM112,36h4v64H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H188v52A44.05,44.05,0,0,1,144,220Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M128,24v88H56V80a56,56,0,0,1,56-56Z" opacity="0.2"/><path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H134V30h10A50.06,50.06,0,0,1,194,80ZM112,30h10v76H62V80A50.06,50.06,0,0,1,112,30Zm32,196H112a50.06,50.06,0,0,1-50-50V118H194v58A50.06,50.06,0,0,1,144,226Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,60v28H132V28h12A52.06,52.06,0,0,1,196,80ZM112,28h12v80H60V80A52.06,52.06,0,0,1,112,28Zm32,200H112a52.06,52.06,0,0,1-52-52V116H196v60A52.06,52.06,0,0,1,144,228Z"/></g>
  </svg>
</template>
