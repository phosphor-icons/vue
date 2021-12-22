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
        d="M12,168,34.3,93.7A8,8,0,0,1,42,88h60a8,8,0,0,1,7.7,5.7L132,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M148,88h10a8,8,0,0,1,7.7,5.7L188,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M204,88h10a8,8,0,0,1,7.7,5.7L244,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="12"
        y1="168"
        x2="244"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168Z"
        opacity="0.2"
      />
      <path
        d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M160,88h10a8,8,0,0,1,7.7,5.7L200,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M208,88h10a8,8,0,0,1,7.7,5.7L248,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="8"
        y1="168"
        x2="248"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M256,168a8,8,0,0,1-8,8H8a8,8,0,0,1-8-8,8.5,8.5,0,0,1,.3-2.3H.4L22.6,91.4A16,16,0,0,1,38,80h84a16,16,0,0,1,15.4,11.4L158,160h31.2L170,96H160a8,8,0,0,1,0-16h10a16,16,0,0,1,15.4,11.4L206,160h31.2L218,96H208a8,8,0,0,1,0-16h10a16,16,0,0,1,15.4,11.4l22.2,74.2h.1A8.5,8.5,0,0,1,256,168Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M160,88h10a8,8,0,0,1,7.7,5.7L200,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M208,88h10a8,8,0,0,1,7.7,5.7L248,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="8"
        y1="168"
        x2="248"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M160,88h10a8,8,0,0,1,7.7,5.7L200,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M208,88h10a8,8,0,0,1,7.7,5.7L248,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="8"
        y1="168"
        x2="248"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M160,88h10a8,8,0,0,1,7.7,5.7L200,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M208,88h10a8,8,0,0,1,7.7,5.7L248,168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="8"
        y1="168"
        x2="248"
        y2="168"
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
  name: "PhTabs",
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
