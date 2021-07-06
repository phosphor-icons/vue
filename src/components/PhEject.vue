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
        d="M122.12157,38.3683,45.03989,118.45222A8,8,0,0,0,50.80376,132H205.19624a8,8,0,0,0,5.76387-13.54778L133.87843,38.3683A8,8,0,0,0,122.12157,38.3683Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M122.12157,38.3683,44.39345,122.57376A8,8,0,0,0,50.27188,136H205.72812a8,8,0,0,0,5.87843-13.42624L133.87843,38.3683A8,8,0,0,0,122.12157,38.3683Z"
        opacity="0.2"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        opacity="0.2"
      />
      <path
        d="M122.12157,38.3683,44.39345,122.57376A8,8,0,0,0,50.27188,136H205.72812a8,8,0,0,0,5.87843-13.42624L133.87843,38.3683A8,8,0,0,0,122.12157,38.3683Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M35.61523,134.41724a15.79789,15.79789,0,0,1,2.90039-17.26978l77.72657-84.20532h.001a15.99956,15.99956,0,0,1,23.51368,0l77.72851,84.20532A16.0003,16.0003,0,0,1,205.72852,144H50.27148A15.79772,15.79772,0,0,1,35.61523,134.41724ZM208,160H48a16.01833,16.01833,0,0,0-16,16v24a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V176A16.01833,16.01833,0,0,0,208,160Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M122.12157,38.3683,44.39345,122.57376A8,8,0,0,0,50.27188,136H205.72812a8,8,0,0,0,5.87843-13.42624L133.87843,38.3683A8,8,0,0,0,122.12157,38.3683Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M122.12157,38.3683,44.39345,122.57376A8,8,0,0,0,50.27188,136H205.72812a8,8,0,0,0,5.87843-13.42624L133.87843,38.3683A8,8,0,0,0,122.12157,38.3683Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M122.12157,38.3683,44.39345,122.57376A8,8,0,0,0,50.27188,136H205.72812a8,8,0,0,0,5.87843-13.42624L133.87843,38.3683A8,8,0,0,0,122.12157,38.3683Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="108"
        y="100"
        width="40"
        height="176"
        rx="8"
        transform="translate(-60 316) rotate(-90)"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
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
  }
});
export default component;
</script>
