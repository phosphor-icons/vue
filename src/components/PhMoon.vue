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
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        opacity="0.2"
      />
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M228.25781,131.08594a7.97081,7.97081,0,0,0-7.875-.89844,72.03888,72.03888,0,0,1-94.58594-94.57031,7.99837,7.99837,0,0,0-8.14062-11.10938A104.00405,104.00405,0,1,0,231.49219,138.32813,7.99431,7.99431,0,0,0,228.25781,131.08594Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
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
  name: "PhMoon",
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
