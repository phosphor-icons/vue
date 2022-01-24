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
        cx="128"
        cy="108"
        r="28"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M134.6,224H121.4a16,16,0,0,1-15.8-13.1l-10.2-56A16,16,0,0,1,111.2,136h33.6a16,16,0,0,1,15.8,18.9l-10.2,56A16,16,0,0,1,134.6,224Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M134.6,224H121.4a16,16,0,0,1-15.8-13.1l-10.2-56A16,16,0,0,1,111.2,136h33.6a16,16,0,0,1,15.8,18.9l-10.2,56A16,16,0,0,1,134.6,224Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M62.7,198.4a96,96,0,1,1,130.6,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="128" cy="120" r="24" opacity="0.2" />
      <path
        d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
        opacity="0.2"
      />
      <circle
        cx="128"
        cy="120"
        r="24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M68.3,151.2a64,64,0,1,1,119.4,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M76.4,208.9a96,96,0,1,1,103.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,144a28,28,0,1,1,28-28A28.1,28.1,0,0,1,128,144Zm12.5,0h-25a19.9,19.9,0,0,0-15.4,7.3,19.6,19.6,0,0,0-4.2,16.6l9.6,48A20.1,20.1,0,0,0,125.1,232h5.8a20.1,20.1,0,0,0,19.6-16.1l9.6-48a19.6,19.6,0,0,0-4.2-16.6A19.9,19.9,0,0,0,140.5,144Zm39.7,4.3a8,8,0,0,0,14.9,5.8A70.7,70.7,0,0,0,200,128a72,72,0,0,0-144,0,70.3,70.3,0,0,0,4.9,26.1,8,8,0,0,0,7.4,5.1,7.2,7.2,0,0,0,2.9-.6,8,8,0,0,0,4.6-10.3,56,56,0,1,1,104.4,0ZM128,24A104,104,0,0,0,72,215.7a8,8,0,0,0,8.7-13.5,88,88,0,1,1,94.6,0,8,8,0,0,0,4.4,14.7,8.8,8.8,0,0,0,4.3-1.2A104,104,0,0,0,128,24Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="128"
        cy="120"
        r="24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M68.3,151.2a64,64,0,1,1,119.4,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M76.4,208.9a96,96,0,1,1,103.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="128"
        cy="120"
        r="24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M68.3,151.2a64,64,0,1,1,119.4,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M76.4,208.9a96,96,0,1,1,103.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="128"
        cy="120"
        r="24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M68.3,151.2a64,64,0,1,1,119.4,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M76.4,208.9a96,96,0,1,1,103.2,0"
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
  name: "PhApplePodcastsLogo",
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
