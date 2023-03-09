/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhRadical"
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
<g v-if="displayWeight === 'bold'"><path d="M244,72V96a12,12,0,0,1-24,0V84H128.32L83.24,204.21a12,12,0,0,1-22.47,0l-48-128a12,12,0,1,1,22.47-8.43l36.76,98,36.77-98A12,12,0,0,1,120,60H232A12,12,0,0,1,244,72Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M232,72V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V72Z" opacity="0.2"/><path d="M240,72V96a8,8,0,0,1-16,0V80H125.55L79.49,202.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L72,177.22l40.51-108A8,8,0,0,1,120,64H232A8,8,0,0,1,240,72Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,80a8,8,0,0,1-16,0v-8H125.42l-30,75a8,8,0,0,1-14.86,0l-32-80A8,8,0,1,1,63.43,93L88,154.46,112.57,93A8,8,0,0,1,120,88h80a8,8,0,0,1,8,8Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M238,72V96a6,6,0,0,1-12,0V78H124.16L77.62,202.11a6,6,0,0,1-11.24,0l-48-128a6,6,0,0,1,11.24-4.22L72,182.91l42.38-113A6,6,0,0,1,120,66H232A6,6,0,0,1,238,72Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M240,72V96a8,8,0,0,1-16,0V80H125.55L79.49,202.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L72,177.22l40.51-108A8,8,0,0,1,120,64H232A8,8,0,0,1,240,72Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M236,72V96a4,4,0,0,1-8,0V76H122.77l-47,125.4a4,4,0,0,1-7.49,0l-48-128a4,4,0,0,1,7.49-2.81L72,188.61l44.26-118A4,4,0,0,1,120,68H232A4,4,0,0,1,236,72Z"/></g>
  </svg>
</template>
