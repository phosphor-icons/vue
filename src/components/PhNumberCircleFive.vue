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
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="128" cy="128" r="96" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm21.35938,98.54688A36.00168,36.00168,0,0,1,98.4375,173.45313a8.00467,8.00467,0,1,1,11.32813-11.3125c7.53125,7.5625,20.73437,7.5625,28.26562,0a19.97387,19.97387,0,0,0,.00781-28.27344c-7.54687-7.57813-20.74218-7.57031-28.27343-.00781a8.004,8.004,0,0,1-13.5625-6.9375l7.80468-48.21094a7.99881,7.99881,0,0,1,7.89844-6.71875h39.99219a8,8,0,0,1,0,16H118.71875l-4.08594,25.20312A36.59418,36.59418,0,0,1,149.35938,122.54688Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <path
        d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
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
