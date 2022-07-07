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
        points="144 144 168 120 144 96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="46"
        y="46"
        width="164"
        height="164.05"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,148v-4a23.9,23.9,0,0,1,24-24h56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect
        x="46"
        y="46"
        width="164"
        height="164.05"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        opacity="0.2"
      />
      <polyline
        points="144 144 168 120 144 96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="46"
        y="46"
        width="164"
        height="164.05"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,152v-8a23.9,23.9,0,0,1,24-24h56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M244,116.7,139.3,12a15.9,15.9,0,0,0-22.6,0L12,116.7a16.1,16.1,0,0,0,0,22.6L116.7,244a15.9,15.9,0,0,0,22.6,0L244,139.3A16.1,16.1,0,0,0,244,116.7ZM176,120v.8a.4.4,0,0,0-.1.3.9.9,0,0,1-.1.5.8.8,0,0,1-.1.4v.3l-.2.4c0,.1-.1.2-.1.4l-.2.3v.4l-.2.3c-.1.1-.2.2-.2.3l-.3.4-.2.3-.5.5h0l-24,24a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L148.7,128H112a16,16,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32.1,32.1,0,0,1,32-32h36.7l-10.4-10.3a8.1,8.1,0,0,1,11.4-11.4l24,24h0l.5.5.2.3.3.4c0,.1.1.2.2.3l.2.3v.4l.2.3c0,.2.1.3.1.4l.2.4v.3a.8.8,0,0,1,.1.4.9.9,0,0,1,.1.5.4.4,0,0,0,.1.3v.8Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polyline
        points="144 144 168 120 144 96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="46"
        y="46"
        width="164"
        height="164.05"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88,152v-8a23.9,23.9,0,0,1,24-24h56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polyline
        points="144 144 168 120 144 96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="46"
        y="46"
        width="164"
        height="164.05"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88,152v-8a23.9,23.9,0,0,1,24-24h56"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polyline
        points="144 144 168 120 144 96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="46"
        y="46"
        width="164"
        height="164.05"
        rx="8"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,152v-8a23.9,23.9,0,0,1,24-24h56"
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
  name: "PhTrafficSign",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight || contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size || contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color || contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored || contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
