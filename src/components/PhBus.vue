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
        x1="42"
        y1="80"
        x2="214"
        y2="80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="42"
        y1="132"
        x2="214"
        y2="132"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M214,184H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M214,184v32a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M82,184v32a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V184"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192Z"
        opacity="0.3"
      />
      <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192Z" opacity="0.3" />
      <rect x="42" y="72" width="172" height="48" opacity="0.2" />
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M214,192H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="84" cy="156" r="12" />
      <circle cx="172" cy="156" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M190,32H66A32.1,32.1,0,0,0,34,64V216a16,16,0,0,0,16,16H74a16,16,0,0,0,16-16V200h76v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V64A32.1,32.1,0,0,0,190,32ZM82,168a12,12,0,1,1,12-12A12,12,0,0,1,82,168Zm92,0a12,12,0,1,1,12-12A12,12,0,0,1,174,168Zm32-48H50V72H206Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M214,192H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="172" cy="156" r="10" />
      <circle cx="84" cy="156" r="10" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M214,192H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="84" cy="156" r="8" />
      <circle cx="172" cy="156" r="8" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M214,192H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="84" cy="156" r="12" />
      <circle cx="172" cy="156" r="12" />
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
  name: "PhBus",
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
