/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhBook"
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
<g v-if="displayWeight === 'bold'"><path d="M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM196,172H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H196Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32Z" opacity="0.2"/><path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M216,32V192a8,8,0,0,1-8,8H72a16,16,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V56A32,32,0,0,1,72,24H208A8,8,0,0,1,216,32Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26Zm-6,160H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38H202Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M208,28H72A28,28,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20,20,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-4,160H72a27.94,27.94,0,0,0-20,8.42V56A20,20,0,0,1,72,36H204Z"/></g>
  </svg>
</template>
