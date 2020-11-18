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
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="128.00049" cy="120.00049" r="16" />
      <circle cx="80.00049" cy="120.00049" r="16" />
      <circle cx="176.00049" cy="120.00049" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        opacity="0.2"
      />
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128.00049" cy="120.00049" r="12" />
      <circle cx="80.00049" cy="120.00049" r="12" />
      <circle cx="176.00049" cy="120.00049" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M216.001,40h-176a16.01833,16.01833,0,0,0-16,16V183.999a16.01833,16.01833,0,0,0,16,16L99.4707,200l14.81055,24.68262a16.00023,16.00023,0,0,0,27.43945,0L156.53027,200H216a16.01854,16.01854,0,0,0,16.001-16V56A16.01833,16.01833,0,0,0,216.001,40ZM80.00049,132.00049a12,12,0,1,1,12-12A12,12,0,0,1,80.00049,132.00049Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.00049,132.00049Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.00049,132.00049Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="128.00049" cy="120.00049" r="9" />
      <circle cx="80.00049" cy="120.00049" r="9" />
      <circle cx="176.00049" cy="120.00049" r="9" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="128.00049" cy="120.00049" r="6" />
      <circle cx="80.00049" cy="120.00049" r="6" />
      <circle cx="176.00049" cy="120.00049" r="6" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128.00049" cy="120.00049" r="12" />
      <circle cx="80.00049" cy="120.00049" r="12" />
      <circle cx="176.00049" cy="120.00049" r="12" />
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
  name: "PhChatCenteredDots",
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
