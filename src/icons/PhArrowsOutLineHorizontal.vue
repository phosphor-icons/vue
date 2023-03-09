/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowsOutLineHorizontal"
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
<g v-if="displayWeight === 'bold'"><path d="M140,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0ZM88,116H45l11.52-11.51a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17l32,32a12,12,0,0,0,17-17L45,140H88a12,12,0,0,0,0-24Zm160.49,3.51-32-32a12,12,0,0,0-17,17L211,116H168a12,12,0,0,0,0,24h43l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,248.49,119.51Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M16,128,48,96v64ZM208,96v64l32-32Z" opacity="0.2"/><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm-32,88a8,8,0,0,1-8,8H56v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,56,96v24H96A8,8,0,0,1,104,128ZM40,115.31,27.31,128,40,140.69Zm205.66,18.35-32,32A8,8,0,0,1,200,160V136H160a8,8,0,0,1,0-16h40V96a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,245.66,133.66Zm-17-5.66L216,115.31v25.38Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M104,128a8,8,0,0,1-8,8H56v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,56,96v24H96A8,8,0,0,1,104,128Zm141.66-5.66-32-32A8,8,0,0,0,200,96v24H160a8,8,0,0,0,0,16h40v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,245.66,122.34ZM128,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,128,32Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M134,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM96,122H30.49l21.75-21.76a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.48-8.48L30.49,134H96a6,6,0,0,0,0-12Zm148.24,1.76-32-32a6,6,0,0,0-8.48,8.48L225.51,122H160a6,6,0,0,0,0,12h65.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,244.24,123.76Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M132,40V216a4,4,0,0,1-8,0V40a4,4,0,0,1,8,0ZM96,124H25.66L50.83,98.83a4,4,0,0,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,1,0,5.66-5.66L25.66,132H96a4,4,0,0,0,0-8Zm146.83,1.17-32-32a4,4,0,0,0-5.66,5.66L230.34,124H160a4,4,0,0,0,0,8h70.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,242.83,125.17Z"/></g>
  </svg>
</template>
