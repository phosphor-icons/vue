/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCaretDoubleRight"
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
<g v-if="displayWeight === 'bold'"><path d="M144.49,136.49l-80,80a12,12,0,0,1-17-17L119,128,47.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,144.49,136.49Zm80-17-80-80a12,12,0,1,0-17,17L199,128l-71.52,71.51a12,12,0,0,0,17,17l80-80A12,12,0,0,0,224.49,119.51Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M136,128,56,208V48Z" opacity="0.2"/><path d="M141.66,122.34l-80-80A8,8,0,0,0,48,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,141.66,122.34ZM64,188.69V67.31L124.69,128Zm157.66-55-80,80a8,8,0,0,1-11.32-11.32L204.69,128,130.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,221.66,133.66Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M140.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L127.51,128,51.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,140.24,132.24Zm80-8.48-80-80a6,6,0,0,0-8.48,8.48L207.51,128l-75.75,75.76a6,6,0,1,0,8.48,8.48l80-80A6,6,0,0,0,220.24,123.76Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M138.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L130.34,128,53.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,138.83,130.83Zm80-5.66-80-80a4,4,0,0,0-5.66,5.66L210.34,128l-77.17,77.17a4,4,0,0,0,5.66,5.66l80-80A4,4,0,0,0,218.83,125.17Z"/></g>
  </svg>
</template>
