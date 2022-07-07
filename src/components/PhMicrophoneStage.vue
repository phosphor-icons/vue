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
        cx="168"
        cy="88"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="213.3"
        y1="133.3"
        x2="122.7"
        y2="42.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M158.1,151.2a63.9,63.9,0,0,1-53.3-53.3h0L28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7Z"
        opacity="0.2"
      />
      <circle
        cx="168"
        cy="88"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="213.3"
        y1="133.3"
        x2="122.7"
        y2="42.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="100"
        y1="156"
        x2="88"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M96,88a65.1,65.1,0,0,0,.4,7.7l-74.8,102a16,16,0,0,0,1.6,20.8l14.3,14.3a16,16,0,0,0,20.8,1.6l102-74.8a65.1,65.1,0,0,0,7.7.4,71.9,71.9,0,0,0,41.1-12.9,4,4,0,0,0,.5-6.1L115,46.4a4,4,0,0,0-6.1.5A71.9,71.9,0,0,0,96,88Zm17.7,65.7-20,20a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l20-20a8.1,8.1,0,0,1,11.4,11.4ZM239.9,84a72,72,0,0,1-12.8,45.1,4,4,0,0,1-6.1.5L126.4,35a4,4,0,0,1,.5-6.1A72,72,0,0,1,239.9,84Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="168"
        cy="88"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="213.3"
        y1="133.3"
        x2="122.7"
        y2="42.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="100"
        y1="156"
        x2="88"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="168"
        cy="88"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="213.3"
        y1="133.3"
        x2="122.7"
        y2="42.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="100"
        y1="156"
        x2="88"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="168"
        cy="88"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="213.3"
        y1="133.3"
        x2="122.7"
        y2="42.7"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="100"
        y1="156"
        x2="88"
        y2="168"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
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
  name: "PhMicrophoneStage",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight || contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size || contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color || contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored || contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
