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
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        transform="translate(256) rotate(90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="92"
        y1="76"
        x2="164"
        y2="76"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="104" cy="128" r="16" />
      <circle cx="152" cy="128" r="16" />
      <circle cx="104" cy="176" r="16" />
      <circle cx="152" cy="176" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="80" y="64" width="96" height="48" opacity="0.2" />
      <rect
        x="80"
        y="64"
        width="96"
        height="48"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="31.99995"
        y="48.00781"
        width="192"
        height="160"
        rx="8"
        transform="translate(256.00777 0.00786) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="88" cy="148" r="12" />
      <circle cx="128" cy="148" r="12" />
      <circle cx="168" cy="148" r="12" />
      <circle cx="88" cy="188" r="12" />
      <circle cx="128" cy="188" r="12" />
      <circle cx="168" cy="188" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M200,24H56A16.01833,16.01833,0,0,0,40,40V216a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V40A16.01833,16.01833,0,0,0,200,24ZM88,199.99219a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,88,199.99219Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,88,159.99219Zm40,40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,128,199.99219Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,128,159.99219Zm40,40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,168,199.99219Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,168,159.99219Zm16-56a7.99977,7.99977,0,0,1-8,8H80a7.99977,7.99977,0,0,1-8-8v-40a7.99977,7.99977,0,0,1,8-8h96a7.99977,7.99977,0,0,1,8,8Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="80"
        y="64"
        width="96"
        height="48"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        transform="translate(256) rotate(90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="88" cy="148" r="10" />
      <circle cx="128" cy="148" r="10" />
      <circle cx="168" cy="148" r="10" />
      <circle cx="88" cy="188" r="10" />
      <circle cx="128" cy="188" r="10" />
      <circle cx="168" cy="188" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="80"
        y="64"
        width="96"
        height="48"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        transform="translate(256) rotate(90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="88" cy="148" r="8" />
      <circle cx="128" cy="148" r="8" />
      <circle cx="168" cy="148" r="8" />
      <circle cx="88" cy="188" r="8" />
      <circle cx="128" cy="188" r="8" />
      <circle cx="168" cy="188" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="80"
        y="64"
        width="96"
        height="48"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        transform="translate(256) rotate(90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle cx="88" cy="148" r="12" />
      <circle cx="128" cy="148" r="12" />
      <circle cx="168" cy="148" r="12" />
      <circle cx="88" cy="188" r="12" />
      <circle cx="128" cy="188" r="12" />
      <circle cx="168" cy="188" r="12" />
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
