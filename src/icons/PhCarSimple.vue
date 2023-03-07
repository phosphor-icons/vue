/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCarSimple"
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
<g v-if="displayWeight === 'bold'"><path d="M240,108h-8.2L205.08,47.88A20,20,0,0,0,186.8,36H69.2A20,20,0,0,0,50.92,47.88L24.2,108H16a12,12,0,0,0,0,24h4v76a20,20,0,0,0,20,20H64a20,20,0,0,0,20-20V196h88v12a20,20,0,0,0,20,20h24a20,20,0,0,0,20-20V132h4a12,12,0,0,0,0-24ZM71.8,60H184.2l21.33,48H50.47ZM212,204H196V184a12,12,0,0,0-12-12H72a12,12,0,0,0-12,12v20H44V132H212Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,120H32L61.89,52.75A8,8,0,0,1,69.2,48H186.8a8,8,0,0,1,7.31,4.75Z" opacity="0.2"/><path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM216,208H192V184a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v24H40V128H216Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M240,114H227.9L199.59,50.31A14,14,0,0,0,186.8,42H69.2a14,14,0,0,0-12.79,8.31L28.1,114H16a6,6,0,0,0,0,12H26v82a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V190H178v18a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V126h10a6,6,0,0,0,0-12ZM67.37,55.19A2,2,0,0,1,69.2,54H186.8a2,2,0,0,1,1.83,1.19L214.77,114H41.23ZM218,208a2,2,0,0,1-2,2H192a2,2,0,0,1-2-2V184a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v24a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V126H218Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM216,208H192V184a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v24H40V128H216Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M240,116H226.6L197.77,51.13a12,12,0,0,0-11-7.13H69.2a12,12,0,0,0-11,7.13L29.4,116H16a4,4,0,0,0,0,8H28v84a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V188H180v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V124h12a4,4,0,0,0,0-8ZM65.54,54.38A4,4,0,0,1,69.2,52H186.8a4,4,0,0,1,3.66,2.38L217.84,116H38.16ZM220,208a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4V184a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v24a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V124H220Z"/></g>
  </svg>
</template>
