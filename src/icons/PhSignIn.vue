/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhSignIn"
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
<g v-if="displayWeight === 'bold'"><path d="M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM192,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h56a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M136,128,96,168V88Z" opacity="0.2"/><path d="M141.66,122.34l-40-40A8,8,0,0,0,88,88v32H24a8,8,0,0,0,0,16H88v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,141.66,122.34ZM104,148.69V107.31L124.69,128ZM208,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h56V48H136a8,8,0,0,1,0-16h56A16,16,0,0,1,208,48Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M141.66,133.66l-40,40A8,8,0,0,1,88,168V136H24a8,8,0,0,1,0-16H88V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M140.24,132.24l-40,40a6,6,0,0,1-8.48-8.48L121.51,134H24a6,6,0,0,1,0-12h97.51L91.76,92.24a6,6,0,0,1,8.48-8.48l40,40A6,6,0,0,1,140.24,132.24ZM192,34H136a6,6,0,0,0,0,12h56a2,2,0,0,1,2,2V208a2,2,0,0,1-2,2H136a6,6,0,0,0,0,12h56a14,14,0,0,0,14-14V48A14,14,0,0,0,192,34Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M138.83,130.83l-40,40a4,4,0,0,1-5.66-5.66L126.34,132H24a4,4,0,0,1,0-8H126.34L93.17,90.83a4,4,0,0,1,5.66-5.66l40,40A4,4,0,0,1,138.83,130.83ZM192,36H136a4,4,0,0,0,0,8h56a4,4,0,0,1,4,4V208a4,4,0,0,1-4,4H136a4,4,0,0,0,0,8h56a12,12,0,0,0,12-12V48A12,12,0,0,0,192,36Z"/></g>
  </svg>
</template>
