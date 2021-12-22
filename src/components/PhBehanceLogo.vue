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
        x1="168"
        y1="76"
        x2="232"
        y2="76"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M28,124H90a34,34,0,0,1,0,68H28V64H78a30,30,0,0,1,0,60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M160,152h80a40,40,0,1,0-40,40,39.5,39.5,0,0,0,17.5-4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <line
        x1="168"
        y1="80"
        x2="232"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm88,72a8,8,0,0,1-8,8H169a32.1,32.1,0,0,0,31,24,31.5,31.5,0,0,0,22.6-9.4,8,8,0,0,1,11.3,0,7.9,7.9,0,0,1,0,11.3A47.4,47.4,0,0,1,200,200a48,48,0,1,1,48-48Zm-17-8a32,32,0,0,0-62,0Zm-91,14a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H86a38,38,0,0,1,28.3,63.3A42,42,0,0,1,140,158ZM40,116H86a22,22,0,0,0,0-44H40Zm84,42a26.1,26.1,0,0,0-26-26H40v52H98A26.1,26.1,0,0,0,124,158Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="168"
        y1="80"
        x2="232"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="168"
        y1="80"
        x2="232"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="168"
        y1="80"
        x2="232"
        y2="80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60"
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
