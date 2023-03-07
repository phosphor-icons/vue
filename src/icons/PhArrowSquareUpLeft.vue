/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowSquareUpLeft"
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
<g v-if="displayWeight === 'bold'"><path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM84,144V96A12,12,0,0,1,96,84h48a12,12,0,0,1,0,24H125l43.52,43.51a12,12,0,0,1-17,17L108,125v19a12,12,0,0,1-24,0Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208ZM88,144V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31l50.35,50.34a8,8,0,0,1-11.32,11.32L104,115.31V144a8,8,0,0,1-16,0Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM165.66,165.66a8,8,0,0,1-11.32,0L104,115.31V144a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31l50.35,50.34A8,8,0,0,1,165.66,165.66Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-45.76-52.24a6,6,0,1,1-8.48,8.48L102,110.48V144a6,6,0,0,1-12,0V96a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H110.48Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208ZM88,144V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31l50.35,50.34a8,8,0,0,1-11.32,11.32L104,115.31V144a8,8,0,0,1-16,0Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-49.17-50.83a4,4,0,0,1-5.66,5.66L100,105.66V144a4,4,0,0,1-8,0V96a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H105.66Z"/></g>
  </svg>
</template>
