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
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <line
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M199.99414,55.99512a8.00008,8.00008,0,0,1-8,8H157.76l-42.6665,128h28.90063a8,8,0,0,1,0,16H104.02307l-.028.002-.02735-.002H63.99414a8,8,0,0,1,0-16H98.22827l42.66651-128H111.99414a8,8,0,0,1,0-16h80A8.00008,8.00008,0,0,1,199.99414,55.99512Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
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
  name: "PhTextItalic",
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
