/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowElbowRightDown"
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
<g v-if="displayWeight === 'bold'"><path d="M232.49,168.49l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L164,179V76H32a12,12,0,0,1,0-24H176a12,12,0,0,1,12,12V179l27.51-27.52a12,12,0,0,1,17,17Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,160l-48,48-48-48Z" opacity="0.2"/><path d="M231.39,156.94A8,8,0,0,0,224,152H184V64a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H168v80H128a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,231.39,156.94ZM176,196.69,147.31,168h57.38Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,128,152h40V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8v88h40a8,8,0,0,1,5.66,13.66Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M228.24,164.24l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,1,1,8.48-8.48L170,193.51V70H32a6,6,0,0,1,0-12H176a6,6,0,0,1,6,6V193.51l37.76-37.75a6,6,0,0,1,8.48,8.48Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L168,188.69V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M226.83,162.83l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,1,1,5.66-5.66L172,198.34V68H32a4,4,0,0,1,0-8H176a4,4,0,0,1,4,4V198.34l41.17-41.17a4,4,0,0,1,5.66,5.66Z"/></g>
  </svg>
</template>
