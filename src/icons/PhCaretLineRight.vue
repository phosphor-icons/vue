/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCaretLineRight"
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
<g v-if="displayWeight === 'bold'"><path d="M152.49,119.51a12,12,0,0,1,0,17l-80,80a12,12,0,0,1-17-17L127,128,55.51,56.49a12,12,0,0,1,17-17ZM184,36a12,12,0,0,0-12,12V208a12,12,0,0,0,24,0V48A12,12,0,0,0,184,36Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M144,128,64,208V48Z" opacity="0.2"/><path d="M69.66,42.34A8,8,0,0,0,56,48V208a8,8,0,0,0,13.66,5.66l80-80a8,8,0,0,0,0-11.32ZM72,188.69V67.31L132.69,128ZM192,48V208a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M149.66,122.34a8,8,0,0,1,0,11.32l-80,80A8,8,0,0,1,56,208V48a8,8,0,0,1,13.66-5.66ZM184,40a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V48A8,8,0,0,0,184,40Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M148.24,123.76a6,6,0,0,1,0,8.48l-80,80a6,6,0,0,1-8.48-8.48L135.51,128,59.76,52.24a6,6,0,0,1,8.48-8.48ZM184,42a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V48A6,6,0,0,0,184,42Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M149.66,122.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32-11.32L132.69,128,58.34,53.66A8,8,0,0,1,69.66,42.34ZM184,40a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V48A8,8,0,0,0,184,40Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M146.83,125.17a4,4,0,0,1,0,5.66l-80,80a4,4,0,0,1-5.66-5.66L138.34,128,61.17,50.83a4,4,0,0,1,5.66-5.66ZM184,44a4,4,0,0,0-4,4V208a4,4,0,0,0,8,0V48A4,4,0,0,0,184,44Z"/></g>
  </svg>
</template>
