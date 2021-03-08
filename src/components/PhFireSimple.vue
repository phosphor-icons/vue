/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <g v-if="displayWeight === 'bold'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        opacity="0.2"
      />
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M219.88159,140a92,92,0,0,1-184,0c0-23.085,9.88135-49.68652,29.36963-79.06445a7.99925,7.99925,0,0,1,11.104-2.23438L108.6311,80.21875l30.85059-64.78613a7.99863,7.99863,0,0,1,12.87451-2.22168c14.74365,14.71777,31.57861,32.57226,44.65332,53.39355C212.40014,91.11426,219.88159,115.12207,219.88159,140Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhFireSimple",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight ?? contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size ?? contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color ?? contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
