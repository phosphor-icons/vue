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
        x="-6"
        y="102"
        width="176"
        height="52"
        rx="8"
        transform="translate(210 46) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="86"
        y="102"
        width="176"
        height="52"
        rx="8"
        transform="translate(302 -46) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect
        x="-4"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(212 44) rotate(90)"
        opacity="0.2"
      />
      <rect
        x="84"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(300 -44) rotate(90)"
        opacity="0.2"
      />
      <rect
        x="-4"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(212 44) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="84"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(300 -44) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M120,48V208a16.01833,16.01833,0,0,1-16,16H64a16.01833,16.01833,0,0,1-16-16V48A16.01833,16.01833,0,0,1,64,32h40A16.01833,16.01833,0,0,1,120,48Zm72-16H152a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,192,32Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="-4"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(212 44) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="84"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(300 -44) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="-4"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(212 44) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="84"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(300 -44) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="-4"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(212 44) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="84"
        y="100"
        width="176"
        height="56"
        rx="8"
        transform="translate(300 -44) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
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
