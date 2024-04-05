/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhLessThan"
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
<g v-if="displayWeight === 'bold'"><path d="M210.84,205.13a12,12,0,0,1-16,5.71l-152-72a12,12,0,0,1,0-21.68l152-72a12,12,0,1,1,10.27,21.69L76,128l129.1,61.15A12,12,0,0,1,210.84,205.13Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M200,56V200L48,128Z" opacity="0.2"/><path d="M207.23,203.42a8,8,0,0,1-10.66,3.81l-152-72a8,8,0,0,1,0-14.46l152-72a8,8,0,1,1,6.85,14.46L66.69,128l136.73,64.77A8,8,0,0,1,207.23,203.42Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM179.35,168.74a8,8,0,1,1-6.7,14.52l-104-48a8,8,0,0,1,0-14.52l104-48a8,8,0,0,1,6.7,14.52L91.09,128Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M205.42,202.57a6,6,0,0,1-8,2.85l-152-72a6,6,0,0,1,0-10.84l152-72a6,6,0,0,1,5.14,10.84L62,128l140.55,66.58A6,6,0,0,1,205.42,202.57Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M207.23,203.42a8,8,0,0,1-10.66,3.81l-152-72a8,8,0,0,1,0-14.46l152-72a8,8,0,1,1,6.85,14.46L66.69,128l136.73,64.77A8,8,0,0,1,207.23,203.42Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M203.61,201.71A4,4,0,0,1,200,204a3.85,3.85,0,0,1-1.71-.39l-152-72a4,4,0,0,1,0-7.23l152-72a4,4,0,0,1,3.42,7.23L57.34,128l144.37,68.38A4,4,0,0,1,203.61,201.71Z"/></g>
  </svg>
</template>
