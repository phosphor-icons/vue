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
        d="M205.65674,61.65674l-144,144a7.99984,7.99984,0,0,1-11.31348-11.31348l144-144a7.99984,7.99984,0,0,1,11.31348,11.31348ZM50.54443,101.45581A36.0403,36.0403,0,1,1,76,111.98315,35.76294,35.76294,0,0,1,50.54443,101.45581ZM56,76A20,20,0,1,0,90.14209,61.85791v-.00024A20,20,0,0,0,56,76ZM216,180a36.00012,36.00012,0,1,1-10.54443-25.45581A35.76281,35.76281,0,0,1,216,180Zm-16,0a20.00016,20.00016,0,1,0-5.85791,14.14209A19.86721,19.86721,0,0,0,200,180Z"
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
