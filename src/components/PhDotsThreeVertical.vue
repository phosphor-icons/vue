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
      <g>
        <circle cx="128" cy="64" r="16" />
        <circle cx="128" cy="192" r="16" />
        <circle cx="128" cy="128" r="16" />
      </g>
    </g>
    <g v-else-if="weight === 'duotone'">
      <g>
        <circle cx="128" cy="128" r="12" />
        <circle cx="128" cy="64" r="12" />
        <circle cx="128" cy="192" r="12" />
      </g>
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <circle cx="128" cy="128" r="32" />
        <circle cx="128" cy="48" r="32" />
        <circle cx="128" cy="208" r="32" />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <g>
        <circle cx="128" cy="128" r="9" />
        <circle cx="128" cy="64" r="9" />
        <circle cx="128" cy="192" r="9" />
      </g>
    </g>
    <g v-else-if="weight === 'thin'">
      <g>
        <circle cx="128" cy="128" r="6" />
        <circle cx="128" cy="64" r="6" />
        <circle cx="128" cy="192" r="6" />
      </g>
    </g>
    <g v-else-if="weight === 'regular'">
      <g>
        <circle cx="128" cy="128" r="12" />
        <circle cx="128" cy="64" r="12" />
        <circle cx="128" cy="192" r="12" />
      </g>
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
