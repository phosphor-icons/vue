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
      <path
        d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H79.99414l16-24h64l16,24H208a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="128"
        cy="132"
        r="36"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M208,64H175.99414l-16-24h-64l-16,24H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z"
        opacity="0.2"
      />
      <path
        d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H79.99414l16-24h64l16,24H208a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128"
        cy="132"
        r="36"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208,56H180.27539l-13.625-20.4375A7.99942,7.99942,0,0,0,159.99414,32h-64a7.99943,7.99943,0,0,0-6.65625,3.5625L75.71289,56H48A24.0275,24.0275,0,0,0,24,80V192a24.0275,24.0275,0,0,0,24,24H208a24.0275,24.0275,0,0,0,24-24V80A24.0275,24.0275,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36.04043,36.04043,0,0,1,164,132Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H79.99414l16-24h64l16,24H208a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="128"
        cy="132"
        r="36"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H79.99414l16-24h64l16,24H208a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="128"
        cy="132"
        r="36"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H79.99414l16-24h64l16,24H208a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128"
        cy="132"
        r="36"
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
