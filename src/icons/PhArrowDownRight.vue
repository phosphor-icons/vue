/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhArrowDownRight"
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
<g v-if="displayWeight === 'bold'"><path d="M204,88V192a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h75L55.51,72.48a12,12,0,0,1,17-17L180,163V88a12,12,0,0,1,24,0Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M192,88V192H88Z" opacity="0.2"/><path d="M195.06,80.61a8,8,0,0,0-8.72,1.73L140,128.69,69.66,58.34A8,8,0,0,0,58.34,69.66L128.69,140,82.34,186.34A8,8,0,0,0,88,200H192a8,8,0,0,0,8-8V88A8,8,0,0,0,195.06,80.61ZM184,184H107.31l38.34-38.34h0L184,107.31Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1-5.66-13.66L128.69,140,58.34,69.66A8,8,0,0,1,69.66,58.34L140,128.69l46.34-46.35A8,8,0,0,1,200,88Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M198,88V192a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h89.52L59.76,68.24a6,6,0,0,1,8.48-8.48L186,177.52V88a6,6,0,0,1,12,0Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M196,88V192a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h94.34L61.17,66.83a4,4,0,0,1,5.66-5.66L188,182.34V88a4,4,0,0,1,8,0Z"/></g>
  </svg>
</template>
