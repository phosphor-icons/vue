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
        d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <g opacity="0.2">
        <path
          d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
        />
      </g>
      <path
        d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M245.65723,77.65674,215.9541,107.35938c-.79785,29.35644-12.00293,57.9873-31.02148,79.00781C162.65723,210.98682,131.90527,224,96,224c-34.91211,0-52.9082-17.59424-53.65723-18.34326a8.00012,8.00012,0,0,1,4.07911-13.49951c8.53808-1.7295,29.73144-8.46534,38.75-20.60547a92.9624,92.9624,0,0,1-25.34766-21.46631c-25.0918-30.46924-24.56006-68.75977-19.69531-95.5166a8.00018,8.00018,0,0,1,14.11816-3.56641C54.522,51.34424,80.81543,83.55713,120,94.08105V88.00293a48.31855,48.31855,0,0,1,48.6084-47.99951,48.11329,48.11329,0,0,1,40.96875,23.99609L240,64a8.0001,8.0001,0,0,1,5.65723,13.65674Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
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
