/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowElbowDownRight"
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
<g v-if="displayWeight === 'bold'"><path d="M216.49,184.49l-48,48a12,12,0,0,1-17-17L179,188H64a12,12,0,0,1-12-12V32a12,12,0,0,1,24,0V164H179l-27.52-27.51a12,12,0,1,1,17-17l48,48A12,12,0,0,1,216.49,184.49Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M208,176l-48,48V128Z" opacity="0.2"/><path d="M213.66,170.34l-48-48A8,8,0,0,0,152,128v40H72V32a8,8,0,0,0-16,0V176a8,8,0,0,0,8,8h88v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,213.66,170.34ZM168,204.69V147.31L196.69,176Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M213.66,181.66l-48,48A8,8,0,0,1,152,224V184H64a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168h80V128a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,213.66,181.66Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M212.24,180.24l-48,48a6,6,0,0,1-8.48-8.48L193.51,182H64a6,6,0,0,1-6-6V32a6,6,0,0,1,12,0V170H193.51l-37.75-37.76a6,6,0,1,1,8.48-8.48l48,48A6,6,0,0,1,212.24,180.24Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M213.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L188.69,184H64a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H188.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,213.66,181.66Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M210.83,178.83l-48,48a4,4,0,0,1-5.66-5.66L198.34,180H64a4,4,0,0,1-4-4V32a4,4,0,0,1,8,0V172H198.34l-41.17-41.17a4,4,0,1,1,5.66-5.66l48,48A4,4,0,0,1,210.83,178.83Z"/></g>
  </svg>
</template>
