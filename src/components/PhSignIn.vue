/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="size"
    :height="size"
    :fill="color"
    :transform="mirrored ? 'scale(-1, 1)' : undefined"
    v-bind="$attrs"
  >
    <slot />
    <g v-if="weight === 'bold'">
      <polyline
        points="94.011 170 136 128 94.011 86"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="24"
        y1="128"
        x2="135.97057"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polyline
        points="94.011 170 136 128 94.011 86"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="24"
        y1="128"
        x2="135.97057"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M141.65723,133.65625l-41.98828,42a8.00018,8.00018,0,0,1-11.31543-11.3125L116.68994,136H24a8,8,0,0,1,0-16h92.68994L88.35352,91.65625A8.00018,8.00018,0,0,1,99.669,80.34375l41.98828,42A7.99974,7.99974,0,0,1,141.65723,133.65625ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,192,32Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="94.011 170 136 128 94.011 86"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="24"
        y1="128"
        x2="135.97057"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="94.011 170 136 128 94.011 86"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="24"
        y1="128"
        x2="135.97057"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="94.011 170 136 128 94.011 86"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="24"
        y1="128"
        x2="135.97057"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SetupIconProps, PropValidator, PhosphorIcon } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

const component: PhosphorIcon = defineComponent({
  props: PropValidator,
  setup(props: SetupIconProps) {
    return { ...useDefaultPropsFromContext(props) };
  },
});
export default component;
</script>
