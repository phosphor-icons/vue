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
      <rect
        x="44"
        y="44"
        width="168"
        height="168"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="128"
        y1="44"
        x2="128"
        y2="212"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path d="M128,212H52a8,8,0,0,1-8-8V52a8,8,0,0,1,8-8h76Z" opacity="0.2" />
      <rect
        x="44"
        y="44"
        width="168"
        height="168"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="128"
        y1="44"
        x2="128"
        y2="212"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M204,36H52A16.01833,16.01833,0,0,0,36,52V204a16.01833,16.01833,0,0,0,16,16H204a16.01833,16.01833,0,0,0,16-16V52A16.01833,16.01833,0,0,0,204,36Zm0,168H136V52h68l.00977,151.99951Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="44"
        y="44"
        width="168"
        height="168"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="128"
        y1="44"
        x2="128"
        y2="212"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="44"
        y="44"
        width="168"
        height="168"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="128"
        y1="44"
        x2="128"
        y2="212"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="44"
        y="44"
        width="168"
        height="168"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <line
        x1="128"
        y1="44"
        x2="128"
        y2="212"
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
