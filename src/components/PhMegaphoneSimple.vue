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
    <g v-if="displayWeight === 'bold'"><path d="M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></g>
    <g v-else-if="displayWeight === 'duotone'"><path d="M42.2,43A8,8,0,0,0,32,50.7V189.3A8,8,0,0,0,42.2,197L136,169.7V70.3Z" opacity="0.2"/><path d="M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
    <g v-else-if="displayWeight === 'fill'"><path d="M220.5,86.6,138.4,62.7h-.1L44.5,35.3a15.8,15.8,0,0,0-14.1,2.6A15.7,15.7,0,0,0,24,50.7V189.3a16,16,0,0,0,15.9,16,17.6,17.6,0,0,0,4.6-.6L128,180.3V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V161.7l28.5-8.3A16.1,16.1,0,0,0,232,138V102A16.1,16.1,0,0,0,220.5,86.6ZM176,192H144V175.7l32-9.4Zm40-54-34.4,10h0L144,159V81l72,21Z"/></g>
    <g v-else-if="displayWeight === 'light'"><path d="M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></g>
    <g v-else-if="displayWeight === 'thin'"><path d="M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></g>
    <g v-else-if="displayWeight === 'regular'"><path d="M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></g>
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
  name: "PhMegaphoneSimple",
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
