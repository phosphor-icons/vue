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
        d="M171.82072,143.999a44.025,44.025,0,0,1-35.82032,39.2754"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M72.03592,65.35733C56.59774,88.63059,44,115.21513,44,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L112,92,72.037,65.358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M72.03592,65.35733C56.59774,88.63059,44,115.21513,44,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L112,92,72.037,65.358Z"
        opacity="0.2"
      />
      <path
        d="M179.3884,148.00007a52.03842,52.03842,0,0,1-43.388,43.38828"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M72.03592,65.35733C56.59774,88.63059,44,115.21513,44,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L112,92,72.037,65.358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M197.12793,66.60449c-13.07471-20.82129-29.90967-38.67578-44.65332-53.39355a7.99863,7.99863,0,0,0-12.87451,2.22168L108.74951,80.21875,76.47363,58.70117a7.99925,7.99925,0,0,0-11.104,2.23438C45.88135,90.31348,36,116.915,36,140a92,92,0,0,0,184,0C220,115.12207,212.51855,91.11426,197.12793,66.60449Zm-9.8335,82.61621a59.69692,59.69692,0,0,1-50.07275,50.07422,8.11543,8.11543,0,0,1-1.231.09473,8.00055,8.00055,0,0,1-1.21142-15.90723,44.31739,44.31739,0,0,0,36.70263-36.70312,7.99993,7.99993,0,1,1,15.8125,2.4414Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M179.3884,148.00007a52.03842,52.03842,0,0,1-43.388,43.38828"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M72.03592,65.35733C56.59774,88.63059,44,115.21513,44,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L112,92,72.037,65.358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M179.3884,148.00007a52.03842,52.03842,0,0,1-43.388,43.38828"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M72.03592,65.35733C56.59774,88.63059,44,115.21513,44,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L112,92,72.037,65.358Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M179.3884,148.00007a52.03842,52.03842,0,0,1-43.388,43.38828"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M72.03592,65.35733C56.59774,88.63059,44,115.21513,44,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L112,92,72.037,65.358Z"
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
  ContextGetter,
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhFire",
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
    },
  },
});
</script>
