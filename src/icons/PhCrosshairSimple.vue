/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCrosshairSimple"
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
<g v-if="displayWeight === 'bold'"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V184a12,12,0,0,0-24,0v27.13A84.18,84.18,0,0,1,44.87,140H72a12,12,0,0,0,0-24H44.87A84.18,84.18,0,0,1,116,44.87V72a12,12,0,0,0,24,0V44.87A84.18,84.18,0,0,1,211.13,116H184a12,12,0,0,0,0,24h27.13A84.18,84.18,0,0,1,140,211.13Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V184a8,8,0,0,0-16,0v31.63A88.13,88.13,0,0,1,40.37,136H72a8,8,0,0,0,0-16H40.37A88.13,88.13,0,0,1,120,40.37V72a8,8,0,0,0,16,0V40.37A88.13,88.13,0,0,1,215.63,120H184a8,8,0,0,0,0,16h31.63A88.13,88.13,0,0,1,136,215.63Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M176,136h23.54A72.11,72.11,0,0,1,136,199.54V176a8,8,0,0,0-16,0v23.54A72.11,72.11,0,0,1,56.46,136H80a8,8,0,0,0,0-16H56.46A72.11,72.11,0,0,1,120,56.46V80a8,8,0,0,0,16,0V56.46A72.11,72.11,0,0,1,199.54,120H176a8,8,0,0,0,0,16Zm56-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V184a6,6,0,0,0-12,0v33.8A90.15,90.15,0,0,1,38.2,134H72a6,6,0,0,0,0-12H38.2A90.15,90.15,0,0,1,122,38.2V72a6,6,0,0,0,12,0V38.2A90.15,90.15,0,0,1,217.8,122H184a6,6,0,0,0,0,12h33.8A90.15,90.15,0,0,1,134,217.8Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V184a8,8,0,0,0-16,0v31.63A88.13,88.13,0,0,1,40.37,136H72a8,8,0,0,0,0-16H40.37A88.13,88.13,0,0,1,120,40.37V72a8,8,0,0,0,16,0V40.37A88.13,88.13,0,0,1,215.63,120H184a8,8,0,0,0,0,16h31.63A88.13,88.13,0,0,1,136,215.63Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V184a4,4,0,0,0-8,0v35.91A92.13,92.13,0,0,1,36.09,132H72a4,4,0,0,0,0-8H36.09A92.13,92.13,0,0,1,124,36.09V72a4,4,0,0,0,8,0V36.09A92.13,92.13,0,0,1,219.91,124H184a4,4,0,0,0,0,8h35.91A92.13,92.13,0,0,1,132,219.91Z"/></g>
  </svg>
</template>
