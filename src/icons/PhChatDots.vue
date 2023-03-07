/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhChatDots"
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
<g v-if="displayWeight === 'bold'"><path d="M216,44H40A20,20,0,0,0,20,64V224A19.82,19.82,0,0,0,31.56,242.1a20.14,20.14,0,0,0,8.49,1.9,19.91,19.91,0,0,0,12.82-4.72l.19-.16L84,212H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44Zm-4,144H82.5a20,20,0,0,0-12.87,4.69l-.19.16L44,215.14V68H212ZM88,128a16,16,0,1,1,16,16A16,16,0,0,1,88,128Zm48,0a16,16,0,1,1,16,16A16,16,0,0,1,136,128Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,64V192a8,8,0,0,1-8,8H82.5a8,8,0,0,0-5.15,1.88l-32.2,28.23A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z" opacity="0.2"/><path d="M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216ZM116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-44,0a12,12,0,1,1,12,12A12,12,0,0,1,72,128Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,128Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M216,50H40A14,14,0,0,0,26,64V224a13.88,13.88,0,0,0,8.09,12.69A14.11,14.11,0,0,0,40,238a13.87,13.87,0,0,0,9-3.31l.09-.08,32.14-28.17A2,2,0,0,1,82.5,206H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50Zm2,142a2,2,0,0,1-2,2H82.5a14,14,0,0,0-9,3.29l-.09.08L41.25,225.54A2,2,0,0,1,38,224V64a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm-80-64a10,10,0,1,1-10-10A10,10,0,0,1,138,128Zm-44,0a10,10,0,1,1-10-10A10,10,0,0,1,94,128Zm88,0a10,10,0,1,1-10-10A10,10,0,0,1,182,128Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216ZM116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-44,0a12,12,0,1,1,12,12A12,12,0,0,1,72,128Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,128Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M216,52H40A12,12,0,0,0,28,64V224a11.89,11.89,0,0,0,6.93,10.88A12.17,12.17,0,0,0,40,236a11.89,11.89,0,0,0,7.69-2.83l.06-.06,32.14-28.17A4,4,0,0,1,82.5,204H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52Zm4,140a4,4,0,0,1-4,4H82.5a12.1,12.1,0,0,0-7.79,2.87l-32.16,28.2A4,4,0,0,1,36,224V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Zm-84-64a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-44,0a8,8,0,1,1-8-8A8,8,0,0,1,92,128Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,180,128Z"/></g>
  </svg>
</template>
