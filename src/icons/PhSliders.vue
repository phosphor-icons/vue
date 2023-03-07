/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhSliders"
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
<g v-if="displayWeight === 'bold'"><path d="M68,102.06V40a12,12,0,0,0-24,0v62.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V169.94a36,36,0,0,0,0-67.88ZM56,148a12,12,0,1,1,12-12A12,12,0,0,1,56,148ZM164,88a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0V54.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V121.94A36.07,36.07,0,0,0,164,88Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,128,100Zm108,68a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0v94.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V201.94A36.07,36.07,0,0,0,236,168Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,200,180Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M80,136a24,24,0,1,1-24-24A24,24,0,0,1,80,136Zm48-72a24,24,0,1,0,24,24A24,24,0,0,0,128,64Zm72,80a24,24,0,1,0,24,24A24,24,0,0,0,200,144Z" opacity="0.2"/><path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M84,136a28,28,0,0,1-20,26.83V216a8,8,0,0,1-16,0V162.83a28,28,0,0,1,0-53.66V40a8,8,0,0,1,16,0v69.17A28,28,0,0,1,84,136Zm52-74.83V40a8,8,0,0,0-16,0V61.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V114.83a28,28,0,0,0,0-53.66Zm72,80V40a8,8,0,0,0-16,0V141.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V194.83a28,28,0,0,0,0-53.66Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M62,106.6V40a6,6,0,0,0-12,0v66.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V165.4a30,30,0,0,0,0-58.8ZM56,154a18,18,0,1,1,18-18A18,18,0,0,1,56,154Zm78-95.4V40a6,6,0,0,0-12,0V58.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V117.4a30,30,0,0,0,0-58.8ZM128,106a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm102,62a30.05,30.05,0,0,0-24-29.4V40a6,6,0,0,0-12,0v98.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V197.4A30.05,30.05,0,0,0,230,168Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,200,186Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M60,108.29V40a4,4,0,0,0-8,0v68.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V163.71a28,28,0,0,0,0-55.42ZM56,156a20,20,0,1,1,20-20A20,20,0,0,1,56,156Zm76-95.71V40a4,4,0,0,0-8,0V60.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V115.71a28,28,0,0,0,0-55.42ZM128,108a20,20,0,1,1,20-20A20,20,0,0,1,128,108Zm100,60a28,28,0,0,0-24-27.71V40a4,4,0,0,0-8,0V140.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V195.71A28,28,0,0,0,228,168Zm-28,20a20,20,0,1,1,20-20A20,20,0,0,1,200,188Z"/></g>
  </svg>
</template>
