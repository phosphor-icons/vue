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
        d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M170.4834,115.70117A43.98012,43.98012,0,0,0,140.00049,40l-76.00586-.00488h-.00049a7.99955,7.99955,0,0,0-8,8v152a8,8,0,0,0,7.99951,8L152,208a48.00015,48.00015,0,0,0,18.4834-92.29883ZM71.99414,55.99561,140,56a28,28,0,0,1,0,56H71.99414ZM152.00049,192l-80.00635-.00439V128H152a32,32,0,0,1,.00049,64Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
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
