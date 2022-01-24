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
    <g v-if="displayWeight === 'bold'">
      <path
        d="M156,200c-13.3,0-24-11.1-24-24.9s10.7-24.9,24-24.9a21.6,21.6,0,0,1,8.8,1.8h0A40,40,0,1,1,204,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M92,176V160a20.1,20.1,0,0,1,7.7-15.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M52,176V160a60,60,0,0,1,90.8-51.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M12,176V160A100,100,0,0,1,177.6,84.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M152,200c-13.3,0-24-11.1-24-24.9s10.7-24.9,24-24.9a21.6,21.6,0,0,1,8.8,1.8h0A40,40,0,1,1,200,200Z"
        opacity="0.2"
      />
      <path
        d="M152,200c-13.3,0-24-11.1-24-24.9s10.7-24.9,24-24.9a21.6,21.6,0,0,1,8.8,1.8h0A40,40,0,1,1,200,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M16,176V160A96,96,0,0,1,178.9,91.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,176V160a64,64,0,0,1,101.9-51.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,176V160a32,32,0,0,1,32-32,30,30,0,0,1,7.4.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M248,160a48,48,0,0,1-48,48H152c-17.6,0-32-14.8-32-32.9s14.4-32.9,32-32.9l3.3.2A48,48,0,0,1,248,160ZM112,72a87.3,87.3,0,0,1,61.3,24.9,8,8,0,1,0,11.2-11.5A104,104,0,0,0,8,160v16a8,8,0,0,0,16,0V160A88.1,88.1,0,0,1,112,72Zm0,32a56,56,0,0,1,33.1,10.8,8,8,0,1,0,9.5-12.8A70.9,70.9,0,0,0,112,88a72.1,72.1,0,0,0-72,72v16a8,8,0,0,0,16,0V160A56,56,0,0,1,112,104Zm15.2,26.7a7.9,7.9,0,0,0-5.9-9.6A42.2,42.2,0,0,0,112,120a40,40,0,0,0-40,40v16a8,8,0,0,0,16,0V160a24.1,24.1,0,0,1,24-24,26,26,0,0,1,5.6.6A7.9,7.9,0,0,0,127.2,130.7Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M152,200c-13.3,0-24-11.1-24-24.9s10.7-24.9,24-24.9a21.6,21.6,0,0,1,8.8,1.8h0A40,40,0,1,1,200,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M16,176V160A96,96,0,0,1,178.9,91.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M48,176V160a64,64,0,0,1,101.9-51.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M80,176V160a32,32,0,0,1,32-32,30,30,0,0,1,7.4.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M152,200c-13.3,0-24-11.1-24-24.9s10.7-24.9,24-24.9a21.6,21.6,0,0,1,8.8,1.8h0A40,40,0,1,1,200,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M16,176V160A96,96,0,0,1,178.9,91.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M48,176V160a64,64,0,0,1,101.9-51.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M80,176V160a32,32,0,0,1,32-32,30,30,0,0,1,7.4.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M152,200c-13.3,0-24-11.1-24-24.9s10.7-24.9,24-24.9a21.6,21.6,0,0,1,8.8,1.8h0A40,40,0,1,1,200,200Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M16,176V160A96,96,0,0,1,178.9,91.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,176V160a64,64,0,0,1,101.9-51.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,176V160a32,32,0,0,1,32-32,30,30,0,0,1,7.4.9"
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
} from "../types";
export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhRainbowCloud",
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
