/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhSupersetOf"
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
<g v-if="displayWeight === 'bold'"><path d="M220,200a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24H208A12,12,0,0,1,220,200Zm-68-52H56a12,12,0,0,0,0,24h96a68,68,0,0,0,0-136H56a12,12,0,0,0,0,24h96a44,44,0,0,1,0,88Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M208,104a56,56,0,0,1-56,56H56V48h96A56,56,0,0,1,208,104Z" opacity="0.2"/><path d="M216,200a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200Zm-64-48H56a8,8,0,0,0,0,16h96a64,64,0,0,0,0-128H56a8,8,0,0,0,0,16h96a48,48,0,0,1,0,96Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm-32-32H80a8,8,0,0,1,0-16h64a24,24,0,0,0,0-48H80a8,8,0,0,1,0-16h64a40,40,0,0,1,0,80Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M214,200a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H208A6,6,0,0,1,214,200Zm-62-46H56a6,6,0,0,0,0,12h96a62,62,0,0,0,0-124H56a6,6,0,0,0,0,12h96a50,50,0,0,1,0,100Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M216,200a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200Zm-64-48H56a8,8,0,0,0,0,16h96a64,64,0,0,0,0-128H56a8,8,0,0,0,0,16h96a48,48,0,0,1,0,96Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M212,200a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H208A4,4,0,0,1,212,200Zm-60-44H56a4,4,0,0,0,0,8h96a60,60,0,0,0,0-120H56a4,4,0,0,0,0,8h96a52,52,0,0,1,0,104Z"/></g>
  </svg>
</template>
