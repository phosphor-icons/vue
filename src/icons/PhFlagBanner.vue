/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhFlagBanner"
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
<g v-if="displayWeight === 'bold'"><path d="M234.15,49.59A12,12,0,0,0,224,44H32a12,12,0,0,0-8.11,20.85L63,100.71,23.18,143.86A12,12,0,0,0,32,164H159.28l-26.11,54.84a12,12,0,1,0,21.66,10.32l80-168A12,12,0,0,0,234.15,49.59ZM170.71,140H59.41l29.41-31.86a12,12,0,0,0-.71-17L62.85,68H205Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,56l-45.71,96H32l48-52L32,56Z" opacity="0.2"/><path d="M230.76,51.73A8,8,0,0,0,224,48H32a8,8,0,0,0-5.41,13.9l42.09,38.57-42.56,46.1A8,8,0,0,0,32,160H165.62l-28.84,60.56a8,8,0,1,0,14.44,6.88l80-168A8,8,0,0,0,230.76,51.73ZM173.23,144h-123l35.61-38.57a8,8,0,0,0-.47-11.33L52.57,64H211.33Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M231.22,59.44l-80,168a8,8,0,1,1-14.44-6.88L165.62,160H32a8,8,0,0,1-5.88-13.43l42.56-46.1L26.59,61.9A8,8,0,0,1,32,48H224a8,8,0,0,1,7.22,11.44Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M229.07,52.8A6,6,0,0,0,224,50H32A6,6,0,0,0,28,60.42l43.56,39.93L27.59,147.93A6,6,0,0,0,32,158H168.78l-30.2,63.42a6,6,0,0,0,10.84,5.16l80-168A6,6,0,0,0,229.07,52.8ZM174.5,146H45.7l38.71-41.93a6,6,0,0,0-.36-8.49L47.43,62H214.5Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M230.76,51.73A8,8,0,0,0,224,48H32a8,8,0,0,0-5.41,13.9l42.09,38.57-42.56,46.1A8,8,0,0,0,32,160H165.62l-28.84,60.56a8,8,0,1,0,14.44,6.88l80-168A8,8,0,0,0,230.76,51.73ZM173.23,144h-123l35.61-38.57a8,8,0,0,0-.47-11.33L52.57,64H211.33Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M227.38,53.86A4,4,0,0,0,224,52H32a4,4,0,0,0-2.7,7l45,41.29L29.06,149.29A4,4,0,0,0,32,156H172l-31.56,66.28a4,4,0,0,0,1.89,5.33A3.92,3.92,0,0,0,144,228a4,4,0,0,0,3.61-2.28l80-168A4,4,0,0,0,227.38,53.86ZM175.76,148H41.14l41.8-45.29a4,4,0,0,0-.24-5.66L42.28,60H217.67Z"/></g>
  </svg>
</template>
