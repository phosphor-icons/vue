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
        points="168 48 208 48 208 88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="208 168 208 208 168 208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="48"
        y1="48"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="156.28419"
        y1="99.71581"
        x2="208"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="48"
        y1="208"
        x2="99.7158"
        y2="156.2842"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polyline
        points="168 48 208 48 208 88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="208 168 208 208 168 208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="48"
        y1="48"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="150.62718"
        y1="105.37282"
        x2="208"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="48"
        y1="208"
        x2="105.37282"
        y2="150.62718"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M216,48V88a8.00018,8.00018,0,0,1-13.65723,5.65674L188,79.314l-31.71582,31.71583a8.00035,8.00035,0,0,1-11.31445-11.314L176.68579,68l-14.343-14.34326A8.00038,8.00038,0,0,1,168,40h40A8.00008,8.00008,0,0,1,216,48Zm-4.93848,112.60889a8.00113,8.00113,0,0,0-8.71875,1.73437L188,176.686,53.65723,42.34326A8.00018,8.00018,0,1,0,42.34277,53.65674L176.686,188l-14.34327,14.34326A8.00038,8.00038,0,0,0,168,216h40a8.00008,8.00008,0,0,0,8-8V168A8.00015,8.00015,0,0,0,211.06152,160.60889ZM99.71582,144.97021l-57.373,57.373a8.00018,8.00018,0,0,0,11.31446,11.31348l57.373-57.37256a8.00035,8.00035,0,0,0-11.31445-11.314Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="168 48 208 48 208 88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="208 168 208 208 168 208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="48"
        y1="48"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="150.62718"
        y1="105.37282"
        x2="208"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="48"
        y1="208"
        x2="105.37282"
        y2="150.62718"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="168 48 208 48 208 88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="208 168 208 208 168 208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="48"
        y1="48"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="150.62718"
        y1="105.37282"
        x2="208"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="48"
        y1="208"
        x2="105.37282"
        y2="150.62718"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="168 48 208 48 208 88"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="208 168 208 208 168 208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="48"
        y1="48"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="150.62718"
        y1="105.37282"
        x2="208"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="48"
        y1="208"
        x2="105.37282"
        y2="150.62718"
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
  }
});
export default component;
</script>
