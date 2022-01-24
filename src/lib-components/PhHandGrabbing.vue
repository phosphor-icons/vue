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
        d="M128,92a20,20,0,0,0-40,0v24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M168,108V92a20,20,0,0,0-40,0v32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M88,148V116H68a20.1,20.1,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M88,116H68a20.1,20.1,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0V92a20,20,0,0,0-40,0,20,20,0,0,0-40,0Z"
        opacity="0.2"
      />
      <path
        d="M128,92a20,20,0,0,0-40,0v24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,108V92a20,20,0,0,0-40,0v32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,148V116H68a20.1,20.1,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M188,80a27.8,27.8,0,0,0-13.4,3.4,28,28,0,0,0-46.6-11A28,28,0,0,0,80,92v16H68a28.1,28.1,0,0,0-28,28v16a88,88,0,0,0,176,0V108A28.1,28.1,0,0,0,188,80Zm12,72a72,72,0,0,1-144,0V136a12,12,0,0,1,12-12H80v24a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v32a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v32a8,8,0,0,0,16,0V108a12,12,0,0,1,24,0Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M128,92a20,20,0,0,0-40,0v24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M168,108V92a20,20,0,0,0-40,0v32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88,148V116H68a20.1,20.1,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M128,92a20,20,0,0,0-40,0v24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M168,108V92a20,20,0,0,0-40,0v32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88,148V116H68a20.1,20.1,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M128,92a20,20,0,0,0-40,0v24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,108V92a20,20,0,0,0-40,0v32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88,148V116H68a20.1,20.1,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
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
  name: "PhHandGrabbing",
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
