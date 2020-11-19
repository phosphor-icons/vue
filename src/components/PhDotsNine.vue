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
      <circle cx="60" cy="60" r="16" />
      <circle cx="128" cy="60" r="16" />
      <circle cx="196" cy="60" r="16" />
      <circle cx="60" cy="128" r="16" />
      <circle cx="128" cy="128" r="16" />
      <circle cx="196" cy="128" r="16" />
      <circle cx="60" cy="196" r="16" />
      <circle cx="128" cy="196" r="16" />
      <circle cx="196" cy="196" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="60" cy="60" r="12" />
      <circle cx="128" cy="60" r="12" />
      <circle cx="196" cy="60" r="12" />
      <circle cx="60" cy="128" r="12" />
      <circle cx="128" cy="128" r="12" />
      <circle cx="196" cy="128" r="12" />
      <circle cx="60" cy="196" r="12" />
      <circle cx="128" cy="196" r="12" />
      <circle cx="196" cy="196" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <circle cx="60" cy="60" r="12" />
        <circle cx="128" cy="60" r="12" />
        <circle cx="196" cy="60" r="12" />
        <circle cx="60" cy="128" r="12" />
        <circle cx="128" cy="128" r="12" />
        <circle cx="196" cy="128" r="12" />
        <circle cx="60" cy="196" r="12" />
        <circle cx="128" cy="196" r="12" />
        <circle cx="196" cy="196" r="12" />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="60" cy="60" r="9" />
      <circle cx="128" cy="60" r="9" />
      <circle cx="196" cy="60" r="9" />
      <circle cx="60" cy="128" r="9" />
      <circle cx="128" cy="128" r="9" />
      <circle cx="196" cy="128" r="9" />
      <circle cx="60" cy="196" r="9" />
      <circle cx="128" cy="196" r="9" />
      <circle cx="196" cy="196" r="9" />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="60" cy="60" r="6" />
      <circle cx="128" cy="60" r="6" />
      <circle cx="196" cy="60" r="6" />
      <circle cx="60" cy="128" r="6" />
      <circle cx="128" cy="128" r="6" />
      <circle cx="196" cy="128" r="6" />
      <circle cx="60" cy="196" r="6" />
      <circle cx="128" cy="196" r="6" />
      <circle cx="196" cy="196" r="6" />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="60" cy="60" r="12" />
      <circle cx="128" cy="60" r="12" />
      <circle cx="196" cy="60" r="12" />
      <circle cx="60" cy="128" r="12" />
      <circle cx="128" cy="128" r="12" />
      <circle cx="196" cy="128" r="12" />
      <circle cx="60" cy="196" r="12" />
      <circle cx="128" cy="196" r="12" />
      <circle cx="196" cy="196" r="12" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconProps, PropValidator } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

export default defineComponent({
  props: PropValidator,
  setup(props: Readonly<Partial<IconProps>>) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
</script>
