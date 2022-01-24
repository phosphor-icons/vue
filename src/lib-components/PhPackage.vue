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
        d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="177 152.5 177 100.5 80 47"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="222.9 74.6 128.9 128 33.1 74.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="128.9"
        y1="128"
        x2="128"
        y2="234.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M33.1,74.6A8.1,8.1,0,0,0,32,78.7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.6,7.6,0,0,0,3.9,1h0l.9-106.8L33.1,74.6Z"
        opacity="0.2"
      />
      <path
        d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="177 152.5 177 100.5 80 47"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="222.9 74.6 128.9 128 33.1 74.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128.9"
        y1="128"
        x2="128"
        y2="234.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M229.9,70.8h0a.1.1,0,0,1-.1-.1,16.2,16.2,0,0,0-6-5.9l-88-49.5a16,16,0,0,0-15.6,0l-88,49.5a16.2,16.2,0,0,0-6,5.9.1.1,0,0,1-.1.1v.2A15,15,0,0,0,24,78.7v98.6a16.1,16.1,0,0,0,8.2,14l88,49.5a16.5,16.5,0,0,0,7.2,2h1.4a15.7,15.7,0,0,0,7-2l88-49.5a16.1,16.1,0,0,0,8.2-14V78.7A15.6,15.6,0,0,0,229.9,70.8ZM128,29.2,207.7,74,177.1,91.4,96.4,46.9Zm.9,89.6L48.4,74,80,56.2l80.8,44.5Zm7.2,103.5.8-89.6L169,114.4v38.1a8,8,0,0,0,16,0V105.3l31-17.6v89.6Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="177 152.5 177 100.5 80 47"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="222.9 74.6 128.9 128 33.1 74.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="128.9"
        y1="128"
        x2="128"
        y2="234.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="177 152.5 177 100.5 80 47"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="222.9 74.6 128.9 128 33.1 74.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="128.9"
        y1="128"
        x2="128"
        y2="234.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="177 152.5 177 100.5 80 47"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="222.9 74.6 128.9 128 33.1 74.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128.9"
        y1="128"
        x2="128"
        y2="234.8"
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
  name: "PhPackage",
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
