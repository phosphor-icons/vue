/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhBookmarksSimple"
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
<g v-if="displayWeight === 'bold'"><path d="M156,56H60A20,20,0,0,0,40,76V228a12,12,0,0,0,19,9.76l49-35,49,35A12,12,0,0,0,176,228V76A20,20,0,0,0,156,56Zm-4,148.68-37-26.45a12,12,0,0,0-14,0L64,204.68V80h88ZM216,36V188a12,12,0,0,1-24,0V40H92a12,12,0,0,1,0-24H196A20,20,0,0,1,216,36Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M168,72V224l-56-40L56,224V72a8,8,0,0,1,8-8h96A8,8,0,0,1,168,72Z" opacity="0.2"/><path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Zm0,152.46-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96ZM208,40V192a8,8,0,0,1-16,0V40H88a8,8,0,0,1,0-16H192A16,16,0,0,1,208,40Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Z"/><path d="M192,24H88a8,8,0,0,0,0,16H192V192a8,8,0,0,0,16,0V40A16,16,0,0,0,192,24Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M160,58H64A14,14,0,0,0,50,72V224a6,6,0,0,0,9.49,4.88L112,191.37l52.52,37.51A6,6,0,0,0,174,224V72A14,14,0,0,0,160,58Zm2,154.34-46.52-33.22a6,6,0,0,0-7,0L62,212.34V72a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2ZM206,40V192a6,6,0,0,1-12,0V40a2,2,0,0,0-2-2H88a6,6,0,0,1,0-12H192A14,14,0,0,1,206,40Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Zm0,152.46-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96ZM208,40V192a8,8,0,0,1-16,0V40H88a8,8,0,0,1,0-16H192A16,16,0,0,1,208,40Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M160,60H64A12,12,0,0,0,52,72V224a4,4,0,0,0,6.33,3.25L112,188.92l53.69,38.33A3.94,3.94,0,0,0,168,228a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,172,224V72A12,12,0,0,0,160,60Zm4,156.23-49.68-35.49a4,4,0,0,0-4.65,0L60,216.23V72a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4ZM204,40V192a4,4,0,0,1-8,0V40a4,4,0,0,0-4-4H88a4,4,0,0,1,0-8H192A12,12,0,0,1,204,40Z"/></g>
  </svg>
</template>
