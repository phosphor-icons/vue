/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhBed"
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
<g v-if="displayWeight === 'bold'"><path d="M208,68H28V48A12,12,0,0,0,4,48V208a12,12,0,0,0,24,0V180H228v28a12,12,0,0,0,24,0V112A44.05,44.05,0,0,0,208,68ZM92,156H28V92H92Zm136,0H116V92h92a20,20,0,0,1,20,20Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M240,112v56H104V80H208A32,32,0,0,1,240,112Z" opacity="0.2"/><path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Zm88,72V88h96a24,24,0,0,1,24,24v48Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M208,74H22V48a6,6,0,0,0-12,0V208a6,6,0,0,0,12,0V174H234v34a6,6,0,0,0,12,0V112A38,38,0,0,0,208,74ZM22,86H98v76H22Zm88,76V86h98a26,26,0,0,1,26,26v50Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Zm88,72V88h96a24,24,0,0,1,24,24v48Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M208,76H20V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V172H236v36a4,4,0,0,0,8,0V112A36,36,0,0,0,208,76ZM20,84h80v80H20Zm88,80V84H208a28,28,0,0,1,28,28v52Z"/></g>
  </svg>
</template>
