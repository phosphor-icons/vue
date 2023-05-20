/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhGoogleCardboardLogo"
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
<g v-if="displayWeight === 'bold'"><path d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L128,185l21.17,21.17A19.86,19.86,0,0,0,163.31,212H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H165l-22.83-22.83a20,20,0,0,0-28.28,0L91,188H36V68H220ZM82,160a34,34,0,1,0-34-34A34,34,0,0,0,82,160Zm0-44a10,10,0,1,1-10,10A10,10,0,0,1,82,116Zm92,44a34,34,0,1,0-34-34A34,34,0,0,0,174,160Zm0-44a10,10,0,1,1-10,10A10,10,0,0,1,174,116Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,56H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H92.69a8,8,0,0,0,5.65-2.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,0,5.65,2.34H224a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z" opacity="0.2"/><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,203.31l24-24,24,24A15.89,15.89,0,0,0,163.31,208H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H163.31l-24-24a16,16,0,0,0-22.62,0l-24,24H32V64H224ZM80,160a32,32,0,1,0-32-32A32,32,0,0,0,80,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,80,112Zm96,48a32,32,0,1,0-32-32A32,32,0,0,0,176,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,112Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,203.31l21.17-21.17a4,4,0,0,1,5.66,0L152,203.32A15.89,15.89,0,0,0,163.31,208H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1l24-24a2,2,0,0,1,2.82,0l24,24a13.94,13.94,0,0,0,9.9,4.1H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,142a2,2,0,0,1-2,2H163.31a2,2,0,0,1-1.41-.58l-24-24a14,14,0,0,0-19.8,0l-24,24a2,2,0,0,1-1.41.59H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM80,98a30,30,0,1,0,30,30A30,30,0,0,0,80,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,80,146Zm96-48a30,30,0,1,0,30,30A30,30,0,0,0,176,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,176,146Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,203.31l24-24,24,24A15.86,15.86,0,0,0,163.31,208H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H163.31l-24-24a16,16,0,0,0-22.62,0l-24,24H32V64H224ZM80,160a32,32,0,1,0-32-32A32,32,0,0,0,80,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,80,112Zm96,48a32,32,0,1,0-32-32A32,32,0,0,0,176,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,112Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51l24-24a4.08,4.08,0,0,1,5.66,0l24,24a12,12,0,0,0,8.48,3.51H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,140a4,4,0,0,1-4,4H163.31a4,4,0,0,1-2.82-1.17l-24-24a12,12,0,0,0-17,0l-24,24A4,4,0,0,1,92.69,196H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM80,100a28,28,0,1,0,28,28A28,28,0,0,0,80,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,80,148Zm96-48a28,28,0,1,0,28,28A28,28,0,0,0,176,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,176,148Z"/></g>
  </svg>
</template>