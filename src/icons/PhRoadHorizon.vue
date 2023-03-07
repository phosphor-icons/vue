/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhRoadHorizon"
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
<g v-if="displayWeight === 'bold'"><path d="M237.88,202.46a12,12,0,0,1-16.34-4.58L153,76H140v4a12,12,0,0,1-24,0V76H103L34.46,197.88a12,12,0,1,1-20.92-11.76L75.48,76H24a12,12,0,0,1,0-24H232a12,12,0,0,1,0,24H180.52l61.94,110.12A12,12,0,0,1,237.88,202.46ZM128,108a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V120A12,12,0,0,0,128,108Zm0,56a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V176A12,12,0,0,0,128,164Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M232,192H24L96,64h64Z" opacity="0.2"/><path d="M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M239,188.08,173.68,72h58A8.17,8.17,0,0,0,240,64.53,8,8,0,0,0,232,56H24.27A8.17,8.17,0,0,0,16,63.47,8,8,0,0,0,24,72H82.32L17,188.08a8,8,0,0,0,1.17,9.43,8.24,8.24,0,0,0,6,2.49H116a4,4,0,0,0,4-4V176.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v20a4,4,0,0,0,4,4h91.77a8.24,8.24,0,0,0,6-2.49A8,8,0,0,0,239,188.08ZM136,140a8,8,0,0,1-16,0V124a8,8,0,0,1,16,0Zm0-52a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M234.94,197.23a6,6,0,0,1-8.17-2.29L156.49,70H134V80a6,6,0,0,1-12,0V70H99.51L29.23,194.94a6,6,0,1,1-10.46-5.88L85.74,70H24a6,6,0,0,1,0-12H232a6,6,0,0,1,0,12H170.26l67,119.06A6,6,0,0,1,234.94,197.23ZM128,114a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V120A6,6,0,0,0,128,114Zm0,56a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V176A6,6,0,0,0,128,170Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M235.49,190a4,4,0,0,1-1.53,5.45,4.07,4.07,0,0,1-2,.51,4,4,0,0,1-3.49-2L157.66,68H132V80a4,4,0,0,1-8,0V68H98.34L27.49,194A4,4,0,0,1,24,196a4.07,4.07,0,0,1-2-.51A4,4,0,0,1,20.51,190L89.16,68H24a4,4,0,0,1,0-8H232a4,4,0,0,1,0,8H166.84ZM128,116a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V120A4,4,0,0,0,128,116Zm0,56a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V176A4,4,0,0,0,128,172Z"/></g>
  </svg>
</template>
