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
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        opacity="0.2"
      />
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M219.4873,88.43359,50.18457,29.82812A15.99955,15.99955,0,0,0,29.83105,50.18164l58.6045,169.30371A15.75666,15.75666,0,0,0,103.53516,230.251c.09863,0,.19922-.001.29785-.00293a15.76424,15.76424,0,0,0,15.01465-11.292l23.55566-76.55468L218.96,118.8457a16.00021,16.00021,0,0,0,.52734-30.41211Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
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
  name: "PhNavigationArrow",
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
