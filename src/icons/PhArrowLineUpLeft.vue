/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowLineUpLeft"
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
<g v-if="displayWeight === 'bold'"><path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM64,164a12,12,0,0,0,12-12V85l91.51,91.52a12,12,0,0,0,17-17L93,68h67a12,12,0,0,0,0-24H64A12,12,0,0,0,52,56v96A12,12,0,0,0,64,164Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M160,56,64,152V56Z" opacity="0.2"/><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM56,152V56a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L123.31,104l58.35,58.34a8,8,0,0,1-11.32,11.32L112,115.31,69.66,157.66A8,8,0,0,1,56,152Zm16-19.31,34.34-34.35h0L140.69,64H72Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M56,152V56a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L123.31,104l58.35,58.34a8,8,0,0,1-11.32,11.32L112,115.31,69.66,157.66A8,8,0,0,1,56,152Zm160,56H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216ZM64,158a6,6,0,0,0,6-6V70.49L171.76,172.24a6,6,0,0,0,8.48-8.48L78.49,62H160a6,6,0,0,0,0-12H64a6,6,0,0,0-6,6v96A6,6,0,0,0,64,158Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM64,160a8,8,0,0,0,8-8V75.31l98.34,98.35a8,8,0,0,0,11.32-11.32L83.31,64H160a8,8,0,0,0,0-16H64a8,8,0,0,0-8,8v96A8,8,0,0,0,64,160Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216ZM64,156a4,4,0,0,0,4-4V65.66L173.17,170.83a4,4,0,0,0,5.66-5.66L73.66,60H160a4,4,0,0,0,0-8H64a4,4,0,0,0-4,4v96A4,4,0,0,0,64,156Z"/></g>
  </svg>
</template>
