/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhBatteryPlusVertical"
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
<g v-if="displayWeight === 'bold'"><path d="M92,12A12,12,0,0,1,104,0h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,12ZM204,60V228a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V60A28,28,0,0,1,80,32h96A28,28,0,0,1,204,60Zm-24,0a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4V228a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4Zm-28,68H140V116a12,12,0,0,0-24,0v12H104a12,12,0,0,0,0,24h12v12a12,12,0,0,0,24,0V152h12a12,12,0,0,0,0-24Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M192,56V224a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V56A16,16,0,0,1,80,40h96A16,16,0,0,1,192,56Z" opacity="0.2"/><path d="M88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Zm-28,76H136V112a8,8,0,0,0-16,0v20H100a8,8,0,0,0,0,16h20v20a8,8,0,0,0,16,0V148h20a8,8,0,0,0,0-16Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-36,84a8,8,0,0,0-8-8H136V112a8,8,0,0,0-16,0v20H100a8,8,0,0,0,0,16h20v20a8,8,0,0,0,16,0V148h20A8,8,0,0,0,164,140Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M90,8a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,8ZM198,56V224a22,22,0,0,1-22,22H80a22,22,0,0,1-22-22V56A22,22,0,0,1,80,34h96A22,22,0,0,1,198,56Zm-12,0a10,10,0,0,0-10-10H80A10,10,0,0,0,70,56V224a10,10,0,0,0,10,10h96a10,10,0,0,0,10-10Zm-30,78H134V112a6,6,0,0,0-12,0v22H100a6,6,0,0,0,0,12h22v22a6,6,0,0,0,12,0V146h22a6,6,0,0,0,0-12Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Zm-28,76H136V112a8,8,0,0,0-16,0v20H100a8,8,0,0,0,0,16h20v20a8,8,0,0,0,16,0V148h20a8,8,0,0,0,0-16Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M92,8a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,8ZM196,56V224a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V56A20,20,0,0,1,80,36h96A20,20,0,0,1,196,56Zm-8,0a12,12,0,0,0-12-12H80A12,12,0,0,0,68,56V224a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12Zm-32,80H132V112a4,4,0,0,0-8,0v24H100a4,4,0,0,0,0,8h24v24a4,4,0,0,0,8,0V144h24a4,4,0,0,0,0-8Z"/></g>
  </svg>
</template>
