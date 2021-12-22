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
        d="M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="128 152 64 216 32 184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon
        points="44 44 44 196 60 212 212 212 212 44 44 44"
        opacity="0.2"
      />
      <path
        d="M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="128 152 64 216 32 184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M204,36H52A16,16,0,0,0,36,52v91.3a8,8,0,0,0,16,0V52H204V204H135.6a8,8,0,0,0,0,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Z"
      />
      <path
        d="M133.7,146.3a8.1,8.1,0,0,0-11.4,0L64,204.7,37.7,178.3a8.1,8.1,0,0,0-11.4,11.4l32,32a8.2,8.2,0,0,0,11.4,0l64-64A8.1,8.1,0,0,0,133.7,146.3Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="128 152 64 216 32 184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="128 152 64 216 32 184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="128 152 64 216 32 184"
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
