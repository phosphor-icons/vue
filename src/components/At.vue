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
  <circle cx="127.99121" cy="127.99512" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M223.99121,127.99512c0,22.09139-8,40-28,40s-28-17.90861-28-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="167.99121" y1="87.99512" x2="167.99121" y2="127.99512" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M181.07274,207.99724a96.00809,96.00809,0,1,1,42.91847-80.00212" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <circle cx="128" cy="127.99512" r="96" opacity="0.2"/>
  <circle cx="127.99512" cy="127.99512" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M223.99512,127.99512c0,22.09139-8,40-28,40s-28-17.90861-28-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="167.99512" y1="87.99512" x2="167.99512" y2="127.99512" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M181.07664,207.99724a96.00808,96.00808,0,1,1,42.91848-80.00212" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <g>
    <path d="M204,175.99121c-18.28711,0-28.52441-8.00488-33.8916-14.7207a39.57375,39.57375,0,0,1-3.37793-4.96948A48.00646,48.00646,0,1,1,160,92.2522v-4.261a8,8,0,0,1,16,0v40c0,14.59863,4.85742,32,28,32,22.3457,0,27.64258-16.22314,27.98047-30.4823.00732-.50574.01953-1.01037.01953-1.5177a104.02588,104.02588,0,1,0-10.21875,44.9364A49.2519,49.2519,0,0,1,204,175.99121Z"/>
    <circle cx="128" cy="127.99121" r="32"/>
  </g>
</g>
    <g v-if="displayWeight === 'light'">
  <circle cx="127.99512" cy="127.99512" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M223.99512,127.99512c0,22.09139-8,40-28,40s-28-17.90861-28-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="167.99512" y1="87.99512" x2="167.99512" y2="127.99512" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M181.07664,207.99724a96.00808,96.00808,0,1,1,42.91848-80.00212" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <circle cx="127.99902" cy="127.99512" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M223.999,127.99512c0,22.09139-8,40-28,40s-28-17.90861-28-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="167.99902" y1="87.99512" x2="167.99902" y2="127.99512" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M181.08055,207.99724A96.00809,96.00809,0,1,1,223.999,127.99512" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <circle cx="128.00293" cy="127.99512" r="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224.00293,127.99512c0,22.09139-8,40-28,40s-28-17.90861-28-40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168.00293" y1="87.99512" x2="168.00293" y2="127.99512" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M181.08446,207.99724a96.00809,96.00809,0,1,1,42.91847-80.00212" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "At",
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
