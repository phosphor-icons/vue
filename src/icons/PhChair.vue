/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhChair"
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
<g v-if="displayWeight === 'bold'"><path d="M208,128H180V108h12a20,20,0,0,0,20-20V40a20,20,0,0,0-20-20H64A20,20,0,0,0,44,40V88a20,20,0,0,0,20,20H76v20H48a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20h8v32a12,12,0,0,0,24,0V192h96v32a12,12,0,0,0,24,0V192h8a20,20,0,0,0,20-20V148A20,20,0,0,0,208,128ZM68,44H188V84H68Zm32,64h56v20H100Zm104,60H52V152H204Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M56,88V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V88a8,8,0,0,1-8,8H64A8,8,0,0,1,56,88Zm152,56H48a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V152A8,8,0,0,0,208,144Z" opacity="0.2"/><path d="M208,136H176V104h16a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V88a16,16,0,0,0,16,16H80v32H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16h8v40a8,8,0,0,0,16,0V184H184v40a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136ZM64,40H192V88H64Zm32,64h64v32H96Zm112,64H48V152H208v16Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M208,136H176V104h16a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V88a16,16,0,0,0,16,16H80v32H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16h8v40a8,8,0,0,0,16,0V184H184v40a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm-48,0H96V104h64Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M208,138H174V102h18a14,14,0,0,0,14-14V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V88a14,14,0,0,0,14,14H82v36H48a14,14,0,0,0-14,14v16a14,14,0,0,0,14,14H58v42a6,6,0,0,0,12,0V182H186v42a6,6,0,0,0,12,0V182h10a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138ZM62,88V40a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2V88a2,2,0,0,1-2,2H64A2,2,0,0,1,62,88Zm32,14h68v36H94Zm116,66a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M208,136H176V104h16a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V88a16,16,0,0,0,16,16H80v32H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16h8v40a8,8,0,0,0,16,0V184H184v40a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136ZM64,40H192V88H64Zm32,64h64v32H96Zm112,64H48V152H208v16Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M208,140H172V100h20a12,12,0,0,0,12-12V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V88a12,12,0,0,0,12,12H84v40H48a12,12,0,0,0-12,12v16a12,12,0,0,0,12,12H60v44a4,4,0,0,0,8,0V180H188v44a4,4,0,0,0,8,0V180h12a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140ZM60,88V40a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4V88a4,4,0,0,1-4,4H64A4,4,0,0,1,60,88Zm32,12h72v40H92Zm120,68a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/></g>
  </svg>
</template>
