/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCheckSquareOffset"
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
<g v-if="displayWeight === 'bold'"><path d="M228,48V208a20,20,0,0,1-20,20H140a12,12,0,0,1,0-24h64V52H52v88a12,12,0,0,1-24,0V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM128.49,151.51a12,12,0,0,0-17,0L64,199,48.49,183.51a12,12,0,1,0-17,17l24,24a12,12,0,0,0,17,0l56-56A12,12,0,0,0,128.49,151.51Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,48V208a8,8,0,0,1-8,8H64L40,192V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M224,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h72V48H48v96a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM125.66,154.34a8,8,0,0,0-11.32,0L64,204.69,45.66,186.34a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l56-56A8,8,0,0,0,125.66,154.34Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M222,48V208a14,14,0,0,1-14,14H136a6,6,0,0,1,0-12h72a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v96a6,6,0,0,1-12,0V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM115.76,155.76,64,207.51,44.24,187.76a6,6,0,0,0-8.48,8.48l24,24a6,6,0,0,0,8.48,0l56-56a6,6,0,0,0-8.48-8.48Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M224,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h72V48H48v96a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM125.66,154.34a8,8,0,0,0-11.32,0L64,204.69,45.66,186.34a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l56-56A8,8,0,0,0,125.66,154.34Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M220,48V208a12,12,0,0,1-12,12H136a4,4,0,0,1,0-8h72a4,4,0,0,0,4-4V48a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v96a4,4,0,0,1-8,0V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM117.17,157.17,64,210.34,42.83,189.17a4,4,0,0,0-5.66,5.66l24,24a4,4,0,0,0,5.66,0l56-56a4,4,0,0,0-5.66-5.66Z"/></g>
  </svg>
</template>
