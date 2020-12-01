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
      <circle
        cx="115.99707"
        cy="116"
        r="84"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="175.39063"
        y1="175.40039"
        x2="223.99121"
        y2="224.00098"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="115.99512" cy="116" r="84" opacity="0.2" />
      <circle
        cx="115.99512"
        cy="116"
        r="84"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="175.38868"
        y1="175.40039"
        x2="223.98926"
        y2="224.00098"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M175.99609,116a60,60,0,1,1-60-60A60.06812,60.06812,0,0,1,175.99609,116Zm53.65137,113.65771a8.0006,8.0006,0,0,1-11.31445,0l-43.2229-43.2229a92.11513,92.11513,0,1,1,11.31445-11.31347l43.2229,43.2229A8,8,0,0,1,229.64746,229.65771ZM115.99609,192a76,76,0,1,0-76-76A76.08614,76.08614,0,0,0,115.99609,192Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="115.99805"
        cy="116"
        r="84"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="175.39161"
        y1="175.40039"
        x2="223.99219"
        y2="224.00098"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="115.99902"
        cy="116"
        r="84"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="175.39258"
        y1="175.40039"
        x2="223.99316"
        y2="224.00098"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="116"
        cy="116"
        r="84"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="175.39356"
        y1="175.40039"
        x2="223.99414"
        y2="224.00098"
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
