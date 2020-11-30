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
        d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,184A80,80,0,1,1,184.56836,71.43164a7.99984,7.99984,0,1,1-11.31348,11.31348A63.99718,63.99718,0,1,0,191.50244,136H128a8,8,0,0,1,0-16h72a8.00008,8.00008,0,0,1,8,8A80.09041,80.09041,0,0,1,128,208Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
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
