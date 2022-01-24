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
      <line
        x1="96"
        y1="108"
        x2="160"
        y2="108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="96"
        y1="148"
        x2="116"
        y2="148"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M156.7,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.7a7.9,7.9,0,0,1-2.3,5.6l-51.4,51.4A7.9,7.9,0,0,1,156.7,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="215.3 156 156 156 156 215.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon points="216 160 160 160 160 216 216 160" opacity="0.2" />
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="128"
        x2="160"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="160"
        x2="128"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M156.7,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.7a7.9,7.9,0,0,1-2.3,5.6l-51.4,51.4A7.9,7.9,0,0,1,156.7,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="215.3 160 160 160 160 215.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.7a15.9,15.9,0,0,0,11.3-4.7L219.3,168a15.9,15.9,0,0,0,4.7-11.3V48A16,16,0,0,0,208,32ZM96,88h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm32,80H96a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM96,136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm64,68.7V160h44.7Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="96"
        y1="128"
        x2="160"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="96"
        y1="160"
        x2="128"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M156.7,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.7a7.9,7.9,0,0,1-2.3,5.6l-51.4,51.4A7.9,7.9,0,0,1,156.7,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="215.3 160 160 160 160 215.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="96"
        y1="128"
        x2="160"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="96"
        y1="160"
        x2="128"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M156.7,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.7a7.9,7.9,0,0,1-2.3,5.6l-51.4,51.4A7.9,7.9,0,0,1,156.7,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="215.3 160 160 160 160 215.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="128"
        x2="160"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="160"
        x2="128"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M156.7,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.7a7.9,7.9,0,0,1-2.3,5.6l-51.4,51.4A7.9,7.9,0,0,1,156.7,216Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="215.3 160 160 160 160 215.3"
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
  name: "PhNote",
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
