/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhAnchor"
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
<g v-if="displayWeight === 'bold'"><path d="M216,132a12,12,0,0,0-12,12,36,36,0,0,1-36,36,51.7,51.7,0,0,0-28,8.22V132h28a12,12,0,0,0,0-24H140V89.94a36,36,0,1,0-24,0V108H88a12,12,0,0,0,0,24h28v56.22A51.7,51.7,0,0,0,88,180a36,36,0,0,1-36-36,12,12,0,0,0-24,0,60.07,60.07,0,0,0,60,60,28,28,0,0,1,28,28,12,12,0,0,0,24,0,28,28,0,0,1,28-28,60.07,60.07,0,0,0,60-60A12,12,0,0,0,216,132ZM128,44a12,12,0,1,1-12,12A12,12,0,0,1,128,44Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M152,56a24,24,0,1,1-24-24A24,24,0,0,1,152,56Z" opacity="0.2"/><path d="M216,136a8,8,0,0,0-8,8,40,40,0,0,1-40,40,47.79,47.79,0,0,0-32,12.27V128h32a8,8,0,0,0,0-16H136V87a32,32,0,1,0-16,0v25H88a8,8,0,0,0,0,16h32v68.27A47.79,47.79,0,0,0,88,184a40,40,0,0,1-40-40,8,8,0,0,0-16,0,56.06,56.06,0,0,0,56,56,32,32,0,0,1,32,32,8,8,0,0,0,16,0,32,32,0,0,1,32-32,56.06,56.06,0,0,0,56-56A8,8,0,0,0,216,136ZM112,56a16,16,0,1,1,16,16A16,16,0,0,1,112,56Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M224,144a56.06,56.06,0,0,1-56,56,32,32,0,0,0-32,32,8,8,0,0,1-16,0,32,32,0,0,0-32-32,56.06,56.06,0,0,1-56-56,8,8,0,0,1,16,0,40,40,0,0,0,40,40,47.79,47.79,0,0,1,32,12.27V128H88a8,8,0,0,1,0-16h32V82.83a28,28,0,1,1,16,0V112h32a8,8,0,0,1,0,16H136v68.27A47.79,47.79,0,0,1,168,184a40,40,0,0,0,40-40,8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M216,138a6,6,0,0,0-6,6,42,42,0,0,1-42,42,45.86,45.86,0,0,0-34,15.08V126h34a6,6,0,0,0,0-12H134V85.4a30,30,0,1,0-12,0V114H88a6,6,0,0,0,0,12h34v75.08A45.86,45.86,0,0,0,88,186a42,42,0,0,1-42-42,6,6,0,0,0-12,0,54.06,54.06,0,0,0,54,54,34,34,0,0,1,34,34,6,6,0,0,0,12,0,34,34,0,0,1,34-34,54.06,54.06,0,0,0,54-54A6,6,0,0,0,216,138ZM110,56a18,18,0,1,1,18,18A18,18,0,0,1,110,56Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M216,136a8,8,0,0,0-8,8,40,40,0,0,1-40,40,47.79,47.79,0,0,0-32,12.27V128h32a8,8,0,0,0,0-16H136V87a32,32,0,1,0-16,0v25H88a8,8,0,0,0,0,16h32v68.27A47.79,47.79,0,0,0,88,184a40,40,0,0,1-40-40,8,8,0,0,0-16,0,56.06,56.06,0,0,0,56,56,32,32,0,0,1,32,32,8,8,0,0,0,16,0,32,32,0,0,1,32-32,56.06,56.06,0,0,0,56-56A8,8,0,0,0,216,136ZM112,56a16,16,0,1,1,16,16A16,16,0,0,1,112,56Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M216,140a4,4,0,0,0-4,4,44.05,44.05,0,0,1-44,44,44,44,0,0,0-36,18.73V124h36a4,4,0,0,0,0-8H132V83.71a28,28,0,1,0-8,0V116H88a4,4,0,0,0,0,8h36v82.73A44,44,0,0,0,88,188a44.05,44.05,0,0,1-44-44,4,4,0,0,0-8,0,52.06,52.06,0,0,0,52,52,36,36,0,0,1,36,36,4,4,0,0,0,8,0,36,36,0,0,1,36-36,52.06,52.06,0,0,0,52-52A4,4,0,0,0,216,140ZM108,56a20,20,0,1,1,20,20A20,20,0,0,1,108,56Z"/></g>
  </svg>
</template>
