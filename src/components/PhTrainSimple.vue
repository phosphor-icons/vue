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
    <g v-if="displayWeight === 'bold'">
      <line
        x1="44"
        y1="128"
        x2="212"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="96"
        y1="208"
        x2="72"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="160"
        y1="208"
        x2="184"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="44"
        y="32"
        width="168"
        height="176"
        rx="24"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="84" cy="172" r="18" />
      <circle cx="172" cy="172" r="18" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M212,56a24,24,0,0,0-24-24H68A24,24,0,0,0,44,56v72H212Z"
        opacity="0.2"
      />
      <line
        x1="44"
        y1="128"
        x2="212"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="208"
        x2="72"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="160"
        y1="208"
        x2="184"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="44"
        y="32"
        width="168"
        height="176"
        rx="24"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="84" cy="172" r="12" />
      <circle cx="172" cy="172" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M188,24H68A32.03667,32.03667,0,0,0,36,56v64H220V56A32.03667,32.03667,0,0,0,188,24Z"
      />
      <path
        d="M36,184a32.03667,32.03667,0,0,0,32,32H79.99976L65.59961,235.2002a8.00019,8.00019,0,0,0,12.80078,9.5996L100.00024,216h55.99952l21.59985,28.7998a8.00019,8.00019,0,0,0,12.80078-9.5996L176.00024,216H188a32.03667,32.03667,0,0,0,32-32V136H36Zm136-24a12,12,0,1,1-12,12A12,12,0,0,1,172,160Zm-88,0a12,12,0,1,1-12,12A12,12,0,0,1,84,160Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="44"
        y1="128"
        x2="212"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="96"
        y1="208"
        x2="72"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="160"
        y1="208"
        x2="184"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="44"
        y="32"
        width="168"
        height="176"
        rx="24"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="84" cy="172" r="9" opacity="0.8" />
      <circle cx="172" cy="172" r="9" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="44"
        y1="128"
        x2="212"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="96"
        y1="208"
        x2="72"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="160"
        y1="208"
        x2="184"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="44"
        y="32"
        width="168"
        height="176"
        rx="24"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="84" cy="172" r="6" />
      <circle cx="172" cy="172" r="6" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="44"
        y1="128"
        x2="212"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="208"
        x2="72"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="160"
        y1="208"
        x2="184"
        y2="240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="44"
        y="32"
        width="168"
        height="176"
        rx="24"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="84" cy="172" r="12" />
      <circle cx="172" cy="172" r="12" />
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
  name: "PhTrainSimple",
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
