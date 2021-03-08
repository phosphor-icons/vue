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
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
        opacity="0.2"
      />
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M240.22559,136v32a8.00013,8.00013,0,0,1-9.56934,7.84473L160.22559,161.7583v26.96143l13.47168,13.66357A8.00119,8.00119,0,0,1,176,208v24a7.99947,7.99947,0,0,1-10.9707,7.42773L128,224.61621,90.9707,239.42773A7.99953,7.99953,0,0,1,80,232V208a8.00035,8.00035,0,0,1,2.34277-5.65674L96,188.686V161.7583L25.56934,175.84473A8.00012,8.00012,0,0,1,16,168V136a7.99967,7.99967,0,0,1,4.42188-7.15527L96.01172,91.0498l.10058-43.06835a32,32,0,0,1,64,.01855l.10157,43.0498,75.58984,37.79493A7.99969,7.99969,0,0,1,240.22559,136Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
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
