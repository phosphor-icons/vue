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
        d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="131.99902" cy="127.99316" r="16" />
      <circle cx="83.99902" cy="127.99316" r="16" />
      <circle cx="179.99902" cy="127.99316" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
        opacity="0.2"
      />
      <path
        d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="131.99805" cy="127.99316" r="12" />
      <circle cx="83.99805" cy="127.99316" r="12" />
      <circle cx="179.99805" cy="127.99316" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M132,23.99219a100.113,100.113,0,0,0-100,100v84.33349a15.68449,15.68449,0,0,0,15.667,15.66651H132a100,100,0,0,0,0-200Zm-48.00195,116.001a12,12,0,1,1,12-12A12,12,0,0,1,83.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,131.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,179.99805,139.99316Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="131.99951" cy="127.99316" r="9" />
      <circle cx="83.99951" cy="127.99316" r="9" />
      <circle cx="179.99951" cy="127.99316" r="9" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="132" cy="127.99316" r="6" />
      <circle cx="84" cy="127.99316" r="6" />
      <circle cx="180" cy="127.99316" r="6" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="132.00049" cy="127.99316" r="12" />
      <circle cx="84.00049" cy="127.99316" r="12" />
      <circle cx="180.00049" cy="127.99316" r="12" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconProps, PropValidator } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

export default defineComponent({
  props: PropValidator,
  setup(props: Readonly<Partial<IconProps>>) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
</script>
