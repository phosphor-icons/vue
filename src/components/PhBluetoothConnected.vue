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
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="52" cy="128" r="16" />
      <circle cx="196" cy="128" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon points="120 32 184 80 120 128 120 32" opacity="0.2" />
      <polygon points="120 128 184 176 120 224 120 128" opacity="0.2" />
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="52" cy="128" r="12" />
      <circle cx="196" cy="128" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M188.8,169.6,133.3,128l55.5-41.6a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32v80L60.8,73.6a8,8,0,0,0-9.6,12.8L106.7,128,51.2,169.6A8,8,0,0,0,56,184a7.7,7.7,0,0,0,4.8-1.6L112,144v80a8.2,8.2,0,0,0,4.4,7.2,9.4,9.4,0,0,0,3.6.8,7.7,7.7,0,0,0,4.8-1.6l64-48a8,8,0,0,0,0-12.8ZM128,48l42.7,32L128,112Zm0,160V144l42.7,32Zm80-80a12,12,0,1,1-12-12A12,12,0,0,1,208,128ZM52,140a12,12,0,1,1,12-12A12,12,0,0,1,52,140Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="52" cy="128" r="10" />
      <circle cx="196" cy="128" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="52" cy="128" r="8" />
      <circle cx="196" cy="128" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="80"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="176"
        x2="120"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="52" cy="128" r="12" />
      <circle cx="196" cy="128" r="12" />
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
