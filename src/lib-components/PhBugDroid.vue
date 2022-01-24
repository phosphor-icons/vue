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
      <circle cx="156" cy="84" r="16" />
      <circle cx="100" cy="84" r="16" />
      <path
        d="M207.9,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="207.9"
        y1="128"
        x2="47.9"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="55.9"
        y1="28"
        x2="76.2"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="199.9"
        y1="28"
        x2="179.6"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path d="M47.9,128h160v20a80,80,0,0,1-160,0Z" opacity="0.2" />
      <path
        d="M207.9,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="207.9"
        y1="128"
        x2="47.9"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="155.9" cy="92" r="12" />
      <circle cx="99.9" cy="92" r="12" />
      <line
        x1="55.9"
        y1="28"
        x2="76.2"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="199.9"
        y1="28"
        x2="179.6"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M191.3,47l14.1-13.1a8.2,8.2,0,0,0,.4-11.4,8,8,0,0,0-11.3-.4L179.1,36.5a87.7,87.7,0,0,0-102.4,0L61.4,22.1A8,8,0,0,0,50.5,33.9L64.6,47a87.4,87.4,0,0,0-24.7,61v40a88,88,0,0,0,176,0V108A87.7,87.7,0,0,0,191.3,47ZM127.9,36a72.1,72.1,0,0,1,72,72v12H55.9V108A72.1,72.1,0,0,1,127.9,36Zm16,56a12,12,0,1,1,12,12A12,12,0,0,1,143.9,92Zm-56,0a12,12,0,1,1,12,12A12,12,0,0,1,87.9,92Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="156" cy="84" r="10" />
      <circle cx="100" cy="84" r="10" />
      <path
        d="M207.9,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="207.9"
        y1="128"
        x2="47.9"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="55.9"
        y1="28"
        x2="76.2"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="199.9"
        y1="28"
        x2="179.6"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="156" cy="84" r="8" />
      <circle cx="100" cy="84" r="8" />
      <path
        d="M207.9,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="207.9"
        y1="128"
        x2="47.9"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="55.9"
        y1="28"
        x2="76.2"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="199.9"
        y1="28"
        x2="179.6"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M208,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="208"
        y1="128"
        x2="48"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="156" cy="92" r="12" />
      <circle cx="100" cy="92" r="12" />
      <line
        x1="56"
        y1="28"
        x2="76.3"
        y2="46.9"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="28"
        x2="179.7"
        y2="46.9"
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
  name: "PhBugDroid",
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
