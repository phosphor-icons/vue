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
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="34.9091"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M121.69523,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M24,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68A8,8,0,0,1,24,60Z"
        opacity="0.2"
      />
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="34.9091"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M110.8827,60H152a32,32,0,0,1,32,32v52"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M184,188a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M229.91992,226.61816a8.0006,8.0006,0,0,1-11.83984,10.76368l-42.34229-46.57618A16.01483,16.01483,0,0,1,160,204H48A40.04584,40.04584,0,0,1,8,164V68A16.01833,16.01833,0,0,1,24,52H49.55127l-20.562-22.61816A8.0006,8.0006,0,0,1,40.8291,18.61816Zm14.0957-153.53711a8.00341,8.00341,0,0,0-7.98437-.02734l-40,22.85742A8,8,0,0,0,192,102.85742v50.28516a8,8,0,0,0,4.03125,6.94629l40,22.85742A8.0003,8.0003,0,0,0,248,176V80A7.99807,7.99807,0,0,0,244.01562,73.08105Zm-81.93554,55.12989A8.0004,8.0004,0,0,0,176,122.8291V92a40.04584,40.04584,0,0,0-40-40H110.88281a8.00036,8.00036,0,0,0-5.91992,13.38184Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="34.9091"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M110.8827,60H152a32,32,0,0,1,32,32v52"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M184,188a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="34.9091"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M110.8827,60H152a32,32,0,0,1,32,32v52"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M184,188a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="34.9091"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M110.8827,60H152a32,32,0,0,1,32,32v52"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M184,188a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
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
  name: "PhVideoCameraSlash",
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
