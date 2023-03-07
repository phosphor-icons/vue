/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhTent"
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
<g v-if="displayWeight === 'bold'"><path d="M255,195.13l-64-144A12,12,0,0,0,180,44H76a12,12,0,0,0-10.85,6.9,2.42,2.42,0,0,0-.12.23L65,51.3a.08.08,0,0,0,0,0L1,195.13A12,12,0,0,0,12,212H244a12,12,0,0,0,11-16.87ZM64,112.55V188H30.46ZM88,188V112.55L121.54,188Zm59.8,0L94.47,68H172.2l53.34,120Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M136,200H8L72,56Z" opacity="0.2"/><path d="M255.31,196.75l-64-144A8,8,0,0,0,184,48H72a8,8,0,0,0-7.27,4.69.21.21,0,0,0,0,.06l0,.12,0,0L.69,196.75A8,8,0,0,0,8,208H248a8,8,0,0,0,7.31-11.25ZM64,192H20.31L64,93.7Zm16,0V93.7L123.69,192Zm61.2,0L84.31,64H178.8l56.89,128Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M255.31,196.75l-64-144A8,8,0,0,0,184,48H72a8,8,0,0,0-7.31,4.75h0l0,.12v0L.69,196.75A8,8,0,0,0,8,208H248a8,8,0,0,0,7.31-11.25ZM64,192H20.31L64,93.7Zm16,0V93.7L123.69,192Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M253.48,197.56l-64-144A6,6,0,0,0,184,50H72a6,6,0,0,0-5.45,3.51l0,.05,0,.09v0L2.52,197.56A6,6,0,0,0,8,206H248a6,6,0,0,0,5.48-8.44ZM66,84.27V194H17.23ZM78,194V84.27L126.77,194Zm61.9,0L81.23,62H180.1l58.67,132Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M255.31,196.75l-64-144A8,8,0,0,0,184,48H72a8,8,0,0,0-7.27,4.69.21.21,0,0,0,0,.06l0,.12,0,0L.69,196.75A8,8,0,0,0,8,208H248a8,8,0,0,0,7.31-11.25ZM64,192H20.31L64,93.7Zm16,0V93.7L123.69,192Zm61.2,0L84.31,64H178.8l56.89,128Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M251.66,198.38l-64-144A4,4,0,0,0,184,52H72a4,4,0,0,0-3.63,2.35s0,0,0,0l0,.06h0l-64,143.93A4,4,0,0,0,8,204H248a4,4,0,0,0,3.66-5.62ZM68,74.85V196H14.16ZM76,196V74.85L129.84,196Zm62.6,0L78.16,60H181.4l60.44,136Z"/></g>
  </svg>
</template>
