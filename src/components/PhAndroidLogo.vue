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
        x1="55.92969"
        y1="24"
        x2="75.27223"
        y2="41.48751"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="199.92969"
        y1="24"
        x2="180.58646"
        y2="41.48846"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M207.92969,152a80,80,0,0,1-160,0V104a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="207.92969"
        y1="124"
        x2="47.92969"
        y2="124"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="156" cy="84" r="16" />
      <circle cx="100" cy="84" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path d="M207.92969,120v32a80,80,0,0,1-160,0V120Z" opacity="0.2" />
      <line
        x1="55.92969"
        y1="24"
        x2="75.27223"
        y2="41.48751"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="199.92969"
        y1="24"
        x2="180.58646"
        y2="41.48846"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M207.92969,152a80,80,0,0,1-160,0V104a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="207.92969"
        y1="120"
        x2="47.92969"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="156" cy="84" r="12" />
      <circle cx="100" cy="84" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <circle cx="99.92969" cy="84" r="12" />
        <circle cx="155.92969" cy="84" r="12" />
        <path
          d="M191.083,42.78369l14.21191-12.84961a7.99994,7.99994,0,1,0-10.73047-11.86816l-15.71,14.20361A87.835,87.835,0,0,0,77.00488,32.269l-15.71-14.20312A7.99994,7.99994,0,1,0,50.56445,29.93408l14.2124,12.84961A87.69717,87.69717,0,0,0,39.92969,104v48a88,88,0,0,0,176,0V104A87.69973,87.69973,0,0,0,191.083,42.78369ZM127.92969,32a72.08124,72.08124,0,0,1,72,72v8h-144v-8A72.08124,72.08124,0,0,1,127.92969,32Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="55.92969"
        y1="24"
        x2="75.27223"
        y2="41.48751"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="199.92969"
        y1="24"
        x2="180.58646"
        y2="41.48846"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M207.92969,152a80,80,0,0,1-160,0V104a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="207.92969"
        y1="120"
        x2="47.92969"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="156" cy="84" r="10" />
      <circle cx="100" cy="84" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="55.92969"
        y1="24"
        x2="75.27223"
        y2="41.48751"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="199.92969"
        y1="24"
        x2="180.58646"
        y2="41.48846"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M207.92969,152a80,80,0,0,1-160,0V104a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="207.92969"
        y1="120"
        x2="47.92969"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="156" cy="84" r="8" />
      <circle cx="100" cy="84" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="56"
        y1="24"
        x2="75.34254"
        y2="41.48751"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="24"
        x2="180.65677"
        y2="41.48846"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M208,152a80,80,0,0,1-160,0V104a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="208"
        y1="120"
        x2="48"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="156" cy="83.99998" r="12" />
      <circle cx="100" cy="83.99998" r="12" />
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
