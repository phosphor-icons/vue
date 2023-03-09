/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhWaveSquare"
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
<g v-if="displayWeight === 'bold'"><path d="M244,128v56a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V84H36v44a12,12,0,0,1-24,0V72A12,12,0,0,1,24,60H128a12,12,0,0,1,12,12V172h80V128a12,12,0,0,1,24,0Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M128,72v56H24V72Zm0,56v56H232V128Z" opacity="0.2"/><path d="M240,128v56a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V80H32v48a8,8,0,0,1-16,0V72a8,8,0,0,1,8-8H128a8,8,0,0,1,8,8V176h88V128a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-8,128a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V96H64v32a8,8,0,0,1-16,0V88a8,8,0,0,1,8-8h72a8,8,0,0,1,8,8v72h56V128a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M238,128v56a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V78H30v50a6,6,0,0,1-12,0V72a6,6,0,0,1,6-6H128a6,6,0,0,1,6,6V178h92V128a6,6,0,0,1,12,0Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M240,128v56a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V80H32v48a8,8,0,0,1-16,0V72a8,8,0,0,1,8-8H128a8,8,0,0,1,8,8V176h88V128a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M236,128v56a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V76H28v52a4,4,0,0,1-8,0V72a4,4,0,0,1,4-4H128a4,4,0,0,1,4,4V180h96V128a4,4,0,0,1,8,0Z"/></g>
  </svg>
</template>
