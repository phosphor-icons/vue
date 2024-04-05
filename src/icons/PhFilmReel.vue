/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhFilmReel"
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
<g v-if="displayWeight === 'bold'"><path d="M232,212H195.8A107.94,107.94,0,1,0,128,236H232a12,12,0,0,0,0-24ZM44,128a84,84,0,1,1,84,84A84.09,84.09,0,0,1,44,128Zm64-44a20,20,0,1,1,20,20A20,20,0,0,1,108,84Zm20,108a20,20,0,1,1,20-20A20,20,0,0,1,128,192Zm24-64a20,20,0,1,1,20,20A20,20,0,0,1,152,128Zm-48,0a20,20,0,1,1-20-20A20,20,0,0,1,104,128Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM80,144a16,16,0,1,1,16-16A16,16,0,0,1,80,144Zm48,48a16,16,0,1,1,16-16A16,16,0,0,1,128,192Zm0-96a16,16,0,1,1,16-16A16,16,0,0,1,128,96Zm48,48a16,16,0,1,1,16-16A16,16,0,0,1,176,144Z" opacity="0.2"/><path d="M232,216H183.36A103.95,103.95,0,1,0,128,232H232a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M232,216H183.36A103.95,103.95,0,1,0,128,232H232a8,8,0,0,0,0-16ZM80,148a20,20,0,1,1,20-20A20,20,0,0,1,80,148Zm48,48a20,20,0,1,1,20-20A20,20,0,0,1,128,196Zm0-96a20,20,0,1,1,20-20A20,20,0,0,1,128,100Zm28,28a20,20,0,1,1,20,20A20,20,0,0,1,156,128Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M232,218H176a102,102,0,1,0-48,12H232a6,6,0,0,0,0-12ZM38,128a90,90,0,1,1,90,90A90.1,90.1,0,0,1,38,128Zm90-26a22,22,0,1,0-22-22A22,22,0,0,0,128,102Zm0-32a10,10,0,1,1-10,10A10,10,0,0,1,128,70Zm22,106a22,22,0,1,0-22,22A22,22,0,0,0,150,176Zm-32,0a10,10,0,1,1,10,10A10,10,0,0,1,118,176Zm58-26a22,22,0,1,0-22-22A22,22,0,0,0,176,150Zm0-32a10,10,0,1,1-10,10A10,10,0,0,1,176,118ZM80,106a22,22,0,1,0,22,22A22,22,0,0,0,80,106Zm0,32a10,10,0,1,1,10-10A10,10,0,0,1,80,138Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M232,216H183.36A103.95,103.95,0,1,0,128,232H232a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M232,220H167.18A100,100,0,1,0,128,228H232a4,4,0,0,0,0-8ZM36,128a92,92,0,1,1,92,92A92.1,92.1,0,0,1,36,128Zm92-28a20,20,0,1,0-20-20A20,20,0,0,0,128,100Zm0-32a12,12,0,1,1-12,12A12,12,0,0,1,128,68Zm20,108a20,20,0,1,0-20,20A20,20,0,0,0,148,176Zm-32,0a12,12,0,1,1,12,12A12,12,0,0,1,116,176Zm60-28a20,20,0,1,0-20-20A20,20,0,0,0,176,148Zm0-32a12,12,0,1,1-12,12A12,12,0,0,1,176,116Zm-96-8a20,20,0,1,0,20,20A20,20,0,0,0,80,108Zm0,32a12,12,0,1,1,12-12A12,12,0,0,1,80,140Z"/></g>
  </svg>
</template>
