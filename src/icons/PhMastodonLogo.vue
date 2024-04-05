/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhMastodonLogo"
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
<g v-if="displayWeight === 'bold'"><path d="M184,28H72A44.05,44.05,0,0,0,28,72V192a44.05,44.05,0,0,0,44,44h88a12,12,0,0,0,0-24H72a20,20,0,0,1-20-20v-4H184a44.05,44.05,0,0,0,44-44V72A44.05,44.05,0,0,0,184,28Zm20,116a20,20,0,0,1-20,20H52V72A20,20,0,0,1,72,52H184a20,20,0,0,1,20,20Zm-16-40v32a12,12,0,0,1-24,0V104a12,12,0,0,0-24,0v32a12,12,0,0,1-24,0V104a12,12,0,0,0-24,0v32a12,12,0,0,1-24,0V104a36,36,0,0,1,60-26.8A36,36,0,0,1,188,104Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M216,72v72a32,32,0,0,1-32,32H40V72A32,32,0,0,1,72,40H184A32,32,0,0,1,216,72Z" opacity="0.2"/><path d="M184,32H72A40,40,0,0,0,32,72V192a40,40,0,0,0,40,40h88a8,8,0,0,0,0-16H72a24,24,0,0,1-24-24v-8H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32Zm24,112a24,24,0,0,1-24,24H48V72A24,24,0,0,1,72,48H184a24,24,0,0,1,24,24Zm-24-40v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a32,32,0,0,1,56-21.13A32,32,0,0,1,184,104Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M184,32H72A40,40,0,0,0,32,72V192a40,40,0,0,0,40,40h88a8,8,0,0,0,0-16H72a24,24,0,0,1-24-24v-8H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32Zm0,104a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a32,32,0,0,1,56-21.13A32,32,0,0,1,184,104Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M184,34H72A38,38,0,0,0,34,72V192a38,38,0,0,0,38,38h88a6,6,0,0,0,0-12H72a26,26,0,0,1-26-26V182H184a38,38,0,0,0,38-38V72A38,38,0,0,0,184,34Zm26,110a26,26,0,0,1-26,26H46V72A26,26,0,0,1,72,46H184a26,26,0,0,1,26,26Zm-28-40v32a6,6,0,0,1-12,0V104a18,18,0,0,0-36,0v32a6,6,0,0,1-12,0V104a18,18,0,0,0-36,0v32a6,6,0,0,1-12,0V104a30,30,0,0,1,54-18,30,30,0,0,1,54,18Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M184,32H72A40,40,0,0,0,32,72V192a40,40,0,0,0,40,40h88a8,8,0,0,0,0-16H72a24,24,0,0,1-24-24v-8H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32Zm24,112a24,24,0,0,1-24,24H48V72A24,24,0,0,1,72,48H184a24,24,0,0,1,24,24Zm-24-40v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a32,32,0,0,1,56-21.13A32,32,0,0,1,184,104Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M184,36H72A36,36,0,0,0,36,72V192a36,36,0,0,0,36,36h88a4,4,0,0,0,0-8H72a28,28,0,0,1-28-28V180H184a36,36,0,0,0,36-36V72A36,36,0,0,0,184,36Zm28,108a28,28,0,0,1-28,28H44V72A28,28,0,0,1,72,44H184a28,28,0,0,1,28,28Zm-32-40v32a4,4,0,0,1-8,0V104a20,20,0,0,0-40,0v32a4,4,0,0,1-8,0V104a20,20,0,0,0-40,0v32a4,4,0,0,1-8,0V104a28,28,0,0,1,52-14.41A28,28,0,0,1,180,104Z"/></g>
  </svg>
</template>
