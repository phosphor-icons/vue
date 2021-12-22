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
      <circle cx="104" cy="112" r="16" />
      <circle cx="152" cy="112" r="16" />
      <polyline
        points="156 152 128 164 100 152"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M101.5,212a47.9,47.9,0,0,1,53,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M36.2,212S60,160,60,104a68,68,0,0,1,136,0c0,56,23.8,108,23.8,108"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M169.6,216a48.1,48.1,0,0,0-83.2,0H32S64,160,64,96a64,64,0,0,1,128,0c0,64,32,120,32,120Z"
        opacity="0.2"
      />
      <path
        d="M32,216S64,160,64,96a64,64,0,0,1,128,0c0,64,32,120,32,120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="100" cy="108" r="12" />
      <circle cx="156" cy="108" r="12" />
      <polyline
        points="160 144 128 160 96 144"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M86.4,216a48.1,48.1,0,0,1,83.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M161.2,217.7a4,4,0,0,1-3.3,6.3H98.1a4,4,0,0,1-3.3-6.3,40,40,0,0,1,66.4,0Zm68.6,3.8a8.2,8.2,0,0,1-6,2.5H184.6a4.1,4.1,0,0,1-3.8-2.7,56,56,0,0,0-105.6,0,4.1,4.1,0,0,1-3.8,2.7H32.2a8,8,0,0,1-6-2.5,7.9,7.9,0,0,1-1.1-9.5c.3-.5,30.9-55,30.9-116a72.1,72.1,0,0,1,72.5-72c39.6.3,71.4,32.9,71.5,72.5.2,60.8,30.6,115,30.9,115.5A7.9,7.9,0,0,1,229.8,221.5ZM88,108a12,12,0,1,0,12-12A12,12,0,0,0,88,108Zm79.2,32.4a8.2,8.2,0,0,0-10.8-3.6L128,151.1,99.6,136.8a8,8,0,1,0-7.2,14.4l32,16a8.5,8.5,0,0,0,7.2,0l32-16A8.2,8.2,0,0,0,167.2,140.4ZM168,108a12,12,0,1,0-12,12A12,12,0,0,0,168,108Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M32,216S64,160,64,96a64,64,0,0,1,128,0c0,64,32,120,32,120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="100" cy="108" r="10" />
      <circle cx="156" cy="108" r="10" />
      <polyline
        points="160 144 128 160 96 144"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M86.4,216a48.1,48.1,0,0,1,83.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M32,216S64,160,64,96a64,64,0,0,1,128,0c0,64,32,120,32,120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="100" cy="108" r="8" />
      <circle cx="156" cy="108" r="8" />
      <polyline
        points="160 144 128 160 96 144"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M86.4,216a48.1,48.1,0,0,1,83.2,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M32,216S64,160,64,96a64,64,0,0,1,128,0c0,64,32,120,32,120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="100" cy="108" r="12" />
      <circle cx="156" cy="108" r="12" />
      <polyline
        points="160 144 128 160 96 144"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M86.4,216a48.1,48.1,0,0,1,83.2,0"
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
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhLinuxLogo",
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
