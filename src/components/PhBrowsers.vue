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
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="32"
        y1="112"
        x2="192"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M216.00781,48h-144a7.99993,7.99993,0,0,0-8,8V80h120a7.99993,7.99993,0,0,1,8,8v88h24a7.99977,7.99977,0,0,0,8-8V56A7.99993,7.99993,0,0,0,216.00781,48Z"
        opacity="0.2"
      />
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="32"
        y1="112"
        x2="192"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M216.00781,40h-144a16.01818,16.01818,0,0,0-16,16V72h-16a16.01818,16.01818,0,0,0-16,16v23.84521c-.001.052-.00781.10254-.00781.15479s.00684.10278.00781.15479V200a16.01833,16.01833,0,0,0,16,16h144a16.01833,16.01833,0,0,0,16-16V184h16a16.01833,16.01833,0,0,0,16-16V56A16.01817,16.01817,0,0,0,216.00781,40Zm-32,48,.00147,16H40.00781V88Zm32,80h-16V88a16.01817,16.01817,0,0,0-16-16h-112V56h144Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="32"
        y1="112"
        x2="192"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="32"
        y1="112"
        x2="192"
        y2="112"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="32.00781"
        y="80.00005"
        width="160"
        height="128"
        rx="8"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="32"
        y1="112"
        x2="192"
        y2="112"
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
  name: "PhBrowsers",
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
