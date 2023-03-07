/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowSquareIn"
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
<g v-if="displayWeight === 'bold'"><path d="M132,136v64a12,12,0,0,1-24,0V165L48.49,224.49a12,12,0,0,1-17-17L91,148H56a12,12,0,0,1,0-24h64A12,12,0,0,1,132,136ZM208,28H80A20,20,0,0,0,60,48V92a12,12,0,0,0,24,0V52H204V172H164a12,12,0,0,0,0,24h44a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,48V176a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M128,136v64a8,8,0,0,1-13.66,5.66L88,179.31,45.66,221.66a8,8,0,0,1-11.32-11.32L76.69,168,50.34,141.66A8,8,0,0,1,56,128h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M126,136v64a6,6,0,0,1-12,0V150.49L44.24,220.24a6,6,0,0,1-8.48-8.48L105.51,142H56a6,6,0,0,1,0-12h64A6,6,0,0,1,126,136ZM208,34H80A14,14,0,0,0,66,48V96a6,6,0,0,0,12,0V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V176a2,2,0,0,1-2,2H160a6,6,0,0,0,0,12h48a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M124,136v64a4,4,0,0,1-8,0V145.66L42.83,218.83a4,4,0,0,1-5.66-5.66L110.34,140H56a4,4,0,0,1,0-8h64A4,4,0,0,1,124,136ZM208,36H80A12,12,0,0,0,68,48V96a4,4,0,0,0,8,0V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4V176a4,4,0,0,1-4,4H160a4,4,0,0,0,0,8h48a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Z"/></g>
  </svg>
</template>
