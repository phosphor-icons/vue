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
        d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16Z"
        opacity="0.2"
      />
      <path
        d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16Z"
        opacity="0.2"
      />
      <path
        d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M202.7,62.2A103.1,103.1,0,0,0,129.5,32h-.8A104,104,0,0,0,24,136v56a24.1,24.1,0,0,0,24,24H64a24.1,24.1,0,0,0,24-24V152a24.1,24.1,0,0,0-24-24H40.4a87.8,87.8,0,0,1,88.3-80h.1a88,88,0,0,1,88.3,80H193.5a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24.1,24.1,0,0,0,24-24V136A103.5,103.5,0,0,0,202.7,62.2Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
  name: "PhHeadphones",
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
