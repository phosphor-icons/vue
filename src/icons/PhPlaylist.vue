/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhPlaylist"
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
<g v-if="displayWeight === 'bold'"><path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76H156a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm68,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm143.49-52.55a12,12,0,0,1-14.94,8L212,128.13V192a36,36,0,1,1-24-33.94V112a12,12,0,0,1,15.45-11.49l40,12A12,12,0,0,1,251.49,127.45ZM188,192a12,12,0,1,0-12,12A12,12,0,0,0,188,192Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M200,192a24,24,0,1,1-24-24A24,24,0,0,1,200,192Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H160a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm135.66-57.7a8,8,0,0,1-10,5.36L208,122.75V192a32.05,32.05,0,1,1-16-27.69V112a8,8,0,0,1,10.3-7.66l40,12A8,8,0,0,1,247.66,126.3ZM192,192a16,16,0,1,0-16,16A16,16,0,0,0,192,192Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H160a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm130.3-67.66-40-12A8,8,0,0,0,192,112v52.31A32,32,0,1,0,208,192V122.75l29.7,8.91a8,8,0,1,0,4.6-15.32Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70H160a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm72,52H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm133.75-60.28a6,6,0,0,1-7.48,4L206,120.06V192a30,30,0,1,1-12-24V112a6,6,0,0,1,7.72-5.75l40,12A6,6,0,0,1,245.75,125.72ZM194,192a18,18,0,1,0-18,18A18,18,0,0,0,194,192Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H160a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm135.66-57.7a8,8,0,0,1-10,5.36L208,122.75V192a32.05,32.05,0,1,1-16-27.69V112a8,8,0,0,1,10.3-7.66l40,12A8,8,0,0,1,247.66,126.3ZM192,192a16,16,0,1,0-16,16A16,16,0,0,0,192,192Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68H160a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm72,56H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm131.83-62.85a4,4,0,0,1-5,2.68L204,117.38V192a28,28,0,1,1-8-19.57V112a4,4,0,0,1,5.15-3.83l40,12A4,4,0,0,1,243.83,125.15ZM196,192a20,20,0,1,0-20,20A20,20,0,0,0,196,192Z"/></g>
  </svg>
</template>
