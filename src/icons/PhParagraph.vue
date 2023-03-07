/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhParagraph"
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
<g v-if="displayWeight === 'bold'"><path d="M208,36H96a68,68,0,0,0,0,136h36v36a12,12,0,0,0,24,0V60h16V208a12,12,0,0,0,24,0V60h12a12,12,0,0,0,0-24ZM132,148H96a44,44,0,0,1,0-88h36Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M144,48V160H96A56,56,0,0,1,96,48Z" opacity="0.2"/><path d="M208,40H96a64,64,0,0,0,0,128h40v40a8,8,0,0,0,16,0V56h24V208a8,8,0,0,0,16,0V56h16a8,8,0,0,0,0-16ZM136,152H96a48,48,0,0,1,0-96h40Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M216,48a8,8,0,0,1-8,8H192V208a8,8,0,0,1-16,0V56H152V208a8,8,0,0,1-16,0V168H96A64,64,0,0,1,96,40H208A8,8,0,0,1,216,48Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M208,42H96a62,62,0,0,0,0,124h42v42a6,6,0,0,0,12,0V54h28V208a6,6,0,0,0,12,0V54h18a6,6,0,0,0,0-12ZM138,154H96A50,50,0,0,1,96,54h42Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M208,40H96a64,64,0,0,0,0,128h40v40a8,8,0,0,0,16,0V56h24V208a8,8,0,0,0,16,0V56h16a8,8,0,0,0,0-16ZM136,152H96a48,48,0,0,1,0-96h40Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M208,44H96a60,60,0,0,0,0,120h44v44a4,4,0,0,0,8,0V52h32V208a4,4,0,0,0,8,0V52h20a4,4,0,0,0,0-8ZM140,156H96A52,52,0,0,1,96,52h44Z"/></g>
  </svg>
</template>
