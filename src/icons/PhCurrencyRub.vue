/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCurrencyRub"
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
<g v-if="displayWeight === 'bold'"><path d="M148,156a64,64,0,0,0,0-128H88A12,12,0,0,0,76,40v92H56a12,12,0,0,0,0,24H76v16H56a12,12,0,0,0,0,24H76v20a12,12,0,0,0,24,0V196h44a12,12,0,0,0,0-24H100V156ZM100,52h48a40,40,0,0,1,0,80H100Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M200,92a52,52,0,0,1-52,52H88V40h60A52,52,0,0,1,200,92Z" opacity="0.2"/><path d="M148,152a60,60,0,0,0,0-120H88a8,8,0,0,0-8,8v96H56a8,8,0,0,0,0,16H80v16H56a8,8,0,0,0,0,16H80v32a8,8,0,0,0,16,0V184h48a8,8,0,0,0,0-16H96V152ZM96,48h52a44,44,0,0,1,0,88H96Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M176,108a28,28,0,0,1-28,28H112V80h36A28,28,0,0,1,176,108Zm56,20A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-40-20a44.05,44.05,0,0,0-44-44H104a8,8,0,0,0-8,8v64H80a8,8,0,0,0,0,16H96v16H80a8,8,0,0,0,0,16H96v16a8,8,0,0,0,16,0V184h40a8,8,0,0,0,0-16H112V152h36A44.05,44.05,0,0,0,192,108Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M148,150a58,58,0,0,0,0-116H88a6,6,0,0,0-6,6v98H56a6,6,0,0,0,0,12H82v20H56a6,6,0,0,0,0,12H82v34a6,6,0,0,0,12,0V182h50a6,6,0,0,0,0-12H94V150ZM94,46h54a46,46,0,0,1,0,92H94Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M148,152a60,60,0,0,0,0-120H88a8,8,0,0,0-8,8v96H56a8,8,0,0,0,0,16H80v16H56a8,8,0,0,0,0,16H80v32a8,8,0,0,0,16,0V184h48a8,8,0,0,0,0-16H96V152ZM96,48h52a44,44,0,0,1,0,88H96Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M148,36H88a4,4,0,0,0-4,4V140H56a4,4,0,0,0,0,8H84v24H56a4,4,0,0,0,0,8H84v36a4,4,0,0,0,8,0V180h52a4,4,0,0,0,0-8H92V148h56a56,56,0,0,0,0-112Zm0,104H92V44h56a48,48,0,0,1,0,96Z"/></g>
  </svg>
</template>
