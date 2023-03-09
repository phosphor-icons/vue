/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArchiveBox"
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
<g v-if="displayWeight === 'bold'"><path d="M226.73,66.63l-16-32A12,12,0,0,0,200,28H56a12,12,0,0,0-10.73,6.63l-16,32A12,12,0,0,0,28,72V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V72A12,12,0,0,0,226.73,66.63ZM192.58,52l6,12H57.42l6-12ZM52,204V88H204V204Zm116.49-64.49a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L116,151V112a12,12,0,0,1,24,0v39l11.51-11.52A12,12,0,0,1,168.49,139.51Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,72V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V72Z" opacity="0.2"/><path d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42ZM60.94,48H195.06l8,16H52.94ZM208,208H48V80H208V208Zm-42.34-61.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,164.69V104a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,146.34Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42Zm-57.5,89.24-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,164.69V104a8,8,0,0,1,16,0v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM52.94,64l8-16H195.06l8,16Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M221.37,69.32l-16-32A6,6,0,0,0,200,34H56a6,6,0,0,0-5.37,3.32l-16,32A6.07,6.07,0,0,0,34,72V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V72A6.07,6.07,0,0,0,221.37,69.32ZM59.71,46H196.29l10,20H49.71ZM208,210H48a2,2,0,0,1-2-2V78H210V208A2,2,0,0,1,208,210Zm-43.76-62.24a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,169.51V104a6,6,0,0,1,12,0v65.51l21.76-21.75A6,6,0,0,1,164.24,147.76Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42ZM60.94,48H195.06l8,16H52.94ZM208,208H48V80H208V208Zm-42.34-61.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,164.69V104a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,146.34Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M219.58,70.21l-16-32A4,4,0,0,0,200,36H56a4,4,0,0,0-3.58,2.21l-16,32A4,4,0,0,0,36,72V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V72A4,4,0,0,0,219.58,70.21ZM58.47,44H197.53l12,24H46.47ZM208,212H48a4,4,0,0,1-4-4V76H212V208A4,4,0,0,1,208,212Zm-45.17-62.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,174.34V104a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,149.17Z"/></g>
  </svg>
</template>
