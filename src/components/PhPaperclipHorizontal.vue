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
        d="M184,120H48a28,28,0,0,0,0,56H188a48,48,0,0,0,0-96H76"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M192,184H46c-21.6,0-39.2-17.9-39.2-40S24.4,104,46,104H190a24,24,0,0,1,0,48H78a8,8,0,0,1,0-16H190a8,8,0,0,0,0-16H46c-12.8,0-23.2,10.8-23.2,24S33.2,168,46,168H192a40,40,0,0,0,0-80H80a8,8,0,0,1,0-16H192a56,56,0,0,1,0,112Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80"
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
