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
    <g v-if="displayWeight === 'bold'">
      <circle cx="127.99219" cy="200.00293" r="16" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M20.20827,75.93119c63.485-47.90816,152.09866-47.90813,215.58361.00009a8.06594,8.06594,0,0,1,1.208,11.6015c-19.03707,22.43714-82.95213,97.76737-102.95962,121.34817a7.87135,7.87135,0,0,1-12.08054,0C101.9523,185.30027,38.03757,109.97061,19.00019,87.53317A8.06626,8.06626,0,0,1,20.20827,75.93119Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M128,219.70508a15.90814,15.90814,0,0,1-12.14014-5.64844L12.8999,92.709a16.182,16.182,0,0,1-3.71826-12.206,15.97026,15.97026,0,0,1,6.208-10.95752c66.30371-50.03418,158.91748-50.03516,225.22119,0a15.97226,15.97226,0,0,1,6.20752,10.957A16.18377,16.18377,0,0,1,243.10059,92.708L140.14014,214.05664A15.90814,15.90814,0,0,1,128,219.70508ZM25.084,82.27441a.12788.12788,0,0,0,.01612.083l102.89844,121.2749L230.8999,82.35693a.16373.16373,0,0,0,.01074-.11767C170.36279,36.57764,85.709,36.563,25.084,82.27441Zm-.05664.04248ZM20.2085,75.93115h0Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="127.99219" cy="200.00293" r="9" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="127.99219" cy="200.00293" r="6" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="127.99219" cy="200.00293" r="12" />
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
  name: "PhWifiNone",
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
