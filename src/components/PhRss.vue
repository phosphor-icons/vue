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
        d="M48,144a64,64,0,0,1,64,64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M48,96A112,112,0,0,1,160,208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M48,48A160,160,0,0,1,208,208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="51.99414" cy="204" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M47.99414,144a64,64,0,0,1,64,64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M47.99414,96a112,112,0,0,1,112,112"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M47.99414,48a160,160,0,0,1,160,160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="51.99414" cy="204" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path
          d="M47.99414,135.99963a8,8,0,1,0,0,16,56.00027,56.00027,0,0,1,56,56,8,8,0,0,0,16,0,71.9994,71.9994,0,0,0-72-72Z"
        />
        <path
          d="M47.99414,87.99963a8,8,0,1,0,0,16,104.00183,104.00183,0,0,1,104,104,8,8,0,0,0,16,0,120.00093,120.00093,0,0,0-120-120Z"
        />
        <path
          d="M166.78809,89.20569A166.90561,166.90561,0,0,0,47.99414,39.99963a8,8,0,0,0,0,16,151.00491,151.00491,0,0,1,107.48047,44.52051,151.00328,151.00328,0,0,1,44.51953,107.47949,8,8,0,0,0,16,0A166.90191,166.90191,0,0,0,166.78809,89.20569Z"
        />
        <circle cx="51.99414" cy="204.00012" r="12" />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M48,144a64,64,0,0,1,64,64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M48,96A112,112,0,0,1,160,208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M48,48A160,160,0,0,1,208,208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="51.99414" cy="204" r="9" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M48,144a64,64,0,0,1,64,64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M48,96A112,112,0,0,1,160,208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M48,48A160,160,0,0,1,208,208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="51.99414" cy="204" r="6" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M48,144a64,64,0,0,1,64,64"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,96A112,112,0,0,1,160,208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,48A160,160,0,0,1,208,208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="52" cy="204" r="12" />
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
