/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhDeviceMobileSlash"
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
<g v-if="displayWeight === 'bold'"><path d="M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07L52,62.24V216a28,28,0,0,0,28,28h96a28,28,0,0,0,26-17.61,12,12,0,0,0,14.88-18.46ZM176,220H80a4,4,0,0,1-4-4V88.64L180,203v13A4,4,0,0,1,176,220ZM75.51,24a12,12,0,0,1,12-12H176a28,28,0,0,1,28,28v98.94a12,12,0,0,1-24,0V40a4,4,0,0,0-4-4H87.51A12,12,0,0,1,75.51,24Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M192,40V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V40A16,16,0,0,1,80,24h96A16,16,0,0,1,192,40Z" opacity="0.2"/><path d="M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L56,60.69V216a24,24,0,0,0,24,24h96a24,24,0,0,0,23.82-21.11l2.26,2.49a8,8,0,1,0,11.84-10.76ZM184,216a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V78.29l112,123.2ZM68.7,24a8,8,0,0,1,8-8H176a24,24,0,0,1,24,24V150.83a8,8,0,1,1-16,0V40a8,8,0,0,0-8-8H76.7A8,8,0,0,1,68.7,24Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M213.38,221.92a8,8,0,0,1-11.3-.54l-2.26-2.48A24,24,0,0,1,176,240H80a24,24,0,0,1-24-24V60.69L42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92Zm-27.3-65.71A8,8,0,0,0,200,150.83V40a24,24,0,0,0-24-24H76.7a8,8,0,0,0-5.92,13.38Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M212.44,212,52.44,36A6,6,0,0,0,43.56,44L58,59.92V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22v-2.08l5.56,6.12a6,6,0,0,0,8.88-8.08ZM186,216a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V73.12l116,127.6ZM70.7,24a6,6,0,0,1,6-6H176a22,22,0,0,1,22,22V150.83a6,6,0,1,1-12,0V40a10,10,0,0,0-10-10H76.7A6,6,0,0,1,70.7,24Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L56,60.69V216a24,24,0,0,0,24,24h96a24,24,0,0,0,23.82-21.11l2.26,2.49a8,8,0,1,0,11.84-10.76ZM184,216a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V78.29l112,123.2ZM68.7,24a8,8,0,0,1,8-8H176a24,24,0,0,1,24,24V150.83a8,8,0,1,1-16,0V40a8,8,0,0,0-8-8H76.7A8,8,0,0,1,68.7,24Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M211,213.31,51,37.31A4,4,0,0,0,45,42.69L60,59.15V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20v-7.25l9,9.94a4,4,0,1,0,5.92-5.38ZM188,216a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V68L188,200ZM72.7,24a4,4,0,0,1,4-4H176a20,20,0,0,1,20,20V150.83a4,4,0,1,1-8,0V40a12,12,0,0,0-12-12H76.7A4,4,0,0,1,72.7,24Z"/></g>
  </svg>
</template>
