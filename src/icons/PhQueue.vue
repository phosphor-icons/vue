/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhQueue"
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
<g v-if="displayWeight === 'bold'"><path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm104,52H40a12,12,0,0,0,0,24h92a12,12,0,0,0,0-24Zm0,64H40a12,12,0,0,0,0,24h92a12,12,0,0,0,0-24Zm120-20a12,12,0,0,1-5.64,10.18l-64,40A12,12,0,0,1,164,200V120a12,12,0,0,1,18.36-10.18l64,40A12,12,0,0,1,252,160Zm-34.64,0L188,141.65v36.7Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M240,160l-64,40V120Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm112-24a8,8,0,0,1-3.76,6.78l-64,40A8,8,0,0,1,168,200V120a8,8,0,0,1,12.24-6.78l64,40A8,8,0,0,1,248,160Zm-23.09,0L184,134.43v51.14Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm108.24-30.78-64-40A8,8,0,0,0,168,120v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm102,58H40a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm0,64H40a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm110-26a6,6,0,0,1-2.82,5.09l-64,40A6,6,0,0,1,170,200V120a6,6,0,0,1,9.18-5.09l64,40A6,6,0,0,1,246,160Zm-17.32,0L182,130.83v58.34Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm112-24a8,8,0,0,1-3.76,6.78l-64,40A8,8,0,0,1,168,200V120a8,8,0,0,1,12.24-6.78l64,40A8,8,0,0,1,248,160Zm-23.09,0L184,134.43v51.14Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm100,60H40a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm108-28a4,4,0,0,1-1.88,3.39l-64,40A4,4,0,0,1,176,204a4.06,4.06,0,0,1-1.94-.5A4,4,0,0,1,172,200V120a4,4,0,0,1,6.12-3.39l64,40A4,4,0,0,1,244,160Zm-11.55,0L180,127.22v65.56Z"/></g>
  </svg>
</template>
