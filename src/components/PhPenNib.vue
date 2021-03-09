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
      <circle
        cx="116"
        cy="140"
        r="24"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="32.00586"
        y1="224.00342"
        x2="99.02963"
        y2="156.97074"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M120.00586,56.00342,60.3291,78.38232a7.99941,7.99941,0,0,0-5.08227,6.1753l-23.241,139.4458,139.4458-23.24121a7.99949,7.99949,0,0,0,6.17529-5.082l22.37891-59.67676ZM116,160a20,20,0,1,1,20-20A19.9999,19.9999,0,0,1,116,160Z"
        opacity="0.2"
      />
      <circle
        cx="116"
        cy="140"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="32.00586"
        y1="224.00342"
        x2="101.85786"
        y2="154.14214"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M232.00586,92.68994l-68.68652-68.6875a16.02162,16.02162,0,0,0-22.62793.001L115.57349,49.12158l-58.053,21.77a16.045,16.045,0,0,0-10.165,12.35108L26.58887,207.83984a4,4,0,0,0,6.77417,3.48584l55.08423-55.08545a32.0378,32.0378,0,1,1,11.311,11.31543L44.667,222.64893a4,4,0,0,0,3.48609,6.77392l124.61352-20.769a16.0433,16.0433,0,0,0,12.35059-10.16406l21.77-58.05371,25.11767-25.11817a15.99888,15.99888,0,0,0,.001-22.62793Zm-32,31.99951-68.686-68.686,20.686-20.68653,68.68555,68.68653Z"
      />
      <circle cx="116.00586" cy="140.00342" r="16" />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="116"
        cy="140"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="32.00586"
        y1="224.00342"
        x2="101.85786"
        y2="154.14214"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="116"
        cy="140"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="32.00586"
        y1="224.00342"
        x2="101.85786"
        y2="154.14214"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="116"
        cy="140"
        r="20"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="32.00586"
        y1="224.00342"
        x2="101.85786"
        y2="154.14214"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
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
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhPenNib",
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
