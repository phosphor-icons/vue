/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhPauseCircle"
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
<g v-if="displayWeight === 'bold'"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM116,96v64a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM112,160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM110,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM108,96v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Z"/></g>
  </svg>
</template>
