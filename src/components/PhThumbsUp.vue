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
        d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
        opacity="0.2"
      />
      <path
        d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M231.86133,80.11621A24.01156,24.01156,0,0,0,213.86914,72h-53.875V56a40.04552,40.04552,0,0,0-40-40,7.99869,7.99869,0,0,0-7.15527,4.42236L75.0498,96H31.99414a16.01833,16.01833,0,0,0-16,16v88a16.01833,16.01833,0,0,0,16,16h169.875a24.03945,24.03945,0,0,0,23.81543-21.02344l12-96A24.01444,24.01444,0,0,0,231.86133,80.11621ZM31.99414,112h40v88h-40Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
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
