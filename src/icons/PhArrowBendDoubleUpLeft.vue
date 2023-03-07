/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowBendDoubleUpLeft"
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
<g v-if="displayWeight === 'bold'"><path d="M88.49,143.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,0,1,17,17L49,104ZM128,92H117l27.52-27.52a12,12,0,0,0-17-17l-48,48a12,12,0,0,0,0,17l48,48a12,12,0,0,0,17-17L117,116h11a84.09,84.09,0,0,1,84,84,12,12,0,0,0,24,0A108.12,108.12,0,0,0,128,92Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M128,56v96L80,104Z" opacity="0.2"/><path d="M85.66,146.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L43.31,104ZM232,200a8,8,0,0,1-16,0,88.11,88.11,0,0,0-80-87.63V152a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,136,56V96.3A104.15,104.15,0,0,1,232,200ZM120,75.31,91.31,104,120,132.69Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M85.66,146.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L43.31,104ZM136,96.3V56a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,136,152V112.37A88.11,88.11,0,0,1,216,200a8,8,0,0,0,16,0A104.15,104.15,0,0,0,136,96.3Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M84.24,147.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L40.49,104ZM128,98H94.49l37.75-37.76a6,6,0,0,0-8.48-8.48l-48,48a6,6,0,0,0,0,8.48l48,48a6,6,0,0,0,8.48-8.48L94.49,110H128a90.1,90.1,0,0,1,90,90,6,6,0,0,0,12,0A102.12,102.12,0,0,0,128,98Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M85.66,146.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L43.31,104ZM128,96H99.31l34.35-34.34a8,8,0,0,0-11.32-11.32l-48,48a8,8,0,0,0,0,11.32l48,48a8,8,0,0,0,11.32-11.32L99.31,112H128a88.1,88.1,0,0,1,88,88,8,8,0,0,0,16,0A104.11,104.11,0,0,0,128,96Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M82.83,149.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L37.66,104ZM128,100H89.66l41.17-41.17a4,4,0,0,0-5.66-5.66l-48,48a4,4,0,0,0,0,5.66l48,48a4,4,0,0,0,5.66-5.66L89.66,108H128a92.1,92.1,0,0,1,92,92,4,4,0,0,0,8,0A100.11,100.11,0,0,0,128,100Z"/></g>
  </svg>
</template>
