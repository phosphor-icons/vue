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
      <polyline
        points="128 80 128 128 176 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="201.5"
        y1="20.5"
        x2="235.5"
        y2="54.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="20.5"
        y1="54.5"
        x2="54.5"
        y2="20.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="128" cy="128" r="88" opacity="0.2" />
      <polyline
        points="128 72 128 128 184 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <line
        x1="195.9"
        y1="26.2"
        x2="229.8"
        y2="60.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="26.2"
        y1="60.1"
        x2="60.1"
        y2="26.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M235.5,54.5l-34-34a8,8,0,1,0-11.3,11.3l34,34a8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3A8,8,0,0,0,235.5,54.5Z"
      />
      <path
        d="M65.8,20.5a8,8,0,0,0-11.3,0l-34,34a8,8,0,0,0,0,11.3,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3l34-34A8,8,0,0,0,65.8,20.5Z"
      />
      <path
        d="M224,125.2a14.8,14.8,0,0,1-.1-2.1h0A96,96,0,0,0,133,32.1H123A96,96,0,0,0,32.1,123h0a14.8,14.8,0,0,1-.1,2.1v5.6a14.8,14.8,0,0,1,.1,2.1h0A96,96,0,0,0,123,223.9h10A96,96,0,0,0,223.9,133h0a14.8,14.8,0,0,1,.1-2.1v-5.6ZM184,136H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polyline
        points="128 72 128 128 184 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="195.9"
        y1="26.2"
        x2="229.8"
        y2="60.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="26.2"
        y1="60.1"
        x2="60.1"
        y2="26.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polyline
        points="128 72 128 128 184 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="195.9"
        y1="26.2"
        x2="229.8"
        y2="60.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="26.2"
        y1="60.1"
        x2="60.1"
        y2="26.2"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polyline
        points="128 72 128 128 184 128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128"
        cy="128"
        r="88"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <line
        x1="195.9"
        y1="26.2"
        x2="229.8"
        y2="60.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="26.2"
        y1="60.1"
        x2="60.1"
        y2="26.2"
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
  ContextGetter,
} from "../types";

export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhAlarm",
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
    },
  },
});
</script>
