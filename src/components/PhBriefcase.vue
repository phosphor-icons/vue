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
    <g v-if="displayWeight === 'bold'"><rect x="32" y="68" width="192" height="144" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,68V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V68" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,122.3A191.3,191.3,0,0,1,128,148a190.3,190.3,0,0,1-96-25.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="112" x2="140" y2="112" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M128,152a190.3,190.3,0,0,1-96-25.7V208a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V126.3A191.3,191.3,0,0,1,128,152Z" opacity="0.2"/><rect x="32" y="72" width="192" height="144" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,126.3A191.3,191.3,0,0,1,128,152a190.3,190.3,0,0,1-96-25.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="116" y1="120" x2="140" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M216,64H176V56a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,56v8H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,80v41.6A183.6,183.6,0,0,1,128,144a183.6,183.6,0,0,1-88-22.4V80ZM108,120a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H116A8,8,0,0,1,108,120Z"/></g>
    <g v-else-if="displayWeight === 'light'"><rect x="32" y="72" width="192" height="144" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M224,126.3A191.3,191.3,0,0,1,128,152a190.3,190.3,0,0,1-96-25.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="116" y1="120" x2="140" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><rect x="32" y="72" width="192" height="144" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M224,126.3A191.3,191.3,0,0,1,128,152a190.3,190.3,0,0,1-96-25.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="116" y1="120" x2="140" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><rect x="32" y="72" width="192" height="144" rx="8" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,126.3A191.3,191.3,0,0,1,128,152a190.3,190.3,0,0,1-96-25.7" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="116" y1="120" x2="140" y2="120" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhBriefcase",
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
