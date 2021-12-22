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
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="76"
        cy="76"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="76" cy="76" r="28" opacity="0.2" />
      <circle cx="180" cy="180" r="28" opacity="0.2" />
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="76"
        cy="76"
        r="28"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M205.7,61.7l-144,144a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l144-144a8.1,8.1,0,0,1,11.4,11.4ZM50.5,101.5a36.2,36.2,0,0,1,0-51,36.2,36.2,0,0,1,51,0,36.1,36.1,0,0,1-51,51ZM56,76a19.7,19.7,0,0,0,5.9,14.1,19.9,19.9,0,0,0,28.2,0,19.8,19.8,0,0,0,0-28.2h0a19.8,19.8,0,0,0-28.2,0A19.7,19.7,0,0,0,56,76ZM216,180a36,36,0,1,1-61.5-25.5,36.2,36.2,0,0,1,51,0A35.9,35.9,0,0,1,216,180Zm-16,0a19.7,19.7,0,0,0-5.9-14.1,19.8,19.8,0,0,0-28.2,0A19.9,19.9,0,1,0,200,180Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="76"
        cy="76"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="76"
        cy="76"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="76"
        cy="76"
        r="28"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <circle
        cx="180"
        cy="180"
        r="28"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
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
