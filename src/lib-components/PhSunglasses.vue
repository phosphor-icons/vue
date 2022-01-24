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
        d="M104,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M224,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="44"
        y1="140"
        x2="93.5"
        y2="189.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="164"
        y1="140"
        x2="213.5"
        y2="189.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path d="M104,140v24a36,36,0,0,1-72,0V140Z" opacity="0.2" />
      <path d="M224,140v24a36,36,0,0,1-72,0V140Z" opacity="0.2" />
      <path
        d="M104,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M224,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="168"
        y1="140"
        x2="215.4"
        y2="187.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="48"
        y1="140"
        x2="95.4"
        y2="187.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v60H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32.1,32.1,0,0,0,24,72v92a44,44,0,0,0,88,0V148h32v16a44,44,0,0,0,88,0V72A32.1,32.1,0,0,0,200,40ZM85,177a7.7,7.7,0,0,1-5.6,2.4,8,8,0,0,1-5.7-2.4L58.3,161.7a8.1,8.1,0,0,1,11.4-11.4L85,165.7A7.9,7.9,0,0,1,85,177Zm120,0a7.7,7.7,0,0,1-5.6,2.4,8,8,0,0,1-5.7-2.4l-15.4-15.3a8.1,8.1,0,0,1,11.4-11.4L205,165.7A7.9,7.9,0,0,1,205,177Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M104,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M224,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="168"
        y1="140"
        x2="215.4"
        y2="187.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="48"
        y1="140"
        x2="95.4"
        y2="187.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M104,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M224,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="168"
        y1="140"
        x2="215.4"
        y2="187.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="48"
        y1="140"
        x2="95.4"
        y2="187.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M104,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M224,140v24a36,36,0,0,1-72,0V140"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="168"
        y1="140"
        x2="215.4"
        y2="187.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="48"
        y1="140"
        x2="95.4"
        y2="187.4"
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
  name: "PhSunglasses",
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
