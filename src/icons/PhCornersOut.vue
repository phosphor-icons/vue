/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCornersOut"
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
<g v-if="displayWeight === 'bold'"><path d="M220,48V88a12,12,0,0,1-24,0V60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM88,196H60V168a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H88a12,12,0,0,0,0-24Zm120-40a12,12,0,0,0-12,12v28H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM88,36H48A12,12,0,0,0,36,48V88a12,12,0,0,0,24,0V60H88a12,12,0,0,0,0-24Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M208,48V88L168,48ZM48,208H88L48,168Zm160,0V168l-40,40ZM48,88,88,48H48Z" opacity="0.2"/><path d="M208,40H168a8,8,0,0,0-5.66,13.66l40,40A8,8,0,0,0,216,88V48A8,8,0,0,0,208,40Zm-8,28.69L187.31,56H200ZM53.66,162.34A8,8,0,0,0,40,168v40a8,8,0,0,0,8,8H88a8,8,0,0,0,5.66-13.66ZM56,200V187.31L68.69,200Zm155.06-39.39a8,8,0,0,0-8.72,1.73l-40,40A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM200,200H187.31L200,187.31ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,88,40ZM56,68.69V56H68.69Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M93.66,202.34A8,8,0,0,1,88,216H48a8,8,0,0,1-8-8V168a8,8,0,0,1,13.66-5.66ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,88,40ZM211.06,160.61a8,8,0,0,0-8.72,1.73l-40,40A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM208,40H168a8,8,0,0,0-5.66,13.66l40,40A8,8,0,0,0,216,88V48A8,8,0,0,0,208,40Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M214,48V88a6,6,0,0,1-12,0V54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48ZM88,202H54V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H88a6,6,0,0,0,0-12Zm120-40a6,6,0,0,0-6,6v34H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM88,42H48a6,6,0,0,0-6,6V88a6,6,0,0,0,12,0V54H88a6,6,0,0,0,0-12Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M212,48V88a4,4,0,0,1-8,0V52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48ZM88,204H52V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H88a4,4,0,0,0,0-8Zm120-40a4,4,0,0,0-4,4v36H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM88,44H48a4,4,0,0,0-4,4V88a4,4,0,0,0,8,0V52H88a4,4,0,0,0,0-8Z"/></g>
  </svg>
</template>
