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
      <rect
        x="44"
        y="56"
        width="160"
        height="80"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M204,96h28a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="44"
        y1="96"
        x2="16"
        y2="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="40" y="56" width="168" height="80" rx="8" opacity="0.2" />
      <rect
        x="40"
        y="56"
        width="168"
        height="80"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="40"
        y1="96"
        x2="16"
        y2="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M248,104v49.96582a16.06941,16.06941,0,0,1-11.60352,15.38477L135.999,198.03418,136,232a8,8,0,0,1-16,0V198.03418a16.06941,16.06941,0,0,1,11.60352-15.38477L232.001,153.96582,232,104H216v24a16.01833,16.01833,0,0,1-16,16H48a16.01833,16.01833,0,0,1-16-16V104H16a8,8,0,0,1,0-16H32V64A16.01833,16.01833,0,0,1,48,48H200a16.01833,16.01833,0,0,1,16,16V88h16A16.01833,16.01833,0,0,1,248,104Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <rect
        x="40"
        y="56"
        width="168"
        height="80"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="40"
        y1="96"
        x2="16"
        y2="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <rect
        x="40"
        y="56"
        width="168"
        height="80"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="40"
        y1="96"
        x2="16"
        y2="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <rect
        x="40"
        y="56"
        width="168"
        height="80"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="40"
        y1="96"
        x2="16"
        y2="96"
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
  }
});
export default component;
</script>
