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
    <g v-if="displayWeight === 'bold'">
      <path
        d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M191.99414,184H46c-21.62207,0-39.21289-17.94434-39.21289-40S24.37793,104,46,104H190a24,24,0,0,1,0,48H78a8,8,0,0,1,0-16H190a8,8,0,0,0,0-16H46c-12.7998,0-23.21289,10.7666-23.21289,24S33.2002,168,46,168H191.99414a40,40,0,1,0,0-80h-112a8,8,0,0,1,0-16h112a56,56,0,1,1,0,112Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
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
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhPaperclip",
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
