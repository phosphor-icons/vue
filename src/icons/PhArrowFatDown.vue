/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowFatDown"
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
<g v-if="displayWeight === 'bold'"><path d="M235.09,131.41A12,12,0,0,0,224,124H188V48a20,20,0,0,0-20-20H88A20,20,0,0,0,68,48v76H32a12,12,0,0,0-8.48,20.49l96,96a12,12,0,0,0,17,0l96-96A12,12,0,0,0,235.09,131.41ZM128,215,61,148H80a12,12,0,0,0,12-12V52h72v84a12,12,0,0,0,12,12h19Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,136l-96,96L32,136H80V48a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v88Z" opacity="0.2"/><path d="M231.39,132.94A8,8,0,0,0,224,128H184V48a16,16,0,0,0-16-16H88A16,16,0,0,0,72,48v80H32a8,8,0,0,0-5.66,13.66l96,96a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,231.39,132.94ZM128,220.69,51.31,144H80a8,8,0,0,0,8-8V48h80v88a8,8,0,0,0,8,8h28.69Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M229.66,141.66l-96,96a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,32,128H72V48A16,16,0,0,1,88,32h80a16,16,0,0,1,16,16v80h40a8,8,0,0,1,5.66,13.66Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M229.54,133.7A6,6,0,0,0,224,130H182V48a14,14,0,0,0-14-14H88A14,14,0,0,0,74,48v82H32a6,6,0,0,0-4.24,10.24l96,96a6,6,0,0,0,8.48,0l96-96A6,6,0,0,0,229.54,133.7ZM128,223.51,46.49,142H80a6,6,0,0,0,6-6V48a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2v88a6,6,0,0,0,6,6h33.51Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M231.39,132.94A8,8,0,0,0,224,128H184V48a16,16,0,0,0-16-16H88A16,16,0,0,0,72,48v80H32a8,8,0,0,0-5.66,13.66l96,96a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,231.39,132.94ZM128,220.69,51.31,144H80a8,8,0,0,0,8-8V48h80v88a8,8,0,0,0,8,8h28.69Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M227.7,134.47A4,4,0,0,0,224,132H180V48a12,12,0,0,0-12-12H88A12,12,0,0,0,76,48v84H32a4,4,0,0,0-2.83,6.83l96,96a4,4,0,0,0,5.66,0l96-96A4,4,0,0,0,227.7,134.47ZM128,226.34,41.66,140H80a4,4,0,0,0,4-4V48a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4v88a4,4,0,0,0,4,4h38.34Z"/></g>
  </svg>
</template>
