/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhAlarm"
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
<g v-if="displayWeight === 'bold'"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,176a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,204ZM32.49,64.49a12,12,0,1,1-17-17l32-32a12,12,0,1,1,17,17Zm208,0a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17l32,32A12,12,0,0,1,240.49,64.49ZM176,116a12,12,0,0,1,0,24H128a12,12,0,0,1-12-12V80a12,12,0,0,1,24,0v36Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"/><path d="M128,32a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,32Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,208ZM61.66,29.66l-32,32A8,8,0,0,1,18.34,50.34l32-32A8,8,0,1,1,61.66,29.66Zm176,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,61.66ZM184,120a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M61.66,29.66l-32,32A8,8,0,0,1,18.34,50.34l32-32A8,8,0,1,1,61.66,29.66Zm176,20.68-32-32a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32-11.32ZM224,128a96,96,0,1,1-96-96A96.11,96.11,0,0,1,224,128Zm-32,0a8,8,0,0,0-8-8H136V72a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h56A8,8,0,0,0,192,128Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M128,34a94,94,0,1,0,94,94A94.11,94.11,0,0,0,128,34Zm0,176a82,82,0,1,1,82-82A82.1,82.1,0,0,1,128,210ZM60.24,28.24l-32,32a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,8.48Zm176,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48l32,32A6,6,0,0,1,236.24,60.24ZM184,122a6,6,0,0,1,0,12H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M128,32a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,32Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,208ZM61.66,29.66l-32,32A8,8,0,0,1,18.34,50.34l32-32A8,8,0,1,1,61.66,29.66Zm176,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,61.66ZM184,120a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M128,36a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,36Zm0,176a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM58.83,26.83l-32,32a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,5.66Zm176,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,234.83,58.83ZM188,128a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"/></g>
  </svg>
</template>
