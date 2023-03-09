/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCornersIn"
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
<g v-if="displayWeight === 'bold'"><path d="M148,96V48a12,12,0,0,1,24,0V84h36a12,12,0,0,1,0,24H160A12,12,0,0,1,148,96ZM96,148H48a12,12,0,0,0,0,24H84v36a12,12,0,0,0,24,0V160A12,12,0,0,0,96,148Zm112,0H160a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V172h36a12,12,0,0,0,0-24ZM96,36A12,12,0,0,0,84,48V84H48a12,12,0,0,0,0,24H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M208,96H160V48ZM96,208V160H48Zm64,0,48-48H160ZM96,96V48L48,96Z" opacity="0.2"/><path d="M160,104h48a8,8,0,0,0,5.66-13.66l-48-48A8,8,0,0,0,152,48V96A8,8,0,0,0,160,104Zm8-36.69L188.69,88H168ZM96,152H48a8,8,0,0,0-5.66,13.66l48,48A8,8,0,0,0,104,208V160A8,8,0,0,0,96,152Zm-8,36.69L67.31,168H88ZM208,152H160a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,208,152Zm-40,36.69V168h20.69ZM99.06,40.61a8,8,0,0,0-8.72,1.73l-48,48A8,8,0,0,0,48,104H96a8,8,0,0,0,8-8V48A8,8,0,0,0,99.06,40.61ZM88,88H67.31L88,67.31Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M152,96V48a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,208,104H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0-5.66,13.66l48,48A8,8,0,0,0,104,208V160A8,8,0,0,0,96,152ZM99.06,40.61a8,8,0,0,0-8.72,1.73l-48,48A8,8,0,0,0,48,104H96a8,8,0,0,0,8-8V48A8,8,0,0,0,99.06,40.61ZM208,152H160a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,208,152Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M154,96V48a6,6,0,0,1,12,0V90h42a6,6,0,0,1,0,12H160A6,6,0,0,1,154,96ZM96,154H48a6,6,0,0,0,0,12H90v42a6,6,0,0,0,12,0V160A6,6,0,0,0,96,154Zm112,0H160a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V166h42a6,6,0,0,0,0-12ZM96,42a6,6,0,0,0-6,6V90H48a6,6,0,0,0,0,12H96a6,6,0,0,0,6-6V48A6,6,0,0,0,96,42Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M152,96V48a8,8,0,0,1,16,0V88h40a8,8,0,0,1,0,16H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0,0,16H88v40a8,8,0,0,0,16,0V160A8,8,0,0,0,96,152Zm112,0H160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168h40a8,8,0,0,0,0-16ZM96,40a8,8,0,0,0-8,8V88H48a8,8,0,0,0,0,16H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M156,96V48a4,4,0,0,1,8,0V92h44a4,4,0,0,1,0,8H160A4,4,0,0,1,156,96ZM96,156H48a4,4,0,0,0,0,8H92v44a4,4,0,0,0,8,0V160A4,4,0,0,0,96,156Zm112,0H160a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V164h44a4,4,0,0,0,0-8ZM96,44a4,4,0,0,0-4,4V92H48a4,4,0,0,0,0,8H96a4,4,0,0,0,4-4V48A4,4,0,0,0,96,44Z"/></g>
  </svg>
</template>
