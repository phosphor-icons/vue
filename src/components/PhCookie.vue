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
    <g v-if="displayWeight === 'bold'"><path d="M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="156" cy="172" r="16"/><circle cx="92" cy="164" r="16"/><circle cx="84" cy="108" r="16"/><circle cx="136" cy="124" r="16"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z" opacity="0.2"/><path d="M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="156" cy="172" r="12"/><circle cx="92" cy="164" r="12"/><circle cx="84" cy="108" r="12"/><circle cx="136" cy="124" r="12"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M225.9,114.9a15.8,15.8,0,0,0-13.4-3.1,23.9,23.9,0,0,1-29.3-23.1,16,16,0,0,0-15.9-15.9,23.9,23.9,0,0,1-23.1-29.3A16.1,16.1,0,0,0,128.6,24H128A104.1,104.1,0,0,0,24,128.7a104,104,0,0,0,208-1.3h0A15.7,15.7,0,0,0,225.9,114.9ZM75.5,99.5a12,12,0,1,1,0,17A12,12,0,0,1,75.5,99.5Zm25,73a12,12,0,1,1,0-17A12,12,0,0,1,100.5,172.5Zm27-40a12,12,0,1,1,17,0A12,12,0,0,1,127.5,132.5Zm37,48a12,12,0,1,1,0-17A12,12,0,0,1,164.5,180.5Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="156" cy="172" r="10"/><circle cx="92" cy="164" r="10"/><circle cx="84" cy="108" r="10"/><circle cx="136" cy="124" r="10"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="156" cy="172" r="8"/><circle cx="92" cy="164" r="8"/><circle cx="84" cy="108" r="8"/><circle cx="136" cy="124" r="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="156" cy="172" r="12"/><circle cx="92" cy="164" r="12"/><circle cx="84" cy="108" r="12"/><circle cx="136" cy="124" r="12"/></g>
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
  name: "PhCookie",
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
