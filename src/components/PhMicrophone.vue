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
        d="M127.99991,24H128a40,40,0,0,1,40,40v56a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,120.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M208,120a80,80,0,0,1-160,0"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="128"
        y1="200"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
        opacity="0.2"
      />
      <path
        d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="200"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <g>
        <path
          d="M127.99414,175.99609a48.05083,48.05083,0,0,0,48-47.99218V63.99609a48,48,0,1,0-96,0v64A48.05249,48.05249,0,0,0,127.99414,175.99609Z"
        />
        <path
          d="M200.43164,128.05078a8.07828,8.07828,0,0,0-8.82812,7.07813,64.00856,64.00856,0,0,1-127.21875-.00782,8.09865,8.09865,0,0,0-8.82813-7.07031,8.01056,8.01056,0,0,0-7.07812,8.83594A79.60051,79.60051,0,0,0,119.99414,207.251v24.74511a8,8,0,1,0,16,0V207.252a79.577,79.577,0,0,0,71.51563-70.373A8.00321,8.00321,0,0,0,200.43164,128.05078Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="128"
        y1="200"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="128"
        y1="200"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="128"
        y1="200"
        x2="128"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011"
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
  name: "PhMicrophone",
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
