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
        points="120 32.003 184 80.003 120 128.003 120 32.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polygon
        points="120 128.003 184 176.003 120 224.003 120 128.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="56"
        y1="80.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="56"
        y1="176.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon
        points="120 32.003 184 80.003 120 128.003 120 32.003"
        opacity="0.2"
      />
      <polygon
        points="120 128.003 184 176.003 120 224.003 120 128.003"
        opacity="0.2"
      />
      <polygon
        points="120 128.003 184 176.003 120 224.003 120 128.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="120 32.003 184 80.003 120 128.003 120 32.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="80.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="176.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M188.79883,169.60193l-55.46631-41.59967,55.46631-41.6a7.99952,7.99952,0,0,0,0-12.7998l-64-48a8,8,0,0,0-12.79981,6.3999v80.00006l-51.20019-38.4a7.9998,7.9998,0,1,0-9.59961,12.7998l55.46631,41.6L51.19922,169.60193a8.0002,8.0002,0,0,0,9.59961,12.80078L111.999,144.00238v79.99994a8.00025,8.00025,0,0,0,12.79981,6.40039l64-48a8.0005,8.0005,0,0,0,0-12.80078ZM127.999,48.00232l42.667,32-42.667,32Zm0,160v-64l42.667,32Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polygon
        points="120 32.003 184 80.003 120 128.003 120 32.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polygon
        points="120 128.003 184 176.003 120 224.003 120 128.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="56"
        y1="80.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="56"
        y1="176.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polygon
        points="120 32.003 184 80.003 120 128.003 120 32.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polygon
        points="120 128.003 184 176.003 120 224.003 120 128.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="56"
        y1="80.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="56"
        y1="176.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polygon
        points="120 32.003 184 80.003 120 128.003 120 32.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polygon
        points="120 128.003 184 176.003 120 224.003 120 128.003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="80.00256"
        x2="120"
        y2="128.00256"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="56"
        y1="176.00256"
        x2="120"
        y2="128.00256"
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
