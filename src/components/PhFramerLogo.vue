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
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        opacity="0.2"
      />
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M208,100V32a8.00008,8.00008,0,0,0-8-8H56a8,8,0,0,0-5.49316,13.81592L107.87793,92H56a8.00008,8.00008,0,0,0-8,8v68a7.99941,7.99941,0,0,0,2.50684,5.81592l72,68A7.99984,7.99984,0,0,0,136,236V176h64a8,8,0,0,0,5.49316-13.81592L148.12207,108H200A8.00008,8.00008,0,0,0,208,100Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polygon
        points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
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
import { IconProps, PropValidator } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

export default defineComponent({
  props: PropValidator,
  setup(props: Readonly<Partial<IconProps>>) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
</script>
