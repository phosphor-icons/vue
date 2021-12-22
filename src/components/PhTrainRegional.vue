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
        d="M70.1,32H185.9a7.9,7.9,0,0,1,7.7,5.9L216,120l-22.4,82.1a7.9,7.9,0,0,1-7.7,5.9H70.1a7.9,7.9,0,0,1-7.7-5.9L40,120,62.4,37.9A7.9,7.9,0,0,1,70.1,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="128"
        y1="208"
        x2="128"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="40 120 128 136 216 120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="96"
        y1="88"
        x2="160"
        y2="88"
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
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M40,120l88,16,88-16-22.4,82.1a7.9,7.9,0,0,1-7.7,5.9H70.1a7.9,7.9,0,0,1-7.7-5.9Z"
        opacity="0.2"
      />
      <path
        d="M70.1,32H185.9a7.9,7.9,0,0,1,7.7,5.9L216,120l-22.4,82.1a7.9,7.9,0,0,1-7.7,5.9H70.1a7.9,7.9,0,0,1-7.7-5.9L40,120,62.4,37.9A7.9,7.9,0,0,1,70.1,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="208"
        x2="128"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="40 120 128 136 216 120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="88"
        x2="160"
        y2="88"
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
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path d="M160,80H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z" />
      <path
        d="M224,119.9a2.2,2.2,0,0,0-.1-.8v-.5c-.1-.2-.1-.4-.2-.6h0l-22.4-82A15.9,15.9,0,0,0,185.9,24H70.1A15.9,15.9,0,0,0,54.7,35.8l-22.4,82h0c-.1.2-.1.4-.2.6v.5a2.2,2.2,0,0,0-.1.8v.2a2.8,2.8,0,0,0,.1.9h0a2.9,2.9,0,0,0,.2.9h0l22.4,82.1A15.9,15.9,0,0,0,70.1,216H80L65.6,235.2a8,8,0,0,0,1.6,11.2A7.7,7.7,0,0,0,72,248a8,8,0,0,0,6.4-3.2L100,216h56l21.6,28.8A8,8,0,0,0,184,248a7.7,7.7,0,0,0,4.8-1.6,8,8,0,0,0,1.6-11.2L176,216h9.9a15.9,15.9,0,0,0,15.4-11.8l22.4-82.1h0a2.9,2.9,0,0,0,.2-.9h0a2.8,2.8,0,0,0,.1-.9ZM136,192a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0Zm-8-64.1L50,113.7,70.1,40H185.9L206,113.7Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M70.1,32H185.9a7.9,7.9,0,0,1,7.7,5.9L216,120l-22.4,82.1a7.9,7.9,0,0,1-7.7,5.9H70.1a7.9,7.9,0,0,1-7.7-5.9L40,120,62.4,37.9A7.9,7.9,0,0,1,70.1,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="128"
        y1="208"
        x2="128"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="40 120 128 136 216 120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="96"
        y1="88"
        x2="160"
        y2="88"
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
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M70.1,32H185.9a7.9,7.9,0,0,1,7.7,5.9L216,120l-22.4,82.1a7.9,7.9,0,0,1-7.7,5.9H70.1a7.9,7.9,0,0,1-7.7-5.9L40,120,62.4,37.9A7.9,7.9,0,0,1,70.1,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="128"
        y1="208"
        x2="128"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="40 120 128 136 216 120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="96"
        y1="88"
        x2="160"
        y2="88"
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
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M70.1,32H185.9a7.9,7.9,0,0,1,7.7,5.9L216,120l-22.4,82.1a7.9,7.9,0,0,1-7.7,5.9H70.1a7.9,7.9,0,0,1-7.7-5.9L40,120,62.4,37.9A7.9,7.9,0,0,1,70.1,32Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="208"
        x2="128"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="40 120 128 136 216 120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="88"
        x2="160"
        y2="88"
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
  name: "PhTrainRegional",
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
