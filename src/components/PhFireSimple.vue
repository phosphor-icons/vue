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
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        opacity="0.2"
      />
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M219.88159,140a92,92,0,0,1-184,0c0-23.085,9.88135-49.68652,29.36963-79.06445a7.99925,7.99925,0,0,1,11.104-2.23438L108.6311,80.21875l30.85059-64.78613a7.99863,7.99863,0,0,1,12.87451-2.22168c14.74365,14.71777,31.57861,32.57226,44.65332,53.39355C212.40014,91.11426,219.88159,115.12207,219.88159,140Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
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
