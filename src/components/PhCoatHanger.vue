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
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M241.6,171.2,141.3,96l23.5-17.6A8.1,8.1,0,0,0,168,72a40,40,0,0,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.7-3.8L123.3,89.5l-.2.2L14.4,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM24,184l104-78,104,78H24Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
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
