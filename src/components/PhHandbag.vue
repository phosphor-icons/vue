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
        d="M208.83966,72H47.16034a8,8,0,0,0-7.95107,7.11655l-14.22222,128A8,8,0,0,0,32.93812,216H223.06188a8,8,0,0,0,7.95107-8.88345l-14.22222-128A8,8,0,0,0,208.83966,72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M208.83966,72H47.16034a8,8,0,0,0-7.95107,7.11655l-14.22222,128A8,8,0,0,0,32.93812,216H223.06188a8,8,0,0,0,7.95107-8.88345l-14.22222-128A8,8,0,0,0,208.83966,72Z"
        opacity="0.2"
      />
      <path
        d="M208.83966,72H47.16034a8,8,0,0,0-7.95107,7.11655l-14.22222,128A8,8,0,0,0,32.93812,216H223.06188a8,8,0,0,0,7.95107-8.88345l-14.22222-128A8,8,0,0,0,208.83966,72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M238.96387,206.2334,224.74219,78.23291A15.98372,15.98372,0,0,0,208.83984,64H177.28662c-3.98047-22.6709-24.562-40-49.29248-40s-45.312,17.3291-49.29248,40H47.16016A15.98375,15.98375,0,0,0,31.25781,78.2334l-14.22168,128A16.00031,16.00031,0,0,0,32.93848,224h190.123a16.00031,16.00031,0,0,0,15.90235-17.7666ZM127.99414,40c15.814,0,29.14014,10.21387,32.92383,24H95.07031C98.854,50.21387,112.18018,40,127.99414,40Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M208.83966,72H47.16034a8,8,0,0,0-7.95107,7.11655l-14.22222,128A8,8,0,0,0,32.93812,216H223.06188a8,8,0,0,0,7.95107-8.88345l-14.22222-128A8,8,0,0,0,208.83966,72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M208.83966,72H47.16034a8,8,0,0,0-7.95107,7.11655l-14.22222,128A8,8,0,0,0,32.93812,216H223.06188a8,8,0,0,0,7.95107-8.88345l-14.22222-128A8,8,0,0,0,208.83966,72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M208.83966,72H47.16034a8,8,0,0,0-7.95107,7.11655l-14.22222,128A8,8,0,0,0,32.93812,216H223.06188a8,8,0,0,0,7.95107-8.88345l-14.22222-128A8,8,0,0,0,208.83966,72Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40"
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
  name: "PhHandbag",
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
