/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhSupersetProperOf"
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
<g v-if="displayWeight === 'bold'"><path d="M228,128a92.1,92.1,0,0,1-92,92H64a12,12,0,0,1,0-24h72a68,68,0,0,0,0-136H64a12,12,0,0,1,0-24h72A92.1,92.1,0,0,1,228,128Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,128a80,80,0,0,1-80,80H64V48h72A80,80,0,0,1,216,128Z" opacity="0.2"/><path d="M224,128a88.1,88.1,0,0,1-88,88H64a8,8,0,0,1,0-16h72a72,72,0,0,0,0-144H64a8,8,0,0,1,0-16h72A88.1,88.1,0,0,1,224,128Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,192H80a8,8,0,0,1,0-16h48a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h48a64,64,0,0,1,0,128Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M222,128a86.1,86.1,0,0,1-86,86H64a6,6,0,0,1,0-12h72a74,74,0,0,0,0-148H64a6,6,0,0,1,0-12h72A86.1,86.1,0,0,1,222,128Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M224,128a88.1,88.1,0,0,1-88,88H64a8,8,0,0,1,0-16h72a72,72,0,0,0,0-144H64a8,8,0,0,1,0-16h72A88.1,88.1,0,0,1,224,128Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M220,128a84.09,84.09,0,0,1-84,84H64a4,4,0,0,1,0-8h72a76,76,0,0,0,0-152H64a4,4,0,0,1,0-8h72A84.09,84.09,0,0,1,220,128Z"/></g>
  </svg>
</template>
