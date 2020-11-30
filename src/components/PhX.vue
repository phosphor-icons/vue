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
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M139.31348,128l66.34326-66.34326a7.99984,7.99984,0,0,0-11.31348-11.31348L128,116.68652,61.65674,50.34326A7.99984,7.99984,0,0,0,50.34326,61.65674L116.68652,128,50.34326,194.34326a7.99984,7.99984,0,1,0,11.31348,11.31348L128,139.31348l66.34326,66.34326a7.99984,7.99984,0,0,0,11.31348-11.31348Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
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
