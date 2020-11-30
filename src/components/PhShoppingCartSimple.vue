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
    <g v-if="weight === 'bold'">
      <circle cx="72" cy="216" r="16" />
      <circle cx="192" cy="216" r="16" />
      <path
        d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H12"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481Z"
        opacity="0.2"
      />
      <circle cx="72" cy="216" r="16" />
      <circle cx="192" cy="216" r="16" />
      <path
        d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <circle cx="72" cy="216" r="16" />
        <circle cx="192" cy="216" r="16" />
        <path
          d="M226.69922,61.74805A15.95974,15.95974,0,0,0,214.415,56H46.69531L41.79492,29.12988A15.995,15.995,0,0,0,26.05371,16H8A8,8,0,0,0,8,32H26.05469L32.044,64.84717a8.04283,8.04283,0,0,0,.21679,1.18554L51.37793,170.87012A15.994,15.994,0,0,0,67.11816,184H196.9707a15.99217,15.99217,0,0,0,15.74219-13.13965l17.44434-95.99951A15.957,15.957,0,0,0,226.69922,61.74805Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="72" cy="216" r="12" />
      <circle cx="192" cy="216" r="12" />
      <path
        d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="72" cy="216" r="8" />
      <circle cx="192" cy="216" r="8" />
      <path
        d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="72" cy="216" r="16" />
      <circle cx="192" cy="216" r="16" />
      <path
        d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H8"
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
