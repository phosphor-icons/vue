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
        d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="136.6"
        y1="136.6"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z"
        opacity="0.2"
      />
      <path
        d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="136.6"
        y1="136.6"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M150.5,139.2l55.9-20.3a16,16,0,0,0,.1-30L51.3,30.7A16,16,0,0,0,30.7,51.3h0L88.9,206.5a15.9,15.9,0,0,0,15,10.4h.1a15.9,15.9,0,0,0,14.9-10.5l20.3-55.9,63.1,63.2A8.5,8.5,0,0,0,208,216a8.3,8.3,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="136.6"
        y1="136.6"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="136.6"
        y1="136.6"
        x2="208"
        y2="208"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="136.6"
        y1="136.6"
        x2="208"
        y2="208"
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
