/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhStairs"
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
<g v-if="displayWeight === 'bold'"><path d="M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20ZM152,148h44v16H116V148Zm12-24V108h32v16Zm32-80V84H152a12,12,0,0,0-12,12v28H104a12,12,0,0,0-12,12v28H60V44ZM60,212V188H196v24Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M208,40V96H152v40H104v40H48V40a8,8,0,0,1,8-8H200A8,8,0,0,1,208,40Z" opacity="0.2"/><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM152,144h48v24H112V144Zm8-16V104h40v24Zm40-88V88H152a8,8,0,0,0-8,8v32H104a8,8,0,0,0-8,8v32H56V40Zm0,176H56V184H200v32Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v24H160Zm-48,40h88v24H112Zm88,72H56V184H200v32Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M200,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26ZM152,142h50v28H110V142Zm6-12V102h44v28ZM56,38H200a2,2,0,0,1,2,2V90H152a6,6,0,0,0-6,6v34H104a6,6,0,0,0-6,6v34H54V40A2,2,0,0,1,56,38ZM200,218H56a2,2,0,0,1-2-2V182H202v34A2,2,0,0,1,200,218Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM152,144h48v24H112V144Zm8-16V104h40v24Zm40-88V88H152a8,8,0,0,0-8,8v32H104a8,8,0,0,0-8,8v32H56V40Zm0,176H56V184H200v32Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M200,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28ZM152,140h52v32H108V140Zm4-8V100h48v32ZM56,36H200a4,4,0,0,1,4,4V92H152a4,4,0,0,0-4,4v36H104a4,4,0,0,0-4,4v36H52V40A4,4,0,0,1,56,36ZM200,220H56a4,4,0,0,1-4-4V180H204v36A4,4,0,0,1,200,220Z"/></g>
  </svg>
</template>
