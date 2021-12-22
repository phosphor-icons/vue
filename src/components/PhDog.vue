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
        x1="128"
        y1="192"
        x2="128"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="92" cy="136" r="16" />
      <circle cx="164" cy="136" r="16" />
      <polyline
        points="144 176 128 192 112 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="104"
        y1="48"
        x2="152"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3L104,48h48Z"
        opacity="0.2"
      />
      <line
        x1="128"
        y1="192"
        x2="128"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="92" cy="140" r="12" />
      <circle cx="164" cy="140" r="12" />
      <polyline
        points="144 176 128 192 112 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="104"
        y1="48"
        x2="152"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68.7,16a16.1,16.1,0,0,1-6.7,1.4,15.6,15.6,0,0,1-10-3.6V184a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V141.8a15.6,15.6,0,0,1-10,3.6,16.1,16.1,0,0,1-6.7-1.4,15.8,15.8,0,0,1-9.1-17.6L30.6,38.9A16.1,16.1,0,0,1,50.2,26.3L105,40h46l54.8-13.7a16.1,16.1,0,0,1,19.6,12.6l16.4,87.5A15.8,15.8,0,0,1,232.7,144ZM200,184V122L148.1,56H107.9L56,122v62a24.1,24.1,0,0,0,24,24h40V195.3l-13.7-13.6a8.1,8.1,0,0,1,11.4-11.4L128,180.7l10.3-10.4a8.1,8.1,0,0,1,11.4,11.4L136,195.3V208h40A24.1,24.1,0,0,0,200,184Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="128"
        y1="192"
        x2="128"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="92" cy="140" r="10" />
      <circle cx="164" cy="140" r="10" />
      <polyline
        points="144 176 128 192 112 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="104"
        y1="48"
        x2="152"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="128"
        y1="192"
        x2="128"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="92" cy="140" r="8" />
      <circle cx="164" cy="140" r="8" />
      <polyline
        points="144 176 128 192 112 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="104"
        y1="48"
        x2="152"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="128"
        y1="192"
        x2="128"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="92" cy="140" r="12" />
      <circle cx="164" cy="140" r="12" />
      <polyline
        points="144 176 128 192 112 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="104"
        y1="48"
        x2="152"
        y2="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
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
