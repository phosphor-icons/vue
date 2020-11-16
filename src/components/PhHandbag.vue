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
        d="M88,72a40,40,0,0,1,80,0"
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
        d="M88,72a40,40,0,0,1,80,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M238.96387,206.2334,224.74219,78.23291A15.98372,15.98372,0,0,0,208.83984,64h-33.519a47.99073,47.99073,0,0,0-94.6416,0h-33.519A15.98375,15.98375,0,0,0,31.25781,78.2334l-14.22168,128A16.00031,16.00031,0,0,0,32.93848,224h190.123a16.00031,16.00031,0,0,0,15.90235-17.7666ZM128,40a32.05773,32.05773,0,0,1,30.9873,24H97.0127A32.05773,32.05773,0,0,1,128,40Z"
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
        d="M88,72a40,40,0,0,1,80,0"
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
        d="M88,72a40,40,0,0,1,80,0"
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
        d="M88,72a40,40,0,0,1,80,0"
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
import { defineComponent } from "vue";
import {
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "@/lib/types";
export default defineComponent({
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
