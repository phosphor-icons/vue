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
        x1="33.5"
        y1="24"
        x2="222.5"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M187.5,193.5c-21.5,24.6-48.8,35-57,37.7a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7V56a8,8,0,0,1,8-8h7.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M109.4,48H208a8,8,0,0,1,8,8v58.7a126.2,126.2,0,0,1-7.1,42.8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z"
        opacity="0.2"
      />
      <line
        x1="33.5"
        y1="24"
        x2="222.5"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M187.5,193.5c-21.5,24.6-48.8,35-57,37.7a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7V56a8,8,0,0,1,8-8h7.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M98.5,48H208a8,8,0,0,1,8,8v58.7c0,20.1-4.1,36.9-10.5,51"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M227.9,237.9a8.2,8.2,0,0,1-5.4,2.1,8,8,0,0,1-5.9-2.6l-29.2-32.1A146.4,146.4,0,0,1,133,238.8a14.3,14.3,0,0,1-10,0c-15.2-5-91-34.7-91-124.1V56a15.9,15.9,0,0,1,7.5-13.5L27.6,29.4a7.9,7.9,0,0,1,.5-11.3,8,8,0,0,1,11.3.5l21.8,24h0L193.5,188.1h0l34.9,38.4A8,8,0,0,1,227.9,237.9Zm-28.3-66.8a7.9,7.9,0,0,0,5.9,2.6h1.3a7.9,7.9,0,0,0,6-4.6c7.4-16.3,11.2-34.6,11.2-54.3V56a16,16,0,0,0-16-16H98.5a8.1,8.1,0,0,0-7.3,4.8,8,8,0,0,0,1.4,8.6Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="33.5"
        y1="24"
        x2="222.5"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M187.5,193.5c-21.5,24.6-48.8,35-57,37.7a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7V56a8,8,0,0,1,8-8h7.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M98.5,48H208a8,8,0,0,1,8,8v58.7c0,20.1-4.1,36.9-10.5,51"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="33.5"
        y1="24"
        x2="222.5"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M187.5,193.5c-21.5,24.6-48.8,35-57,37.7a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7V56a8,8,0,0,1,8-8h7.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M98.5,48H208a8,8,0,0,1,8,8v58.7c0,20.1-4.1,36.9-10.5,51"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="33.5"
        y1="24"
        x2="222.5"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M187.5,193.5c-21.5,24.6-48.8,35-57,37.7a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7V56a8,8,0,0,1,8-8h7.3"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M98.5,48H208a8,8,0,0,1,8,8v58.7c0,20.1-4.1,36.9-10.5,51"
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
  ContextGetter,
} from "../types";
export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhShieldSlash",
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
    },
  },
});
</script>
