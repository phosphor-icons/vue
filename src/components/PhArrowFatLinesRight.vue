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
      <polygon
        points="136 32 232 128 136 224 136 176 116 176 116 80 136 80 136 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="44"
        y1="176"
        x2="44"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="80"
        y1="176"
        x2="80"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon
        points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
        opacity="0.2"
      />
      <polygon
        points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="40"
        y1="176"
        x2="40"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="72"
        y1="176"
        x2="72"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M132.93848,231.39111A8.00015,8.00015,0,0,1,128,224V184H104a8.00008,8.00008,0,0,1-8-8V80a8.00008,8.00008,0,0,1,8-8h24V32a8.0001,8.0001,0,0,1,13.65723-5.65674l96,96a8.00182,8.00182,0,0,1,0,11.31348l-96,96A8.00061,8.00061,0,0,1,132.93848,231.39111ZM48,176V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Zm32,0V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polygon
        points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="40"
        y1="176"
        x2="40"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="72"
        y1="176"
        x2="72"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polygon
        points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="40"
        y1="176"
        x2="40"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="72"
        y1="176"
        x2="72"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polygon
        points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="40"
        y1="176"
        x2="40"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="72"
        y1="176"
        x2="72"
        y2="80"
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
  }
});
export default component;
</script>
