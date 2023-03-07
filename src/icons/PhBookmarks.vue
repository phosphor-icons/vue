/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhBookmarks"
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
<g v-if="displayWeight === 'bold'"><path d="M192,20H96A20,20,0,0,0,76,40V60H64A20,20,0,0,0,44,80V224a12,12,0,0,0,19.32,9.51L108,199.14l44.69,34.37A12,12,0,0,0,172,224V177.6l20.68,15.91A12,12,0,0,0,212,184V40A20,20,0,0,0,192,20ZM148,199.63l-32.69-25.14a12,12,0,0,0-14.63,0L68,199.63V84h80Zm40-40-16-12.3V80a20,20,0,0,0-20-20H100V44h88Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M200,40V192l-32-22.85V72a8,8,0,0,0-8-8H88V40a8,8,0,0,1,8-8h96A8,8,0,0,1,200,40Z" opacity="0.2"/><path d="M192,24H96A16,16,0,0,0,80,40V56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V184.69l19.35,13.82A8,8,0,0,0,208,192V40A16,16,0,0,0,192,24ZM160,208.46l-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96Zm32-32L176,165V72a16,16,0,0,0-16-16H96V40h96Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M192,24H96A16,16,0,0,0,80,40V56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V184.69l19.35,13.82A8,8,0,0,0,208,192V40A16,16,0,0,0,192,24Zm0,152.46L176,165V72a16,16,0,0,0-16-16H96V40h96Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M192,26H96A14,14,0,0,0,82,40V58H64A14,14,0,0,0,50,72V224a6,6,0,0,0,9.49,4.88L112,191.37l52.52,37.51A6,6,0,0,0,174,224V180.8l22.51,16.08A6,6,0,0,0,206,192V40A14,14,0,0,0,192,26ZM162,212.34l-46.52-33.22a6,6,0,0,0-7,0L62,212.34V72a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2Zm32-32-20-14.28V72a14,14,0,0,0-14-14H94V40a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M192,24H96A16,16,0,0,0,80,40V56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V184.69l19.35,13.82A8,8,0,0,0,208,192V40A16,16,0,0,0,192,24ZM160,208.46l-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96Zm32-32L176,165V72a16,16,0,0,0-16-16H96V40h96Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M192,28H96A12,12,0,0,0,84,40V60H64A12,12,0,0,0,52,72V224a4,4,0,0,0,6.33,3.25L112,188.92l53.69,38.33A3.94,3.94,0,0,0,168,228a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,172,224V176.92l25.68,18.33A3.94,3.94,0,0,0,200,196a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,204,192V40A12,12,0,0,0,192,28ZM164,216.23l-49.68-35.48a4,4,0,0,0-4.65,0L60,216.23V72a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4Zm32-32-24-17.14V72a12,12,0,0,0-12-12H92V40a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4Z"/></g>
  </svg>
</template>
