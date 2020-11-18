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
      <line
        x1="33.45455"
        y1="24"
        x2="222.54545"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M93.98553,43.01291,95.99414,40h64l16,24H208a16,16,0,0,1,16,16V186.02889"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M200.72725,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8181"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M154.13957,156.75336a36.00072,36.00072,0,1,1-48.298-53.128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M208.00244,64.00684H175.99658l-16-24h-64l-16,24H48.00244a16,16,0,0,0-16,16v112a16,16,0,0,0,16,16h160a16,16,0,0,0,16-16v-112A16,16,0,0,0,208.00244,64.00684Zm-80,104a36,36,0,1,1,36-36A36,36,0,0,1,128.00244,168.00684Z"
        opacity="0.2"
      />
      <line
        x1="33.45455"
        y1="24"
        x2="222.54545"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M93.98553,43.01291,95.99414,40h64l16,24H208a16,16,0,0,1,16,16V186.02889"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200.72725,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8181"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M154.13957,156.75336a36.00072,36.00072,0,1,1-48.298-53.128"
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
          d="M39.37451,18.61865a8.00027,8.00027,0,0,0-11.83984,10.7627L51.7334,56H47.99951a24.0275,24.0275,0,0,0-24,24V192a24.0275,24.0275,0,0,0,24,24H197.188l19.4375,21.38135a8.00027,8.00027,0,0,0,11.83984-10.7627ZM128,168a35.97306,35.97306,0,0,1-27.86426-58.75781L148.02246,161.918A35.81152,35.81152,0,0,1,128,168Z"
        />
        <path
          d="M207.99951,56H180.2749l-13.625-20.4375A7.99942,7.99942,0,0,0,159.99365,32h-64a7.99954,7.99954,0,0,0-6.65722,3.56348l-2.00782,3.01318a8.00079,8.00079,0,0,0,.73731,9.81787L218.07959,191.41016a8.0004,8.0004,0,0,0,13.91992-5.38135V80A24.0275,24.0275,0,0,0,207.99951,56Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="33.45455"
        y1="24"
        x2="222.54545"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M93.98553,43.01291,95.99414,40h64l16,24H208a16,16,0,0,1,16,16V186.02889"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M200.72725,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8181"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M154.13957,156.75336a36.00072,36.00072,0,1,1-48.298-53.128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="33.45455"
        y1="24"
        x2="222.54545"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M93.98553,43.01291,95.99414,40h64l16,24H208a16,16,0,0,1,16,16V186.02889"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M200.72725,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8181"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M154.13957,156.75336a36.00072,36.00072,0,1,1-48.298-53.128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="33.45455"
        y1="24"
        x2="222.54545"
        y2="232"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M93.98553,43.01291,95.99414,40h64l16,24H208a16,16,0,0,1,16,16V186.02889"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200.72725,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8181"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M154.13957,156.75336a36.00072,36.00072,0,1,1-48.298-53.128"
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
  name: "PhCameraSlash",
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
