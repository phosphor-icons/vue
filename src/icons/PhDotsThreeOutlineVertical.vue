/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhDotsThreeOutlineVertical"
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
<g v-if="displayWeight === 'bold'"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136Zm0-56A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,40Zm0,136a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,216Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128ZM128,72a24,24,0,1,0-24-24A24,24,0,0,0,128,72Zm0,112a24,24,0,1,0,24,24A24,24,0,0,0,128,184Z" opacity="0.2"/><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm0-64A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32Zm0,144a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,224Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28,28,0,0,0,128,180Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm0-68A30,30,0,1,0,98,48,30,30,0,0,0,128,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,30Zm0,148a30,30,0,1,0,30,30A30,30,0,0,0,128,178Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,226Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm0-64A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32Zm0,144a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,224Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148Zm0-72a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,128,28Zm0,152a28,28,0,1,0,28,28A28,28,0,0,0,128,180Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,228Z"/></g>
  </svg>
</template>
