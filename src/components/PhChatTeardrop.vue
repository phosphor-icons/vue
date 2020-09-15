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
      <rect width="256" height="256" fill="none" />
      <path
        d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
        opacity="0.2"
      />
      <path
        d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M128,23.99219a104.12041,104.12041,0,0,0-104,104v88a16.01583,16.01583,0,0,0,16,16h88a104,104,0,0,0,0-208Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <g>
        <rect width="256" height="256" fill="none" />
        <path
          d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
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
  name: "PhChatTeardrop",
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
