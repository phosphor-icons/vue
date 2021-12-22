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
      <circle cx="60" cy="228" r="16" />
      <circle cx="92" cy="196" r="16" />
      <circle cx="28" cy="196" r="16" />
      <circle cx="60" cy="164" r="16" />
      <path
        d="M244,40H219.3a7.9,7.9,0,0,0-5.6,2.3L184,72,64.4,86.1a8,8,0,0,0-4.7,13.6l96.6,96.6a8,8,0,0,0,13.6-4.7L184,72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M184,72,55.3,93.4A8,8,0,0,0,51,107l98,98a8,8,0,0,0,13.6-4.3Z"
        opacity="0.2"
      />
      <circle cx="60" cy="228" r="12" />
      <circle cx="88" cy="200" r="12" />
      <circle cx="28" cy="196" r="12" />
      <circle cx="56" cy="168" r="12" />
      <path
        d="M248,40H219.3a7.9,7.9,0,0,0-5.6,2.3L184,72,55.3,93.4A8,8,0,0,0,51,107l98,98a8,8,0,0,0,13.6-4.3L184,72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M72,228a12,12,0,1,1-12-12A12,12,0,0,1,72,228Zm16-40a12,12,0,1,0,12,12A12,12,0,0,0,88,188Zm-60-4a12,12,0,1,0,12,12A12,12,0,0,0,28,184Zm40-16a12,12,0,1,0-12,12A12,12,0,0,0,68,168ZM248,32H219.3A15.9,15.9,0,0,0,208,36.7L180.2,64.5,54,85.6A15.7,15.7,0,0,0,41.4,96.5a16,16,0,0,0,3.9,16.1l98.1,98.1a16,16,0,0,0,11.2,4.7,16.2,16.2,0,0,0,4.9-.8A15.7,15.7,0,0,0,170.4,202L191.5,75.8h0L219.3,48H248a8,8,0,0,0,0-16Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="60" cy="228" r="10" />
      <circle cx="88" cy="200" r="10" />
      <circle cx="28" cy="196" r="10" />
      <circle cx="56" cy="168" r="10" />
      <path
        d="M248,40H219.3a7.9,7.9,0,0,0-5.6,2.3L184,72,55.3,93.4A8,8,0,0,0,51,107l98,98a8,8,0,0,0,13.6-4.3L184,72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="60" cy="228" r="8" />
      <circle cx="88" cy="200" r="8" />
      <circle cx="28" cy="196" r="8" />
      <circle cx="56" cy="168" r="8" />
      <path
        d="M248,40H219.3a7.9,7.9,0,0,0-5.6,2.3L184,72,55.3,93.4A8,8,0,0,0,51,107l98,98a8,8,0,0,0,13.6-4.3L184,72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="60" cy="228" r="12" />
      <circle cx="88" cy="200" r="12" />
      <circle cx="28" cy="196" r="12" />
      <circle cx="56" cy="168" r="12" />
      <path
        d="M248,40H219.3a7.9,7.9,0,0,0-5.6,2.3L184,72,55.3,93.4A8,8,0,0,0,51,107l98,98a8,8,0,0,0,13.6-4.3L184,72"
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
