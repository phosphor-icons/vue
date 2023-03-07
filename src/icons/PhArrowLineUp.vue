/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowLineUp"
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
<g v-if="displayWeight === 'bold'"><path d="M208.49,143.51a12,12,0,0,1-17,17L140,109V224a12,12,0,0,1-24,0V109L64.49,160.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0ZM216,28H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M200,144H56l72-72Z" opacity="0.2"/><path d="M133.66,66.34a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,152h64v72a8,8,0,0,0,16,0V152h64a8,8,0,0,0,5.66-13.66ZM75.31,136,128,83.31,180.69,136ZM224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M205.66,138.34A8,8,0,0,1,200,152H136v72a8,8,0,0,1-16,0V152H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0ZM216,32H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M204.24,139.76a6,6,0,1,1-8.48,8.48L134,86.49V224a6,6,0,0,1-12,0V86.49L60.24,148.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0ZM216,34H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M205.66,138.34a8,8,0,0,1-11.32,11.32L136,91.31V224a8,8,0,0,1-16,0V91.31L61.66,149.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0ZM216,32H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M202.83,141.17a4,4,0,0,1-5.66,5.66L132,81.66V224a4,4,0,0,1-8,0V81.66L58.83,146.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0ZM216,36H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"/></g>
  </svg>
</template>
