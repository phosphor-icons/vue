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
    <g v-if="displayWeight === 'bold'"><polyline points="148 32 148 92 208 92" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M180,224h20a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v84" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M65.7,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-44-44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><polyline points="152 32 152 88 208 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M65.7,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-44-44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM160,51.3,188.7,80H160ZM160,180a52,52,0,0,1-52,52H60a36,36,0,0,1-9.2-70.8A65.3,65.3,0,0,0,48,180a8,8,0,0,0,16,0,47.4,47.4,0,0,1,4.4-20h0A48,48,0,0,1,160,180Z"/></g>
    <g v-else-if="displayWeight === 'light'"><polyline points="152 32 152 88 208 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M65.7,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-44-44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><polyline points="152 32 152 88 208 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M65.7,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-44-44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><polyline points="152 32 152 88 208 88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M65.7,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-44-44" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhFileCloud",
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
