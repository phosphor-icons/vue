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
      <circle cx="128" cy="128" r="16" />
      <circle cx="128" cy="80" r="16" />
      <circle cx="128" cy="176" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="128" cy="128" r="96" opacity="0.2" />
      <circle cx="128" cy="128" r="12" />
      <circle cx="128" cy="80" r="12" />
      <circle cx="128" cy="176" r="12" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M232,128A104,104,0,1,0,128,232,104.12041,104.12041,0,0,0,232,128ZM116,80a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,80Zm0,48a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,128Zm0,48a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,176Z"
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
      <circle cx="128" cy="128" r="9" />
      <circle cx="128" cy="80" r="9" />
      <circle cx="128" cy="176" r="9" />
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
      <circle cx="128" cy="128" r="6" />
      <circle cx="128" cy="80" r="6" />
      <circle cx="128" cy="176" r="6" />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="128" cy="128" r="12" />
      <circle cx="128" cy="80" r="12" />
      <circle cx="128" cy="176" r="12" />
      <circle
        cx="128"
        cy="128"
        r="96"
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
