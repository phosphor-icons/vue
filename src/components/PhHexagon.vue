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
      <path
        d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z"
        opacity="0.2"
      />
      <path
        d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M219.87305,66.73828l-84-47.478a16.08654,16.08654,0,0,0-15.7461,0l-84,47.47852A16.0255,16.0255,0,0,0,28,80.668V175.332a16.02688,16.02688,0,0,0,8.127,13.92969l84,47.478a16.08782,16.08782,0,0,0,15.7461,0l84-47.47852A16.0255,16.0255,0,0,0,228,175.332V80.668A16.02688,16.02688,0,0,0,219.87305,66.73828Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z"
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
