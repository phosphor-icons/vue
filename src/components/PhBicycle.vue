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
      <circle
        cx="52"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="204"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="52 64 79.2 64 132 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="52 160 96.8 96 168.8 96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="184 64 151.2 64 204 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="52" cy="160" r="40" opacity="0.2" />
      <circle cx="204" cy="160" r="40" opacity="0.2" />
      <circle
        cx="52"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="204"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="52 64 79.2 64 132 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="52 160 96.8 96 168.8 96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="184 64 151.2 64 204 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path
          d="M51.99292,168.00049A8.00066,8.00066,0,0,1,45.446,155.41211l27.13623-38.76636a48.15264,48.15264,0,1,0,13.09522,9.19312l-27.124,38.749A7.989,7.989,0,0,1,51.99292,168.00049Z"
        />
        <path
          d="M203.99975,112a47.7705,47.7705,0,0,0-15.79443,2.68237l22.8042,41.46216A8.00009,8.00009,0,1,1,196.99,163.85547l-22.79248-41.44141A47.96118,47.96118,0,1,0,203.99975,112Z"
        />
        <path
          d="M175.842,92.20337l-.02027-.03662L164.73022,72h19.26953a8,8,0,0,0,0-16H151.2a7.99969,7.99969,0,0,0-7.00977,11.85547L155.26977,88H101.53L86.20971,60.14453A8.00017,8.00017,0,0,0,79.2,56H51.99975a8,8,0,0,0,0,16H74.46948L87.38989,95.49194,72.58227,116.64575a48.20354,48.20354,0,0,1,13.09522,9.19312L95.9834,111.11621,124.99,163.85547a8.00009,8.00009,0,1,0,14.01953-7.71094L110.33008,104h53.73974l10.12769,18.41406a47.94767,47.94767,0,0,1,14.00781-7.73169Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="52"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="204"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="52 64 79.2 64 132 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="52 160 96.8 96 168.8 96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="184 64 151.2 64 204 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="52"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="204"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="52 64 79.2 64 132 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="52 160 96.8 96 168.8 96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="184 64 151.2 64 204 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="52"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="204"
        cy="160"
        r="40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="52 64 79.2 64 132 160"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="52 160 96.8 96 168.8 96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="184 64 151.2 64 204 160"
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
