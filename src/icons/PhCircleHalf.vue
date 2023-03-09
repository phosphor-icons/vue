/* GENERATED FILE */
<script lang="ts">
export default {
  name: "PhCircleHalf"
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
<g v-if="displayWeight === 'bold'"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,24.87a83.53,83.53,0,0,1,24,7.25V203.88a83.53,83.53,0,0,1-24,7.25ZM44,128a84.12,84.12,0,0,1,72-83.13V211.13A84.12,84.12,0,0,1,44,128Zm144,58.71V69.29a83.81,83.81,0,0,1,0,117.42Z"/></g>
<g v-else-if="displayWeight === 'duotone'"><path d="M224,128a96,96,0,0,1-96,96V32A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm96,87.63V40.37a88,88,0,0,1,0,175.26Z"/></g>
<g v-else-if="displayWeight === 'fill'"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88V216A88.1,88.1,0,0,1,40,128Z"/></g>
<g v-else-if="displayWeight === 'light'"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,12.2a89.86,89.86,0,0,1,20,3.63V214.17a89.86,89.86,0,0,1-20,3.63Zm32,8.23a90.48,90.48,0,0,1,20,12.81V196.76a90.48,90.48,0,0,1-20,12.81ZM38,128a90.12,90.12,0,0,1,84-89.8V217.8A90.12,90.12,0,0,1,38,128Zm160,56.5V71.5a89.81,89.81,0,0,1,0,113Z"/></g>
<g v-else-if="displayWeight === 'regular'"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,16.37a86.4,86.4,0,0,1,16,3V212.67a86.4,86.4,0,0,1-16,3Zm32,9.26a87.81,87.81,0,0,1,16,10.54V195.83a87.81,87.81,0,0,1-16,10.54ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm160,50.54V77.46a87.82,87.82,0,0,1,0,101.08Z"/></g>
<g v-else-if="displayWeight === 'thin'"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,8.09a91.58,91.58,0,0,1,24,4.27V215.64a91.58,91.58,0,0,1-24,4.27Zm32,7.25a92.21,92.21,0,0,1,24,15V197.69a92.21,92.21,0,0,1-24,15ZM36,128a92.11,92.11,0,0,1,88-91.91V219.91A92.11,92.11,0,0,1,36,128Zm160,61.9V66.1a91.83,91.83,0,0,1,0,123.8Z"/></g>
  </svg>
</template>
