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
        x1="56"
        y1="132"
        x2="136"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <line
        x1="56"
        y1="132"
        x2="136"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M192,208a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16,28.1,28.1,0,0,0,28-28V140H56a8,8,0,0,1,0-16H84V84a52,52,0,0,1,88.8-36.8,8,8,0,0,1,0,11.3,7.9,7.9,0,0,1-11.3,0A36.1,36.1,0,0,0,100,84v40h36a8,8,0,0,1,0,16H100v32a43.8,43.8,0,0,1-10.1,28H184A8,8,0,0,1,192,208Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="56"
        y1="132"
        x2="136"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="56"
        y1="132"
        x2="136"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="56"
        y1="132"
        x2="136"
        y2="132"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
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
