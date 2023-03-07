/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCaretUpDown"
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
<g v-if="displayWeight === 'bold'"><path d="M184.49,167.51a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L128,207l39.51-39.52A12,12,0,0,1,184.49,167.51Zm-96-79L128,49l39.51,39.52a12,12,0,0,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,0,0,17,17Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M80,176h96l-48,48ZM128,32,80,80h96Z" opacity="0.2"/><path d="M176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Zm-48,44.69L99.31,184h57.38ZM80,88h96a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,80,88Zm48-44.69L156.69,72H99.31Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M72.61,83.06a8,8,0,0,1,1.73-8.72l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,176,88H80A8,8,0,0,1,72.61,83.06ZM176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M180.24,171.76a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L128,215.51l43.76-43.75A6,6,0,0,1,180.24,171.76Zm-96-87.52L128,40.49l43.76,43.75a6,6,0,0,0,8.48-8.48l-48-48a6,6,0,0,0-8.48,0l-48,48a6,6,0,0,0,8.48,8.48Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M178.83,173.17a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L128,218.34l45.17-45.17A4,4,0,0,1,178.83,173.17Zm-96-90.34L128,37.66l45.17,45.17a4,4,0,1,0,5.66-5.66l-48-48a4,4,0,0,0-5.66,0l-48,48a4,4,0,0,0,5.66,5.66Z"/></g>
  </svg>
</template>
