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
        d="M164.00586,228l-56.0074-40-55.9926,40V76a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M92.00586,28h104a8,8,0,0,1,8,8V188"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        opacity="0.2"
      />
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88.00586,32h104a8,8,0,0,1,8,8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <g>
        <path
          d="M160.00586,56h-96a16.01833,16.01833,0,0,0-16,16V224a8.00026,8.00026,0,0,0,12.65039,6.50977L111.999,193.83105l51.35743,36.67872A7.99952,7.99952,0,0,0,176.00586,224V72A16.01833,16.01833,0,0,0,160.00586,56Z"
        />
        <path
          d="M192.00586,24h-104a8,8,0,0,0,0,16h104V192a8,8,0,0,0,16,0V40A16.01833,16.01833,0,0,0,192.00586,24Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88.00586,32h104a8,8,0,0,1,8,8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88.00586,32h104a8,8,0,0,1,8,8V192"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88.00586,32h104a8,8,0,0,1,8,8V192"
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
  name: "PhBookmarksSimple",
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
