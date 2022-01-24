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
        d="M48,112a80,80,0,0,1,160,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M208,160v24a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="28 168 68 152 108 168 148 152 188 168 228 152"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="24"
        y1="112"
        x2="232"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M48.8,96A8,8,0,0,1,41,86.3C47.4,55.5,83.9,32,128,32s80.6,23.5,87,54.3a8,8,0,0,1-7.8,9.7Z"
        opacity="0.2"
      />
      <path
        d="M68,160l40,16,40-16,40,16,20-8v16a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V168Z"
        opacity="0.2"
      />
      <path
        d="M48.8,96A8,8,0,0,1,41,86.3C47.4,55.5,83.9,32,128,32s80.6,23.5,87,54.3a8,8,0,0,1-7.8,9.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M208,168v16a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="28 176 68 160 108 176 148 160 188 176 228 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="24"
        y1="128"
        x2="232"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M36.4,98.1a16.3,16.3,0,0,1-3.2-13.5C40.5,49.5,80.4,24,128,24s87.5,25.5,94.8,60.6A16,16,0,0,1,207.2,104H48.8A16.2,16.2,0,0,1,36.4,98.1ZM225,152.6l-20.1,8h0L188,167.4l-37-14.8a7.8,7.8,0,0,0-6,0l-37,14.8L71,152.6a7.8,7.8,0,0,0-6,0l-20.1,8h0l-19.9,8A8,8,0,0,0,28,184a8,8,0,0,0,3-.6l9-3.6V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V173.4l15-6a8,8,0,0,0-6-14.8Zm7-32.6H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M48.8,96A8,8,0,0,1,41,86.3C47.4,55.5,83.9,32,128,32s80.6,23.5,87,54.3a8,8,0,0,1-7.8,9.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M208,168v16a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="28 176 68 160 108 176 148 160 188 176 228 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="24"
        y1="128"
        x2="232"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M48.8,96A8,8,0,0,1,41,86.3C47.4,55.5,83.9,32,128,32s80.6,23.5,87,54.3a8,8,0,0,1-7.8,9.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M208,168v16a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="28 176 68 160 108 176 148 160 188 176 228 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="24"
        y1="128"
        x2="232"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M48.8,96A8,8,0,0,1,41,86.3C47.4,55.5,83.9,32,128,32s80.6,23.5,87,54.3a8,8,0,0,1-7.8,9.7Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M208,168v16a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="28 176 68 160 108 176 148 160 188 176 228 160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="24"
        y1="128"
        x2="232"
        y2="128"
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
  name: "PhHamburger",
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
