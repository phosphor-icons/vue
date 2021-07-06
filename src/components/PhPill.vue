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
        x="14.86292"
        y="82.74517"
        width="226.27417"
        height="90.50967"
        rx="45.25479"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="160.06933"
        y1="104.06932"
        x2="176.48528"
        y2="88.48528"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M112,208A45.25478,45.25478,0,0,1,48,208L48,208A45.25478,45.25478,0,0,1,48,144L96,96l64,64Z"
        opacity="0.2"
      />
      <rect
        x="14.86292"
        y="82.74517"
        width="226.27417"
        height="90.50967"
        rx="45.25479"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="160.06933"
        y1="112.06932"
        x2="184.48528"
        y2="88.48528"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M213.65723,42.34326a53.25535,53.25535,0,0,0-75.31446,0l-96,96a53.255,53.255,0,0,0,75.31446,75.31348l96-96A53.31558,53.31558,0,0,0,213.65723,42.34326Zm-11.31446,64L160,148.68628,107.31348,96l42.34375-42.34326a37.25465,37.25465,0,0,1,52.68554,52.68652Zm-12.10351-23.416a7.99946,7.99946,0,0,1-.19629,11.312l-24.416,23.584a7.99966,7.99966,0,1,1-11.11523-11.50781l24.416-23.584A7.99843,7.99843,0,0,1,190.23926,82.92725Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect
        x="14.86292"
        y="82.74517"
        width="226.27417"
        height="90.50967"
        rx="45.25479"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="160.06933"
        y1="112.06932"
        x2="184.48528"
        y2="88.48528"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect
        x="14.86292"
        y="82.74517"
        width="226.27417"
        height="90.50967"
        rx="45.25479"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="160.06933"
        y1="112.06932"
        x2="184.48528"
        y2="88.48528"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect
        x="14.86292"
        y="82.74517"
        width="226.27417"
        height="90.50967"
        rx="45.25479"
        transform="translate(-53.01934 128) rotate(-45)"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="96"
        y1="96"
        x2="160"
        y2="160"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="160.06933"
        y1="112.06932"
        x2="184.48528"
        y2="88.48528"
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
  name: "PhPill",
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
