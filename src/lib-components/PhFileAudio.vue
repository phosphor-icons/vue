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
        points="148 32 148 92 208 92"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M180,224h20a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v76"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="48 204 48 164 72 164 96 144 96 224 72 204 48 204"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M136,163a32,32,0,0,1,0,50"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon points="152 32 152 88 208 88 152 32" opacity="0.2" />
      <polyline
        points="152 32 152 88 208 88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="48 204 48 172 72 172 96 152 96 224 72 204 48 204"
        opacity="0.2"
      />
      <polygon
        points="48 204 48 172 72 172 96 152 96 224 72 204 48 204"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M128,163a32,32,0,0,1,0,50"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H168a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM160,80V51.3L188.7,80Zm-56,72v72a7.9,7.9,0,0,1-4.6,7.2,6.8,6.8,0,0,1-3.4.8,7.5,7.5,0,0,1-5.1-1.9L69.1,212H48a8,8,0,0,1-8-8V172a8,8,0,0,1,8-8H69.1l21.8-18.1a7.8,7.8,0,0,1,8.5-1.1A7.9,7.9,0,0,1,104,152Zm44,36a39.8,39.8,0,0,1-15,31.2,7.9,7.9,0,0,1-5,1.8,7.8,7.8,0,0,1-6.2-3,8.1,8.1,0,0,1,1.2-11.3,23.9,23.9,0,0,0,0-37.4,8,8,0,0,1,10-12.5A39.8,39.8,0,0,1,148,188Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polyline
        points="152 32 152 88 208 88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="48 204 48 172 72 172 96 152 96 224 72 204 48 204"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M128,163a32,32,0,0,1,0,50"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polyline
        points="152 32 152 88 208 88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="48 204 48 172 72 172 96 152 96 224 72 204 48 204"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M128,163a32,32,0,0,1,0,50"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polyline
        points="152 32 152 88 208 88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="48 204 48 172 72 172 96 152 96 224 72 204 48 204"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M128,163a32,32,0,0,1,0,50"
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
  name: "PhFileAudio",
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
