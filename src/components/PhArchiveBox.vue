/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <g v-if="displayWeight === 'bold'"><path d="M208,216H48a8,8,0,0,1-8-8V76L56,40H200l16,36V208A8,8,0,0,1,208,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="76" x2="216" y2="76" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="99.7 151.7 128 180 156.3 151.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="112" x2="128" y2="180" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M216,72V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V72Z" opacity="0.2"/><path d="M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="94.1 150.1 128 184 161.9 150.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="104" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="72" x2="216" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M223.2,68.4l-16-32A8.2,8.2,0,0,0,200,32H56a8.2,8.2,0,0,0-7.2,4.4l-16,32A9,9,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A9,9,0,0,0,223.2,68.4Zm-55.6,87.3-33.9,34a8.2,8.2,0,0,1-11.4,0l-33.9-34a8,8,0,0,1,11.3-11.3L120,164.7V104a8,8,0,0,1,16,0v60.7l20.3-20.3a8,8,0,0,1,11.3,11.3ZM52.9,64l8-16H195.1l8,16Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="94.1 150.1 128 184 161.9 150.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="104" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="40" y1="72" x2="216" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="94.1 150.1 128 184 161.9 150.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="104" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="40" y1="72" x2="216" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="94.1 150.1 128 184 161.9 150.1" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="104" x2="128" y2="184" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="72" x2="216" y2="72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "../types";
export default /*#__PURE__*/Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhArchiveBox",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight ?? contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size ?? contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color ?? contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
