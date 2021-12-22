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
        d="M104.5,186.6A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-28.5,86.6L160,232H96Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
        opacity="0.2"
      />
      <path
        d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M232,148a52,52,0,0,1-80.5,43.5l10.7,34.1a7.8,7.8,0,0,1-1.2,7.1,7.9,7.9,0,0,1-6.4,3.3H101.4a7.9,7.9,0,0,1-6.4-3.3,7.8,7.8,0,0,1-1.2-7.1l10.7-34.1a51.7,51.7,0,0,1-30,8.5c-27.7-.8-50.4-24-50.5-51.8A52.1,52.1,0,0,1,76,96l4,.2a53.3,53.3,0,0,1-3.9-23.4,52,52,0,1,1,99.8,23.4A51.5,51.5,0,0,1,232,148Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
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
