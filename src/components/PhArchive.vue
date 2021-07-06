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
      <rect
        x="24"
        y="56"
        width="208"
        height="40"
        rx="7.99999"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="104"
        y1="136"
        x2="152"
        y2="136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z" opacity="0.2" />
      <rect
        x="24"
        y="56"
        width="208"
        height="40"
        rx="7.99999"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="104"
        y1="136"
        x2="152"
        y2="136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M224,48H32A16.01833,16.01833,0,0,0,16,64V88a16.01833,16.01833,0,0,0,16,16v88a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V104a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,224,48Zm-72,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm72-56H32V64H224l.00977,24Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="24"
        y="56"
        width="208"
        height="40"
        rx="7.99999"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="104"
        y1="136"
        x2="152"
        y2="136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="24"
        y="56"
        width="208"
        height="40"
        rx="7.99999"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="104"
        y1="136"
        x2="152"
        y2="136"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="24"
        y="56"
        width="208"
        height="40"
        rx="7.99999"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="104"
        y1="136"
        x2="152"
        y2="136"
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
