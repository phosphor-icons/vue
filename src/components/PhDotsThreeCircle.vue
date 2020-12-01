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
      <circle cx="80" cy="128" r="16" />
      <circle cx="176" cy="128" r="16" />
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
      <circle cx="176" cy="128" r="12" />
      <circle cx="128" cy="128" r="12" />
      <circle cx="80" cy="128" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24ZM80,140a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,80,140Zm48,0a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,128,140Zm48,0a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,176,140Z"
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
      <circle cx="128" cy="128" r="10" />
      <circle cx="80" cy="128" r="10" />
      <circle cx="176" cy="128" r="10" />
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
      <circle cx="128" cy="128" r="8" />
      <circle cx="80" cy="128" r="8" />
      <circle cx="176" cy="128" r="8" />
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
      <circle cx="128" cy="128" r="12" />
      <circle cx="176" cy="128" r="12" />
      <circle cx="80" cy="128" r="12" />
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
