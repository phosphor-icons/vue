/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhAlignCenterHorizontalSimple"
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
<g v-if="displayWeight === 'bold'"><path d="M208,76H140V48a12,12,0,0,0-24,0V76H48A20,20,0,0,0,28,96v64a20,20,0,0,0,20,20h68v28a12,12,0,0,0,24,0V180h68a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,80H52V100H204Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,96v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z" opacity="0.2"/><path d="M208,80H136V48a8,8,0,0,0-16,0V80H48A16,16,0,0,0,32,96v64a16,16,0,0,0,16,16h72v32a8,8,0,0,0,16,0V176h72a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,80H48V96H208v64Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M224,96v64a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V176H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80h72V48a8,8,0,0,1,16,0V80h72A16,16,0,0,1,224,96Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M208,82H134V48a6,6,0,0,0-12,0V82H48A14,14,0,0,0,34,96v64a14,14,0,0,0,14,14h74v34a6,6,0,0,0,12,0V174h74a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,78a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M208,80H136V48a8,8,0,0,0-16,0V80H48A16,16,0,0,0,32,96v64a16,16,0,0,0,16,16h72v32a8,8,0,0,0,16,0V176h72a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,80H48V96H208v64Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M208,84H132V48a4,4,0,0,0-8,0V84H48A12,12,0,0,0,36,96v64a12,12,0,0,0,12,12h76v36a4,4,0,0,0,8,0V172h76a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,76a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/></g>
  </svg>
</template>
