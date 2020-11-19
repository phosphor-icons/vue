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
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        opacity="0.2"
      />
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M228.25781,131.08594a7.97081,7.97081,0,0,0-7.875-.89844,72.03888,72.03888,0,0,1-94.58594-94.57031,7.99837,7.99837,0,0,0-8.14062-11.10938A104.00405,104.00405,0,1,0,231.49219,138.32813,7.99431,7.99431,0,0,0,228.25781,131.08594Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
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
