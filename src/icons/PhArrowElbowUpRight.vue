/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowElbowUpRight"
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
<g v-if="displayWeight === 'bold'"><path d="M224.49,88.49l-48,48a12,12,0,0,1-17-17L187,92H84V224a12,12,0,0,1-24,0V80A12,12,0,0,1,72,68H187L159.51,40.49a12,12,0,1,1,17-17l48,48A12,12,0,0,1,224.49,88.49Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,80l-48,48V32Z" opacity="0.2"/><path d="M221.66,74.34l-48-48A8,8,0,0,0,160,32V72H72a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V88h80v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,221.66,74.34ZM176,108.69V51.31L204.69,80Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M221.66,85.66l-48,48A8,8,0,0,1,160,128V88H80V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h88V32a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,221.66,85.66Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M220.24,84.24l-48,48a6,6,0,0,1-8.48-8.48L201.51,86H78V224a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H201.51L163.76,36.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,220.24,84.24Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M221.66,85.66l-48,48a8,8,0,0,1-11.32-11.32L196.69,88H80V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H196.69L162.34,37.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,221.66,85.66Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M218.83,82.83l-48,48a4,4,0,0,1-5.66-5.66L206.34,84H76V224a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H206.34L165.17,34.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,218.83,82.83Z"/></g>
  </svg>
</template>
