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
        d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M246.1,154.9c-1.2-1.5-22.9-27.1-59.8-41.4-2.1-17.8-8.9-34-19.6-46.6C151.7,49.3,130,40,104,40,52.5,40,18.9,86.2,17.5,88.1a8,8,0,0,0,13,9.4C30.8,97,60.8,56,104,56c21.2,0,38.6,7.4,50.5,21.3a68,68,0,0,1,14.7,30.8A134.2,134.2,0,0,0,136,104c-26.1,0-47.9,6.8-63.3,19.7C59.2,135.1,51.4,151,51.4,167.2a47.4,47.4,0,0,0,13.9,34.1c9.6,9.6,23,14.7,38.7,14.7,25.2,0,46.7-10,62.1-28.8,12.2-15,19.6-35.1,20.8-56a146.3,146.3,0,0,1,47,33.9,8,8,0,1,0,12.2-10.2ZM104,200c-25.3,0-36.6-16.4-36.6-32.8,0-22.7,21.5-47.2,68.6-47.2a117.3,117.3,0,0,1,35,5.3v.3C171,162.6,148,200,104,200Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
