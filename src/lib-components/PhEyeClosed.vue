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
        x1="201.1"
        y1="127.3"
        x2="224"
        y2="166.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="154.2"
        y1="149.3"
        x2="161.3"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="101.7"
        y1="149.2"
        x2="94.6"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="54.8"
        y1="127.3"
        x2="31.9"
        y2="167"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M32,104.9C48.8,125.7,79.6,152,128,152s79.2-26.3,96-47.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <line
        x1="201.1"
        y1="127.3"
        x2="224"
        y2="166.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="154.2"
        y1="149.3"
        x2="161.3"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="101.7"
        y1="149.2"
        x2="94.6"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="54.8"
        y1="127.3"
        x2="31.9"
        y2="167"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32,104.9C48.8,125.7,79.6,152,128,152s79.2-26.3,96-47.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M211.5,129.2a145.8,145.8,0,0,0,18.7-19.3A7.9,7.9,0,0,0,229,98.7a7.9,7.9,0,0,0-11.2,1.1,128.7,128.7,0,0,1-21.3,21h-.2c-16.5,12.8-39,23.1-68.3,23.1a109.7,109.7,0,0,1-68.4-23.1h-.1a128.7,128.7,0,0,1-21.3-21A7.9,7.9,0,0,0,27,98.7a7.9,7.9,0,0,0-1.2,11.2,145.8,145.8,0,0,0,18.7,19.3L25,163a8,8,0,0,0,6.9,12,8.2,8.2,0,0,0,6.9-4l18.5-32.1a122.1,122.1,0,0,0,35.3,16.3l-5.9,33a8.1,8.1,0,0,0,6.5,9.3h1.4a8,8,0,0,0,7.9-6.6l5.7-32.4A139.8,139.8,0,0,0,128,160a137.3,137.3,0,0,0,19.7-1.4l5.7,32.4a8,8,0,0,0,7.9,6.6h1.4a8.1,8.1,0,0,0,6.5-9.3l-5.8-32.9A122.9,122.9,0,0,0,198.6,139L217,170.8a8,8,0,0,0,7,4,7.6,7.6,0,0,0,4-1.1,8,8,0,0,0,2.9-10.9Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="201.1"
        y1="127.3"
        x2="224"
        y2="166.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="154.2"
        y1="149.3"
        x2="161.3"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="101.7"
        y1="149.2"
        x2="94.6"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="54.8"
        y1="127.3"
        x2="31.9"
        y2="167"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M32,104.9C48.8,125.7,79.6,152,128,152s79.2-26.3,96-47.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="201.1"
        y1="127.3"
        x2="224"
        y2="166.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="154.2"
        y1="149.3"
        x2="161.3"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="101.7"
        y1="149.2"
        x2="94.6"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="54.8"
        y1="127.3"
        x2="31.9"
        y2="167"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M32,104.9C48.8,125.7,79.6,152,128,152s79.2-26.3,96-47.1"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="201.1"
        y1="127.3"
        x2="224"
        y2="166.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="154.2"
        y1="149.3"
        x2="161.3"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="101.7"
        y1="149.2"
        x2="94.6"
        y2="189.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="54.8"
        y1="127.3"
        x2="31.9"
        y2="167"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32,104.9C48.8,125.7,79.6,152,128,152s79.2-26.3,96-47.1"
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
  name: "PhEyeClosed",
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
