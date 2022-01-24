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
        d="M225.5,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,0,0-96.8-96A96,96,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M225.5,184v24a32,32,0,0,1-32,32H136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16Z"
        opacity="0.2"
      />
      <path
        d="M225.5,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16Z"
        opacity="0.2"
      />
      <path
        d="M225.5,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,0,0-96.8-96A96,96,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M225.5,184v24a32,32,0,0,1-32,32H136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M233.5,128v80a40.1,40.1,0,0,1-40,40H136a8,8,0,0,1,0-16h57.5a24.1,24.1,0,0,0,24-24v-1.4a23.6,23.6,0,0,1-8,1.4h-16a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.6a88,88,0,0,0-88.3-80h-.1a87.8,87.8,0,0,0-88.3,80H64a24.1,24.1,0,0,1,24,24v40a24.1,24.1,0,0,1-24,24H48a24.1,24.1,0,0,1-24-24V128A104,104,0,0,1,128.7,24h.8a104.1,104.1,0,0,1,104,104Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M225.5,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,0,0-96.8-96A96,96,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M225.5,184v24a32,32,0,0,1-32,32H136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M225.5,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,0,0-96.8-96A96,96,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M225.5,184v24a32,32,0,0,1-32,32H136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M225.5,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,0,0-96.8-96A96,96,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M225.5,184v24a32,32,0,0,1-32,32H136"
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
  name: "PhHeadset",
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
