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
        d="M72,128h48a44,44,0,0,0,0-88H72V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="112"
        y1="128"
        x2="200"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="200"
        y1="160"
        x2="144"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M72,128h48a44,44,0,0,0,0-88H72V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path d="M72,128h48a44,44,0,0,0,0-88H72Z" opacity="0.2" />
      <line
        x1="112"
        y1="128"
        x2="200"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="160"
        x2="144"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M183.31348,188l22.34326-22.34326a7.99984,7.99984,0,0,0-11.31348-11.31348L172,176.68652l-41.71289-41.71277A52.0008,52.0008,0,0,0,120,32H72a8.00008,8.00008,0,0,0-8,8V192a8,8,0,0,0,16,0V136h28.68652l52,52-22.34326,22.34326a7.99984,7.99984,0,1,0,11.31348,11.31348L172,199.31348l22.34326,22.34326a7.99984,7.99984,0,0,0,11.31348-11.31348ZM80,48h40a36,36,0,0,1,0,72H80Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M72,128h48a44,44,0,0,0,0-88H72V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="112"
        y1="128"
        x2="200"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="200"
        y1="160"
        x2="144"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M72,128h48a44,44,0,0,0,0-88H72V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="112"
        y1="128"
        x2="200"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="200"
        y1="160"
        x2="144"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M72,128h48a44,44,0,0,0,0-88H72V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="112"
        y1="128"
        x2="200"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="160"
        x2="144"
        y2="216"
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
