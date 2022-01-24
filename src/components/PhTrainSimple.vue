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
    <g v-if="displayWeight === 'bold'"><line x1="44" y1="128" x2="212" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="208" x2="72" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="208" x2="184" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="44" y="32" width="168" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="88" cy="168" r="16"/><circle cx="168" cy="168" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M212,56a23.9,23.9,0,0,0-24-24H68A23.9,23.9,0,0,0,44,56v72H212Z" opacity="0.2"/><line x1="44" y1="128" x2="212" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="208" x2="72" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="208" x2="184" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="44" y="32" width="168" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="84" cy="172" r="12"/><circle cx="172" cy="172" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M188,24H68A32.1,32.1,0,0,0,36,56V184a32.1,32.1,0,0,0,32,32H80L65.6,235.2a8,8,0,0,0,1.6,11.2A7.7,7.7,0,0,0,72,248a8,8,0,0,0,6.4-3.2L100,216h56l21.6,28.8A8,8,0,0,0,184,248a7.7,7.7,0,0,0,4.8-1.6,8,8,0,0,0,1.6-11.2L176,216h12a32.1,32.1,0,0,0,32-32V56A32.1,32.1,0,0,0,188,24Zm0,176H68a16,16,0,0,1-16-16V136H204v48A16,16,0,0,1,188,200Z"/><circle cx="84" cy="172" r="12"/><circle cx="172" cy="172" r="12"/></g>
    <g v-else-if="displayWeight === 'light'"><line x1="44" y1="128" x2="212" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="208" x2="72" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="160" y1="208" x2="184" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="44" y="32" width="168" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="172" cy="172" r="10"/><circle cx="84" cy="172" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><line x1="44" y1="128" x2="212" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="96" y1="208" x2="72" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="160" y1="208" x2="184" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="44" y="32" width="168" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="84" cy="172" r="8"/><circle cx="172" cy="172" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><line x1="44" y1="128" x2="212" y2="128" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="208" x2="72" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="208" x2="184" y2="240" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="44" y="32" width="168" height="176" rx="24" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="84" cy="172" r="12"/><circle cx="172" cy="172" r="12"/></g>
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
  name: "PhTrainSimple",
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
