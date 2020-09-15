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
      <rect width="256" height="256" fill="none" />
      <path
        d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z"
        opacity="0.2"
      />
      <path
        d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z"
        opacity="0.2"
      />
      <path
        d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M215.99512,71.99805h-84.6875l-27.3125-27.3125a15.8907,15.8907,0,0,0-11.3125-4.6875H39.99512a16.01581,16.01581,0,0,0-16,16V200.61523a15.404,15.404,0,0,0,15.39062,15.38282h177.5a15.13062,15.13062,0,0,0,15.10938-15.10938V87.99805A16.01582,16.01582,0,0,0,215.99512,71.99805Zm-176-16h52.6875l16,16H39.99512Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect width="256" height="256" fill="none" />
      <path
        d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z"
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
  name: "PhFolder",
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
