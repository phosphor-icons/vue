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
      <path
        d="M32,72H95.1a7.9,7.9,0,0,1,7.1,4.4l51.6,103.2A7.9,7.9,0,0,0,161,184h63"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="156"
        y1="72"
        x2="224"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M32,72H95.1a7.9,7.9,0,0,1,7.1,4.4l51.6,103.2A7.9,7.9,0,0,0,161,184h63"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="152"
        y1="72"
        x2="224"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M232,184a8,8,0,0,1-8,8H161a16.2,16.2,0,0,1-14.4-8.8L95.1,80H32a8,8,0,0,1,0-16H95.1a16,16,0,0,1,14.3,8.8L161,176h63A8,8,0,0,1,232,184ZM152,80h72a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M32,72H95.1a7.9,7.9,0,0,1,7.1,4.4l51.6,103.2A7.9,7.9,0,0,0,161,184h63"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="152"
        y1="72"
        x2="224"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M32,72H95.1a7.9,7.9,0,0,1,7.1,4.4l51.6,103.2A7.9,7.9,0,0,0,161,184h63"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="152"
        y1="72"
        x2="224"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M32,72H95.1a7.9,7.9,0,0,1,7.1,4.4l51.6,103.2A7.9,7.9,0,0,0,161,184h63"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="152"
        y1="72"
        x2="224"
        y2="72"
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
