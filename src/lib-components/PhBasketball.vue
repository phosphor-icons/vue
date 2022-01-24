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
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="128"
        y1="32"
        x2="128"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M60.1,195.9a95.8,95.8,0,0,1-.2-135.6h0a95.5,95.5,0,0,1,28,67.7,95.8,95.8,0,0,1-28,67.8Z"
        opacity="0.2"
      />
      <path
        d="M196.1,195.9a95.8,95.8,0,0,1-.2-135.6h0a96,96,0,0,1,0,135.5Z"
        opacity="0.2"
      />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="32"
        x2="128"
        y2="224"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M63.6,46.4a104.3,104.3,0,0,1,52-21.7,4,4,0,0,1,4.4,4V120H95.7A104.1,104.1,0,0,0,63.4,52.4,3.9,3.9,0,0,1,63.6,46.4ZM46,64.1a104.8,104.8,0,0,0-21.3,51.4,4.1,4.1,0,0,0,4,4.5H79.6A88,88,0,0,0,51.9,63.6,4,4,0,0,0,46,64.1ZM192.4,46.4a104.3,104.3,0,0,0-52-21.7,4,4,0,0,0-4.4,4V120h24.3a104.1,104.1,0,0,1,32.3-67.6A3.9,3.9,0,0,0,192.4,46.4Zm38.9,69.1A104.8,104.8,0,0,0,210,64.1a4,4,0,0,0-5.9-.5A88,88,0,0,0,176.4,120h50.9A4.1,4.1,0,0,0,231.3,115.5Zm-206.6,25A104.8,104.8,0,0,0,46,191.9a4,4,0,0,0,5.9.5A88,88,0,0,0,79.6,136H28.7A4.1,4.1,0,0,0,24.7,140.5ZM210,191.9a104.8,104.8,0,0,0,21.3-51.4,4.1,4.1,0,0,0-4-4.5H176.4a88,88,0,0,0,27.7,56.4A4,4,0,0,0,210,191.9ZM63.6,209.6a104.3,104.3,0,0,0,52,21.7,4,4,0,0,0,4.4-4V136H95.7a104.1,104.1,0,0,1-32.3,67.6A3.9,3.9,0,0,0,63.6,209.6ZM160.3,136H136v91.3a4,4,0,0,0,4.4,4,104.3,104.3,0,0,0,52-21.7,3.9,3.9,0,0,0,.2-6A104.1,104.1,0,0,1,160.3,136Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="128"
        y1="32"
        x2="128"
        y2="224"
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
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="128"
        y1="32"
        x2="128"
        y2="224"
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
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="32"
        x2="128"
        y2="224"
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
  name: "PhBasketball",
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
