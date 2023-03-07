/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhDot"
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
<g v-if="displayWeight === 'bold'"><path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2"/><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"/></g>
  </svg>
</template>
