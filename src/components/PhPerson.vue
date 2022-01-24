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
      <circle
        cx="127.9"
        cy="44"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="127.9" cy="44" r="28" opacity="0.2" />
      <path
        d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
        opacity="0.2"
      />
      <circle
        cx="127.9"
        cy="44"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <circle cx="127.9" cy="44" r="36" />
      <path
        d="M211.7,139.5,172.3,88.9l-.6-.7A27.8,27.8,0,0,0,151.9,80h-48a27.8,27.8,0,0,0-19.8,8.2l-.7.7L44.1,139.5a20,20,0,0,0,28.3,28.3l14.1-11L66.6,219.5a20.2,20.2,0,0,0-.4,14.7,19.9,19.9,0,0,0,10.4,11.3,19.6,19.6,0,0,0,15.2.7,20.2,20.2,0,0,0,11.1-9.8l25-39.4,25,39.4a20.4,20.4,0,0,0,11,9.8,20.9,20.9,0,0,0,6.9,1.2,19.1,19.1,0,0,0,8.4-1.9,20.2,20.2,0,0,0,10.4-11.3,19.7,19.7,0,0,0-.5-14.7l-19.8-62.7,14.1,11a20,20,0,0,0,27.9-.4,19.7,19.7,0,0,0,5.8-14.1A19.9,19.9,0,0,0,211.7,139.5Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="127.9"
        cy="44"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="127.9"
        cy="44"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="127.9"
        cy="44"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
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
  name: "PhPerson",
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
