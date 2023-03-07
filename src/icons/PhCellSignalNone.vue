/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCellSignalNone"
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
<g v-if="displayWeight === 'bold'"><path d="M52,192v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M198.12,25.23a16,16,0,0,0-17.43,3.47l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A16,16,0,0,0,198.12,25.23ZM192,200H32L192,40Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM192,200H32L192,40Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M46,192v8a6,6,0,0,1-12,0v-8a6,6,0,0,1,12,0Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M48,192v8a8,8,0,0,1-16,0v-8a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M44,192v8a4,4,0,0,1-8,0v-8a4,4,0,0,1,8,0Z"/></g>
  </svg>
</template>
