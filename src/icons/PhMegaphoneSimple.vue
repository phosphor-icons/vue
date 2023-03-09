/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhMegaphoneSimple"
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
<g v-if="displayWeight === 'bold'"><path d="M221.7,82.83l-176.1-54A20,20,0,0,0,20,48V192a20,20,0,0,0,19.94,20,20.38,20.38,0,0,0,5.66-.81L124,187.14V192a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V165.05l25.7-7.88A20.12,20.12,0,0,0,236,138V102A20.12,20.12,0,0,0,221.7,82.83ZM124,162,44,186.58V53.42L124,78Zm48,26H148v-8.22l24-7.36Zm40-53-64,19.63V85.33L212,105Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M136,69.09V170.91L42.24,199.67A8,8,0,0,1,32,192V48a8,8,0,0,1,10.24-7.67Z" opacity="0.2"/><path d="M220.54,86.66l-176.06-54A16,16,0,0,0,24,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L128,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,232,138V102A16.09,16.09,0,0,0,220.54,86.66ZM128,165,40,192V48l88,27Zm48,27H144V176.82L176,167Zm40-54-.11,0L144,160.08V79.92l71.89,22,.11,0v36Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M220.54,86.66l-176.06-54A16,16,0,0,0,24,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L128,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,232,138V102A16.09,16.09,0,0,0,220.54,86.66ZM176,192H144V176.82L176,167Zm40-54-.11,0L144,160.08V79.91L215.89,102l.11,0v36Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M220,88.59l-176.08-54A14,14,0,0,0,26,48V192a14,14,0,0,0,14,14,14.59,14.59,0,0,0,4-.59L130,179v13a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V160.62l30-9.19A14.07,14.07,0,0,0,230,138V102A14,14,0,0,0,220,88.59ZM40.56,193.92a2,2,0,0,1-1.76-.32A2,2,0,0,1,38,192V48a2,2,0,0,1,.8-1.6A2.05,2.05,0,0,1,40,46a1.79,1.79,0,0,1,.49.08L130,73.53v92.95ZM178,192a2,2,0,0,1-2,2H144a2,2,0,0,1-2-2V175.35l36-11Zm40-54a2,2,0,0,1-1.44,1.92l-.08,0L142,162.8V77.21l74.56,22.87A2,2,0,0,1,218,102Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M220.54,86.66l-176.06-54A16,16,0,0,0,24,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L128,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,232,138V102A16.09,16.09,0,0,0,220.54,86.66ZM128,165,40,192V48l88,27Zm48,27H144V176.82L176,167Zm40-54-.11,0L144,160.08V79.92l71.89,22,.11,0v36Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M219.41,90.5l-176-54A12,12,0,0,0,28,48V192a12,12,0,0,0,12,12,12.41,12.41,0,0,0,3.45-.5L132,176.32V192a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V159.14l31.39-9.63A12.06,12.06,0,0,0,228,138V102A12,12,0,0,0,219.41,90.5ZM41.12,195.84A4,4,0,0,1,36,192V48a4,4,0,0,1,1.6-3.2A4,4,0,0,1,40,44a3.89,3.89,0,0,1,1.07.15L132,72.05V168ZM180,192a4,4,0,0,1-4,4H144a4,4,0,0,1-4-4V173.87l40-12.27Zm40-54a4,4,0,0,1-2.88,3.84l-.05,0L140,165.5v-91l77.12,23.66A4,4,0,0,1,220,102Z"/></g>
  </svg>
</template>
